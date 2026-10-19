const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');

function handler(put) {
  const source = fs.readFileSync('src/app/api/email-list/route.ts', 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    exports: module.exports, module, crypto: require('node:crypto').webcrypto,
    require: (name) => name === '@vercel/blob' ? { put } : name === 'next/server' ? { NextResponse: Response } : require(name),
  });
  return (body) => module.exports.POST(new Request('http://localhost/api/email-list', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body),
  }));
}
const valid = { type: 'builder-updates', email: 'builder@example.com', source: 'home', consent: true, website: '' };

test('malformed submissions, missing consent, and bot fields never reach storage', async () => {
  let writes = 0;
  const post = handler(async () => writes++);
  for (const body of ['{', null, [], { ...valid, email: 'not an email' }, { ...valid, consent: false }, { ...valid, consent: 'true' }, { ...valid, source: 'unknown' }, { ...valid, website: 'bot.example' }]) {
    assert.equal((await post(body)).status, 400);
  }
  assert.equal(writes, 0);
});

test('signups remain private and repeat email submissions use the same storage record', async () => {
  const writes = [];
  const post = handler(async (...args) => writes.push(args));
  assert.equal((await post({ ...valid, email: ' Builder@Example.com ' })).status, 200);
  assert.equal((await post({ ...valid, source: 'what-to-build' })).status, 200);
  assert.equal(writes[0][0], writes[1][0]);
  assert.equal(writes[0][0].includes('builder@example.com'), false);
  assert.equal(writes[0][2].access, 'private');
  assert.equal(writes[0][2].allowOverwrite, true);
  assert.equal(writes[0][2].addRandomSuffix, false);
  const record = JSON.parse(writes[0][1]);
  assert.equal(record.email, 'builder@example.com');
  assert.equal(record.consent, true);
  assert.equal(record.status, 'launch-list');
});

test('storage failures return a retryable failure instead of a false confirmation', async () => {
  const post = handler(async () => { throw new Error('store unavailable'); });
  assert.equal((await post(valid)).status, 503);
});

test('existing guide and bootcamp submissions keep their original contract', async () => {
  const writes = [];
  const post = handler(async (...args) => writes.push(args));
  assert.equal((await post({ email: 'guide@example.com', guide: 'skills' })).status, 200);
  assert.equal((await post({ email: 'bootcamp@example.com', type: 'creative-bootcamp-interest', name: 'Demo' })).status, 200);
  assert.equal(JSON.parse(writes[0][1]).type, 'guide');
  assert.equal(JSON.parse(writes[1][1]).type, 'creative-bootcamp-interest');
});

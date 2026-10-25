interface ProjectStory {
  why: string;
  forWhom: string;
  idea: string;
  technology: string;
  build: string;
}

export const PROJECT_STORIES: Record<string, ProjectStory> = {
  "Movie Draft": {
    why: "Film fans already debate their dream casts. I wanted to turn that conversation into a game friends could play together.",
    forWhom: "Telugu cinema fans draft movie lineups, bid with friends in shared rooms, or play solo against an AI opponent.",
    idea: "Make the familiar film casting debate playable as a live auction.",
    technology: "JavaScript, esbuild, browser-based PeerJS/WebRTC rooms, and Vercel.",
    build: "I built the auction rules and film catalogue, connected players through host-led rooms, and added a solo AI mode.",
  },
  "Cricket Draft": {
    why: "Cricket fans love picking their best team. I wanted the choices to have stakes, with a shared budget and live bidding.",
    forWhom: "Friends create rooms, auction cricketers, and compare the teams they managed to build.",
    idea: "Bring the tension of a cricket player auction into a browser game friends can join from their own devices.",
    technology: "JavaScript, esbuild, PeerJS/WebRTC, a Cricsheet-based player catalogue, and Vercel.",
    build: "I built the player data and scoring rules, then added real-time rooms, bidding, reconnects, and results.",
  },
  "Logo Cleaner": {
    why: "Removing a distracting mark from footage is a small editing job that can take too much time. I wanted a focused tool for that task.",
    forWhom: "Video editors and creators can bring in footage, identify a logo area, and prepare a cleaner result.",
    idea: "Take one repetitive video cleanup problem and give it a simple browser workflow.",
    technology: "TypeScript, Vite, browser Canvas, and FFmpeg WebAssembly.",
    build: "I paired frame preview and logo detection with browser-side video processing in a focused interface.",
  },
  "Whiteboard for Code": {
    why: "Architecture is easier to discuss when code and diagrams become something a team can move around together.",
    forWhom: "Developers can turn Mermaid, DOT, or basic code into editable whiteboards and export a diagram.",
    idea: "Let developers start from text they already have, then refine the resulting diagram visually.",
    technology: "Next.js, React Flow, ELK layout, and optional Supabase sign-in.",
    build: "I added lightweight text parsers, arranged the nodes with ELK, and made them editable and exportable in React Flow.",
  },
  "Ravana Dahan": {
    why: "Festival celebrations can be brought into modern 3D browser experiences that anyone can play instantly without downloads.",
    forWhom: "Players celebrate Dussehra by drawing their bow, aiming at effigies, and triggering festive fireworks.",
    idea: "An interactive, browser-based 3D Dussehra courtyard experience with physics and particle lighting.",
    technology: "Three.js, WebGL, Vite, and Vercel.",
    build: "I designed the 3D courtyard environment, bow mechanics, arrow physics, and celebratory firework effects.",
  },
  "Cattchee": {
    why: "E-commerce brands struggle with passive discount codes. A casual game makes earning a discount an engaging experience.",
    forWhom: "Shoppers play an arcade game catching falling tees to unlock real discount codes on apparel orders.",
    idea: "Turn discount rewards into an instant playable arcade experience for brand marketing.",
    technology: "HTML5 Canvas, TypeScript, Vite, and Vercel.",
    build: "I implemented arcade physics, score tracking, dynamic coupon code generation, and mobile touch controls.",
  },
  "AI Companion": {
    why: "AI conversations often feel transactional. I wanted to build a space with warmth, depth, and thoughtful listening.",
    forWhom: "Anyone looking for a quiet moment, a fresh perspective, or personal reflection at their own pace.",
    idea: "A calm, thoughtful personal AI companion with adaptive personas and presence.",
    technology: "React, Web Speech API / real-time audio, Tailwind, and Vercel.",
    build: "I designed the minimalist dark interface, persona selector, audio streaming pipeline, and conversation state.",
  },
  "What 2 Build": {
    why: "Founders waste months building software nobody wants. Validating buyer problems with source-linked data saves time.",
    forWhom: "Founders, indie hackers, and builders exploring verified SaaS opportunities with buyer context.",
    idea: "A source-linked SaaS opportunity radar, builder stories, and practical validation frameworks.",
    technology: "Next.js, TypeScript, Markdown data architecture, and Vercel.",
    build: "I structured opportunity signals, buyer interviews, problem scores, and validation walkthroughs.",
  },
  Chitralaya: {
    why: "Sahithi Vengaldas's murals and canvas art deserved a visual home that let the work lead.",
    forWhom: "Visitors and potential collaborators can explore the artist's work, process reels, and canvas collection.",
    idea: "Shape a portfolio around the supplied artwork and process instead of a generic gallery template.",
    technology: "Static HTML, CSS, JavaScript, and optimized local media.",
    build: "I organized the artwork into a visual story, added process reels and a canvas gallery, and adapted the layout for different screens.",
  },
  Dayashankar: {
    why: "Talks on tradition and practice needed a calm, searchable home beyond a loose collection of recordings.",
    forWhom: "Readers and listeners can explore Dayashankar Masam's English and Telugu articles alongside their source audio.",
    idea: "Turn an existing audio library into an editorial experience people can browse by topic and language.",
    technology: "Static HTML, CSS, JavaScript, and a Python content build script.",
    build: "I structured the audio and article data, generated bilingual pages, and connected each article to its recording.",
  },
  "Pin Studio": {
    why: "Making a useful Pinterest post means handling the visual, searchable copy, and publishing together. I wanted one place for that flow.",
    forWhom: "Creators can prepare pin artwork and copy, then connect the work to their publishing workflow.",
    idea: "Bring pin creation, copy editing, and board publishing into a single studio.",
    technology: "Next.js, Supabase, OpenAI Images API, Pinterest API, and subscription integrations.",
    build: "I built the studio interface and server routes around image creation, account access, subscriptions, and Pinterest connections.",
  },
  Minute30: {
    why: "Learning a new AI skill feels more approachable when a lesson has a clear outcome and fits into half an hour.",
    forWhom: "Curious learners can browse short, practical AI course paths and preview a learner experience.",
    idea: "Organize learning around the promise of one useful 30-minute session.",
    technology: "Next.js, React, TypeScript, and local course data.",
    build: "I built the public course catalogue, course pages, and a sample learner view as a frontend foundation.",
  },
  "Ee Line Chusava": {
    why: "Filmmakers need a clearer way to discover stories, scripts, watch lists, and opportunities in one place.",
    forWhom: "Creators and film enthusiasts can explore the publication's articles, scripts, collections, and tools.",
    idea: "Give the existing filmmaker content library a stronger, easier-to-browse digital home.",
    technology: "Static HTML, CSS, JavaScript, localized media, and Vercel functions for the admin studio.",
    build: "I rebuilt the interface around the existing content collections, then added a protected publishing dashboard.",
  },
};

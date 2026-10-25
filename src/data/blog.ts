import { LLM_ARTICLES } from "./llm-articles";
import { TOOLS_ARTICLES } from "./tools-articles";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "code"; text: string }
  | { type: "table"; rows: string[][] }
  | { type: "list"; items: { text: string; href?: string }[] };

export type BlogSeriesSlug = "python" | "llm" | "open-source" | "agents" | "automation" | "vibe-coding";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  series: BlogSeriesSlug;
  sourceTabId: string;
  blocks: BlogBlock[];
};

// Each entry is adapted from one tab of the author's “Python Blogs” document.
// The prose is preserved; headings, lists, and code spacing are presentation edits.
const PYTHON_ARTICLES: BlogArticle[] = [
  {
    "slug": "python-ai-what-you-can-build",
    "title": "Python: The Engine Behind What You Can Build With AI",
    "description": "Explore what Python can do across filmmaking, audio, video, AI agents, SaaS, automation, and more.",
    "image": "/blog/python-ai-engine.jpg",
    "category": "Start here",
    "series": "python",
    "sourceTabId": "t.0",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Think of Python this way: Python is a language that lets you tell a computer what to do. You can use it to automate work, create music, edit videos, build websites, train AI models, generate images, analyze data, and even build your own AI agents."
      },
      {
        "type": "paragraph",
        "text": "Since you're exploring AI tools, voice agents, SaaS products, and filmmaking, Python is particularly valuable because it can connect all these worlds."
      },
      {
        "type": "paragraph",
        "text": "The most important thing to understand is this:"
      },
      {
        "type": "paragraph",
        "text": "Python itself doesn't do everything. Python gives you the ability to control other tools, libraries, AI models, and computer systems."
      },
      {
        "type": "paragraph",
        "text": "For example:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Python + audio libraries = music and sound processing."
          },
          {
            "text": "Python + video libraries = video editing and automation."
          },
          {
            "text": "Python + AI models = image generation, transcription, voice agents, and intelligent applications."
          },
          {
            "text": "Python + a database + a web framework = a SaaS product."
          },
          {
            "text": "Python + APIs = connecting different applications into one workflow."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Let's break down its capabilities, its fundamental principles, and what you should learn deeply."
      },
      {
        "type": "heading",
        "text": "1. What can Python actually do?"
      },
      {
        "type": "paragraph",
        "text": "Explore the major capabilities below. Each one can become a project, a business, or a component of a larger AI product."
      },
      {
        "type": "heading",
        "text": "1. Music and audio creation"
      },
      {
        "type": "paragraph",
        "text": "Python can help you generate melodies, compose MIDI music, synthesize sounds, clean audio, remove noise, separate vocals, and process speech."
      },
      {
        "type": "paragraph",
        "text": "Tools: librosa, pydub, pretty_midi, audio AI models, synthesizers."
      },
      {
        "type": "paragraph",
        "text": "Example: Generate background music for a Telugu short film based on its mood, then adjust the tempo and duration."
      },
      {
        "type": "heading",
        "text": "2. Video editing and filmmaking"
      },
      {
        "type": "paragraph",
        "text": "Python can trim clips, merge videos, resize footage, add subtitles, extract frames, synchronize audio, create transitions, and automate repetitive editing."
      },
      {
        "type": "paragraph",
        "text": "Tools: FFmpeg, MoviePy, OpenCV, Pillow."
      },
      {
        "type": "paragraph",
        "text": "Example: Build a system that takes 30 minutes of footage and automatically creates vertical clips with subtitles and resized framing."
      },
      {
        "type": "paragraph",
        "text": "Advanced editing judgment—like choosing the best emotional cut—may require AI models or human input."
      },
      {
        "type": "heading",
        "text": "3. Image generation and image editing"
      },
      {
        "type": "paragraph",
        "text": "Python can generate images through AI models, create thumbnails, remove backgrounds, upscale images, apply filters, detect objects, and process thousands of pictures."
      },
      {
        "type": "paragraph",
        "text": "Tools: Pillow, OpenCV, diffusers, PyTorch, image-generation APIs."
      },
      {
        "type": "paragraph",
        "text": "Example: Turn a film logline into a set of cinematic visual references using an image model."
      },
      {
        "type": "heading",
        "text": "4. Voice agents and conversational AI"
      },
      {
        "type": "paragraph",
        "text": "Python can capture speech, convert it into text, send it to a language model, generate a response, and return spoken audio."
      },
      {
        "type": "paragraph",
        "text": "Tools: speech-to-text models, text-to-speech engines, WebSockets, model APIs."
      },
      {
        "type": "paragraph",
        "text": "Example: Build an AI chef that talks to a user, understands available ingredients, and explains a recipe step by step."
      },
      {
        "type": "heading",
        "text": "5. Websites, SaaS and APIs"
      },
      {
        "type": "paragraph",
        "text": "Python can power the backend of applications, manage users, process payments through providers, save data, enforce subscriptions, and communicate with AI models."
      },
      {
        "type": "paragraph",
        "text": "Tools: FastAPI, Django, Flask, SQLAlchemy, PostgreSQL."
      },
      {
        "type": "paragraph",
        "text": "Example: Build a filmmaking platform where users enter a logline, generate story beats, develop characters, and save screenplays."
      },
      {
        "type": "heading",
        "text": "6. AI agents and automation"
      },
      {
        "type": "paragraph",
        "text": "Python can connect an AI model to tools that read files, search information, execute code, call APIs, and perform multi-step tasks with appropriate permissions."
      },
      {
        "type": "paragraph",
        "text": "Tools: model APIs, agent frameworks, browser automation, task queues."
      },
      {
        "type": "paragraph",
        "text": "Example: An agent reads a screenplay, identifies production requirements, estimates scene complexity, and creates a preliminary shooting plan."
      },
      {
        "type": "heading",
        "text": "7. Computer vision"
      },
      {
        "type": "paragraph",
        "text": "Python can analyze photos and videos to detect faces or objects, track movement, identify scenes, count people, and inspect footage."
      },
      {
        "type": "paragraph",
        "text": "Tools: OpenCV, PyTorch, object detection models."
      },
      {
        "type": "paragraph",
        "text": "Example: Automatically identify shots containing a particular actor in a large footage collection, subject to the model's accuracy."
      },
      {
        "type": "heading",
        "text": "8. Data analysis and business intelligence"
      },
      {
        "type": "paragraph",
        "text": "Python can process spreadsheets, analyze customer behavior, visualize revenue, forecast demand, and identify patterns in large datasets."
      },
      {
        "type": "paragraph",
        "text": "Tools: pandas, NumPy, Matplotlib, scikit-learn."
      },
      {
        "type": "paragraph",
        "text": "Example: Analyze your SaaS subscriptions to understand conversion rates, churn, and which marketing campaigns bring paying customers."
      },
      {
        "type": "heading",
        "text": "9. Robotics, simulations and scientific computing"
      },
      {
        "type": "paragraph",
        "text": "Python can control supported hardware, simulate physical systems, process sensor data, model complex systems, and perform scientific calculations."
      },
      {
        "type": "paragraph",
        "text": "Tools: NumPy, SciPy, ROS 2, MicroPython-compatible hardware."
      },
      {
        "type": "paragraph",
        "text": "Example: Build a voice-controlled physical assistant or simulate how a robot moves around obstacles."
      },
      {
        "type": "paragraph",
        "text": "These are not nine separate versions of Python. They are nine different applications of the same language, combined with different libraries, models, hardware, and services."
      },
      {
        "type": "heading",
        "text": "My final advice"
      },
      {
        "type": "paragraph",
        "text": "Don't try to learn every possible use of Python. There are too many."
      },
      {
        "type": "paragraph",
        "text": "Learn the fundamentals once, then use them to build across multiple domains. The real advantage comes from knowing how to connect components, understand the data moving between them, debug failures, and turn an idea into a working product."
      },
      {
        "type": "paragraph",
        "text": "Given your interests, I would start with this sequence: Python fundamentals → automation → APIs → audio/video processing → AI voice agents → SaaS development."
      },
      {
        "type": "paragraph",
        "text": "That path gives you both creative capabilities and the engineering foundation to build products around them."
      }
    ]
  },
  {
    "slug": "how-python-works",
    "title": "How Does Python Work?",
    "description": "Understand the simple path from an idea to Python code, libraries, tools, and a finished output.",
    "image": "/blog/how-python-works.jpg",
    "category": "Python fundamentals",
    "series": "python",
    "sourceTabId": "t.spy5yu1xv95p",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Before learning hundreds of libraries, understand this simple architecture."
      },
      {
        "type": "heading",
        "text": "1. Your idea"
      },
      {
        "type": "paragraph",
        "text": "\"Create a 30-second video from these clips.\""
      },
      {
        "type": "heading",
        "text": "2. Python code"
      },
      {
        "type": "paragraph",
        "text": "The instructions and decision-making logic"
      },
      {
        "type": "heading",
        "text": "3. Libraries and tools"
      },
      {
        "type": "paragraph",
        "text": "FFmpeg, video libraries, AI models, APIs"
      },
      {
        "type": "heading",
        "text": "4. Output"
      },
      {
        "type": "paragraph",
        "text": "A finished video file saved to disk"
      },
      {
        "type": "paragraph",
        "text": "Python is the language you use to express the instructions. A library supplies reusable functionality, while an AI model supplies learned capabilities when needed. The computer executes the program and produces the result."
      },
      {
        "type": "paragraph",
        "text": "The official Python documentation explains the language, its built-in functionality, and its extensive ecosystem of third-party modules."
      }
    ]
  },
  {
    "slug": "five-python-fundamentals",
    "title": "Five Fundamental Concepts You Should Understand",
    "description": "Learn variables, conditions, loops, functions, and libraries through practical Python examples.",
    "image": "/blog/five-python-fundamentals.jpg",
    "category": "Python fundamentals",
    "series": "python",
    "sourceTabId": "t.c0bnllmkqy6s",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Let's start with actual Python code."
      },
      {
        "type": "heading",
        "text": "1. Variables — storing information"
      },
      {
        "type": "code",
        "text": "film_name = \"Wrong Cab, Right Time\"\nbudget = 50000\nduration = 10\nprint(film_name)\nprint(budget)"
      },
      {
        "type": "paragraph",
        "text": "A variable gives a name to a value. You use variables to store text, numbers, settings, file paths, and information returned by AI models."
      },
      {
        "type": "heading",
        "text": "2. Conditions — making decisions"
      },
      {
        "type": "code",
        "text": "budget = 50000\nif budget >= 40000:\n    print(\"Plan a short film production\")\nelse:\n    print(\"Create a smaller production plan\")"
      },
      {
        "type": "paragraph",
        "text": "This is how you teach your program to make decisions based on rules."
      },
      {
        "type": "heading",
        "text": "3. Loops — repeating work"
      },
      {
        "type": "code",
        "text": "clips = [\"scene1.mp4\", \"scene2.mp4\", \"scene3.mp4\"]\nfor clip in clips:\n    print(\"Processing:\", clip)"
      },
      {
        "type": "paragraph",
        "text": "Imagine processing 1,000 video files. Instead of manually processing each file, Python can repeat the same operation automatically."
      },
      {
        "type": "heading",
        "text": "4. Functions — creating reusable capabilities"
      },
      {
        "type": "code",
        "text": "def calculate_cost(days, cost_per_day):\n    return days * cost_per_day\n\ntotal = calculate_cost(3, 10000)\nprint(total)"
      },
      {
        "type": "paragraph",
        "text": "A function is a reusable block of instructions. You can build functions for generating subtitles, calculating budgets, creating prompts, or processing audio."
      },
      {
        "type": "heading",
        "text": "5. Libraries — extending what Python can do"
      },
      {
        "type": "code",
        "text": "import math\nprint(math.sqrt(144))"
      },
      {
        "type": "paragraph",
        "text": "The math library provides mathematical functionality that you can use without implementing it yourself."
      },
      {
        "type": "paragraph",
        "text": "For example, importing an audio-processing library gives you access to its functions. You then combine those functions with your own logic to build an audio tool."
      },
      {
        "type": "heading",
        "text": "My final advice"
      },
      {
        "type": "paragraph",
        "text": "Don't try to learn every possible use of Python. There are too many."
      },
      {
        "type": "paragraph",
        "text": "Learn the fundamentals once, then use them to build across multiple domains. The real advantage comes from knowing how to connect components, understand the data moving between them, debug failures, and turn an idea into a working product."
      },
      {
        "type": "paragraph",
        "text": "Given your interests, I would start with this sequence: Python fundamentals → automation → APIs → audio/video processing → AI voice agents → SaaS development."
      }
    ]
  },
  {
    "slug": "deeper-python-fundamentals",
    "title": "What Are the Deeper Fundamentals Worth Learning?",
    "description": "A practical guide to data structures, packages, files, APIs, debugging, concurrency, and performance.",
    "image": "/blog/deeper-python-fundamentals.jpg",
    "category": "Python fundamentals",
    "series": "python",
    "sourceTabId": "t.2j8ot6t3qmv8",
    "blocks": [
      {
        "type": "paragraph",
        "text": "These are the concepts that separate someone who can run a Python script from someone who can build reliable applications."
      },
      {
        "type": "heading",
        "text": "Data structures"
      },
      {
        "type": "paragraph",
        "text": "Learn lists, dictionaries, sets, tuples, strings, and how to represent structured information. These are essential when processing scripts, users, scenes, and AI responses."
      },
      {
        "type": "heading",
        "text": "Modules, packages and environments"
      },
      {
        "type": "paragraph",
        "text": "Understand how code is split across files, how third-party packages are installed, and how virtual environments keep project dependencies separate."
      },
      {
        "type": "heading",
        "text": "Files, formats and data handling"
      },
      {
        "type": "paragraph",
        "text": "Learn to read and write text, JSON, CSV, images, audio metadata, and other file formats. Understand paths, encodings, and how to process large files without exhausting memory."
      },
      {
        "type": "heading",
        "text": "APIs and networking"
      },
      {
        "type": "paragraph",
        "text": "Learn HTTP requests, REST APIs, authentication, JSON, webhooks, and streaming. This is how Python connects AI models, payment services, databases, and other applications."
      },
      {
        "type": "heading",
        "text": "Error handling, testing and debugging"
      },
      {
        "type": "paragraph",
        "text": "Programs fail for many reasons: missing files, invalid inputs, network problems, or model errors. Learn exceptions, logging, tests, and how to investigate failures."
      },
      {
        "type": "heading",
        "text": "Concurrency, memory and performance"
      },
      {
        "type": "paragraph",
        "text": "Learn when to use asynchronous programming, threads, processes, queues, and GPU acceleration. These become important for voice agents, media processing, and serving multiple users."
      },
      {
        "type": "paragraph",
        "text": "You do not need to master all of these before building something. Learn each concept when it becomes useful in a real project."
      },
      {
        "type": "heading",
        "text": "My final advice"
      },
      {
        "type": "paragraph",
        "text": "Don't try to learn every possible use of Python. There are too many."
      },
      {
        "type": "paragraph",
        "text": "Learn the fundamentals once, then use them to build across multiple domains. The real advantage comes from knowing how to connect components, understand the data moving between them, debug failures, and turn an idea into a working product."
      },
      {
        "type": "paragraph",
        "text": "Given your interests, I would start with this sequence: Python fundamentals → automation → APIs → audio/video processing → AI voice agents → SaaS development."
      }
    ]
  },
  {
    "slug": "learn-python-deeply",
    "title": "What Should You Focus On When Learning Python Deeply?",
    "description": "A five-layer learning path from core Python to automation, AI, backend engineering, and systems.",
    "image": "/blog/learn-python-deeply.jpg",
    "category": "Learning path",
    "series": "python",
    "sourceTabId": "t.zbdr495wtu94",
    "blocks": [
      {
        "type": "paragraph",
        "text": "My recommendation is to learn Python in layers, building projects as you go rather than studying every feature in isolation."
      },
      {
        "type": "heading",
        "text": "01 · Foundation — Core Python"
      },
      {
        "type": "paragraph",
        "text": "Variables, data types, conditions, loops, functions, lists, dictionaries, file handling, imports, and exceptions."
      },
      {
        "type": "paragraph",
        "text": "Goal: Write and understand small programs without relying entirely on AI to generate the code."
      },
      {
        "type": "heading",
        "text": "02 · Practical — Automation and libraries"
      },
      {
        "type": "paragraph",
        "text": "Learn pip, virtual environments, file paths, APIs, JSON, command-line usage, Git, and debugging."
      },
      {
        "type": "paragraph",
        "text": "Goal: Automate repetitive tasks and connect external services."
      },
      {
        "type": "heading",
        "text": "03 · AI — AI models and media processing"
      },
      {
        "type": "paragraph",
        "text": "Learn model APIs, prompts, structured outputs, embeddings, audio processing, image models, and video tooling."
      },
      {
        "type": "paragraph",
        "text": "Goal: Build a working AI voice assistant or media automation pipeline."
      },
      {
        "type": "heading",
        "text": "04 · Products — Backend engineering"
      },
      {
        "type": "paragraph",
        "text": "Learn FastAPI, databases, authentication, background jobs, deployment, testing, and security."
      },
      {
        "type": "paragraph",
        "text": "Goal: Turn a prototype into a reliable SaaS product that other people can use."
      },
      {
        "type": "heading",
        "text": "05 · Advanced — Systems and performance"
      },
      {
        "type": "paragraph",
        "text": "Learn asynchronous I/O, queues, multiprocessing, GPU concepts, caching, observability, and model deployment."
      },
      {
        "type": "paragraph",
        "text": "Goal: Build systems that remain responsive, reliable, and cost-effective as usage increases."
      },
      {
        "type": "heading",
        "text": "My final advice"
      },
      {
        "type": "paragraph",
        "text": "Don't try to learn every possible use of Python. There are too many."
      },
      {
        "type": "paragraph",
        "text": "Learn the fundamentals once, then use them to build across multiple domains. The real advantage comes from knowing how to connect components, understand the data moving between them, debug failures, and turn an idea into a working product."
      },
      {
        "type": "paragraph",
        "text": "Given your interests, I would start with this sequence: Python fundamentals → automation → APIs → audio/video processing → AI voice agents → SaaS development."
      }
    ]
  },
  {
    "slug": "learn-python-with-ai-coding-tools",
    "title": "How to Learn Python Using AI Coding Tools",
    "description": "Use AI coding assistants as tutors while you build, test, debug, and understand your own Python projects.",
    "image": "/blog/learn-python-with-ai.jpg",
    "category": "Learning path",
    "series": "python",
    "sourceTabId": "t.9ghcr51pr27",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You can use an AI coding assistant such as Claude Code or Codex as a tutor and implementation partner. But do not let it become a black box."
      },
      {
        "type": "paragraph",
        "text": "For each project, follow this loop:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Describe the problem in plain English."
          },
          {
            "text": "Ask the coding assistant to explain the architecture before writing code."
          },
          {
            "text": "Build one small feature at a time."
          },
          {
            "text": "Run the code and test it with real inputs."
          },
          {
            "text": "Ask the assistant to explain each unfamiliar function, dependency, and error."
          },
          {
            "text": "Modify the code yourself and observe what changes."
          },
          {
            "text": "Add tests and make sure the program still works."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "A useful rule: If you cannot explain what a program does, where its data comes from, and what happens when it fails, you have not yet understood it deeply enough."
      },
      {
        "type": "heading",
        "text": "Resources to begin"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Official Python Tutorial — Read the tutorial.",
            "href": "https://docs.python.org/3/tutorial/"
          },
          {
            "text": "Python for Beginners — Start here.",
            "href": "https://www.python.org/about/gettingstarted/"
          },
          {
            "text": "Python Package Index (PyPI) — Explore Python libraries.",
            "href": "https://pypi.org/"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "These resources will help you learn the language and discover the libraries that extend it."
      },
      {
        "type": "heading",
        "text": "My final advice"
      },
      {
        "type": "paragraph",
        "text": "Don't try to learn every possible use of Python. There are too many."
      },
      {
        "type": "paragraph",
        "text": "Learn the fundamentals once, then use them to build across multiple domains. The real advantage comes from knowing how to connect components, understand the data moving between them, debug failures, and turn an idea into a working product."
      },
      {
        "type": "paragraph",
        "text": "Given your interests, I would start with this sequence: Python fundamentals → automation → APIs → audio/video processing → AI voice agents → SaaS development."
      }
    ]
  },
  {
    "slug": "python-ai-capabilities",
    "title": "Python + AI: Where the Capabilities Expand",
    "description": "See how Python coordinates language, image, and audio models to build an AI filmmaking assistant.",
    "image": "/blog/python-ai-capabilities.jpg",
    "category": "Python + AI",
    "series": "python",
    "sourceTabId": "t.a1ivhtpp5ewl",
    "blocks": [
      {
        "type": "paragraph",
        "text": "This is especially important for you. There is a difference between using an AI application and building your own AI-powered system."
      },
      {
        "type": "heading",
        "text": "Example: Build an AI filmmaking assistant"
      },
      {
        "type": "paragraph",
        "text": "One application, multiple capabilities."
      },
      {
        "type": "heading",
        "text": "Input: Screenplay PDF"
      },
      {
        "type": "paragraph",
        "text": "Python extracts text and organizes scenes and characters."
      },
      {
        "type": "heading",
        "text": "Reasoning: Language model"
      },
      {
        "type": "paragraph",
        "text": "The model analyzes the story and proposes a shooting plan."
      },
      {
        "type": "heading",
        "text": "Visuals: Image model"
      },
      {
        "type": "paragraph",
        "text": "Generate visual references for selected scenes."
      },
      {
        "type": "heading",
        "text": "Audio: Audio tools and models"
      },
      {
        "type": "paragraph",
        "text": "Create temporary sound references or process dialogue recordings."
      },
      {
        "type": "heading",
        "text": "Output: Production package"
      },
      {
        "type": "paragraph",
        "text": "Export scene breakdowns, budgets, reports, and downloadable files."
      },
      {
        "type": "paragraph",
        "text": "Python coordinates the workflow. Each specialized tool performs the task it is designed for."
      },
      {
        "type": "paragraph",
        "text": "Here are the three levels of AI capability to distinguish:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Using an AI API: Your program sends a request to a hosted model and receives a response."
          },
          {
            "text": "Running an AI model locally: Your Python program loads or communicates with a model running on your own computer or server. Hardware requirements vary."
          },
          {
            "text": "Training or fine-tuning a model: You use data and machine-learning techniques to modify or develop model capabilities. This is generally more resource-intensive."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Python is widely used across all three, but it does not automatically provide the AI capability by itself."
      }
    ]
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [...TOOLS_ARTICLES, ...PYTHON_ARTICLES, ...LLM_ARTICLES];

export const BLOG_SERIES = [
  {
    slug: "agents",
    title: "AI Agents & Coding",
    description: "MCP servers, Claude Code setups, token optimization, open-source AI tools, and specialist agent orchestration.",
    image: "/blog/essential-claude-code-plugins-mcp.jpg",
  },
  {
    slug: "automation",
    title: "Automation & Workflows",
    description: "Production n8n blueprints, local autonomous outreach agents, and practical systems.",
    image: "/blog/ready-made-n8n-automations.jpg",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding & Stack",
    description: "Modern web toolkits, indie developer stacks, component libraries, and shipping fast.",
    image: "/blog/21-sites-for-vibe-coders.jpg",
  },
  {
    slug: "python",
    title: "Python",
    description: "Start with Python, then see how it helps you build useful tools with AI.",
    image: "/blog/python-ai-engine.jpg",
  },
  {
    slug: "llm",
    title: "LLM",
    description: "Understand language models, agents, model types, and the pieces behind AI products.",
    image: "/blog/what-is-an-llm.jpg",
  },
] as const;

export function getSeriesArticles(series: BlogSeriesSlug) {
  return BLOG_ARTICLES.filter((article) => article.series === series);
}

export function getBlogArticle(slug: string) {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getReadingMinutes(article: BlogArticle) {
  const text = article.blocks.map((block) =>
    block.type === "list" ? block.items.map((item) => item.text).join(" ") :
    block.type === "table" ? block.rows.flat().join(" ") : block.text
  ).join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}

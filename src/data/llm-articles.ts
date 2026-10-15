// Each article is adapted from one tab of the author's LLM document.
// The prose and comparison tables are preserved; headings are presentation edits.
import type { BlogArticle } from "./blog";

export const LLM_ARTICLES: BlogArticle[] = [
  {
    "slug": "what-is-an-llm",
    "title": "What Is an LLM?",
    "description": "A plain-language guide to how large language models work, model sizes, open-weight models, and their role in AI applications.",
    "image": "/blog/what-is-an-llm.jpg",
    "category": "LLM fundamentals",
    "series": "llm",
    "sourceTabId": "t.0",
    "blocks": [
      {
        "type": "paragraph",
        "text": "An LLM (Large Language Model) is an AI model trained on massive amounts of text and other data so it can understand and generate human-like language, answer questions, write code, summarize information, and reason through problems."
      },
      {
        "type": "paragraph",
        "text": "Think of it as the brain behind an AI chatbot like ChatGPT, Claude, or Gemini."
      },
      {
        "type": "heading",
        "text": "1. How does an LLM work?"
      },
      {
        "type": "subheading",
        "text": "1. Training data"
      },
      {
        "type": "paragraph",
        "text": "Books, websites, code, articles, and other data"
      },
      {
        "type": "subheading",
        "text": "2. The LLM"
      },
      {
        "type": "paragraph",
        "text": "Learns patterns, relationships, language, and problem-solving skills during training"
      },
      {
        "type": "subheading",
        "text": "3. Your prompt"
      },
      {
        "type": "paragraph",
        "text": "\"Build me a Python application that summarizes PDFs.\""
      },
      {
        "type": "subheading",
        "text": "4. The output"
      },
      {
        "type": "paragraph",
        "text": "The model generates an answer, code, or another supported output."
      },
      {
        "type": "paragraph",
        "text": "At its core, an LLM generates text by predicting the next token (a word or part of a word) based on the context. Modern models can also develop sophisticated capabilities for reasoning, coding, and following instructions."
      },
      {
        "type": "heading",
        "text": "2. Popular LLMs"
      },
      {
        "type": "subheading",
        "text": "GPT — OpenAI"
      },
      {
        "type": "paragraph",
        "text": "Powers ChatGPT and other AI applications. Strong across writing, coding, and reasoning."
      },
      {
        "type": "subheading",
        "text": "Claude — Anthropic"
      },
      {
        "type": "paragraph",
        "text": "Used for coding, analyzing documents, and working with complex instructions."
      },
      {
        "type": "subheading",
        "text": "Gemini — Google"
      },
      {
        "type": "paragraph",
        "text": "Supports text, coding, images, audio, and other multimodal tasks, depending on the model."
      },
      {
        "type": "subheading",
        "text": "Llama — Meta"
      },
      {
        "type": "paragraph",
        "text": "A family of models that developers can download in supported releases and run on their own infrastructure."
      },
      {
        "type": "subheading",
        "text": "Qwen — Alibaba"
      },
      {
        "type": "paragraph",
        "text": "A family of models covering language, coding, vision, and other tasks, with many open-weight releases."
      },
      {
        "type": "heading",
        "text": "3. What are parameters and billions of parameters?"
      },
      {
        "type": "paragraph",
        "text": "You may have heard terms such as 7B, 70B, or 405B."
      },
      {
        "type": "paragraph",
        "text": "Parameters are the numerical values a model learns during training. They help determine how it processes information and generates responses."
      },
      {
        "type": "table",
        "rows": [
          [
            "Model size",
            "What it means"
          ],
          [
            "1B",
            "Approximately 1 billion parameters"
          ],
          [
            "7B",
            "Approximately 7 billion parameters"
          ],
          [
            "70B",
            "Approximately 70 billion parameters"
          ],
          [
            "405B",
            "Approximately 405 billion parameters"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Generally, larger models require more computing resources, but more parameters do not automatically mean a smarter model. Architecture, training quality, and inference techniques also matter."
      },
      {
        "type": "heading",
        "text": "4. Open-weight vs. closed models"
      },
      {
        "type": "subheading",
        "text": "Closed models"
      },
      {
        "type": "paragraph",
        "text": "Examples: GPT and Claude models offered through their hosted services."
      },
      {
        "type": "paragraph",
        "text": "You typically access them through a website or API. The provider manages the underlying model infrastructure."
      },
      {
        "type": "subheading",
        "text": "Open-weight models"
      },
      {
        "type": "paragraph",
        "text": "Examples: selected Llama and Qwen releases."
      },
      {
        "type": "paragraph",
        "text": "You can download the model weights and run them on suitable hardware, subject to the specific model's license and hardware requirements."
      },
      {
        "type": "heading",
        "text": "5. How does an LLM fit into an AI application?"
      },
      {
        "type": "paragraph",
        "text": "Imagine you're building your own AI companion or coding assistant."
      },
      {
        "type": "subheading",
        "text": "Your application"
      },
      {
        "type": "paragraph",
        "text": "Website, mobile app, or voice interface"
      },
      {
        "type": "subheading",
        "text": "LLM"
      },
      {
        "type": "paragraph",
        "text": "Understands requests and generates responses"
      },
      {
        "type": "subheading",
        "text": "Memory / RAG"
      },
      {
        "type": "paragraph",
        "text": "Retrieve relevant information"
      },
      {
        "type": "subheading",
        "text": "Tools / APIs"
      },
      {
        "type": "paragraph",
        "text": "Perform actions and calculations"
      },
      {
        "type": "paragraph",
        "text": "The LLM is only one part of the system. Your application can combine it with a database, retrieval-augmented generation (RAG), external tools, voice recognition, and text-to-speech."
      },
      {
        "type": "paragraph",
        "text": "For example, an AI chef could use an LLM to understand your request, retrieve recipes from a database, and generate a cooking plan based on your ingredients."
      },
      {
        "type": "paragraph",
        "text": "One important distinction: An LLM doesn't automatically know your private documents, remember every past conversation, access the internet, or execute code. Those capabilities depend on the surrounding system and the tools connected to it."
      },
      {
        "type": "subheading",
        "text": "The simplest way to remember it"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "LLM: The language and reasoning engine."
          },
          {
            "text": "AI application: The complete product built around the engine."
          },
          {
            "text": "RAG: A way to give the model relevant information from external documents or databases."
          },
          {
            "text": "API: A way for your application to communicate with a model hosted by a provider."
          },
          {
            "text": "GPU: Hardware commonly used to run and train large AI models."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "If you're building your own AI products, the next important concept is understanding the difference between an LLM, an AI agent, and a model like GPT or Qwen—because they aren't the same thing."
      }
    ]
  },
  {
    "slug": "llm-vs-model-agent-application",
    "title": "LLM vs AI Model vs AI Agent vs AI Application",
    "description": "Understand the difference between AI models, large language models, agents, and complete AI applications, with practical examples.",
    "image": "/blog/llm-vs-model-agent-application.jpg",
    "category": "AI systems",
    "series": "llm",
    "sourceTabId": "t.cj79e8e94pxd",
    "blocks": [
      {
        "type": "paragraph",
        "text": "These terms are related, but they mean different things."
      },
      {
        "type": "subheading",
        "text": "1. AI Model — The trained system"
      },
      {
        "type": "paragraph",
        "text": "A model is a system trained to perform tasks using patterns learned from data. Depending on its design, it may work with text, images, audio, video, or other inputs."
      },
      {
        "type": "paragraph",
        "text": "Examples: GPT models, Qwen image models, Whisper speech recognition models."
      },
      {
        "type": "subheading",
        "text": "2. LLM — The language specialist"
      },
      {
        "type": "paragraph",
        "text": "An LLM (Large Language Model) is a type of AI model designed primarily to process and generate language. Modern LLMs can also reason, write code, and interpret supported non-text inputs."
      },
      {
        "type": "paragraph",
        "text": "Examples: GPT, Claude, Llama, Qwen language models."
      },
      {
        "type": "subheading",
        "text": "3. AI Agent — The task executor"
      },
      {
        "type": "paragraph",
        "text": "An agent uses a model to decide what to do, potentially calls tools, observes results, and takes further steps to achieve a goal."
      },
      {
        "type": "paragraph",
        "text": "Example: An agent that researches competitors, compares prices, and prepares a report."
      },
      {
        "type": "subheading",
        "text": "4. AI Application — The complete product"
      },
      {
        "type": "paragraph",
        "text": "This is the software people actually use. It can include a model, agents, a user interface, a database, payments, authentication, and other services."
      },
      {
        "type": "paragraph",
        "text": "Examples: ChatGPT, an AI chef app, or your own AI companion platform."
      },
      {
        "type": "paragraph",
        "text": "Remember this: An LLM is a type of model. An agent is a system that uses a model to pursue a goal. An application is the product that brings these components together."
      },
      {
        "type": "heading",
        "text": "2. How they work together"
      },
      {
        "type": "paragraph",
        "text": "Let's say you want to build an AI personal assistant that can plan your day, send emails, and schedule meetings."
      },
      {
        "type": "subheading",
        "text": "Your AI assistant app"
      },
      {
        "type": "paragraph",
        "text": "The interface you interact with"
      },
      {
        "type": "subheading",
        "text": "LLM"
      },
      {
        "type": "paragraph",
        "text": "Understands the request and plans possible steps"
      },
      {
        "type": "subheading",
        "text": "Agent logic"
      },
      {
        "type": "paragraph",
        "text": "Chooses tools, executes steps, and checks results"
      },
      {
        "type": "subheading",
        "text": "Calendar API"
      },
      {
        "type": "paragraph",
        "text": "Schedules meetings"
      },
      {
        "type": "subheading",
        "text": "Email API"
      },
      {
        "type": "paragraph",
        "text": "Drafts or sends emails"
      },
      {
        "type": "paragraph",
        "text": "The application connects these components and manages permissions and results."
      },
      {
        "type": "paragraph",
        "text": "Suppose you say:"
      },
      {
        "type": "paragraph",
        "text": "\"Schedule a meeting with Ravi tomorrow at 3 PM and send him an email.\""
      },
      {
        "type": "paragraph",
        "text": "The system might:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use the LLM to understand your request."
          },
          {
            "text": "Check your calendar for conflicts."
          },
          {
            "text": "Use the calendar tool to create the meeting."
          },
          {
            "text": "Draft an email and ask for your approval if required."
          },
          {
            "text": "Send the email through the email service."
          },
          {
            "text": "Tell you what happened."
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "The LLM doesn't magically send emails. The application must connect it to an email service and authorize that action."
      },
      {
        "type": "heading",
        "text": "3. What's the difference between a model and an agent?"
      },
      {
        "type": "paragraph",
        "text": "This is one of the most important distinctions."
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "LLM by itself",
            "Agent system"
          ],
          [
            "Answer a question",
            "Yes",
            "Yes"
          ],
          [
            "Write code",
            "Yes",
            "Yes"
          ],
          [
            "Search the web",
            "Only if provided a suitable tool or integration",
            "Can use a search tool"
          ],
          [
            "Read your private database",
            "Not automatically",
            "Can retrieve data with permission"
          ],
          [
            "Send an email",
            "No, not by itself",
            "Can use an email API"
          ],
          [
            "Execute a multistep task",
            "Can propose the steps",
            "Can execute steps through connected tools"
          ],
          [
            "Check whether an action succeeded",
            "Only with appropriate feedback",
            "Can inspect tool results and continue"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "An agent isn't necessarily a new or separate AI model. In many cases, it's an LLM surrounded by code that manages tools, state, permissions, and a loop of actions."
      },
      {
        "type": "heading",
        "text": "4. Different types of AI models"
      },
      {
        "type": "paragraph",
        "text": "An LLM is just one category of AI model."
      },
      {
        "type": "subheading",
        "text": "Language models"
      },
      {
        "type": "paragraph",
        "text": "Understand and generate text, answer questions, and write code."
      },
      {
        "type": "paragraph",
        "text": "Examples: GPT, Claude, Llama, Qwen."
      },
      {
        "type": "subheading",
        "text": "Vision models"
      },
      {
        "type": "paragraph",
        "text": "Analyze images, recognize objects, and interpret visual content."
      },
      {
        "type": "paragraph",
        "text": "Examples: YOLO object detection models, vision-language models."
      },
      {
        "type": "subheading",
        "text": "Image generation models"
      },
      {
        "type": "paragraph",
        "text": "Create images from text prompts or reference images."
      },
      {
        "type": "paragraph",
        "text": "Examples: FLUX, Stable Diffusion, Qwen image-generation models."
      },
      {
        "type": "subheading",
        "text": "Audio models"
      },
      {
        "type": "paragraph",
        "text": "Transcribe speech, understand audio, or generate speech."
      },
      {
        "type": "paragraph",
        "text": "Examples: Whisper for speech recognition; text-to-speech models for voice generation."
      },
      {
        "type": "subheading",
        "text": "Action and control models"
      },
      {
        "type": "paragraph",
        "text": "Help systems select actions in environments, including robotics and simulations."
      },
      {
        "type": "paragraph",
        "text": "Examples: reinforcement-learning policies and robotics models."
      },
      {
        "type": "paragraph",
        "text": "Some modern models are multimodal, meaning a single model can handle multiple types of input or output, such as text, images, and audio."
      },
      {
        "type": "heading",
        "text": "5. What is the difference between GPT, Qwen, and Llama?"
      },
      {
        "type": "paragraph",
        "text": "These are model families, not programming languages or agent frameworks."
      },
      {
        "type": "table",
        "rows": [
          [
            "Name",
            "What it is",
            "How you commonly use it"
          ],
          [
            "GPT",
            "OpenAI model family",
            "Hosted products and APIs"
          ],
          [
            "Claude",
            "Anthropic model family",
            "Hosted products and APIs"
          ],
          [
            "Qwen",
            "Alibaba model family",
            "Hosted APIs or supported downloadable weights"
          ],
          [
            "Llama",
            "Meta model family",
            "Supported downloadable weights or hosted services"
          ],
          [
            "Gemma",
            "Google model family",
            "Supported downloadable weights or hosted services"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "A model family may contain many different models with different sizes and capabilities. For example, a small coding model and a large multimodal model from the same family may have very different requirements."
      }
    ]
  },
  {
    "slug": "types-of-ai-models",
    "title": "Types of AI Models",
    "description": "A practical map of language, vision, audio, video, forecasting, recommendation, embedding, and other AI model categories.",
    "image": "/blog/types-of-ai-models.jpg",
    "category": "Model landscape",
    "series": "llm",
    "sourceTabId": "t.igew8w4mmakv",
    "blocks": [
      {
        "type": "paragraph",
        "text": "There are many more types of AI models than the five categories we discussed earlier. Those five were just a starting point."
      },
      {
        "type": "paragraph",
        "text": "The important thing to understand is that AI models can be classified by what they do, what data they process, and how they learn. These classifications overlap: one model can belong to several categories at once."
      },
      {
        "type": "paragraph",
        "text": "Let's build a bigger map of the AI model ecosystem."
      },
      {
        "type": "heading",
        "text": "1. The major categories of AI models"
      },
      {
        "type": "subheading",
        "text": "1. Language models"
      },
      {
        "type": "paragraph",
        "text": "Understand and generate text, answer questions, write code, and solve problems."
      },
      {
        "type": "paragraph",
        "text": "Examples: GPT, Claude, Llama, Qwen."
      },
      {
        "type": "subheading",
        "text": "2. Computer vision models"
      },
      {
        "type": "paragraph",
        "text": "Analyze images and video to identify objects, people, scenes, and visual patterns."
      },
      {
        "type": "paragraph",
        "text": "Examples: YOLO object detection, image segmentation models, image classifiers."
      },
      {
        "type": "subheading",
        "text": "3. Image generation models"
      },
      {
        "type": "paragraph",
        "text": "Create or edit images from text prompts, reference images, or other inputs."
      },
      {
        "type": "paragraph",
        "text": "Examples: FLUX, Stable Diffusion."
      },
      {
        "type": "subheading",
        "text": "4. Audio and speech models"
      },
      {
        "type": "paragraph",
        "text": "Recognize speech, transcribe audio, understand sounds, and generate synthetic voices."
      },
      {
        "type": "paragraph",
        "text": "Examples: Whisper, text-to-speech models, speech-to-speech models."
      },
      {
        "type": "subheading",
        "text": "5. Video models"
      },
      {
        "type": "paragraph",
        "text": "Generate video, predict motion between frames, or analyze existing footage."
      },
      {
        "type": "paragraph",
        "text": "Examples: video diffusion models and video understanding models."
      },
      {
        "type": "subheading",
        "text": "6. 3D and spatial models"
      },
      {
        "type": "paragraph",
        "text": "Reconstruct 3D objects or environments, estimate depth, and represent geometry or spatial relationships."
      },
      {
        "type": "paragraph",
        "text": "Examples: NeRF, 3D Gaussian Splatting, depth-estimation models."
      },
      {
        "type": "subheading",
        "text": "7. Robotics and action models"
      },
      {
        "type": "paragraph",
        "text": "Help robots or software-controlled systems choose actions and interact with an environment."
      },
      {
        "type": "paragraph",
        "text": "Examples: robot control policies, vision-language-action models."
      },
      {
        "type": "subheading",
        "text": "8. Prediction and forecasting models"
      },
      {
        "type": "paragraph",
        "text": "Predict future values from historical data, such as demand, sales, energy use, or equipment failure."
      },
      {
        "type": "paragraph",
        "text": "Examples: time-series forecasting models, regression models."
      },
      {
        "type": "subheading",
        "text": "9. Recommendation models"
      },
      {
        "type": "paragraph",
        "text": "Predict what a user may want to watch, buy, read, or listen to."
      },
      {
        "type": "paragraph",
        "text": "Examples: collaborative filtering, recommendation ranking models."
      },
      {
        "type": "subheading",
        "text": "10. Scientific and simulation models"
      },
      {
        "type": "paragraph",
        "text": "Help researchers model complex systems in biology, chemistry, physics, and the environment."
      },
      {
        "type": "paragraph",
        "text": "Examples: AlphaFold for protein structure prediction; specialized weather and molecular models."
      },
      {
        "type": "subheading",
        "text": "11. Anomaly detection models"
      },
      {
        "type": "paragraph",
        "text": "Identify unusual patterns that may indicate fraud, cyberattacks, faulty equipment, or suspicious activity."
      },
      {
        "type": "paragraph",
        "text": "Examples: isolation forests, autoencoders, specialized fraud-detection models."
      },
      {
        "type": "subheading",
        "text": "12. Embedding models"
      },
      {
        "type": "paragraph",
        "text": "Convert text, images, audio, or other data into numerical representations that capture useful similarities and relationships."
      },
      {
        "type": "paragraph",
        "text": "Used for semantic search, document retrieval, recommendations, and RAG."
      },
      {
        "type": "subheading",
        "text": "13. Graph models"
      },
      {
        "type": "paragraph",
        "text": "Learn from entities and their relationships, represented as nodes and edges."
      },
      {
        "type": "paragraph",
        "text": "Examples: graph neural networks for fraud detection, molecule analysis, and network prediction."
      },
      {
        "type": "subheading",
        "text": "14. Document intelligence models"
      },
      {
        "type": "paragraph",
        "text": "Extract and interpret information from PDFs, forms, invoices, tables, and scanned documents."
      },
      {
        "type": "paragraph",
        "text": "Examples: OCR models, document layout models, document understanding models."
      },
      {
        "type": "paragraph",
        "text": "These 14 categories are a useful practical map, not an official or exhaustive taxonomy. There are many more specialized model types, and some fit into several categories."
      },
      {
        "type": "heading",
        "text": "2. More specialized AI models"
      },
      {
        "type": "paragraph",
        "text": "Beyond those 14, here are additional categories you'll encounter when building AI products."
      },
      {
        "type": "table",
        "rows": [
          [
            "Model category",
            "What it does",
            "Example use"
          ],
          [
            "Music generation",
            "Creates music, melodies, or soundtracks",
            "Generate a film score"
          ],
          [
            "Translation models",
            "Translate between languages",
            "Telugu to English translation"
          ],
          [
            "Classification models",
            "Assign categories to inputs",
            "Classify emails as spam or legitimate"
          ],
          [
            "Reranking models",
            "Reorder search results by relevance",
            "Find the most relevant script notes"
          ],
          [
            "Speech enhancement",
            "Remove noise or improve speech quality",
            "Clean audio recorded on a film set"
          ],
          [
            "Speaker recognition",
            "Identify or verify a speaker's voice",
            "Speaker diarization or voice verification"
          ],
          [
            "OCR and handwriting recognition",
            "Read printed or handwritten text",
            "Digitize handwritten notes"
          ],
          [
            "Segmentation models",
            "Identify exact pixels belonging to objects",
            "Separate a person from a background"
          ],
          [
            "Small language models",
            "Perform language tasks with lower resource requirements",
            "Run a lightweight assistant locally"
          ],
          [
            "World models",
            "Learn representations of how environments change",
            "Simulate possible future states for robotics"
          ],
          [
            "Reinforcement-learning policies",
            "Learn which actions to take to maximize a reward",
            "Control a robot or optimize a simulated task"
          ],
          [
            "Search and ranking models",
            "Retrieve and rank relevant results",
            "Product search and content discovery"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Some of these are separate model families; others are specialized tasks performed by models from broader families."
      },
      {
        "type": "heading",
        "text": "3. There's another way to classify AI: how models learn"
      },
      {
        "type": "paragraph",
        "text": "This is a different classification from what we covered above."
      },
      {
        "type": "subheading",
        "text": "A. Supervised learning"
      },
      {
        "type": "paragraph",
        "text": "The model learns from examples paired with known answers."
      },
      {
        "type": "paragraph",
        "text": "Example: Feed it thousands of emails labeled \"spam\" or \"not spam\" so it learns to classify new emails."
      },
      {
        "type": "subheading",
        "text": "B. Self-supervised learning"
      },
      {
        "type": "paragraph",
        "text": "The model learns from patterns within the data itself, without requiring a human-provided label for every training example."
      },
      {
        "type": "paragraph",
        "text": "Example: An LLM learns to predict missing or subsequent tokens from large text datasets."
      },
      {
        "type": "subheading",
        "text": "C. Unsupervised learning"
      },
      {
        "type": "paragraph",
        "text": "The model discovers structure in data without explicit target labels."
      },
      {
        "type": "paragraph",
        "text": "Example: Group customers into clusters based on purchasing patterns."
      },
      {
        "type": "subheading",
        "text": "D. Reinforcement learning"
      },
      {
        "type": "paragraph",
        "text": "A system learns a policy for selecting actions using rewards or other feedback."
      },
      {
        "type": "paragraph",
        "text": "Example: Train an agent to complete a task in a simulated environment."
      },
      {
        "type": "paragraph",
        "text": "Modern systems can combine several learning methods. For instance, an LLM may be pretrained using self-supervised learning and then post-trained using supervised examples and preference-based or reinforcement-learning techniques."
      },
      {
        "type": "heading",
        "text": "4. The biggest concept: these categories overlap"
      },
      {
        "type": "paragraph",
        "text": "Imagine an AI system that takes a Telugu screenplay and produces a cinematic video."
      },
      {
        "type": "subheading",
        "text": "Telugu screenplay"
      },
      {
        "type": "paragraph",
        "text": "Text input"
      },
      {
        "type": "subheading",
        "text": "Language model"
      },
      {
        "type": "paragraph",
        "text": "Understands the story and generates a shot breakdown"
      },
      {
        "type": "subheading",
        "text": "Image and video models"
      },
      {
        "type": "paragraph",
        "text": "Generate visual concepts and moving scenes"
      },
      {
        "type": "subheading",
        "text": "Audio models"
      },
      {
        "type": "paragraph",
        "text": "Generate dialogue, voice, music, or sound effects"
      },
      {
        "type": "subheading",
        "text": "Complete filmmaking application"
      },
      {
        "type": "paragraph",
        "text": "Coordinates the models, assets, and editing workflow"
      },
      {
        "type": "paragraph",
        "text": "A single product can use multiple models. Likewise, one multimodal model may handle several tasks itself."
      },
      {
        "type": "heading",
        "text": "5. How to organize all of this in your mind"
      },
      {
        "type": "paragraph",
        "text": "Think of AI models through three independent questions:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "What does it do? Language, image generation, prediction, recommendation, speech recognition, and so on."
          },
          {
            "text": "What does it work with? Text, images, audio, video, numerical data, graphs, or combinations of these."
          },
          {
            "text": "How does it learn? Supervised learning, self-supervised learning, unsupervised learning, reinforcement learning, or a combination."
          }
        ]
      }
    ]
  },
  {
    "slug": "apis-frameworks-hosting",
    "title": "What Are APIs, Frameworks, and Hosting?",
    "description": "Learn how APIs, development frameworks, hosting, and databases fit together when you build an AI product.",
    "image": "/blog/apis-frameworks-hosting.jpg",
    "category": "Building blocks",
    "series": "llm",
    "sourceTabId": "t.8kuga4cr05ad",
    "blocks": [
      {
        "type": "paragraph",
        "text": "When you start building products, you'll encounter these terms constantly."
      },
      {
        "type": "subheading",
        "text": "API — The connection"
      },
      {
        "type": "paragraph",
        "text": "Allows your application to send requests to a model or external service and receive results."
      },
      {
        "type": "paragraph",
        "text": "Example: Your website sends a prompt to a hosted LLM API."
      },
      {
        "type": "subheading",
        "text": "Framework — The development tools"
      },
      {
        "type": "paragraph",
        "text": "A collection of code and abstractions that makes it easier to build applications or agents."
      },
      {
        "type": "paragraph",
        "text": "Examples: LangGraph, LlamaIndex, and model-provider SDKs."
      },
      {
        "type": "subheading",
        "text": "Hosting — Where it runs"
      },
      {
        "type": "paragraph",
        "text": "The infrastructure that runs your website, backend, database, or model."
      },
      {
        "type": "paragraph",
        "text": "Examples: Vercel for many web applications; GPU cloud servers for models that need substantial GPU resources."
      },
      {
        "type": "subheading",
        "text": "Database — Where information is stored"
      },
      {
        "type": "paragraph",
        "text": "Stores users, preferences, conversations, application data, and other records."
      },
      {
        "type": "paragraph",
        "text": "Examples: PostgreSQL and MongoDB. A vector database can help retrieve semantically relevant information."
      },
      {
        "type": "paragraph",
        "text": "These components solve different problems. You can use a hosted LLM API without hosting the model yourself, or you can download a suitable open-weight model and run it on your own infrastructure."
      }
    ]
  }
];

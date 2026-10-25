export interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  live: string;
  code: string;
  codePrivate?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description: "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft-ai.jpg",
    imageAlt: "Illustration of cinema posters, a film reel, and an auction paddle",
    live: "https://movie-draft-phi.vercel.app",
    code: "https://github.com/vamshicreates/movie-draft",
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description: "A browser-based cricket auction where friends build teams with live bidding from a worldwide catalog.",
    image: "/projects/cricket-draft-ai.jpg",
    imageAlt: "Illustration of a cricket ball, bat, and stadium",
    live: "https://cricket-draft-hazel.vercel.app",
    code: "https://github.com/vamshicreates/cricket-draft",
  },
  {
    title: "Ravana Dahan",
    kind: "Live 3D experience · festive game",
    description: "An immersive 3D Dussehra courtyard where you draw your bow, launch festive arrows, and celebrate the victory of light.",
    image: "/projects/ravana-dahan-ai.jpg",
    imageAlt: "3D Dussehra courtyard with bow, arrows, and festive lighting",
    live: "https://ravana-dahan.vercel.app",
    code: "https://github.com/vamshicreates/ravana-dahan",
  },
  {
    title: "Cattchee",
    kind: "Live website · marketing game",
    description: "A fast-paced brand marketing game where catching falling tees turns score points into instant apparel discount rewards.",
    image: "/projects/cattchee-ai.jpg",
    imageAlt: "Arcade gameplay of catching tees and unlocking discount rewards",
    live: "https://cattchee.vercel.app",
    code: "https://github.com/vamshicreates/cattchee",
  },
  {
    title: "AI Companion",
    kind: "Live web app · conversational AI",
    description: "A thoughtful personal conversational companion for reflection and growth with adaptive presence and real-time dialogue.",
    image: "/projects/ai-companion-ai.jpg",
    imageAlt: "AI Companion personal conversational interface and persona selector",
    live: "https://ai-companion-eta-liard.vercel.app",
    code: "https://github.com/vamshicreates/ai-companion",
  },
  {
    title: "What 2 Build",
    kind: "SaaS framework · opportunity radar",
    description: "A source-linked SaaS opportunity radar, buyer research, and practical validation tests before writing code.",
    image: "/projects/what-to-build-ai.jpg",
    imageAlt: "SaaS opportunity radar, buyer context, and problem validation dashboard",
    live: "https://www.vamshicreates.tech/projects/what-to-build",
    code: "https://github.com/vamshicreates/what-to-build",
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description: "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner-ai.jpg",
    imageAlt: "Illustration of a video frame being cleaned with an editing wand",
    live: "https://logo-cleaner-web.vercel.app",
    code: "https://github.com/vamshicreates/logo-cleaner-web",
  },
  {
    title: "Whiteboard for Code",
    kind: "Live website · developer tool",
    description: "Turns Mermaid, DOT, and basic code snippets into editable architecture whiteboards you can export.",
    image: "/projects/whiteboard-for-code-ai.jpg",
    imageAlt: "A code symbol becoming a simple connected diagram on a whiteboard",
    live: "https://whiteboard-for-code.vercel.app",
    code: "https://github.com/vamshicreates/whiteboard-for-code",
    codePrivate: true,
  },
];

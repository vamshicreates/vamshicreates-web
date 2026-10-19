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
    description: "A browser based cricket auction where friends build teams from a worldwide player catalog.",
    image: "/projects/cricket-draft-ai.jpg",
    imageAlt: "Illustration of a cricket ball, bat, and stadium",
    live: "https://cricket-draft-hazel.vercel.app",
    code: "https://github.com/vamshicreates/cricket-draft",
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

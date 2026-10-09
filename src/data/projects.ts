export interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  live: string | null;
  code: string | null;
}

export const PROJECTS: Project[] = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description:
      "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft-ai.jpg",
    imageAlt: "AI generated 3D illustration of cinema posters, a film reel, and an auction paddle",
    live: "https://movie-draft-phi.vercel.app",
    code: "https://github.com/vamshicreates/movie-draft",
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description:
      "A browser based cricket auction where friends build teams from a worldwide player catalog.",
    image: "/projects/cricket-draft-ai.jpg",
    imageAlt: "AI generated 3D illustration of a cricket ball, bat, and stadium",
    live: "https://cricket-draft-hazel.vercel.app",
    code: "https://github.com/vamshicreates/cricket-draft",
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description:
      "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner-ai.jpg",
    imageAlt: "AI generated 3D illustration of a video frame being cleaned with an editing wand",
    live: "https://logo-cleaner-web.vercel.app",
    code: null,
  },
  {
    title: "Podcast Editor",
    kind: "AI agent skill · open source",
    description:
      "An AI assisted multicamera podcast editing workflow for Premiere Pro and DaVinci Resolve.",
    image: "/projects/podcast-editor-ai.jpg",
    imageAlt: "AI generated 3D illustration of microphones and an audio editing timeline",
    live: null,
    code: "https://github.com/vamshicreates/podcast-editor",
  },
  {
    title: "Image to Blender",
    kind: "AI agent skill · open source",
    description:
      "Turns reference images into 3D Blender scenes with an agent skill and automated setup.",
    image: "/projects/image-to-blender-ai.jpg",
    imageAlt: "AI generated 3D illustration of a landscape image becoming a wireframe and 3D scene",
    live: null,
    code: "https://github.com/vamshicreates/image-to-blender",
  },
];

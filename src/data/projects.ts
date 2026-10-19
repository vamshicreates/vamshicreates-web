export interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description: "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft-ai.jpg",
    imageAlt: "Illustration of cinema posters, a film reel, and an auction paddle",
    live: "https://movie-draft-phi.vercel.app",
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description: "A browser based cricket auction where friends build teams from a worldwide player catalog.",
    image: "/projects/cricket-draft-ai.jpg",
    imageAlt: "Illustration of a cricket ball, bat, and stadium",
    live: "https://cricket-draft-hazel.vercel.app",
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description: "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner-ai.jpg",
    imageAlt: "Illustration of a video frame being cleaned with an editing wand",
    live: "https://logo-cleaner-web.vercel.app",
  },
  {
    title: "Whiteboard for Code",
    kind: "Live website · developer tool",
    description: "Turns Mermaid, DOT, and basic code snippets into editable architecture whiteboards you can export.",
    image: "/projects/whiteboard-for-code-ai.jpg",
    imageAlt: "A code symbol becoming a simple connected diagram on a whiteboard",
    live: "https://whiteboard-for-code.vercel.app",
  },
  {
    title: "Chitralaya",
    kind: "Live website · artist portfolio",
    description: "A visual home for Sahithi Vengaldas's wall murals, canvas art, and creative process.",
    image: "/projects/chitralaya-website-ai.jpg",
    imageAlt: "A painted botanical canvas in a bright artist studio",
    live: "https://chitralaya-website.vercel.app",
  },
  {
    title: "Dayashankar",
    kind: "Live website · editorial",
    description: "A calm space for Dayashankar Masam's talks and articles on astrology, puja, and tradition.",
    image: "/projects/dayashankar-website-ai.jpg",
    imageAlt: "An open book with a subtle celestial chart",
    live: "https://dayashankar-website.vercel.app",
  },
  {
    title: "Pin Studio",
    kind: "Live website · creator tool",
    description: "A studio for creating Pinterest visuals, writing searchable pin copy, and publishing to boards.",
    image: "/projects/pin-studio-saas-ai.jpg",
    imageAlt: "A single vertical pin card on a clean blue and white backdrop",
    live: "https://pin-studio-saas.vercel.app",
  },
  {
    title: "Minute30",
    kind: "Live website · learning platform",
    description: "Short, practical lessons designed to help people learn AI skills in 30 minutes.",
    image: "/projects/minute30-web-ai.jpg",
    imageAlt: "A minimal clock beside a lesson card",
    live: "https://minute30-web.vercel.app",
  },
  {
    title: "Curapod M",
    kind: "Live website · product concept",
    description: "An interactive product website introducing the Curapod M wearable concept.",
    image: "/projects/curapod-m-ai.jpg",
    imageAlt: "A curved wearable device with a soft blue halo",
    live: "https://curapod-m.vercel.app",
  },
  {
    title: "Ee Line Chusava",
    kind: "Live website · filmmaker content",
    description: "A redesigned home for film stories, filmmaking ideas, and AI tools for creators.",
    image: "/projects/eelinechusava-redesign-ai.jpg",
    imageAlt: "A single film frame resting over a screenplay page",
    live: "https://eelinechusava-redesign.vercel.app",
  },
];

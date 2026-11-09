export interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  live: string;
  code?: string;
}

const AI_COMPANION: Project = {
  title: "AI Companion",
  kind: "Live web app · conversational AI",
  description: "A thoughtful personal conversational companion for reflection and growth with adaptive presence and real-time dialogue.",
  image: "/projects/ai-companion-ai.jpg",
  imageAlt: "AI Companion personal conversational interface and persona selector",
  live: "https://ai-companion-eta-liard.vercel.app",
};

export const CREATED_WEBSITES: Project[] = [
  {
    title: "Muddhugumma",
    kind: "Fashion website",
    description: "A boutique catalog for custom-made frocks and handpicked sarees, with collection filters, styling videos, and Instagram ordering.",
    image: "/projects/muddhugumma-screenshot.jpg",
    imageAlt: "Muddhugumma homepage featuring its custom frock collection",
    live: "https://muddhugumma.vercel.app",
  },
  {
    title: "Hampi Privé",
    kind: "Travel website",
    description: "A travel site for private stays and guided heritage trips in Hampi, with itineraries, a photo gallery, and a WhatsApp enquiry form.",
    image: "/projects/hampi-prive-screenshot.jpg",
    imageAlt: "Hampi Privé homepage introducing private trips in Hampi",
    live: "https://hampi-prive.vercel.app",
  },
  {
    title: "Little Hands Organisation",
    kind: "Nonprofit website",
    description: "A website for a youth-run nonprofit where visitors can explore community projects, read impact stories, volunteer, and find ways to donate.",
    image: "/projects/littlehands-website-screenshot.jpg",
    imageAlt: "Little Hands Organisation homepage with volunteer and donation links",
    live: "https://littlehands-website.vercel.app",
  },
  {
    title: "The House of Loomi",
    kind: "Jewellery and gifting website",
    description: "A boutique storefront for everyday jewellery and curated gifts, with browsable collections and Instagram enquiries.",
    image: "/projects/house-of-loomi-screenshot.jpg",
    imageAlt: "The House of Loomi homepage showcasing jewellery and curated gifts",
    live: "https://house-of-loomi.vercel.app",
  },
  {
    title: "Creators' Studio",
    kind: "Education website",
    description: "A cohort-program site for Creators' Studio by Ramanaidu Studios, covering the program, mentors, curriculum, admissions, and FAQs.",
    image: "/projects/creators-studio-screenshot.jpg",
    imageAlt: "Creators' Studio homepage with the headline For the craft they don't teach in film schools",
    live: "https://creator-studio-lemon.vercel.app",
    code: "https://github.com/vamshicreates/creator-studio",
  },
  {
    title: "Film Idea Zone",
    kind: "Film ideas website",
    description: "A My Logline library of Indian true-story film ideas, each with a logline, synopsis, 13-beat treatment, and source links.",
    image: "/projects/film-idea-zone-screenshot.jpg",
    imageAlt: "Film Idea Zone homepage with the headline Real lives. Unwritten films.",
    live: "https://mylogline-idea-zone.vercel.app",
    code: "https://github.com/vamshicreates/mylogline-idea-zone",
  },
  {
    title: "The WTF Wall",
    kind: "Fan-made podcast website",
    description: "A colour-shifting wall of every WTF is with Nikhil Kamath episode, with search, sorting, in-page playback, and a Surprise me button.",
    image: "/projects/wtf-wall-screenshot.jpg",
    imageAlt: "The WTF Wall homepage with a bold WTF headline and episode stats",
    live: "https://wtf-wall.vercel.app",
    code: "https://github.com/vamshicreates/wtf-wall",
  },
  AI_COMPANION,
];

export const CREATED_GAMES: Project[] = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description: "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft-screenshot.jpg",
    imageAlt: "Live website screenshot of Movie Draft auction interface",
    live: "https://movie-draft-phi.vercel.app",
    code: "https://github.com/vamshicreates/movie-draft",
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description: "A browser-based cricket auction where friends build teams with live bidding from a worldwide catalog.",
    image: "/projects/cricket-draft-screenshot.jpg",
    imageAlt: "Live website screenshot of Cricket Draft auction room",
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
];

export const BUILT_TOOLS: Project[] = [
  {
    title: "Mama PDF",
    kind: "Live web tool · PDF editor",
    description: "A fast, privacy-first personal PDF editor that edits text, adds signatures, fills forms, and reorders pages directly in your browser.",
    image: "/projects/mama-pdf-ai.jpg",
    imageAlt: "Live web app screenshot of Mama PDF editor interface",
    live: "https://mama-pdf-five.vercel.app",
    code: "https://github.com/vamshicreates/mama-pdf",
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description: "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner-screenshot.jpg",
    imageAlt: "Live website screenshot of Logo Cleaner video tool",
    live: "https://logo-cleaner-web.vercel.app",
    code: "https://github.com/vamshicreates/logo-cleaner-web",
  },
  {
    title: "Whiteboard for Code",
    kind: "Live website · developer tool",
    description: "Turns Mermaid, DOT, and basic code snippets into editable architecture whiteboards you can export.",
    image: "/projects/whiteboard-for-code-screenshot.jpg",
    imageAlt: "Live website screenshot of Whiteboard for Code architecture canvas",
    live: "https://whiteboard-for-code.vercel.app",
  },
  {
    title: "Super Job Board",
    kind: "Live web app · career tool",
    description: "An AI career command center that matches your resume to the 10 best job links, with ATS tailoring and a pipeline tracker.",
    image: "/projects/super-job-board-screenshot.jpg",
    imageAlt: "Super Job Board JobGod home screen with resume upload and job search form",
    live: "https://super-job-board.vercel.app",
    code: "https://github.com/vamshicreates/super-job-board",
  },
];

export const PROJECTS = [...CREATED_GAMES, AI_COMPANION, ...BUILT_TOOLS];

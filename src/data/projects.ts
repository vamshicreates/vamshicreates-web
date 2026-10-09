export interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  live: string | null;
  code: string | null;
}

function skill(
  slug: string,
  title: string,
  kind: string,
  description: string,
  imageAlt: string,
): Project {
  return {
    title,
    kind,
    description,
    image: `/projects/${slug}-ai.jpg`,
    imageAlt,
    live: null,
    code: `https://github.com/vamshicreates/${slug}`,
  };
}

export const PROJECTS: Project[] = [
  {
    title: "Movie Draft",
    kind: "Live website · multiplayer game",
    description: "A Telugu cinema draft and auction game with shared rooms, live bidding, and a solo AI opponent.",
    image: "/projects/movie-draft-ai.jpg",
    imageAlt: "Illustration of cinema posters, a film reel, and an auction paddle",
    live: "https://movie-draft-phi.vercel.app",
    code: null,
  },
  {
    title: "Cricket Draft",
    kind: "Live website · multiplayer game",
    description: "A browser based cricket auction where friends build teams from a worldwide player catalog.",
    image: "/projects/cricket-draft-ai.jpg",
    imageAlt: "Illustration of a cricket ball, bat, and stadium",
    live: "https://cricket-draft-hazel.vercel.app",
    code: null,
  },
  {
    title: "Logo Cleaner",
    kind: "Live website · creative tool",
    description: "A focused web tool for removing logos from video. Built to turn an editing problem into a usable product.",
    image: "/projects/logo-cleaner-ai.jpg",
    imageAlt: "Illustration of a video frame being cleaned with an editing wand",
    live: "https://logo-cleaner-web.vercel.app",
    code: null,
  },
  skill("podcast-editor", "Podcast Editor", "Video editing skill", "Edits multicamera podcasts in Premiere Pro or DaVinci Resolve with speaker-aware camera decisions.", "Illustration of microphones and an audio editing timeline"),
  skill("image-to-blender", "Image to Blender", "3D creation skill", "Turns reference images into 3D Blender scenes with automated setup for the required tools.", "Illustration of a landscape image becoming a 3D scene"),
  skill("photoshop-design-dna", "Photoshop Design DNA", "Design skill", "Studies existing designs and builds editable, layered Photoshop files from a new brief.", "Illustration of a layered design canvas"),
  skill("illustrator-design-dna", "Illustrator Design DNA", "Design skill", "Extracts a visual style from reference work and creates editable vector designs in Illustrator.", "Illustration of a vector curve with control points"),
  skill("after-effects-motion-dna", "After Effects Motion DNA", "Motion skill", "Reads the movement and timing of a reference, then builds keyframed After Effects compositions.", "Illustration of a motion path with keyframes"),
  skill("premiere-editing-dna", "Premiere Editing DNA", "Video editing skill", "Studies an approved edit and builds a Premiere Pro timeline from raw footage and a brief.", "Illustration of a video editing timeline"),
  skill("davinci-color-dna", "DaVinci Color DNA", "Color grading skill", "Analyzes a graded reference image and applies its color direction to clips in DaVinci Resolve.", "Illustration of a video frame and color grading wheel"),
  skill("maya-3d", "Maya 3D", "3D creation skill", "Creates and validates Autodesk Maya 3D projects from an image or a creative brief.", "Illustration of a 3D model and its wireframe"),
  skill("indesign-portfolio-skill", "InDesign Portfolio", "Portfolio design skill", "Builds editable InDesign portfolios and review PDFs from approved project content.", "Illustration of an open portfolio spread"),
  skill("indic-song-studio", "Indic Song Studio", "Music production skill", "A local studio and agent workflow for generating and mastering Telugu and other Indic songs.", "Illustration of a studio microphone and sound wave"),
  skill("caveman-video", "Caveman Video", "Video workflow skill pack", "A compact toolkit for video edits, motion graphics, recuts, and timeline exports with concise agent instructions.", "Illustration of a compact video editing timeline"),
  skill("lyrics-to-video-skill-pack", "Lyrics to Video", "Lyric video skill pack", "Turns song audio and lyrics into an illustrated lyric video with visuals timed to the vocals.", "Illustration of a sound wave becoming a storyboard frame"),
  skill("lyrics-flow-producer", "Lyrics Flow Producer", "Lyric video skill", "Plans lyric-led visuals and produces a music video workflow using Gemini image generation and Google Flow.", "Illustration of a sound ribbon flowing into a video frame"),
  skill("podcast-to-reels-premiere", "Podcast to Reels", "Podcast editing skill", "Finds strong moments in a podcast and edits approved short clips in Adobe Premiere Pro.", "Illustration of a podcast microphone and selected vertical clip"),
  skill("local-podcast-clips", "Local Podcast Clips", "Podcast editing skill", "Edits Telugu podcast clips locally with Whisper transcription and FFmpeg.", "Illustration of an audio waveform with a selected clip"),
  skill("video-logo-remover", "Video Logo Remover", "Video cleanup skill", "Detects, tracks, and removes logos from local video footage.", "Illustration of a mark being removed from a video frame"),
  skill("film-to-screenplay", "Film to Screenplay", "Screenwriting skill", "Reconstructs a film as a screenplay PDF from subtitle files, preserving dialogue and scene flow.", "Illustration of a film reel becoming a screenplay page"),
  skill("video-to-screenplay", "Video to Screenplay", "Screenwriting skill", "Turns a supplied video or audio file into a dialogue-focused screenplay with scene locations and Telugu or Tinglish dialogue.", "Illustration of a filmstrip becoming a screenplay page"),
  skill("video-to-screenplay-laya", "Video to Screenplay: Laya", "Experimental screenwriting skill", "Tests Laya-assisted transcript review as part of a dialogue-focused screenplay workflow.", "Illustration of a video frame flowing into a screenplay page"),
  skill("script-production-breakdown", "Script Production Breakdown", "Production planning skill", "Indexes a screenplay and prepares production breakdowns, continuity notes, and scene-first storyboards.", "Illustration of a marked screenplay page and film slate"),
  skill("film-cast-actor-database-skill", "Film Cast Actor Database", "Casting research skill", "Researches film casts with sources and builds an actor database in Google Sheets.", "Illustration of a casting database with portrait cards"),
  skill("indian-film-crew-options", "Indian Film Crew Options", "Production planning skill", "Builds two sourced crew options for an Indian film production in an Excel template.", "Illustration of a two-column crew call sheet"),
  skill("youtube-uploader", "YouTube Uploader", "Publishing skill", "Handles video uploads, metadata, policy disclosures, and post-publish steps in YouTube Studio.", "Illustration of a video upload panel"),
  skill("basic-youtube-uploader", "Basic YouTube Uploader", "Publishing skill", "Uploads a local video to YouTube Studio as unlisted with a title and description.", "Illustration of a video tile and upload arrow"),
  skill("utv-hott-news-carousel-skill", "UTV Hott News Carousel", "Social content skill", "Creates bilingual Telugu and English news carousels in Canva for UTV Hott News.", "Illustration of a stack of social news cards"),
  skill("utv-hott-news-reel-script", "UTV Hott News Reel Script", "Social content skill", "Writes source-checked news reel scripts with hooks, audience reaction, and an app call to action.", "Illustration of a vertical news reel script"),
  skill("job-hunter", "Job Hunter", "Career workflow skill", "Finds jobs across platforms and tailors an ATS-friendly PDF resume before a reviewed application.", "Illustration of a resume under a magnifying glass"),
  skill("sagar-design-job-hunter", "Sagar Design Job Hunter", "Career workflow skill", "Finds Hyderabad industrial and furniture design roles matched to a designer's portfolio.", "Illustration of a modern chair under a magnifying glass"),
];

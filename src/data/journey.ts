export interface JourneyGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  rotateCounterclockwise?: boolean;
}

export interface JourneyMilestone {
  id: string;
  badgeText: string;
  badgeSub?: string;
  periodLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  accent: "teal" | "blue";
  gallery?: JourneyGalleryImage[];
  websiteUrl?: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "first-startup",
    badgeText: "01",
    badgeSub: "START",
    periodLabel: "1ST STARTUP · ENTREPRENEURSHIP",
    title: "Pitching My First Startup — T-Shirt Baba",
    description:
      "Where the builder mindset began—pitching my very first startup idea ('T-Shirt Baba') on stage and learning how to turn raw ideas into real products.",
    image: "/journey/first-startup.jpg",
    imageAlt: "Vamshi pitching his first startup T-Shirt Baba in front of a projector",
    objectPosition: "center center",
    accent: "teal",
  },
  {
    id: "aha-journey",
    badgeText: "2020",
    badgeSub: "–2021",
    periodLabel: "JULY 2020 – DEC 2021 · AHA OTT",
    title: "My aha Journey (July 2020 – Dec 2021)",
    description:
      "Joined aha during its high-growth phase, driving digital content strategy, viral campaigns, and audience scale from the ground up.",
    image: "/journey/aha-journey-2020-2021.jpg",
    imageAlt: "Vamshi at the aha office lounge in front of the aha wall logo",
    objectPosition: "center center",
    accent: "blue",
  },
  {
    id: "rana-no1-yaari",
    badgeText: "SET",
    badgeSub: "YAARI",
    periodLabel: "CELEBRITY SHOOT · NO. 1 YAARI",
    title: "Shoot with Rana Daggubati for No. 1 Yaari",
    description:
      "On set briefing Rana Daggubati with the script and directing creative segments for the hit show No. 1 Yaari.",
    image: "/journey/shoot-with-rana-no1-yaari.jpg",
    imageAlt: "Vamshi briefing Rana Daggubati on the set of No. 1 Yaari",
    objectPosition: "center top",
    accent: "teal",
  },
  {
    id: "aha-bhojanambu-tharun",
    badgeText: "SHOW",
    badgeSub: "CAMPAIGN",
    periodLabel: "MARKETING CAMPAIGN · AHA BHOJANAMBU",
    title: "Marketing Campaign for Aha Bhojanambu with Tharun Anna",
    description:
      "Collaborated with director & creator Tharun Bhascker (Tharun Anna) on set to launch the marketing campaign for Aha Bhojanambu.",
    image: "/journey/aha-bhojanambu-tharun-anna.jpg",
    imageAlt: "Vamshi with Tharun Bhascker on the set of Aha Bhojanambu",
    objectPosition: "center top",
    accent: "blue",
  },
  {
    id: "adivi-sesh-indian-idol",
    badgeText: "IDOL",
    badgeSub: "SHOOT",
    periodLabel: "PROMO PRODUCTION · INDIAN IDOL",
    title: "Shoot with Adivi Sesh for Indian Idol",
    description:
      "Behind the scenes with actor Adivi Sesh capturing high-impact promotional content and digital campaigns for Telugu Indian Idol.",
    image: "/journey/shoot-with-adivi-sesh-indian-idol.webp",
    imageAlt: "Vamshi with Adivi Sesh during the Indian Idol shoot",
    objectPosition: "center top",
    accent: "teal",
  },
  {
    id: "jd-chakravarthy-shoot",
    badgeText: "STUDIO",
    badgeSub: "PROD",
    periodLabel: "GREEN SCREEN · STUDIO SHOOT",
    title: "Production Shoot with J. D. Chakravarthy",
    description:
      "In the green-screen studio directing promotional content and digital segments with J. D. Chakravarthy.",
    image: "/journey/shoot-with-jd-chakravarthy.webp",
    imageAlt: "Vamshi with J. D. Chakravarthy in front of a studio green screen",
    objectPosition: "center top",
    accent: "blue",
  },
  {
    id: "one-million-subs",
    badgeText: "1M+",
    badgeSub: "SUBS",
    periodLabel: "YOUTUBE GOLD PLAY BUTTON · MILESTONE",
    title: "1 Million Subscribers on aha YouTube Channel",
    description:
      "Scaled the aha VideoIN YouTube channel past 1,000,000 subscribers and brought home the YouTube Gold Creator Award.",
    image: "/journey/aha-youtube-1m-subs.webp",
    imageAlt: "Vamshi reflected in the YouTube Gold Play Button for passing 1,000,000 subscribers on aha VideoIN",
    objectPosition: "center center",
    accent: "teal",
  },
  {
    id: "swipeup-productions",
    badgeText: "S-UP",
    badgeSub: "TEAM",
    periodLabel: "FOUNDING TEAM · SWIPEUP PRODUCTIONS",
    title: "Founding Team at SwipeUp Productions",
    description:
      "Handled marketing and operations as part of the founding team, worked with all Telugu OTT platforms, and produced a micro drama.",
    image: "/journey/swipeup-productions.jpg",
    imageAlt: "A Sony camera with an S-UP label held outdoors",
    objectPosition: "center center",
    accent: "blue",
  },
  {
    id: "save-the-tigers",
    badgeText: "HIT",
    badgeSub: "SERIES",
    periodLabel: "VIRAL CAMPAIGN · SAVE THE TIGERS",
    title: "Marketing Content for Save The Tigers Series",
    description:
      "Created viral marketing content with the cast and crew of the blockbuster series Save The Tigers, turning organic buzz into massive viewership.",
    image: "/journey/save-the-tigers-campaign.webp",
    imageAlt: "Vamshi with the cast and crew of Save The Tigers series",
    objectPosition: "center center",
    accent: "blue",
  },
  {
    id: "ee-line-chusava",
    badgeText: "FILM",
    badgeSub: "STORIES",
    periodLabel: "FILMMAKER CONTENT · EE LINE CHUSAVA",
    title: "Building Ee Line Chusava for filmmakers",
    description:
      "Built a filmmaker content community to 140K and 30K followers across its channels. Its website brings together short films, articles, scripts, opportunities, and practical learning for aspiring filmmakers.",
    image: "/journey/ee-line-chusava.jpg",
    imageAlt: "Ee Line Chusava brand artwork",
    objectPosition: "center center",
    accent: "teal",
    websiteUrl: "https://www.eelinechusava.in",
  },
  {
    id: "mylogline",
    badgeText: "CO",
    badgeSub: "FOUNDER",
    periodLabel: "FILMMAKER TOOL · MYLOGLINE",
    title: "Co-founding mylogline",
    description:
      "Co-founding a creative workspace for aspiring filmmakers to write screenplays, format them automatically, and visualize scenes with AI storyboards.",
    image: "/journey/mylogline.jpg",
    imageAlt: "mylogline illustration showing scripts and a filmmaker workspace",
    objectPosition: "center center",
    accent: "blue",
    websiteUrl: "https://www.mylogline.com",
  },
  {
    id: "mallareddy-ai-classes",
    badgeText: "AI",
    badgeSub: "CLASS",
    periodLabel: "MELBOURNE MAMA CREATIVE LABS · MALLA REDDY",
    title: "Taught AI in content creation for Mallareddy students.",
    description:
      "Taught AI in content creation & creator economy for Mallareddy Engineering students via Melbourne Mama Creative Labs.",
    image: "/journey/mallareddy/class-3.jpg",
    imageAlt:
      "Vamshi teaching AI in content creation & creator economy for Mallareddy Engineering students",
    objectPosition: "center center",
    accent: "teal",
    gallery: [
      {
        src: "/journey/mallareddy/class-3.jpg",
        alt: "Introduction: AI in Content Creation & Creator Economy lecture at Malla Reddy University",
        caption: "Session 01 · Introduction to AI in Content Creation & Creator Economy",
      },
      {
        src: "/journey/mallareddy/class-5.jpg",
        alt: "Module 2: Digital Avatar Creation lecture at Malla Reddy University",
        caption: "Session 02 · Module 2: Digital Avatar Creation & AI Video Workflows",
      },
      {
        src: "/journey/mallareddy/class-6.jpg",
        alt: "Live AI animation and storytelling workflow demo at Malla Reddy University",
        caption: "Session 03 · Live AI Visual Storytelling & Animation Demo",
      },
      {
        src: "/journey/mallareddy/class-1.jpg",
        alt: "Hands-on 1-on-1 lab mentoring with Malla Reddy Engineering students",
        caption: "Session 04 · Hands-On Lab Mentoring with Mallareddy Engineering Students",
        rotateCounterclockwise: true,
      },
      {
        src: "/journey/mallareddy/class-2.jpg",
        alt: "Interactive AI & creator economy lab session with Malla Reddy students",
        caption: "Session 05 · Interactive Creator Economy Lab Walkthrough",
        rotateCounterclockwise: true,
      },
      {
        src: "/journey/mallareddy/class-4.jpg",
        alt: "Guiding Malla Reddy Engineering students on AI content creation tools",
        caption: "Session 06 · Practical AI Tooling & Student Project Reviews",
        rotateCounterclockwise: true,
      },
    ],
  },
  {
    id: "vamshicreates-now",
    badgeText: "NOW",
    badgeSub: "AI ERA",
    periodLabel: "VAMSHICREATES · AI & AUTOMATIONS",
    title: "Building VamshiCreates — AI Agents & Creator Systems",
    description:
      "Combining years of startup building, celebrity production, and 1M+ subscriber growth with AI automations to help creators and founders scale.",
    image: "/journey/main-dp-hero.jpg",
    imageAlt: "VamshiCreates studio portrait",
    objectPosition: "center top",
    accent: "blue",
  },
];

export const CREATOR_PORTRAITS = [
  {
    src: "/journey/main-dp-hero.jpg",
    label: "Studio Main DP",
    caption: "Founder, Content Strategist & AI Builder",
  },
  {
    src: "/journey/dp-1-showcase.jpg",
    label: "Spotlight Portrait",
    caption: "Creative Direction & Growth Systems",
  },
  {
    src: "/journey/dp-2-showcase.jpg",
    label: "Editorial Portrait",
    caption: "Building the next wave of AI-powered media",
  },
];

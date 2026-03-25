// ============================================================
// INTERFACES
// ------------------------------------------------------------
// An interface is like a "blueprint" for an object.
// It tells TypeScript: "every object of this type MUST have
// these exact properties, with these exact value types."
//
// In plain JS you'd just write an object and hope for the best.
// With TS, if you forget a property or use the wrong type,
// you get an error instantly — before your code even runs.
// ============================================================

export interface ProjectLink {
  // 'href' must be a string. Always.
  href: string;

  // 'label' must be a string too — we'll use it for accessibility.
  label: string;

  // The | symbol means "or" — this is called a UNION TYPE.
  // 'type' can only ever be one of these two exact string values.
  // If you typo it (e.g. "githubbb"), TypeScript will yell at you.
  type: 'github' | 'live';
}

export interface Project {
  id: number;
  title: string;
  description: string;

  // 'imageSrc' is a string (a file path), but could also be null
  // if a project has no image. The ? makes it OPTIONAL —
  // meaning you can leave it out entirely and TS won't complain.
  imageSrc?: string;

  imageAlt?: string;

  // This is an ARRAY of ProjectLink objects.
  // ProjectLink[] means: "a list where every item matches the ProjectLink interface"
  links: ProjectLink[];
    category: 'featured' | 'beginner' | 'webdesign';
}


// ============================================================
// DATA
// ------------------------------------------------------------
// Here we define the actual array of projects.
//
// Notice: Project[] after the colon — this is a TYPE ANNOTATION.
// It tells TS "this variable must be an array of Project objects."
// If any project object below is missing a required field or has
// a wrong type, TypeScript will show an error right here.
// ============================================================

export const projects: Project[] = [
  // ── FEATURED ──────────────────────────────────────────────
 
  {
    id: 1,
    title: 'Murmur',
    description:
      'A full-stack social media app with posts, likes, follows, and a real-time feed.',
    category: 'featured',
    imageSrc: '/images/murmur.png',
    imageAlt: 'murmur app preview',
    links: [
      { href: 'https://github.com/Petra-78/murmur', label: 'GitHub', type: 'github' },
        { href: 'https://murmur-app.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 2,
    title: 'Where Is Everyone?',
    description:
      'A photo-tagging game inspired by Where\'s Waldo. Click to find hidden characters with a live leaderboard.',
    category: 'featured',
    imageSrc: '/images/where-is-everyone.png',
    imageAlt: 'where is waldo game preview',
    links: [
      { href: 'https://github.com/Petra-78/where-is-waldo', label: 'GitHub', type: 'github' },
        { href: 'https://where-is-everyone.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 3,
    title: 'Inventory App',
    description:
      'A full-stack inventory management app with CRUD operations, categories, and a clean dashboard UI.',
    category: 'featured',
    imageSrc: '/images/snowboard-inventory.png',
    imageAlt: 'inventory app preview',
    links: [
      { href: 'https://github.com/Petra-78/inventory-app', label: 'GitHub', type: 'github' },
      {href: 'https://inventory-app-production-2dbd.up.railway.app/', label: 'Live site', type: 'live' },
    ],
  },

  // ── BEGINNER ──────────────────────────────────────────────
   {
    id: 14,
    title: 'Book Haven',
    description:
      'A book shopping website built with vanilla JS, HTML and CSS, showcasing JS DOM manipulation. Features a clean, modern design and a simple shopping cart.',
    category: 'beginner',
    imageSrc: '/images/book-haven.png',
    imageAlt: 'book haven preview',
    links: [
      { href: 'https://github.com/Petra-78/book-haven', label: 'GitHub', type: 'github' },
        { href: 'https://bookhaven-onlinestore.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
   {
    id: 6,
    title: "Bob's Memory Card Game",
    description:
      'A memory card game built with React. Tests your memory by tracking which cards you\'ve already clicked.',
    category: 'beginner',
    imageSrc: '/images/bobs-memory-game.png',
    imageAlt: 'memory card game',
    links: [
      { href: 'https://github.com/Petra-78/memory-card-game', label: 'GitHub', type: 'github' },
      { href: 'https://bobs-memory-card-game.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 7,
    title: 'Messaging App',
    description:
      'A real-time messaging app with channels and user authentication.',
    category: 'beginner',
    imageSrc: '/images/world-talk.png',
    imageAlt: 'messaging app preview',
    links: [
      { href: 'https://github.com/Petra-78/messaging-app', label: 'GitHub', type: 'github' },
      { href: 'https://world-talk.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
   {
    id: 8,
    title: 'Personal Blog',
    description:
      'A clean personal blog with post listing, auth functions, personal admin panel, comments, individual post pages, and a minimal reading-focused UI.',
    category: 'beginner',
    imageSrc: '/images/from-scratch.png',  
    imageAlt: 'blog preview',
    links: [
      { href: 'https://github.com/Petra-78/blog-frontend', label: 'GitHub', type: 'github' },
      { href: 'https://blog-petra-78.netlify.app/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 4,
    title: 'Battleship',
    description:
      'Classic Battleship built with JavaScript and TDD. Features drag-and-drop ship placement and an AI opponent.',
    category: 'beginner',
    imageSrc: '/images/battleship.png',
    imageAlt: 'battleship game',
    links: [
      { href: 'https://github.com/Petra-78/battleship', label: 'GitHub', type: 'github' },
      { href: 'https://petra-78.github.io/battleship/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 5,
    title: 'Weather App',
    description:
      'A weather dashboard fetching live data from an external API, with current conditions and forecasts.',
    category: 'beginner',
    imageSrc: '/images/weather-app.png',
    imageAlt: 'weather app',
    links: [
      { href: 'https://github.com/Petra-78/weather-app', label: 'GitHub', type: 'github' },
      { href: 'https://petra-78.github.io/weather-app/', label: 'Live site', type: 'live' },
    ],
  },
 
  {
    id: 9,
    title: 'Rock Paper Scissors',
    description:
      'Rock-Paper-Scissors built from scratch with a computer opponent and playful UI.',
    category: 'beginner',
    imageSrc: '/images/rock-paper-scissors.png',
    imageAlt: 'rock paper scissors game',
    links: [
      { href: 'https://github.com/Petra-78/rock-paper-scissors-game', label: 'GitHub', type: 'github' },
      { href: 'https://petra-78.github.io/rock-paper-scissors-game/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 10,
    title: 'Calculator',
    description:
      'A fully functional calculator handling basic arithmetic with a responsive layout.',
    category: 'beginner',
    imageSrc: '/images/calculator.png',
    imageAlt: 'calculator',
    links: [
      { href: 'https://github.com/Petra-78/calculator', label: 'GitHub', type: 'github' },
      { href: 'https://petra-78.github.io/calculator/', label: 'Live site', type: 'live' },
    ],
  },

  // ── WEBDESIGN ─────────────────────────────────────────────
  {
    id: 11,
    title: 'Muse Sculptors',
    description:
      'A modern, high-contrast website for a startup 3D wall art business. Built to highlight bold visuals.',
    category: 'webdesign',
    imageSrc: '/images/musesculptors.png',
    imageAlt: 'musesculptors website',
    links: [
      { href: 'https://www.musesculptors.com/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 12,
    title: 'Dubai Investments',
    description:
      'A real estate platform that helps European investors discover and evaluate Dubai property opportunities with clear, practical information. It simplifies the buying process by guiding users from initial research to final purchase.',
    category: 'webdesign',
    imageSrc: '/images/dubaiinvestments.png',
    imageAlt: 'dubai investments website',
    links: [
      { href: 'https://dubaiinvestments.hu/', label: 'Live site', type: 'live' },
    ],
  },
  {
    id: 13,
    title: 'Lumira Skin',
    description:
      'A skincare e-commmerce website offering at-home beauty devices as an alternative to expensive salon treatments.',
    category: 'webdesign',
    imageSrc: '/images/lumiraskin.png',
    imageAlt: 'lumira skin website',
    links: [
        {href: 'https://lumiraskin.hu/', label: 'Live site', type: 'live'  }
    ],
  },
];
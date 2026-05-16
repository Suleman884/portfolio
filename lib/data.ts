export const profile = {
  name: "Muhammad Suleman",
  title: "Senior React Native & Front-End Engineer",
  tagline: "React Native · React.js · Next.js · TypeScript",
  location: "Lahore, Pakistan · Open to Remote",
  email: "sulemanashiq984@gmail.com",
  phone: "+92 303 4331364",
  linkedin: "https://www.linkedin.com/in/muhammad-suleman-804225178/",
  resumeUrl: "/Suleman_Senior_Software_Engg_Resume.pdf",
  bio: "Senior Software Engineer with 6+ years building high-performance React Native, React.js, and Next.js applications across fintech, eSIM/telecom, edtech, e-commerce, and media. Proven record leading teams and delivering iOS, Android, and Web products to global users.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Live Apps", value: "10+" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Active Users", value: "100K+" },
  ],
};

export const skills = {
  Mobile: [
    "React Native",
    "Expo",
    "iOS",
    "Android",
    "Native Modules",
    "Reanimated",
    "Push Notifications",
    "Deep Linking",
  ],
  "Frontend Web": [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Material UI",
    "SSR / SSG",
    "SEO",
  ],
  "State & Data": [
    "Redux Toolkit",
    "Zustand",
    "React Query",
    "GraphQL",
    "Apollo",
    "REST APIs",
    "Firebase",
    "WebSockets",
  ],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "Firebase Functions",
    "Stripe",
    "Payment Gateways",
    "JWT",
  ],
  "Testing & DevOps": [
    "Jest",
    "Detox",
    "React Testing Library",
    "Bitrise",
    "Fastlane",
    "GitHub Actions",
    "CI/CD",
  ],
  Tools: ["Git", "GitHub", "GitLab", "Jira", "Agile / Scrum"],
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  domain: string;
  region: string;
  links: { label: string; url: string }[];
  accent: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    name: "Nomod",
    tagline: "Fintech payment-link & POS platform",
    description:
      "End-to-end development of a global fintech platform for payment links, in-person card payments (Apple Pay, Google Pay, BNPL), and merchant transaction management — delivered across iOS, Android, and Web with Next.js SSR landing pages.",
    stack: ["React Native", "React.js", "Next.js", "TypeScript", "Redux Toolkit", "Stripe", "Bitrise"],
    domain: "Fintech",
    region: "Global",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/nomod-payment-links/id1541984830" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.nomod.next" },
      { label: "Web", url: "https://nomod.com" },
    ],
    accent: "from-cyan-400 via-blue-500 to-purple-600",
    highlight: "Current",
  },
  {
    name: "Best Connect & RingMI",
    tagline: "Global eSIM platform + VoIP calling app",
    description:
      "Best Connect: in-app eSIM activation, QR-code provisioning, wallet & top-ups, multi-country plan management for 200+ countries. RingMI: HD VoIP calling and messaging with seamless cross-platform sync.",
    stack: ["React Native", "TypeScript", "REST APIs", "WebRTC", "Firebase"],
    domain: "eSIM / Telecom",
    region: "Global",
    links: [
      { label: "Best Connect iOS", url: "https://apps.apple.com/us/app/best-connect-esim/id6743940071" },
      { label: "Best Connect Android", url: "https://play.google.com/store/apps/details?id=com.app.bestconnect" },
      { label: "Best Connect Web", url: "https://www.bestconnect.online" },
      { label: "RingMI iOS", url: "https://apps.apple.com/us/app/ringmi/id867695465" },
      { label: "RingMI Android", url: "https://play.google.com/store/apps/details?id=com.ringmi" },
    ],
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    name: "Fonos",
    tagline: "#1 audiobooks & podcasts platform in Vietnam",
    description:
      "Offline listening, background playback, CarPlay support, and personalized content discovery for Vietnam's leading audiobook platform.",
    stack: ["React Native", "TypeScript", "Audio Streaming", "CarPlay"],
    domain: "Media / Streaming",
    region: "Vietnam",
    links: [
      { label: "iOS", url: "https://apps.apple.com/us/app/fonos/id1491002000" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=vn.fonos.mobile" },
      { label: "Web", url: "https://fonos.vn" },
    ],
    accent: "from-pink-400 via-rose-500 to-orange-500",
  },
  {
    name: "Youni",
    tagline: "University event-organizer app",
    description:
      "Event discovery, social features, and push notifications used by students at Oxford, Cambridge, St Andrews, Durham, and York. Reduced crash rates and improved Time-to-Interactive through targeted refactoring.",
    stack: ["React Native", "Redux", "REST APIs", "Push Notifications", "Firebase Analytics"],
    domain: "Edtech / Social",
    region: "United Kingdom",
    links: [
      { label: "iOS", url: "https://apps.apple.com/gb/app/youni-uni-life-your-way/id1605755667" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.thisisyouni" },
      { label: "Web", url: "https://theyouniapp.com" },
    ],
    accent: "from-violet-400 via-purple-500 to-fuchsia-600",
  },
  {
    name: "Pickle",
    tagline: "Premium clothing-rental marketplace",
    description:
      "Secure rental checkout with Stripe, rich product browsing experience, in-app messaging between renters and lenders. Delivered for a US-based marketplace.",
    stack: ["React Native", "TypeScript", "Stripe", "Firebase", "GraphQL"],
    domain: "E-commerce",
    region: "United States",
    links: [],
    accent: "from-amber-400 via-orange-500 to-red-600",
  },
];

export const experience = [
  {
    title: "Senior React Native Engineer | React.js & Next.js Developer",
    company: "Alfabolt (Nomod)",
    period: "Nov 2024 – Present",
    location: "Remote",
    highlights: [
      "Lead end-to-end development of Nomod, a fintech platform delivered across iOS, Android, and Web.",
      "Built customer-facing web flows and merchant dashboards in React.js and Next.js (TypeScript) with SSR pages and SEO-optimized routes.",
      "Architected reusable components in React Native + TypeScript; reduced render times via memoization, virtualization, and lazy loading.",
      "Integrated secure payment flows (card, Apple Pay, Google Pay, BNPL) and partner SDKs.",
    ],
  },
  {
    title: "Senior React Native Engineer | Mobile & Front-End Engineer",
    company: "AA'LA Solutions",
    period: "Jun 2021 – Dec 2024",
    location: "Lahore, PK",
    highlights: [
      "Shipped multiple production mobile and web applications across fintech, eSIM/telecom, edtech, music streaming, and fashion-rental domains.",
      "Built reusable component libraries with React Native, React.js, and TypeScript; standardized UI/UX and accelerated feature delivery.",
      "Set up CI/CD with Bitrise + Fastlane — automated builds, tests, and store deployments.",
      "Wrote unit and end-to-end tests with Jest and Detox; mentored junior developers and ran code reviews.",
    ],
  },
  {
    title: "Senior React Native Engineer (Team Lead) | Mobile Engineer",
    company: "Dankia Solutions",
    period: "Dec 2019 – Dec 2023",
    location: "Remote · Part-time",
    highlights: [
      "Led a small cross-functional team delivering cross-platform mobile apps for clients across multiple industries.",
      "Owned architecture, tooling, and on-time delivery; established Git workflows and code-review standards.",
    ],
  },
  {
    title: "React Native Engineer (Mobile)",
    company: "Youni",
    period: "Part-time",
    location: "Remote",
    highlights: [
      "Enhanced and optimized the Youni mobile app used at UK universities.",
      "Refactored legacy modules into modular, performant components; reduced crash rates and improved Time-to-Interactive.",
    ],
  },
];

import type { Site, SocialObjects } from "./types";

const GITHUB_PROJECT_URL = "https://github.com/suiware/suiware.io";

export const SITE: Site = {
  website: "https://suiware.io",
  author: "Kos Komelin",
  profile: "https://x.com/kkomelin",
  desc: "Suiware is an independent virtual organization dedicated to creating useful tools and content for the Sui ecosystem.",
  slogan: "Open source. Open mind. Open heart.",
  title: "Suiware",
  ogImage: "img/og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {
    url: `${GITHUB_PROJECT_URL}/edit/main/src/content/blog`,
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 160,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: GITHUB_PROJECT_URL,
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/suiware_",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Twitch",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/HuDPpXz4Hx",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: GITHUB_PROJECT_URL,
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

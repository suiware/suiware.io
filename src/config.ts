export const DONATION_ADDRESS =
  "0xe465bfb2f574c35902bf2a0f07e8173a543aec8332187929044733d1e01ba9cd"

export const GITHUB_ORGANIZATION_URL = "https://github.com/suiware"
export const GITHUB_PROJECT_URL = `${GITHUB_ORGANIZATION_URL}/suiware.io`

export const SITE = {
  website: "https://suiware.io",
  author: "Kos Komelin",
  profile: "https://x.com/kkomelin",
  desc: "Suiware is an independent virtual organization dedicated to creating useful tools and content for the Sui ecosystem.",
  slogan: "Open source. Open mind. Open heart.",
  title: "Suiware",
  ogImage: "img/og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: `${GITHUB_PROJECT_URL}/edit/main/`,
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Belgrade", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const

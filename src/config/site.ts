export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sculk",
  description: "Sculk is the Minecraft Bedrock server that combines power and innovation. Designed to deliver top-tier performance and customizable features, we aim to transform your gaming experience.",
  maintenance: false,
  navItems: [
    {
      label: "Docs",
      href: "",
      redirect: true
    },
    {
      label: "Downloads",
      href: "/downloads",
    },
    {
      label: "Plugins",
      href: "/plugins",
      redirect: true
    },
    {
      label: "Teams",
      href: "/teams",
      redirect: false
    },
    {
      label: "Contribute",
      href: "/contribute",
      redirect: false
    },
  ],
  navMenuItems: [
    {
      label: "Docs",
      href: "",
      redirect: true
    },
    {
      label: "Downloads",
      href: "/downloads",
    },
    {
      label: "Plugins",
      href: "/plugins",
      redirect: true
    },
    {
      label: "Teams",
      href: "/teams",
      redirect: false
    },
    {
      label: "Contribute",
      href: "/contribute",
      redirect: false
    },
  ],
  links: {
    github: "https://github.com/sculkmp",
    docs: "",
    discord: "",
    sponsor: "/",
    docs_repo: "https://github.com/sculkmp/docs"
  },
};

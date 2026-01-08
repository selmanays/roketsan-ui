export const siteConfig = {
  name: "Roketsan UI",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://ui.roketsan.com.tr",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || "https://ui.roketsan.com.tr"}/og.jpg`,
  description:
    "A comprehensive enterprise component library designed for building consistent, accessible, and maintainable user interfaces.",
  links: {
    twitter: "",
    github: "",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/charts/area",
      label: "Charts",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

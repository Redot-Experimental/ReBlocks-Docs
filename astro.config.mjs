// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://reblocks.redotengine.org",
  integrations: [
    starlight({
      title: "ReBlocks",
      favicon: "/favicon.ico",
      editLink: {
        baseUrl:
          "https://github.com/Redot-Experimental/reblocks-docs/edit/master/src/content/docs/",
      },
      logo: {
        light: "./src/assets/dark-logo.svg",
        dark: "./src/assets/light-logo.svg",
        replacesTitle: true,
      },
      customCss: ["./src/styles/inter.css", "./src/styles/redot.css"],
      social: {
        github: "https://github.com/Redot-Experimental/ReBlocks",
        discord: "https://discord.gg/redot",
        "x.com": "https://x.com/Redot_Engine",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { label: "Getting Started", slug: "guides/getting-started" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

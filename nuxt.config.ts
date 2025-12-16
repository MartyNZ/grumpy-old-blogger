// https://nuxt.com/docs/api/configuration/nuxt-config
import { VitePWA } from "vite-plugin-pwa";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "usebootstrap",
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "nuxt-mail",
    "@vee-validate/nuxt",
    "@nuxtjs/seo",
  ],
  seo: {
    // seo utils
    enabled: true,
  },
  sitemap: {
    enabled: true,
    sources: ["/api/__sitemap__/urls"],
  },
  vite: {
    server: {
      allowedHosts: [
        "b5phpis0cqns.share.zrok.io",
        "https://grumpyoldbugger.com",
      ],
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: process.env.NUXT_SITE_NAME,
          short_name: process.env.NUXT_SITE_NAME,
          description: process.env.NUXT_SITE_DESCRIPTION,
          categories: ["entertainment", "lifestyle"],
          display_override: [
            "standalone",
            "window-controls-overlay",
            "fullscreen",
          ],
          theme_color: process.env.NUXT_SITE_THEME_COLOR,
          orientation: "portrait",
          id: process.env.NUXT_SITE_PUBLISHED_URL,
          start_url: process.env.NUXT_SITE_PUBLISHED_URL,
          shortcuts: [
            {
              name: "About",
              url: "/about",
              description: "Allow me to introduce myself...",
            },
            {
              name: "Blog",
              url: "/blog",
              description:
                "The semi-demented rantings of an over opinionated grumpy old blogger.",
            },
          ],
          icons: [
            {
              src: "/assets/img/logo_192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/img/logo_512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/img/logo_maskable.png",
              sizes: "196x196",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          navigateFallback: "/",
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === "navigate",
              handler: "NetworkFirst",
              options: {
                cacheName: "pages",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
              },
            },
          ],
        },
      }),
    ],
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    componentNames: {
      Form: "vForm",
      Field: "vField",
      ErrorMessage: "vErrorMessage",
    },
  },
  css: ["~/assets/css/main.css", "glightbox/dist/css/glightbox.min.css"],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
    useCdn: process.env.SANITY_STUDIO_USE_CDN,
  },
  mail: {
    message: {
      to: process.env.EMAIL_TO,
    },
    smtp: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  },
  app: {
    head: {
      title: process.env.NUXT_SITE_NAME,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.NUXT_SITE_DESCRIPTION,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/assets/img/favicon.ico" },
      ],
      script: [
        {
          src: "/assets/js/main.js",
          crossorigin: "anonymous",
          tagPosition: "bodyClose",
        },
      ],
    },
  },
  routeRules: {
    "/authors/": {
      redirect: "/authors/martyn-cook",
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_PUBLISHED_URL,
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "usebootstrap",
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "nuxt-mail",
    "@vite-pwa/nuxt",
    "@vee-validate/nuxt",
  ],
  vite: {
    server: {
      allowedHosts: [
        "b5phpis0cqns.share.zrok.io",
        "https://grumpyoldbugger.com",
      ],
    },
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
      title: "Nova",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
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
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: process.env.NUXT_SITE_NAME,
      short_name: process.env.NUXT_SITE_NAME,
      description:
        process.env.NUXT_SITE_DESCRIPTION ||
        "Complete custom CMS/Web-App marketing site solution.",
      categories: ["entertainment", "lifestyle", "shopping"],
      display_override: ["standalone", "window-controls-overlay", "fullscreen"],
      theme_color: process.env.NUXT_SITE_THEME_COLOR,
      orientation: "portrait",
      id: process.env.NUXT_SITE_PUBLISHED_URL,
      start_url: process.env.NUXT_SITE_PUBLISHED_URL,
      shortcuts: [
        {
          name: "Blog",
          url: "/blog",
          description: "A collection of posts and articles from our team",
        },
        {
          name: "Services",
          url: "/services",
          description: "Learn more abobut the services we can provide",
        },
        {
          name: "Testimonials",
          url: "/services#testimonials",
          description: "Learn more abobut the services we can provide",
        },
      ],
      icons: [
        {
          src: "/assets/imgs/logo_192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/assets/imgs/logo_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/assets/imgs/logo_maskable.png",
          sizes: "196x196",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
  },
  routeRules: {
    "/authors/": {
      redirect: "/authors/martyn-cook",
    },
  },
});

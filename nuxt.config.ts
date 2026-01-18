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
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://cdn.sanity.io/ https://images-api.printify.com/ https://www.facebook.com/",
        ],
        "script-src": [
          "'nonce-{{nonce}}'",
          // The nonce allows the root script
          "'strict-dynamic'",
          // All scripts inserted by the root script will also be allowed
          "'unsafe-inline'",
          "'unsafe-eval'",
          "*.facebook.com",
          "*.fbcdn.net",
          "*.facebook.net",
          "cdn.snipcart.com",
        ],
        "frame-ancestors": [
          "'self'",
          "http://localhost:3333",
          "http://localhost:3000",
          "https://cms.webconnectionz.com/",
          "https://cms.podifyplus.app",
          "https://webconnectionz.com/",
        ],
      },
    },
  },
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

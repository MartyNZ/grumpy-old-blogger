// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    directives: {
      include: ["Tooltip", "StyleClass", "UseDialog", "Ripple", "useConfirm"],
    },
    components: {
      include: [
        "Button",
        "InputText",
        "TextArea",
        "BreadCrumb",
        "TabPanel",
        "TabView",
        "Image",
        "Skeleton",
        "ScrollTop",
        "DynamicDialog",
        "Sidebar",
        "Carousel",
        "Divider",
        "Dropdown",
      ],
    },
    importPT: { from: "~/presets/webcnxnz" },
  },
  nitro: {
    routeRules: {
      "/api/**": {
        cors: true,
        headers: {
          "access-control-allow-origin": "*",
        },
      },
    },
  },
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/base.css", "primeicons/primeicons.css"],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  },
  runtimeConfig: {
    public: {
      sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_DATASET,
      },
      titleSeparator: "|",
      siteName: process.env.NUXT_SITE_NAME,
      publicUrl: process.env.NUXT_SITE_PUBLISHED_URL,
    },
    sanity: {
      token: process.env.SANITY_STUDIO_ADMIN_AUTH_TOKEN,
    },
  },
});
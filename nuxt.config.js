export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    trailingSlash: true,
  },

  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },

  modules: ["@nuxt/content", "@nuxtjs/i18n"],

  i18n: {
    // TODO: baseUrl needed for SEO
    baseUrl: "https://example.com",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en-US.js",
      },
      {
        code: "nl",
        name: "Nederlands",
        iso: "nl-BE",
        file: "nl-BE.js",
      },
      {
        code: "fr",
        name: "Français",
        iso: "fr-BE",
        file: "fr-BE.js",
      },
    ],
    lazy: true,
    fallbackLocale: "en",
    langDir: "content/i18n",
  },
};

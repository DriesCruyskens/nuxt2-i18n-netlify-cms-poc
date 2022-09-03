export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    trailingSlash: true,
  },

  head() {
    let i18nHead = {
      htmlAttrs: [],
      meta: [],
      link: [],
    };

    if (this.$nuxtI18nHead != null) {
      i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    }

    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        ...i18nHead.meta,
      ],
      link: [
        ...i18nHead.link,
      ],
    };
  },

  modules: ["@nuxt/content", "@nuxtjs/i18n"],

  i18n: {
    // TODO: baseUrl needed for SEO
    baseUrl: "https://dreamy-brioche-1bb280.netlify.app",
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
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      fallbackLocale: "en",
    },
    vueI18n: {
      fallbackLocale: "en",
    },
  },
};

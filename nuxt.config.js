require("dotenv").config();

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

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
      meta: [...i18nHead.meta],
      link: [...i18nHead.link],
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },

  modules: [
    "@nuxt/content", // https://content.nuxtjs.org/v1/getting-started/introduction
    "@nuxtjs/i18n", // https://i18n.nuxtjs.org/basic-usage  https://kazupon.github.io/vue-i18n/
  ],

  i18n: {
    // TODO: baseUrl needed for SEO
    baseUrl: process.env.BASE_URL,
    locales: [
      // First locale is catch-all for SEO.
      // https://i18n.nuxtjs.org/seo#feature-details
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
    defaultLocale: "en",
    langDir: "content/i18n",
    vueI18n: {
      fallbackLocale: "en",
    },
  },
};

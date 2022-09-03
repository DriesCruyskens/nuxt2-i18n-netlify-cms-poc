export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    trailingSlash: true,
  },

  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        myAttribute: "My Value",
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My Custom Description",
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        ...i18nHead.link,
      ],
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
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

<template>
  <div>
    <h1>title: {{ post }}</h1>
    <!-- <nuxt-content :document="post" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app, error, store }) {
    const currentLocale = app.i18n.locale;
    const locales = app.i18n.locales.map((locale) => locale.code);

    // Getting the right post using the 'where' function and not
    // directly because the filename is the same for all locales.
    const currentPost = (
      await $content(`blog/${currentLocale}`)
        .where({
          customSlug: params.slug,
        })
        .fetch()
        .catch(() => {
          error({ statusCode: 404, message: "Blogpost not found" });
        })
    )[0]; // Take the first one since we get an array. Should only contain 1.

    const postDir = currentPost.dir;

    /**
     * localised dynamic route parameters
     * We are replacing the locales directory and using the .slug (which is the filename)
     * to find the right post in each locale directory.
     *
     * remember:
     * - The 'slug' here is the filename aka the ID. It's the same for all locales.
     * - The customSlug is the actual slug used in the URL and is localised
     *
     * The reduce function is just a dynamic way instead of writing manually:
     * ```
     * {
     *  en: {
     *    slug: (await $content(`${postDir.replace(currentLocale, "en")}/${currentPost.slug}`).fetch()).customSlug,
     *  },
     *  nl: {
     *    slug: (await $content(`${postDir.replace(currentLocale, "nl")}/${currentPost.slug}`).fetch()).customSlug,
     *  },
     *  fr: {
     *    slug: (await $content(`${postDir.replace(currentLocale, "fr")}/${currentPost.slug}`).fetch()).customSlug,
     * }
     * ```
     * 
     * https://i18n.nuxtjs.org/lang-switcher#dynamic-route-parameters
     * https://advancedweb.hu/how-to-use-async-functions-with-array-reduce-in-javascript/
     */
    const i18nRouteParams = await locales.reduce(
      async (map, locale) => ({
        [locale]: {
          slug: (
            await $content(
              // Replace the last part of the path (which should be the currentLocal) with the correct route locale.
              `${postDir.replace(new RegExp(`[^\/]*${currentLocale}$`), locale)}/${
                currentPost.slug
              }`
            ).fetch()
          ).customSlug,
        },
        ...(await map),
      }),
      {}
    );

    await store.dispatch("i18n/setRouteParams", i18nRouteParams);

    return {
      post: currentPost,
    };
  },
  nuxtI18n: {
    paths: {
      en: `/the-blog/:slug`,
      nl: `/de-blog/:slug`,
      fr: `/le-blog/:slug`,
    },
  },
};
</script>
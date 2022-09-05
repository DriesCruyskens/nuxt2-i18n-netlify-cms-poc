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

    const currentPost = (await $content(`blog/${currentLocale}`)
      .where({
        customSlug: params.slug,
      })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Blogpost not found" });
      }))[0]; // Take the first one since we get an array. Should only contain 1.

    const postDir = currentPost.dir;

    // localised dynamic route parameters
    // We are replacing the locales directory and using the .slug (which is the filename)
    // to find the right post in each locale directory.
    // remember: 
    //  - The 'slug' here is the filename aka the ID. It's the same for all locales.
    //  - The customSlug is the actual slug used in the URL and is localised
    await store.dispatch("i18n/setRouteParams", {
      en: {
        slug: (await $content(`${postDir.replace(currentLocale, "en")}/${currentPost.slug}`).fetch()).customSlug,
      },
      nl: {
        slug: (await $content(`${postDir.replace(currentLocale, "nl")}/${currentPost.slug}`).fetch()).customSlug,
      },
      fr: {
        slug: (await $content(`${postDir.replace(currentLocale, "fr")}/${currentPost.slug}`).fetch()).customSlug,
      },
    });

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
<template>
  <h1>Welcome to the blog</h1>
</template>

<script>
export default {
//   async asyncData({ $content, app }) {
//     const currentLang = app.i18n.locale;
//     const posts = await $content("blog").fetch();

//     return {
//       posts,
//     };
//   },

  nuxtI18n: {
    paths: {
      en: "/the-blog",
      fr: "/le-blog",
      es: "/de-blog",
    },
  },
};
</script>
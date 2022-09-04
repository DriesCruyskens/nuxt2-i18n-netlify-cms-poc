<template>
  <div>
    <h1>Welcome to the blog</h1>

    <ul>
      <li v-for="post in posts" :key="post.title">
        <NuxtLink :to="`${localePath('blog')}/${post.slug}`">
          <h3>
            {{ post.title }}
          </h3>
          <p>
            {{ post.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const currentLocale = app.i18n.locale;
    const posts = await $content(`blog/${currentLocale}`).fetch();

    return {
      posts,
    };
  },

  nuxtI18n: {
    paths: {
      en: "/the-blog",
      fr: "/le-blog",
      nl: "/de-blog",
    },
  },
};
</script>
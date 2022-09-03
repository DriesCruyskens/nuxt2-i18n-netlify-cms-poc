<template>
  <nav>
    <nuxt-link :to="localePath('index')">{{ $t("home") }}</nuxt-link>
    <nuxt-link :to="localePath('blog')">{{ $t("blog") }}</nuxt-link>
  </nav>
</template>
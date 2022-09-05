<template>
  <nav>
    <nuxt-link :to="localePath('index')">{{ $t("nav.home") }}</nuxt-link>
    <nuxt-link :to="localePath('blog')">{{ $t("nav.blog") }}</nuxt-link>
  </nav>
</template>
<template>
  <nav>
    <nuxt-link
      v-for="locale in this.$i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
  </nav>
</template>
# Nuxt v2, Netlify CMS, i18n, SSG starter

Minimal proof of concept with:

- Nuxt v2 (i18n was not yet fully ported to v3)
- Full SSG
- i18n strings
- Internationalised dynamic routes, configured in the CMS
- SEO enabled
- Netlify CMS with i18n
- Navigation
- Language switcher

Live demo here: <https://playful-stardust-3a0d46.netlify.app/>

## Get started

### 1. Deploy to Netlify

- Use `npm run generate` as the build command.
- Configure Netlify Identity

### 2. .env

Make .env file...
```shell
cp .env.example .env
```
... and edit the BASE_URL variable to your custom domain or your Netlify assigned free domain.

### 3. Changing locales

- In pages with localised routes:
    ```shell
    nuxtI18n: {
        paths: {
        en: `/the-blog/:slug`,
        nl: `/de-blog/:slug`,
        fr: `/le-blog/:slug`,
        },
    },
    ```
- In `nuxt.config.js`
- In `content/i18n`
- In `static/admin/config.yml`
- Delete or fix `content/blog`

### 4. Important note

The `SLUG` field in Netlify CMS **HAS** to be unique for each entry AND locale.

## References
- <https://playful-stardust-3a0d46.netlify.app/>
- <https://nuxtjs.org/docs/get-started/installation>
- <https://content.nuxtjs.org/v1/getting-started/introduction>
- <https://i18n.nuxtjs.org/basic-usage>  
- <https://kazupon.github.io/vue-i18n/>

## TODO
  - image optimisation
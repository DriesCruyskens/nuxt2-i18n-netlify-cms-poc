# Nuxt v2, Netlify CMS, i18n, SSG starter

Minimal proof of concept with:

- Nuxt v2
- Full SSG
- i18n strings
- Internationalised dynamic routes, configured in the CMS
- SEO enabled
- Netlify CMS with i18n
- Navigation
- Language switcher

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
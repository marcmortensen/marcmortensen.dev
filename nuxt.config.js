export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Marc Mortensen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My personal website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    linkedinProfileUrl: 'https://www.linkedin.com/in/marcmortensen/',
    githubProfileUrl: 'https://github.com/marcmortensen',
    email: 'marcmortensen1994@gmail.com',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/fonts/quicksand.css', '~/assets/css/styles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-touch-events.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/geeogi/nuxt-responsive-loader
    'nuxt-responsive-loader',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],
  modules: [
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    'vue-screen/nuxt',
    'vue-scrollto/nuxt',
  ],

  robots: {
    Sitemap: 'https://marcmortensen.dev/sitemap.xml',
  },

  sitemap: {
    hostname: 'https://marcmortensen.dev',
  },

  screen: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  tailwindcss: {
    jit: true,
    viewer: false,
  },
  pwa: {
    meta: {
      theme_color: '#ffffff',
    },
    manifest: {
      background_color: '#ffffff',
    },
  },
};

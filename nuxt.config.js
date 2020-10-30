export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  router: {
    base: "/vinogradi/"
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Vinogradi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A presentation of different Ana Bella vineyards"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      }
    ]
  },

  generate: {
    fallback: "404.html"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@assets/scss/style.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};

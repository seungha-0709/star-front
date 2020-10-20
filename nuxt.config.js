const nodeExternals = require("webpack-node-externals")
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin")

module.exports = {
  /* Headers of the page */
  head: {
    title: "star-front",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.API_URL || "http://localhost:5000/v1"
  },
  plugins: [
    "~/plugins/vuetify.js",
    "~/plugins/vueMq.js",
    "~/plugins/axios.js",
    "~/plugins/persistedState.js"
  ],
  css: ["~/assets/style/app.styl", "~/assets/style/reset.css"],
  /* Customize the progress bar color */
  loading: { color: "#3B8070" },
  /* Build configuration */
  build: {
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: {
      ignoreOrder: true
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: "pre",
            test: /\.(js|vue)$/,
            loader: "eslint-loader",
            exclude: /(node_modules)/
          },
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /(node_modules)/,
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-optional-chaining"
              ]
            }
          }
        )
      }
      if (process.server) {
        config.externals = [nodeExternals({ whitelist: [/^vuetify/] })]
      }
    }
  }
}

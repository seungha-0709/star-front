import { configure, addDecorator } from "@storybook/vue"

import "vuetify/dist/vuetify.css"
import "../assets/style/reset.css"

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}))

configure(loadStories, module)

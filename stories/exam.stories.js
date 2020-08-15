import { storiesOf } from "@storybook/vue"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

storiesOf("Common", module)
  .add("푸터", () => ({
    components: { Footer },
    template: '  <v-footer color="purple lighten-3" height="80">푸터</v-footer>'
  }))
  .add("헤더", () => ({
    components: { Header },
    template: "<Header />"
  }))

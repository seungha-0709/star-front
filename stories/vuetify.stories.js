import { storiesOf } from "@storybook/vue"
import sample1 from "../components/vuetifySample/sample1.vue"

storiesOf("Tets1", module).add("sample1", () => ({
  components: { sample1 },
  template: "<div>test</div>"
}))

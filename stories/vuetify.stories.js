import { storiesOf } from "@storybook/vue"
import Sample1 from "../components/vuetifySample/Sample1.vue"

storiesOf("Tets1", module).add("sample1", () => ({
  components: { Sample1 },
  template: "<div>test</div>"
}))

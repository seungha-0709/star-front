import { storiesOf } from "@storybook/vue"
import List from "../components/List.vue"

storiesOf("List", module)
  .add("As a component", () => ({
    components: { List },
    template: "<List />"
  }))
  .add("I don't work", () => "<List />")

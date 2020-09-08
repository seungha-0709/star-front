import { storiesOf } from "@storybook/vue"
import btn from "../components/common/btn.vue"
import { withKnobs } from "@storybook/addon-knobs"

storiesOf("btn", module)
  .addDecorator(withKnobs)
  .add("btn-basic", () => ({
    components: { btn },
    template: "<btn>test</btn>"
  }))

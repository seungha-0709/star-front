import { storiesOf } from "@storybook/vue"
import btnBorder from "../components/common/btnBorder.vue"
import btnColor from "../components/common/btnColor.vue"
import { withKnobs } from "@storybook/addon-knobs"

storiesOf("btn", module)
  .addDecorator(withKnobs)
  .add("btn-border", () => ({
    components: { btnBorder },
    template: "<btn-border>test</btn-border>"
  }))
  .add("btn-color", () => ({
    components: { btnColor },
    template: "<btn-color>test</btn-color>"
  }))

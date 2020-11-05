<template>
  <div>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              TOEIC
            </li>
            <li class="glide__slide">
              TOEFL
            </li>
            <li class="glide__slide">
              TEPS
            </li>
            <li class="glide__slide">
              IELTS
            </li>
            <li class="glide__slide">
              SAT
            </li>
            <li class="glide__slide">
              OPIc
            </li>
            <li class="glide__slide">
              TOEIC Speaking
            </li>
            <li class="glide__slide">
              GRE
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Glide from "@glidejs/glide"
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    link: [
      {
        rel: "stylesheet",
        href: "node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      }
    ],
    components: {
      basicButton
    },
    mounted() {
      const input = document.querySelector("#options-drag-threshold-input")

      const glide = new Glide("#options-drag-threshold", {
        dragThreshold: input.value,
        perView: 3
      })

      input.addEventListener("input", (event) => {
        glide.update({
          dragThreshold: event.target.value !== 0 ? event.target.value : false
        })
      })

      glide.mount()
    }
  }
</script>

<style scoped>
  .glide__slides {
      display: flex;
  }
</style>

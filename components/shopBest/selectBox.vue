<template>
  <div class="container">
    <div class="select-box">
      <div class="options-container">
        <div class="option" v-for="(item, i) in selectItemList" :key="i">
          <input type="radio" class="radio" name="category" />
          <label>{{ item }}</label>
        </div>
      </div>
      <div class="selected">
        <span class="selected-option">상품 정렬</span>
        <!-- <span class="drop-down-icon"> -->
        <chevron-down-icon size="1.5x" class="drop-down-icon"></chevron-down-icon>
        <!-- </span> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons"

export default {
  data() {
    return {
      selectItemList: [
        "최신순",
        "가격 낮은 순",
        "가격 높은 순",
        "좋아요 많은 순"
      ]
    }
  },
  components: {
    ChevronDownIcon
  },

  mounted() {
    const selected = document.querySelector(".selected")
    const optionsContainer = document.querySelector(".options-container")
    const optionsList = document.querySelectorAll(".option")
    const dropDown = document.querySelector(".drop-down-icon")
    const selectedOption = document.querySelector(".selected-option")

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active")
      dropDown.classList.toggle("active")
    })

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selectedOption.innerHTML = o.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
        dropDown.classList.remove("active")
      })
    })
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}

.select-box {
  background: #fff;
  display: flex;
  width: 189px;
  position: relative;
  flex-direction: column;
}

.select-box .options-container {
  position: absolute;
  top: 52px;
  right: 0;
  z-index: 100;
  border: 1px solid #dfdfdf;
  background: #fff;
  color: #212121;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 4px;
  overflow: hidden;

  order: 1;
}

.selected {
  width: 100%;
  border-radius: 4px;
  color: #212121;
  position: relative;
  border: 1px solid #dfdfdf;
  margin: 0;
  padding: 0;

  order: 0;
}
.drop-down-icon {
  float: right;
  transition: 0.5s;
  color: #666;
}
.drop-down-icon.active {
  transform: rotate(180deg);
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .option,
.selected {
  padding: 14px 16px;
  cursor: pointer;
}

.select-box .option:hover {
  background: #dfdfdf;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}
</style>
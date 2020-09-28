<template>
  <!-- 상품 정렬용 셀렉트 박스 -->
  <div class="select-box">
    <div class="options-container">
      <div
        class="option"
        @click="onSortChange(item.sort)"
        v-for="(item, i) in sortList"
        :key="i"
      >
        <input type="radio" class="radio" name="category" />
        <label>{{ item.title }}</label>
      </div>
    </div>
    <div class="selected">
      <span class="selected-option"></span>
      <chevron-down-icon size="1.5x" class="drop-down-icon"></chevron-down-icon>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons"

export default {
  props: ["sortList"],
  data() {
    return {}
  },
  components: {
    ChevronDownIcon
  },
  methods: {
    /* 부모 컴포넌트에 셀렉트박스 옵션 값 전달 */
    onSortChange(sortType) {
      this.$emit("listAlign", sortType)
    }
  },

  mounted() {
    const selected = document.querySelector(".selected")
    const optionsContainer = document.querySelector(".options-container")
    const optionsList = document.querySelectorAll(".option")
    const dropDown = document.querySelector(".drop-down-icon")
    const selectedOption = document.querySelector(".selected-option")

    selectedOption.innerHTML = this.sortList[0].title

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active")
      dropDown.classList.toggle("active")
    })

    optionsList.forEach((option) => {
      option.addEventListener("click", () => {
        selectedOption.innerHTML = option.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
        dropDown.classList.remove("active")
      })
    })
  }
}
</script>

<style scoped>
.select-box {
  /* 전체를 감싸는 컨테이너 */
  background: #fff;
  display: flex;
  width: 189px;
  position: relative;
  flex-direction: column;
}
.select-box .options-container {
  /* 클릭하면 나타나는 드롭다운 박스 */
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
}
.selected {
  /* 선택한 옵션이 나타나는 박스 */
  width: 100%;
  border-radius: 4px;
  color: #212121;
  position: relative;
  border: 1px solid #dfdfdf;
  margin: 0;
  padding: 0;
}
.drop-down-icon {
  /* 화살표 아이콘 */
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
  /* option-container와 selected 박스 요소 공통 패딩값 */
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
@media (max-width: 1199px) {
  .select-box {
    width: 100%;
  }
}
</style>

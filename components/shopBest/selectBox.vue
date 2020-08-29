<template>
  <!-- 상품 정렬용 셀렉트 박스 -->
  <div class="select-box">
    <div class="options-container">
      <div
        class="option"
        @click="itemAlign(select.sort)"
        v-for="(select, i) in selectCreteria"
        :key="i"
      >
        <input type="radio" class="radio" name="category" />
        <label>{{ select.title }}</label>
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
  import { shopBestList } from "./shopBestList.js"

  export default {
    props: ["itemList"],
    data() {
      return {
        shopBestList,
        selectCreteria: [
          /* 셀렉트 박스에 들어가는 옵션항목 */
          { title: "최신순", sort: "latest_at" },
          { title: "가격 낮은 순", sort: "low_price" },
          { title: "가격 높은 순", sort: "high_price" },
          { title: "좋아요 많은 순", sort: "high_like" }
        ]
      }
    },
    components: {
      ChevronDownIcon
    },
    methods: {
      /* 상품 정렬 함수 */
      itemAlign(sortType) {
        console.log(this.$props)
        if (sortType === "latest_at") {
          this.$props.itemList.sort((a, b) => {
            return a.index - b.index
          })
        }
        if (sortType === "low_price") {
          this.$props.itemList.sort((a, b) => {
            return (
              parseInt(a.price * a.discountRate, 10) -
              parseInt(b.price * b.discountRate, 10)
            )
          })
        }
        if (sortType === "high_price") {
          this.$props.itemList.sort((a, b) => {
            return (
              parseInt(b.price * b.discountRate, 10) -
              parseInt(a.price * a.discountRate, 10)
            )
          })
        }
        if (sortType === "high_like") {
          this.$props.itemList.sort((a, b) => {
            return b.likes - a.likes
          })
        }
      }
    },

    mounted() {
      const selected = document.querySelector(".selected")
      const optionsContainer = document.querySelector(".options-container")
      const optionsList = document.querySelectorAll(".option")
      const dropDown = document.querySelector(".drop-down-icon")
      const selectedOption = document.querySelector(".selected-option")

      selectedOption.innerHTML = this.selectCreteria[0].title

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
</style>

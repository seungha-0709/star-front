<template>
  <div class="container">
    <div class="select-box">
      <div class="select-box-title"></div>
      <div class="options-container">
        <div class="option" v-for="(item, i) in selectItemList" :key="i">
          <input type="radio" class="radio" id="automobiles" name="category" />
          <label for="automobiles">{{ item }}</label>
        </div>
      </div>
      <div class="selected">상품 정렬</div>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    const selected = document.querySelector(".selected")
    const optionsContainer = document.querySelector(".options-container")
    const optionsList = document.querySelectorAll(".option")

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active")
    })

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
      })
    })
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  position: relative;
}

.select-box {
  position: absolute;
  background: #fff;
  z-index: 100;
  display: flex;
  width: 189px;

  flex-direction: column;
}

.select-box .options-container {
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
  border-radius: 4px;
  color: #212121;
  position: relative;
  border: 1px solid #dfdfdf;

  order: 0;
}

.selected::after {
  content: "";
  background-size: contain;
  background-repeat: no-repeat;

  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 5px;

  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box .option,
.selected {
  padding: 12px 24px;
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
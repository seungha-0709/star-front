<template>
  <div>
    <div class="top-banner"></div>
    <div class="shop-best-item-container">
      <div class="shop-best-item-top">
        <span class="shop-best-item-sub-title">{{ `${limit}개의 강의` }}</span>
        <div class="select-box">
          <!-- 셀렉트 박스 시작 -->
          <div class="select-box">
            <div class="options-container">
              <div class="option" @click="test(selectItem.sort)" v-for="(selectItem, i) in selectItemList" v-bind:key="i"  >
                <input type="radio" class="radio" name="category" />
                <label>{{ selectItem.title }}</label>
              </div>

              <!-- <div class="option" @click="latestList()">
                <input type="radio" class="radio" name="category" />
                <label>최신순</label>
              </div>

              <div class="option" @click="lowestPriceList()">
                <input type="radio" class="radio" name="category" />
                <label>정가 낮은 순</label>
              </div>

              <div class="option" @click="highestPriceList()">
                <input type="radio" class="radio" name="category" />
                <label>정가 높은 순</label>
              </div> -->

            </div>
            <div class="selected">
              <span class="selected-option"></span>
              <chevron-down-icon
                size="1.5x"
                class="drop-down-icon"
              ></chevron-down-icon>
            </div>
          </div>
          <!-- 셀렉트 박스 끝 -->
        </div>
      </div>
      <div class="shop-best-item-wrap">
        <shopBestItem
          v-bind:propsData="item"
          v-for="(item, i) in computedBestList"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { shopBestList } from "../../components/shopBest/shopBestList.js"
  import shopBestItem from "../../components/shopBest/shopBestItem.vue"
  import { ChevronDownIcon } from "vue-feather-icons"

  export default {
    data() {
      return {
        shopBestList,
        selectItemList: [
          { title:"최신순", sort:"last_at" },
          { title:"가격 낮은 순", sort:"low_price" },
          { title:"가격 높은 순", sort:"high_price" },
          { title:"좋아요 많은 순", sort:"high_like" }

          // "최신순",
          // "가격 낮은 순",
          // "가격 높은 순",
          // "좋아요 많은 순"
        ],
        limit: 9
      }
    },
    computed: {
      computedBestList() {
        return this.shopBestList.slice(0, this.limit)
      }
    },
    components: {
      shopBestItem,
      ChevronDownIcon
    },
    methods: {
      /* 데이터 정렬 방식 */
      latestList() {
        this.shopBestList.sort((a, b) => {
          return a.index < b.index ? -1 : 1
        })
        console.log(this.shopBestList)
      },
      lowestPriceList() {
        this.shopBestList.sort((a, b) => {
          return a.price < b.price ? -1 : 1
        })
        console.log(this.shopBestList)
      },
      highestPriceList() {
        this.shopBestList.sort((a, b) => {
          return a.price < b.price ? 1 : -1
        })
        console.log(this.shopBestList)
      },
      test(sortType) {
        if(sortType === 'last_at') {
          this.shopBestList.sort((a, b) => {
            return a.index < b.index ? -1 : 1
          })
          console.log(this.shopBestList)
        }
        if(sortType === 'low_price') {
          this.shopBestList.sort((a, b) => {
            return a.price < b.price ? -1 : 1
          })
          console.log(this.shopBestList)
        }
        if(sortType === 'high_price') {
          this.shopBestList.sort((a, b) => {
            return a.price < b.price ? 1 : -1
          })
          console.log(this.shopBestList)
        }
        
        // console.log('test', sortType)
        // switch (sortType) {
        // case 'last_at':
        //   this.latestList()
        //   break
        // case 'low_price':
        //   this.lowestPriceList()
        //   break
        // case 'high_price':
        //   this.highestPriceList()
        //   break
        // default:
        //   break
        // }
      }
    },
    mounted() {
      /* 셀렉트 박스 스크립트 */
      const selected = document.querySelector(".selected")
      const optionsContainer = document.querySelector(".options-container")
      const optionsList = document.querySelectorAll(".option")
      const dropDown = document.querySelector(".drop-down-icon")
      const selectedOption = document.querySelector(".selected-option")
      selectedOption.innerHTML = this.selectItemList[0].title
    
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
  .top-banner {
    width: 100%;
    background-color: #000;
    height: 300px;
  }
  .shop-best-item-container {
    width: 1200px;
    margin: 48px auto 48px auto;
  }
  .shop-best-item-top {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .shop-best-item-sub-title {
    align-self: center;
    font-size: 18px;
    color: #212121;
  }
  .select-box {
    padding: 0;
  }
  /* 셀렉트 박스 시작----------------------------------------- */
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
  /* 셀렉트 박스 끝-----------------------------------------*/

  .shop-best-item-wrap {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0px auto 20px auto;
    flex-wrap: wrap;
  }
</style>

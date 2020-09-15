<template>
  <div class="content">
    <div class="rectangle">
      <h3 class="cart-name">장바구니</h3>
      <p class="cart-count">
        {{ `총 ${cartLists.length.toLocaleString()}개` }}
      </p>
      <div>
        <table class="cart-table">
          <thead>
            <tr class="table-header">
              <th class="tb-checkbox">
                <div class="checkbox-item">
                  <label>
                    <input
                      type="checkbox"
                      v-model="selectAll"
                      v-on:click="selectAllItems"
                    />
                    <check-button :value="selectAll" />
                  </label>
                  <p class="select-all">전체선택</p>
                </div>
              </th>
              <th class="th-title">상품명</th>
              <th class="th-size">수량</th>
              <th class="th-size">할인금액</th>
              <th class="th-size">할인적용금액</th>
              <th class="th-size">배송비</th>
            </tr>
          </thead>
          <cart-items
            :cart-lists="cartLists"
            :select-all="selectAll"
            :select="select"
          />
        </table>
        <div v-if="cartLists.length === 0" class="empty-cart">
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <basic-button
            text="쇼핑하러 가기"
            backgroundColor="#ffffff"
            color="#1673e6"
            bordercolor="#1673e6"
          />
        </div>
        <div class="select-delete">
          <button
            v-if="cartLists.length !== 0"
            v-on:click="removeItem"
            class="select-delete-btn"
          >
            선택삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex"

  import cartItems from "./cartItems.vue"
  // 장바구니에 담기는 상품 테이블
  import checkButton from "../common/checkButton"
  // 장바구니 체크박스 체크버튼 아이콘
  import basicButton from "../common/basicButton"
  // 버튼 공통 컴포넌트, 현 컴포넌트에서는 카트 비었을 경우 쇼핑하러 가기 버튼

  export default {
    props: ["cart-lists"],
    data() {
      return {
        selectAll: false,
        select: []
      }
    },
    components: {
      "check-button": checkButton,
      "cart-items": cartItems,
      "basic-button": basicButton
    },
    computed: {
      filteredData() {
        // 선택된 리스트의 id를 가지고 전체 cartLists에서 해당 id를 가지고있는 데이터만 찾음.
        const selectList = this.select.map((data) =>
          this.cartLists.find((list) => list.id === data)
        )
        // filter함수 이용하여 selectItem의 data가 cartLists에서 포함하지 않는것만 반환함.
        return this.cartLists.filter((list) => !selectList.includes(list))
      }
    },
    methods: {
      ...mapActions(["AC_CART_LISTS"]),
      removeItem() {
        if (this.select.length) {
          const payload = this.filteredData
          this.AC_CART_LISTS(payload)
          this.select = []
        }
      },
      selectAllItems() {
        if (this.selectAll) {
          this.selectAll = false
          this.select = []
        } else {
          this.selectAll = true
          this.select = []
          for (let index = 0; index < this.cartLists.length; index++) {
            this.select.push(this.cartLists[index].id)
          }
        }
      }
    },
    updated() {
      if (this.cartLists.length === 0) return (this.selectAll = false)
      this.selectAll = this.select.length === this.cartLists.length
      this.$emit("sendResultData", this.select)
    }
  }
</script>
<style scoped>
  .content {
    width: 100%;
    margin: 0 auto;
    font-family: SpoqaHanSans;
    font-weight: normal;
    color: #212121;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    background-color: #ffffff;
  }
  .rectangle {
    margin-top: 32px;
    font-size: 14px;
  }
  .cart-name {
    text-align: left;
    margin: 32px 0 16px 40px;
    font-size: 24px;
    font-weight: bold;
  }
  .cart-count {
    text-align: left;
    margin: 0 0 17px 40px;
  }
  .cart-table {
    width: 1120px;
    margin: 0 40px;
  }
  .cart-table th {
    text-align: center;
  }
  .table-header {
    height: 42px;
    border-top: solid 1px #666666;
    font-size: 15px;
    text-align: center;
  }
  .cart-table thead tr {
    width: 100%;
    border-bottom: solid 1px #ececec;
    vertical-align: middle;
  }
  .select-all {
    font-size: 14px;
    color: #666666;
    margin-left: 8px;
    text-align: center;
  }
  .checkbox-item {
    display: flex;
  }
  .tb-checkbox {
    width: 114px;
    padding: 11px 8px 11px 24px;
  }
  .tb-checkbox label input[type="checkbox"] {
    display: none;
  }
  .th-size {
    width: 140px;
    padding: 10px 0 10px;
  }
  .empty-cart {
    margin: 0 auto;
    text-align: center;
  }
  .empty-cart p {
    width: 217px;
    height: 24px;
    text-align: center;
    vertical-align: middle;
    color: #666666;
    font-size: 16px;
    margin: 98px auto;
  }
  .select-delete {
    text-align: left;
    margin-top: 16px;
  }
  .select-delete-btn {
    width: 84px;
    height: 42px;
    margin: 0 0 48px 40px;
    border-radius: 4px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
  }
</style>

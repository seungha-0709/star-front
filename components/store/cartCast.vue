<template>
  <div class="content">
    <div class="rectangle">
      <h3 class="cart-name">장바구니</h3>
      <p class="cart-count">{{ `총 ${cartLists.length.toLocaleString()}개` }}</p>
      <div>
        <table class="cart-table">
          <thead>
            <tr class="table-header">
              <th class="tb-checkbox">
                <div class="checkbox-item">
                  <label>
                    <input type="checkbox" v-model="selectAll" v-on:click="selectAllItems" />
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
        </table>
        <cart-items :cart-lists="cartLists" :select-all="selectAll" :select="select" />
        <div class="select-delete">
          <button v-on:click="removeItem" class="select-delete-btn">선택삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItems from "./cartItems.vue"
import checkButton from "../common/checkButton"

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
    "cart-items": cartItems
  },
  methods: {
    removeItem() {
      if (this.select.length) {
        for (let index = 0; index < this.select.length; index++) {
          const selectRemove = this.select[this.select.length - index - 1]
          this.cartLists.splice(selectRemove, 1)
        }
      }
    },
    selectAllItems() {
      if (this.selectAll) {
        this.selectAll = false
        this.select = []
      } else {
        this.selectAll = true
        // this.select = this.cartLists
        this.select = []
        for (let index = 0; index < this.cartLists.length; index++) {
          this.select.push(index)
        }
      }
    }
  },
  updated() {
    if (this.select.length === this.cartLists.length) {
      this.selectAll = true
    }
    if (this.select.length !== this.cartLists.length) {
      this.selectAll = false
    }
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
  width: 89px;
  height: 36px;
  margin: 32px 0 16px 40px;
  font-size: 24px;
  font-weight: bold;
}
.cart-count {
  width: 38px;
  height: 20px;
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

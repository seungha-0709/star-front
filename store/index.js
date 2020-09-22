import orderListModal from "./modules/orderListModal"

// 값을 저장하는 객체
export const state = () => ({
  cartLists: []
})

// state의 값을 반환하는 함수, computed 속성
export const getters = {
  GE_CART_LISTS: (state) => state.cartLists
}

// state의 값 변경하는 함수, setter
export const mutations = {
  MU_CART_LISTS(state, payload) {
    state.cartLists = payload
  },
  MU_CART_PRODUCT_AMOUNT_UP(state, payload) {
    state.cartLists[payload].amount += 1
  },
  MU_CART_PRODUCT_AMOUNT_DOWN(state, payload) {
    state.cartLists[payload].amount -= 1
  }
}

// mutations에 값 보내는 함수
export const actions = {
  async AC_CART_LISTS({ commit }, payload) {
    await commit("MU_CART_LISTS", payload)
  },
  async AC_CART_PRODUCT_AMOUNT_UP({ commit }, payload) {
    await commit("MU_CART_PRODUCT_AMOUNT_UP", payload)
  },
  async AC_CART_PRODUCT_AMOUNT_DOWN({ commit }, payload) {
    await commit("MU_CART_PRODUCT_AMOUNT_DOWN", payload)
  }
}

export default {
  modules: {
    orderListModal
  }
}

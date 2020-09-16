export default {
  namespaced: true,
  state: () => ({
    modalDisplay: true,
    modalOrderOpen: false,
    modalReceiptOpen: false,
    modalCancelOpen: false,
    modalQnaOpen: false
  }),
  getters: {},
  mutations: {
    modalOff(state) {
      state.modalDisplay = false
    },
    modalOn(state, type) {
      if (type === "order") state.modalOrderOpen = true
      if (type === "receipt") state.modalReceiptOpen = true
      if (type === "cancel") state.modalCancelOpen = true
      if (type === "qna") state.modalQnaOpen = true
    }
  },
  actions: {}
}

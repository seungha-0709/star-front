import {
  modalInfoCancel,
  modalInfoOrder,
  modalInfoReceipt,
  modalInfoQna
} from "../../components/modal/modal.js"

export default {
  namespaced: true,
  state: () => ({
    modalInfoCancel,
    modalInfoOrder,
    modalInfoReceipt,
    modalInfoQna,
    modalTypeOpen: [
      { type: "order", onoff: false },
      { type: "receipt", onoff: false },
      { type: "cancel", onoff: false },
      { type: "qna", onoff: false }
    ]
  }),
  getters: {},
  mutations: {
    modalOff(state, type) {
      const modalType = ["order", "receipt", "cancel", "qna"]
      const index = modalType.indexOf(type)
      if (index !== -1) state.modalTypeOpen[index].onoff = false
    },
    modalOn(state, type) {
      const modalType = ["order", "receipt", "cancel", "qna"]
      const index = modalType.indexOf(type)
      if (index !== -1) state.modalTypeOpen[index].onoff = true
    }
  },
  actions: {}
}

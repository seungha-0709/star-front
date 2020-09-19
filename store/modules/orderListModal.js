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
      if (type === "order") state.modalTypeOpen[0].onoff = false
      if (type === "receipt") state.modalTypeOpen[1].onoff = false
      if (type === "cancel") state.modalTypeOpen[2].onoff = false
      if (type === "qna") state.modalTypeOpen[3].onoff = false
    },
    modalOn(state, type) {
      if (type === "order") state.modalTypeOpen[0].onoff = true
      if (type === "receipt") state.modalTypeOpen[1].onoff = true
      if (type === "cancel") state.modalTypeOpen[2].onoff = true
      if (type === "qna") state.modalTypeOpen[3].onoff = true
    }
  },
  actions: {}
}

import {
  modalInfoCancel,
  modalInfoOrder,
  modalInfoReceipt,
  modalInfoQna,
  modalInfoCoupon
} from "../../assets/data/shop/modal.js"

export default {
  namespaced: true,
  state: () => ({
    modalInfoCancel,
    modalInfoOrder,
    modalInfoReceipt,
    modalInfoQna,
    modalInfoCoupon,
    modalTypeOpen: {
      order: { type: "order", onoff: false },
      receipt: { type: "receipt", onoff: false },
      cancel: { type: "cancel", onoff: false },
      qna: { type: "qna", onoff: false },
      coupon: { type: "coupon", onoff: false }
    }
  }),
  getters: {},
  mutations: {
    modalOnOff(state, type) {
      const modalType = ["order", "receipt", "cancel", "qna", "coupon"]
      const index = modalType.indexOf(type)
      if (index !== -1)
        state.modalTypeOpen[type].onoff = !state.modalTypeOpen[type].onoff
    }
  },
  actions: {}
}

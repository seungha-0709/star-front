/** 주문 상세정보 모달에 들어가는 정보 */

/** 주문 및 결제 정보 */
export const orderInfo = {
  paymentIdx: "C200213981",
  orderIdx: "O20086544",
  orderDate: "2020년 03월 17일",
  goodsIdx: "S50428760",
  name: "상품명 상품명 상품명 상품명",
  price: 139500,
  ordernum: 2
}

/** 배송 정보 */
export const shippingInfo = {
  online: true,
  address: "",
  phone: "01023459876",
  price: ""
}

/** 지불 정보  */
export const payInfo = {
  creditCard: true,
  paymentPlan: true,
  cash: false,
  creditCardName: "카카오뱅크카드",
  paymentPlanMonth: "6개월",
  paymentStatus: "결제완료"
}

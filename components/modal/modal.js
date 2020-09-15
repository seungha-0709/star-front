/** 각 모달의 헤더, 푸터에 관한 정보 */

/** 취소/환불 신청 모달 */
export const modalInfoCancel = {
  type: "cancel",
  title: "취소/환불 신청",
  subTitle:
    "환불/취소 요청 시 먼저, 다음의 내용으로 접수하여 주세요.\n세부사항에 대한 확인이 필요합니다.",
  isDimmed: true, // 배경 어둡게 하기 여부
  isClose: true, // 닫기 버튼 표시 여부
  isDivider: true, // 제목과 내용의 구분선 여부
  // 모달 푸터에 들어갈 텍스트
  bottomText:
    "접수 내용을 확인하는 대로 스토어 고객센터를 통해 개별 연락 드리겠습니다\n(영업시간기준: 평일 10시~18시)",
  footerBtn1: false, // 푸터에 버튼이 한 개일 때
  footerBtn2: true, // 푸터에 버튼이 두 개일 때
  bottomBtn: [
    {
      width: 180,
      color: "#212121",
      borderColor: "#dfdfdf",
      backgroundColor: "#fff",
      title: "취소",
      style: "normalWhite"
    },
    {
      width: 180,
      color: "#fff",
      backgroundColor: "#1673e6",
      title: "접수하기",
      style: "normalBlue"
    }
  ]
}

/** 주문 상세정보 모달 */
export const modalInfoOrder = {
  type: "order",
  title: "주문 상세정보",
  subTitle: null,
  isDimmed: true,
  isClose: true,
  isDivider: false,
  bottomText: null,
  footerBtn1: false,
  footerBtn2: false,
  bottomBtn: []
}

/** 고객센터 페이지의 "1:1 온라인 문의하기" 모달 팝업 */
export const modalInfoQna = {
  type: "qna",
  title: "별별스토어 1:1 문의",
  subTitle: null,
  isDimmed: true,
  isClose: true,
  isDivider: true,
  bottomText: null,
  footerBtn1: true,
  footerBtn2: false,
  bottomBtn: [
    {
      width: 240,
      color: "#fff",
      backgroundColor: "#1673e6",
      title: "문의하기",
      style: "normalWhite"
    }
  ]
}

/** 구매 영수증 모달 */
export const modalInfoReceipt = {
  type: "receipt",
  title: "구매 영수증",
  subTitle: null,
  isDimmed: true,
  isClose: true,
  isDivider: true,
  bottomText: null,
  footerBtn1: false,
  footerBtn2: false,
  bottomBtn: []
}

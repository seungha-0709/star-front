export const myClassInfo = {
  indexType: "myClass",
  title: "내 강의 보기",
  subTitle: "별별선생이 진행하는 클래스 수업 리스트만 노출됩니다.",
  isAllAmount: true,
  allAmount: 15,
  removeAllBtn: false,
  writeBtn: false,
  tableHeaderTitle: ["No.", "수강신청일", "강의(상품)명", "상태"],
  tableHeaderCols: ["id", "date", "title", "status"],
  tableColumnWidth: [60, 140, 504, 140],
  pagination: true
}

export const myQnaInfo = {
  indexType: "myQna",
  title: "스토어 1:1 문의",
  subTitle: "쇼핑몰 이용에 궁금하신 사항을 남겨주세요.",
  isAllAmount: true,
  allAmount: 20,
  removeAllBtn: true,
  writeBtn: true,
  tableHeaderTitle: ["No.", "구분", "제목", "접수일시", "상태"],
  pagination: true
}

export const myNoticeInfo = {
  indexType: "myNotice",
  title: "알림",
  subTitle: "",
  isAllAmount: true,
  allAmount: 525,
  removeAllBtn: true,
  writeBtn: false,
  tableHeaderTitle: ["No.", "수신일시", "제목/내용", "발신자", "삭제"],
  tableHeaderCols: ["id", "date", "title", "sender", "delete"],
  tableColumnWidth: [60, 140, 364, 140, 140],
  pagination: true
}

export const myOrderListInfo = {
  indexType: "myOrderList",
  title: "거래내역",
  subTitle: "",
  isAllAmount: false,
  isAllAmountOrder: true,
  allAmount: 13,
  removeAllBtn: false,
  writeBtn: false,
  tableHeaderTitle: ["결제일/결제번호/상품명", "결제금액", "상태"],
  tableColumnWidth: [564, 140, 140],
  pagination: true
}

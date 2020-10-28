<template>
  <div class="join-term-page">
    <div class="join-term-title">
      <basic-join-title
        title="회원가입"
        subtitle="약관동의"
        description="서비스 이용 약관 및 개인정보수집, 정보제공활동에 동의해 주세요."
      />
    </div>
    <div class="join-term-group">
      <div class="join-term-all">
        <join-term-all
          :term-all-agree="termAllAgree"
          @check-all="handleCheckAll"
        />
      </div>
      <div
        class="join-term-box"
        v-for="(item, index) in joinTermInfo"
        :key="index"
      >
        <join-term-box
          :term-agree="termAllAgree[index]"
          :title="item.title"
          :context="item.context"
          @check="handleCheck(index, termAllAgree[index])"
        />
      </div>
      <div class="alert" v-if="!termAllAgree[2]">
        <p>
          미동의 시 별별선생이 제공하는 다양한 학원/강사진의 학습 정보 전달이
          제한될 수 있습니다.
        </p>
      </div>
    </div>

    <div class="button">
      <basic-button
        text="동의하기"
        borderRadius="31px"
        background-color="#3f60cc"
        fontWeight="normal"
      />
    </div>
    <copy-right class="copyright" />
  </div>
</template>
<script>
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle.vue"
  import joinTermAll from "../../../components/join/joinTermAll.vue"
  import joinTermBox from "../../../components/join/joinTermBox.vue"
  import { joinTermInfo } from "../../../assets/data/join/joinTerm.js"
  import basicButton from "../../../components/common/basicButton.vue"
  import copyright from "../../../components/common/copyright"

  export default {
    layout: "contentOnly",
    data() {
      return {
        joinTermInfo,
        termAllAgree: [false, false, false]
      }
    },
    components: {
      "basic-join-title": basicJoinTitle,
      "join-term-all": joinTermAll,
      "join-term-box": joinTermBox,
      "basic-button": basicButton,
      "copy-right": copyright
    },
    methods: {
      handleCheckAll() {
        const allCheckState = this.termAllAgree.every((item) => item === true)
          ? [false, false, false]
          : [true, true, true]
        return (this.termAllAgree = allCheckState)
      },
      handleCheck(index, value) {
        return this.termAllAgree.splice(index, 1, !value)
      }
    }
  }
</script>
<style scoped>
  .join-term-page {
    margin: 0 auto;
    height: 100%;
  }
  .join-term-page .join-term-title {
    margin-top: 85px;
  }
  .join-term-page .join-term-group {
    width: 600px;
    margin: 40px auto 0;
  }
  .join-term-page .join-term-group .alert {
    width: 600px;
    font-size: 14px;
    margin: 16px auto 0;
  }
  .join-term-page .join-term-group .alert p {
    text-align: left;
    color: #ff3366;
  }
  .join-term-page .button {
    text-align: center;
    margin: 32px 0 96px;
  }
  .join-term-page .copyright {
    margin-bottom: 105px;
  }
</style>

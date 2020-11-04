<template>
  <div class="background">
    <header class="tab">
      <tab-button
        @tab-click="isTabActive"
        :tabState="firstTabState"
        :tabStyles="tabStyle[0]"
      />
      <tab-button
        @tab-click="isTabActive"
        :tabState="secondTabState"
        :tabStyles="tabStyle[1]"
      />
    </header>
    <main>
      <section v-if="firstTabState === true">
        강사리뷰
      </section>
      <section class="transfer" v-if="secondTabState === true">
        <div class="transfer-header">
          <h2>지금 뜨는 리뷰</h2>
          <span>총 누적 리뷰 <strong>????</strong>개</span>
        </div>
        <div class="transfer-info-section">
          <div class="left-side">
            <div class="photo-wrap">
              <div class="photo-image"></div>
              <div class="photo-image"></div>
            </div>
            <div class="name-wrap">
              <div class="name"><strong>오로로</strong><br />가나다 어학원</div>
              <div class="name"><strong>우루루</strong><br />마바사 어학원</div>
            </div>
          </div>
          <div class="right-side"></div>
        </div>
        <div class="transfer-review">
          <h2>제목제목제목제목제목제목</h2>
          <sticky-label
            width="155px"
            height="24px"
            title="선생님을 왜 바꾸셨나요?"
            backgroundColor="#c1c1c1"
          />
          <sticky-label
            width="72px"
            height="24px"
            title="Before"
            backgroundColor="#c1c1c1"
          />
          <sticky-label
            width="62px"
            height="24px"
            title="After"
            backgroundColor="#5d7ee9"
          />

          <likes number="123" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import tabButton from "./tabButton.vue"
  import likes from "./likes.vue"
  import stickyLabel from "../../components/common/stickyLabel.vue"

  export default {
    data() {
      return {
        tabStyle: [
          {
            title: "강사리뷰",
            width: "236px",
            height: "62px"
          },
          {
            title: "환승후기",
            width: "234px",
            height: "62px"
          }
        ],
        firstTabState: false,
        secondTabState: true
      }
    },
    components: {
      tabButton,
      likes,
      stickyLabel
    },
    methods: {
      isTabActive() {
        this.firstTabState = !this.firstTabState
        this.secondTabState = !this.secondTabState
      }
    }
  }
</script>

<style scoped>
  .background {
    width: 472px;
    height: 607px;
    border: 1px solid #dfdfdf;
    background: #fff;
    margin: 0px 4px 8px 4px;
  }
  .tab {
    display: flex;
  }

  /** 환승리뷰 */
  section.transfer {
    padding: 16px 32px 32px 32px;
    box-sizing: border-box;
  }
  .transfer-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 2px;
    box-sizing: border-box;
  }
  .transfer-header h2 {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
  }
  .transfer-header span {
    font-size: 14px;
    color: #212121;
    font-weight: normal;
  }
  .transfer-header strong {
    font-size: 14px;
    font-weight: normal;
    color: #3f60cc;
  }
  .transfer-info-section {
    margin-top: 16px;
    height: 107px;
    display: flex;
    justify-content: space-between;
  }
  .transfer-info-section .left-side {
    width: 288px;
  }
  .transfer-info-section .right-side {
    width: 120px;
    border-left: 1px solid #dfdfdf;
  }
  .transfer-info-section .photo-wrap {
    display: flex;
    justify-content: space-around;
  }
  .transfer-info-section .photo-image {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #f6f8fc;
  }
  .transfer-info-section .name-wrap {
    display: flex;
    justify-content: space-around;
  }
  .transfer-info-section .name strong {
    font-weight: bold;
    font-size: 16px;
    color: #212121;
    text-align: center;
  }
  .transfer-info-section .name {
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .transfer-review {
    margin-top: 8px;
    border-top: 1px solid #dfdfdf;
  }
  .transfer-review h2 {
    font-size: 18px;
    color: #212121;
    font-weight: bold;
    margin-top: 13px;
    margin-bottom: 14px;
  }
</style>

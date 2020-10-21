<template>
  <div>
    <div class="top-wrap">
      <div class="top-left">
        <div><user-icon size="2x" color="#dfdfdf" /></div>
        <div class="find-others">
          선생님의 <br />
          다른 강의 보기
        </div>
        <div class="left-button-position">
          <basic-button
            width="105px"
            height="42px"
            borderRadius="4px"
            backgroundColor="#5d7ee9"
            fontSize="14px"
            :text="level[0].title"
          />
        </div>
        <div class="right-button-position">
          <basic-button
            width="105px"
            height="42px"
            borderRadius="4px"
            backgroundColor="#fff"
            borderColor="#dfdfdf"
            color="#212121"
            fontSize="14px"
            fontWeight="normal"
            :text="level[1].title"
          />
        </div>
      </div>
      <div class="top-right">
        <div class="window-icon">
          <img
            src="/img/teacher/combined-shape.png"
            alt="강의 과목 전체 보기"
          />
        </div>
        <div class="vertical-line"></div>
        <div class="sns-icons">
          <div class="kakao">
            <img src="/img/teacher/kakao@2x.jpg" alt="kakaotalk" />
          </div>
          <div class="facebook">
            <facebook-icon size="1.5x" class="facebook-icon" />
          </div>
          <div class="link">
            <link-icon size="1.5x" class="link-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { UserIcon, FacebookIcon, LinkIcon } from "vue-feather-icons"
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    data() {
      return {
        level: [
          {
            title: "Toeic RC"
          },
          {
            title: "Toeic LC"
          }
        ]
      }
    },
    components: {
      UserIcon,
      FacebookIcon,
      LinkIcon,
      basicButton
    }
  }
</script>

<style scoped>
  .top-wrap {
    width: 1200px;
    height: 64px;
    border: 1px solid #dfdfdf;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-left {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }
  .find-others {
    margin-left: 16px;
    font-size: 14px;
    color: #666;
    line-height: 18px;
    letter-spacing: -0.6px;
  }
  .left-button-position {
    margin-left: 48px;
    margin-right: 12px;
  }
  .top-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .window-icon {
    width: 42px;
    height: 42px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vertical-line {
    width: 0;
    height: 42px;
    border-left: 1px solid #dfdfdf;
    margin: 0 0 0 24px;
  }
  .sns-icons {
    display: flex;
    align-items: center;
  }
  .kakao,
  .facebook,
  .link {
    display: flex;
    align-items: center;
  }
  .kakao > img {
    width: 20px;
    height: 20px;
    margin: 0 12px 0 24px;
  }
  .facebook-icon {
    fill: currentColor;
    color: #c1c1c1;
    margin: 0 12px;
    width: 20px;
    height: 20px;
  }
  .link-icon {
    color: #c1c1c1;
    margin: 0 12px;
    width: 20px;
    height: 20px;
  }
</style>

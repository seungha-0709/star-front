<template>
  <div class="join-information">
    <div class="join-email">
      <join-verification-info
        name="아이디 (이메일 주소)"
        width="367px"
        type="email"
        placeholder="아이디로 사용될 이메일 주소를 입력해 주세요."
        v-model="email"
      />
      <basic-button
        class="button"
        text="중복확인"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#dfdfdf"
        borderRadius="0px"
        color="#212121"
        @event="doubleCheckEmail"
      />
    </div>
    <div class="join-password">
      <join-verification-info
        name="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요 (4~16자리)"
        v-model="password"
      />
      <join-verification-info
        type="password"
        placeholder="비밀번호를 다시 한번 확인 입력해 주세요"
        v-model="password"
      />
    </div>
    <div class="join-nickname">
      <join-verification-info
        name="닉네임"
        width="367px"
        type="text"
        placeholder="사용하실 닉네임을 입력해 주세요 (2~10자, 변경불가)"
        v-model="nickname"
      />
      <basic-button
        class="button"
        text="중복확인"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#dfdfdf"
        borderRadius="0px"
        color="#212121"
        @event="doubleCheckEmail"
      />
    </div>
    <div class="join-birth">
      <div class="birth-year">
        <p>출생년도 선택</p>
        <chevron-down-icon id="year" class="year-drop" />
        <!-- <datalist id="year">
          <option value="1900" />
          <option value="1901" />
        </datalist> -->
      </div>
      <div class="birth-gender">
        <button
          :click="selectGenter(male)"
          :class="{ active: (this.selectedGender = male) }"
          class="male"
        >
          남성
        </button>
        <button
          :click="selectGenter(female)"
          :class="{ active: (this.selectedGender = female) }"
          class="female"
        >
          여성
        </button>
        <!-- <basic-button
          class="select-male"
          :class="{ active: (this.selectedGender = male) }"
          text="남성"
          width="100px"
          background-color="#ffffff"
          fontWeight="400"
          borderColor="#dfdfdf"
          color="#666666"
          borderRadius="0px"
          @event="selectGender(male)"
        />
        <basic-button
          class="select-female"
          :class="{ active: (this.selectedGender = female) }"
          text="여성"
          width="100px"
          background-color="#ffffff"
          fontWeight="400"
          borderColor="#dfdfdf"
          color="#666666"
          borderRadius="0px"
          @event="selectGender(female)"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
  import joinVerificationInfo from "./joinVerificationInfo"
  import basicButton from "../../components/common/basicButton.vue"
  import { ChevronDownIcon } from "vue-feather-icons"
  export default {
    data() {
      return {
        email: "",
        password: "",
        passwordCheck: "",
        nickname: "",
        selectedGender: "male"
      }
    },
    components: {
      "join-verification-info": joinVerificationInfo,
      "basic-button": basicButton,
      ChevronDownIcon
    },
    methods: {
      doubleCheckEmail() {},
      selectGender(gender) {
        if (gender === "male") {
          this.selectedGender = "male"
        } else {
          this.selectedGender = "female"
        }
      }
    }
  }
</script>
<style scoped>
  .join-information {
    margin: 0 auto;
    padding: 40px;
    width: 600px;
    height: 528px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    text-align: center;
    vertical-align: middle;
  }
  .join-information .join-email {
    display: flex;
  }
  .join-information .join-email .button,
  .join-information .join-nickname .button {
    margin: 21px 0 0 16px;
  }
  .join-information .join-password {
    margin-top: 16px;
  }
  .join-information .join-nickname {
    display: flex;
    margin-top: 32px;
  }
  .join-information .join-birth {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }
  .join-information .join-birth .birth-year {
    width: 137px;
    margin-top: 14px;
    border-bottom: solid 1px #dfdfdf;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .join-information .join-birth .birth-year .year-drop {
    display: block;
    cursor: pointer;
    color: #8f8f8f;
  }
  .join-information .join-birth .birth-gender .select-male {
    margin-right: -5px;
  }
  .join-information .join-birth .birth-gender .select-male.active,
  .join-information .join-birth .birth-gender .select-female.active {
    color: #3f60cc;
    border-color: #3f60cc;
  }
  .male,
  .female {
    width: 100px;
    height: 52px;
    background-color: #ffffff;
    border: 1px solid #dfdfdf;
    color: #666666;
  }
  .male.active,
  .female.active {
    color: #3f60cc;
    border: 1px solid #3f60cc;
  }
</style>

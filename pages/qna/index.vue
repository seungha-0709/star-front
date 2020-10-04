<template>
  <div class="qna-body">
    <modal
      :modalProps="modalInfoQna"
      v-if="modalTypeOnOff.qna.onoff"
      @close="modalOnOff('qna')"
    >
      <modal-qna />
    </modal>
    <div class="cs-center-wrap">
      <div class="cs-service">
        <h2>고객센터</h2>
        <table>
          <tbody>
            <tr>
              <th>운영시간</th>
              <td>
                평일 10:00~18:00 (점심시간 13:00~14:00 / 주말&공휴일 제외)
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>star_store@starteacher.co.kr</td>
            </tr>
            <tr>
              <th>전화</th>
              <td>070-1588-0000</td>
            </tr>
          </tbody>
        </table>
        <!-- 모바일 버전 버튼 위치 -->
        <div class="btn-position-mobile">
          <basic-button
            text="1:1 온라인 문의하기"
            fontSize="14"
            borderRadius="4"
            borderColor="#1673e6"
            width="328"
            height="42"
            color="#1673e6"
            backgroundColor="#fff"
            @event="modalOnOff('qna')"
          />
        </div>
      </div>
      <!-- 데스크톱 버전 아이콘 & 버튼 위치 -->
      <div class="cs-online">
        <headphones-icon class="headphone-icon" size="78" color="#ececec" />
        <div class="btn-position-desktop">
          <basic-button
            text="1:1 온라인 문의하기"
            borderRadius="4"
            borderColor="#1673e6"
            width="200"
            height="42"
            color="#1673e6"
            backgroundColor="#fff"
            @event="modalOnOff('qna')"
          />
        </div>
      </div>
    </div>

    <div class="qna-wrap">
      <h2>자주 묻는 질문과 답변</h2>
      <ul class="qna-category">
        <li
          v-for="(item, index) in categoryData"
          :key="index"
          :class="{ active: item.type === activeType }"
          @click="onTypeChange(item.type)"
        >
          <div class="icon-bg">
            <span v-if="item.type === 'all'" class="icon-all">
              ALL
            </span>
            <span v-if="item.type === 'buy'" class="icon-buy">
              <span>W</span>
            </span>
            <map-pin-icon
              v-if="item.type === 'logistics'"
              size="24"
              class="icon-style"
            />
            <package-icon
              v-if="item.type === 'cancel'"
              size="24"
              class="icon-style"
            />
            <repeat-icon
              v-if="item.type === 'exchange'"
              size="24"
              class="icon-style"
            />
            <file-text-icon
              v-if="item.type === 'receipt'"
              size="24"
              class="icon-style"
            />
            <heart-icon
              v-if="item.type === 'etc'"
              size="24"
              class="icon-style"
            />
            <!-- <v-icon color="#8f8f8f">{{ item.icon }}</v-icon> -->
          </div>
          {{ item.name }}
        </li>
      </ul>
      <div class="qna-category-mobile-wrap">
        <ul class="qna-category-mobile">
          <li
            v-for="(item, index) in categoryData"
            :key="index"
            :class="{ active: item.type === activeType }"
            @click="onTypeChange(item.type)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <qnaTab v-bind:tabType="activeType" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import basicButton from "../../components/common/basicButton.vue"
import modal from "../../components/modal/modal.vue"
import modalQna from "../../components/modal/modalQna.vue"
import qnaTab from "../../components/qnaContents/qnaTap.vue"
import { qnaCategory } from "../../assets/data/qnaCategory.js"
import {
  HeadphonesIcon,
  MapPinIcon,
  PackageIcon,
  RepeatIcon,
  FileTextIcon,
  HeartIcon
} from "vue-feather-icons"

export default {
  data() {
    return {
      categoryData: qnaCategory,
      activeType: "all",
      modalOpen: false
    }
  },
  components: {
    basicButton,
    modal,
    modalQna,
    qnaTab,
    HeadphonesIcon,
    MapPinIcon,
    PackageIcon,
    RepeatIcon,
    FileTextIcon,
    HeartIcon
  },
  computed: {
    /** store에서 각 데이터들 불러오는 부분 */
    ...mapState("orderListModal", {
      modalInfoQna: "modalInfoQna",
      modalTypeOnOff: "modalTypeOpen"
    })
  },
  methods: {
    onTypeChange(type) {
      this.activeType = type
    },
    /** 모달 팝업 열고 닫는 함수 */
    ...mapMutations("orderListModal", ["modalOnOff"])
  }
}
</script>

<style scoped>
.qna-body {
  background-color: #f1f1f1;
  overflow: hidden;
}
.cs-center-wrap {
  background-color: #fff;
  width: 1200px;
  height: 208px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dfdfdf;
  display: flex;
  padding: 32px 40px 32px 40px;
  box-sizing: border-box;
}
h2 {
  font-size: 24px;
  color: #212121;
  margin-bottom: 24px;
  font-weight: bold;
}
/* 고객센터 */
.cs-service {
  width: 851px;
}
tbody {
  font-size: 14px;
}
th {
  text-align: left;
  width: 100px;
  font-weight: bold;
  color: #212121;
}
.cs-online {
  width: 348px;
  border-left: 1px solid #dfdfdf;
  text-align: center;
}
.cs-online .headphone-icon {
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  vertical-align: top;
}
.btn-position-desktop {
  margin: 10px auto 41px auto;
}
.btn-position-mobile {
  display: none;
}
.btn {
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #1673e6;
  background-color: #ffffff;
  margin: 10px auto 41px auto;
  font-size: 16px;
  font-weight: bold;
  line-height: 2.6;
  color: #1673e6;
}
/* 자주 묻는 질문과 답변 */
.qna-wrap {
  background-color: #fff;
  color: #212121;
  width: 1200px;
  margin: 8px auto 0px auto;
  border: 1px solid #dfdfdf;
  padding: 32px 40px 32px 40px;
}
.qna-category {
  list-style: none;
  display: flex;
  padding: 0;
  width: 1180px;
  margin-bottom: 40px;
  color: #212121;
}
.qna-category-mobile {
  display: none;
}
.icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: rgba(223, 223, 223, 0.2);
  margin: 24px 52px 8px 52px;
  padding: 16px;
}

.icon-bg > .icon-all {
  font-size: 16px;
  color: #8f8f8f;
  font-weight: 700;
}
.icon-bg > .icon-buy {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border: 2px solid #8f8f8f;
  border-radius: 50%;
}
.icon-bg > .icon-buy > span {
  width: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #8f8f8f;
}
.icon-bg > .icon-style {
  color: #8f8f8f;
}

.qna-category > li {
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
  width: 160px;
  height: 136px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  color: #212121;
  font-size: 16px;
}
.qna-category > li:last-child {
  border-right: 1px solid #dfdfdf;
}
.qna-category > li.active {
  border: 1px solid #dfdfdf;
  width: 160px;
  height: 136px;
  text-align: center;
  background-color: #1673e6;
  box-sizing: border-box;
  color: white;
}

.qna-category > li.active .icon-bg > .icon-all,
.qna-category > li.active .icon-bg > .icon-style {
  color: white;
}
.qna-category > li.active .icon-bg > .icon-buy,
.qna-category > li.active .icon-bg > .icon-buy > span {
  color: white;
  border-color: white;
}

/** 모바일 화면 1200px 기준 ****************************************** */
@media (max-width: 1199px) {
  .cs-service h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .cs-center-wrap {
    padding: 19px 16px;
    box-sizing: border-box;
    width: 100%;
    height: 248px;
  }
  .cs-service {
    width: 100%;
  }
  td {
    padding: 4px;
    margin: 0;
  }
  td:last-child {
    padding-bottom: 0;
  }
  .cs-online {
    display: none;
  }
  .btn-position-mobile {
    display: block;
    margin: 24px 0;
    display: flex;
    justify-content: center;
  }
  .qna-wrap {
    width: 100%;
    padding: 16px;
  }
  .qna-wrap h2 {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 19px;
  }
  .qna-category {
    display: none;
  }
  .qna-category-mobile-wrap {
    height: 32px;
    overflow: hidden;
  }
  .qna-category-mobile {
    display: block;
    border-bottom: 1px solid #dfdfdf;
    overflow: auto;
    white-space: nowrap;
  }
  .qna-category-mobile ul {
    margin: 0 auto;
  }
  .qna-category-mobile li {
    margin: 0;
    padding: 0 16px 11px 16px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    display: inline-block;
  }
}
</style>

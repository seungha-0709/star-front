<template>
  <div class="my-page-wrap">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div class="my-page-content">
      <basic-board-cast
        :defaultTableSet="myClassInfo"
        :tableList="myClassList"
        :blockSize="5"
      >
        <template v-slot:customButton>
          <div class="coupon-btn-position">
            <basic-button
              text="수강권 코드 등록하기"
              borderColor="#1673e6"
              backgroundColor="#fff"
              color="#1673e6"
              @event="modalOnOff('coupon')"
            />
          </div>
        </template>
        <template v-slot:nullSet>
          <tbody v-if="myClassList.total === 0">
            <tr>
              <td
                class="my-class-none"
                :colspan="myClassInfo.tableHeaderTitle.length"
              >
                <p>강의 목록이 존재하지 않습니다.</p>
                <basic-button text="강의 상품 보러 가기" />
              </td>
            </tr>
          </tbody>
        </template>
      </basic-board-cast>
    </div>
    <modal
      :modalProps="modalInfoCoupon"
      v-if="modalTypeOnOff.coupon.onoff"
      @close="modalOnOff('coupon')"
    >
      <modal-register-coupon />
    </modal>
  </div>
</template>

<script>
  //   import { mapState } from "vuex"
  import { mapState, mapMutations } from "vuex"
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"
  import basicBoardCast from "../../../components/common/basicBoardCast.vue"
  import basicButton from "../../../components/common/basicButton.vue"
  import modal from "../../../components/modal/modal.vue"
  import modalRegisterCoupon from "../../../components/modal/modalRegisterCoupon.vue"
  import { myClassList } from "../../../components/myClass/myClassList.js"
  import { myClassInfo } from "../../../components/myPageBoard.js"

  export default {
    data() {
      return {
        myClassList,
        myClassInfo
      }
    },
    components: {
      sidebarTemporal,
      basicBoardCast,
      basicButton,
      modal,
      modalRegisterCoupon
    },
    computed: {
      ...mapState("orderListModal", {
        modalInfoCoupon: "modalInfoCoupon",
        modalTypeOnOff: "modalTypeOpen"
      })
    },
    methods: {
      ...mapMutations("orderListModal", ["modalOnOff"])
    }
  }
</script>

<style scoped>
  .my-page-wrap {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .sidebar {
    display: inline-block;
  }
  .my-page-content {
    margin-top: 32px;
  }
  .coupon-btn-position {
    text-align: center;
    margin-top: 32px;
  }
  .my-class-none {
    width: 100%;
    vertical-align: middle;
  }
  .my-class-none p {
    color: #666;
    height: 220px;
    line-height: 220px;
    font-size: 16px;
  }
</style>

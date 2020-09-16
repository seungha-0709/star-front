<template>
  <div class="my-shopping">
    <div>
      <h3 class="shopping-menu">{{ title }}</h3>
    </div>
    <div class="content-status">
      <p class="content-count">{{ `총 ${(123).toLocaleString()}개` }}</p>
      <basic-button
        text="모두삭제"
        width="84"
        height="42"
        color="#212121"
        fontSize="14"
        borderRadius="4"
        backgroundColor="#ffffff"
        borderColor="#dfdfdf"
        fontWeight="400"
      />
    </div>
    <div>
      <table class="my-shopping-table">
        <thead>
          <tr class="table-header">
            <th class="th-num">{{ thFirst }}</th>
            <th class="th-date">{{ thSecond }}</th>
            <th class="th-title">{{ thThird }}</th>
            <th class="th-date">{{ thFourth }}</th>
            <th class="th-date">{{ thFifth }}</th>
          </tr>
          <!-- vertical-align middle 했는데 왜 세로중앙정렬이 안되죠? -->
        </thead>
      </table>
    </div>
    <div>
      <page-nation />
      <!-- list error 발생! -->
    </div>
  </div>
</template>
<script>
  import basicButton from "../common/basicButton.vue"
  import pagination from "../orderList/pagination.vue"
  export default {
    props: {
      title: {
        default: ""
      },
      thFirst: {
        default: ""
      },
      thSecond: {
        default: ""
      },
      thThird: {
        default: ""
      },
      thFourth: {
        default: ""
      },
      thFifth: {
        default: ""
      }
    },

    components: {
      "basic-button": basicButton,
      "page-nation": pagination
    }
  }
</script>

<style scoped>
  .my-shopping {
    width: 924px;
    height: 696px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    padding: 32px 40px 40px;
    font-size: 14px;
    font-weight: normal;
    color: #212121;
    vertical-align: middle;
  }
  .shopping-menu {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .content-status {
    display: flex;
    margin-bottom: 14px;
  }
  .content-count {
    margin-top: 22px;
    margin-right: 706px;
  }
  .my-shopping-table {
    width: 844px;
    text-align: center;
    margin-bottom: 32px;
    font-size: 15px;
  }
  .table-header {
    width: 100%;
    height: 40px;
    border-top: solid 1px #666666;
    vertical-align: middle;
  }
  .my-shopping tr {
    width: 100%;
    border-bottom: solid 1px #dfdfdf;
    vertical-align: middle;
  }
  .table-header .th-num {
    width: 60px;
  }
  .table-header .th-date {
    width: 140px;
  }
  .table-header .th-title {
    width: 364px;
    text-align: left;
  }
</style>

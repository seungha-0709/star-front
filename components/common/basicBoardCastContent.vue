<template>
  <tbody class="noti-content">
    <tr v-for="(data, index) in content" :key="pageNumber(index)">
      <td v-for="(item, itemIndex) in tableHeaderCols" :key="itemIndex">
        <div v-if="item === 'id'">{{ pageNumber(index) }}</div>
        <div v-if="item === 'date'">{{ data.date }}</div>
        <div v-if="item === 'title'">{{ data.title }}</div>
        <div v-if="item === 'sender'">{{ data.sender }}</div>
        <div v-if="item === 'delete'">
          <basic-button
            text="삭제하기"
            width="74px"
            height="28px"
            color="#212121"
            fontSize="14px"
            borderRadius="4px"
            backgroundColor="#ffffff"
            borderColor="#dfdfdf"
            :fontWeight="400"
            v-on:event="removeItem(index)"
          />
        </div>
        <div v-if="item === 'status'">
          <basic-button
            :text="computedColumnStatus(data.status).title"
            fontSize="12px"
            width="64px"
            height="28px"
            :color="computedColumnStatus(data.status).fontColor"
            :borderColor="computedColumnStatus(data.status).borderColor"
            borderRadius="4px"
            backgroundColor="#fff"
            :style="{ pointerEvents: 'none' }"
          />
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
  import basicButton from "../common/basicButton.vue"

  export default {
    props: ["content", "currentPage", "total", "limit", "tableHeaderCols"],
    components: {
      "basic-button": basicButton
    },
    computed: {
      pageNumber() {
        return (index) => {
          return this.total - (this.currentPage - 1) * this.limit - index
        }
      },
      computedColumnStatus() {
        return (status) => {
          if (status === "future") {
            return {
              title: "수강예정",
              fontColor: "#ffb00f",
              borderColor: "#ffb00f"
            }
          } else if (status === "now") {
            return {
              title: "수강중",
              fontColor: "#b0c93d",
              borderColor: "#b0c93d"
            }
          } else if (status === "past") {
            return {
              title: "수강완료",
              fontColor: "#e13a3a",
              borderColor: "#e13a3a"
            }
          }
        }
      }
    },
    methods: {
      removeItem(index) {
        return this.$props.content.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  .noti-content {
    width: 844px;
    height: 42px;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    color: #666666;
  }
  .noti-content tr {
    height: 42px;
    width: 100%;
    border-bottom: solid 1px #dfdfdf;
  }
  .noti-content td {
    vertical-align: middle;
  }
  .noti-content tr:hover {
    background-color: rgba(0.09, 0.45, 0.9, 0.03);
  }
  .noti-title {
    text-align: left;
  }
</style>

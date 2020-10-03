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
            width="74"
            height="28"
            color="#212121"
            fontSize="14"
            borderRadius="4"
            backgroundColor="#ffffff"
            borderColor="#dfdfdf"
            :fontWeight="400"
            v-on:event="removeItem(index)"
          />
        </div>
        <div v-if="item === 'status'">
          <basic-button
            :text="
              data.status === 'future'
                ? '수강예정'
                : data.status === 'now'
                ? '수강중'
                : '수강완료'
            "
            fontSize="12"
            width="64"
            height="28"
            :color="
              data.status === 'future'
                ? '#ffb00f'
                : data.status === 'now'
                ? '#b0c93d'
                : '#e13a3a'
            "
            :borderColor="
              data.status === 'future'
                ? '#ffb00f'
                : data.status === 'now'
                ? '#b0c93d'
                : '#e13a3a'
            "
            borderRadius="4"
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

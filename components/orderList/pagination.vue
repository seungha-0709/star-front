<template>
  <div>
    <div v-if="pageSetting.list.length" class="page-list">
      <chevrons-left-icon v-if="pageSetting.first" color="#dfdfdf" />
      <ol>
        <li v-for="page in pageSetting.list" :key="page" @click="sendPage(page)">{{ page }}</li>
      </ol>
      <chevrons-right-icon v-if="pageSetting.end" color="#dfdfdf" />
    </div>
  </div>
</template>

<script>
import { ChevronsLeftIcon, ChevronsRightIcon } from "vue-feather-icons"
export default {
  props: ["pageSetting"],
  components: {
    ChevronsLeftIcon,
    ChevronsRightIcon
  },
  methods: {
    clickPage(total, limit, block, currentPage) {
      this.$emit("pageingTest", total, limit, block, currentPage)
    },
    sendPage(page) {
      this.$emit("paging", page)
    }
  }
}
</script>

<style scoped>
.page-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-list > ol {
  list-style: none;
  display: flex;
}
.page-list li {
  font-size: 14px;
  color: #666;
  padding: 12px;
  cursor: pointer;
}
.page-list li.active {
  font-size: 14px;
  color: #2c428d;
}
</style>

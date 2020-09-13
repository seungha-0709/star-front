<template>
  <div>
    <div v-if="pageSetting.list.length" class="page-list">
      <chevrons-left-icon
        v-if="pageSetting.first !== null"
        color="#dfdfdf"
        @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
      />
      <ul>
        <li
          :class="{ active: page === pageSetting.currentPage }"
          v-for="page in pageSetting.list"
          :key="page"
          @click="sendPage(page)"
        >{{ page }}</li>
      </ul>
      <chevrons-right-icon
        v-if="pageSetting.end !== null"
        color="#dfdfdf"
        @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
      />
    </div>
  </div>
</template>

<script>
import { ChevronsLeftIcon, ChevronsRightIcon } from "vue-feather-icons"
export default {
  props: ["pageSetting", "pageBlock"],

  components: {
    ChevronsLeftIcon,
    ChevronsRightIcon
  },
  methods: {
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
.page-list ul {
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
  font-weight: bold;
  cursor: pointer;
}
</style>

<template>
  <div>
    <div v-if="pageList.length" class="page-list">
      <chevrons-left-icon
        class="left-icon"
        v-if="pageFirst !== null"
        color="#dfdfdf"
        @click="pageFirst !== null ? $emit('paging', prevPage) : ''"
      />
      <ul>
        <li
          v-for="page in pageList"
          :class="{ active: page === currentPage }"
          :key="page"
          @click="$emit('paging', page)"
        >
          {{ page }}
        </li>
      </ul>
      <chevrons-right-icon
        class="right-icon"
        v-if="pageEnd !== null"
        color="#dfdfdf"
        @click="pageEnd !== null ? $emit('paging', nextPage) : ''"
      />
    </div>
  </div>
</template>

<script>
  import { ChevronsLeftIcon, ChevronsRightIcon } from "vue-feather-icons"
  export default {
    props: {
      currentPage: {
        default: 1
      },
      total: {
        default: 0
      },
      limit: {
        default: 10
      },
      blockSize: {
        default: 5
      }
    },
    computed: {
      // 전체 페이지 number값
      totalPage() {
        return Math.ceil(this.total / this.limit)
      },
      // 페이지 리스트를 block 단위로 표시하기 위한 부분
      block() {
        return Math.ceil(this.currentPage / this.blockSize)
      },
      // 해당 block에서 첫번째 페이지의 number값
      pageFirst() {
        return (this.block - 1) * this.blockSize + 1
      },
      // 해당 block에서 마지막 페이지의 number값
      pageEnd() {
        return Math.min(this.block * this.blockSize, this.totalPage)
      },
      // 해당 block에 나타내는 page의 배열
      pageList() {
        return new Array(this.pageEnd - this.pageFirst + 1)
          .fill()
          .map((_, i) => (this.block - 1) * this.blockSize + i + 1)
      },
      // 블록 단위 이전 페이지의 마지막 number값
      prevPage() {
        return this.pageList[0] > 1 ? this.pageList[0] - 1 : null
      },
      // 블록 단위 다음 페이지의 첫번째 number값
      nextPage() {
        return this.pageList[this.blockSize - 1] < this.totalPage
          ? this.pageList[this.blockSize - 1] + 1
          : null
      }
    },
    components: {
      ChevronsLeftIcon,
      ChevronsRightIcon
    }
  }
</script>

<style scoped>
  .page-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  .page-list ul {
    list-style: none;
    display: flex;
  }
  .page-list li {
    width: 36px;
    height: 36px;
    font-size: 14px;
    color: #666;
    padding: 9px 14px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .page-list li.active {
    font-size: 14px;
    color: #2c428d;
    font-weight: bold;
    cursor: pointer;
  }
  .left-icon {
    cursor: pointer;
  }
  .right-icon {
    cursor: pointer;
  }
</style>

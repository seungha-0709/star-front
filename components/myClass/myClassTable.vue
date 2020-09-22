<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(myClass, index) in boardData.data" :key="index">
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[0] + 'px' }">
            1
          </td>
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[1] + 'px' }">
            {{ myClass.date }}
          </td>
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[2] + 'px' }">
            {{ myClass.name }}
          </td>
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[3] + 'px' }">
            {{ myClass.statusTitle }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["myPageBoardInfo", "boardData"]
  }
</script>

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      컨텐츠 내용
      <div class="scroll-test">스크롤 영역</div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .scroll-test {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
  }
</style>

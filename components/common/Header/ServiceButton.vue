<template>
  <button type="button" class="btn-service" v-bind:style="{ marginRight: marginRight + 'px' }">
    <v-icon size="medium">{{icon}}</v-icon>
  </button>
</template>
<script>
export default {
  props: ["icon", "margin-right"],
  data() {
    return {
      icon: this.icon,
      marginRight: this.marginRight
    }
  }
}
</script>

<style scoped>
.btn-service {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dfdfdf;
  vertical-align: top;
}
</style>
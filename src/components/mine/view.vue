<template>
  <ul class="mines" v-if="$store.state.gridData.length > 0 ">
    <MineItem
      v-for="i in matrixSize()"
      :data="$store.state.gridData[i]"
      :key="i"
      :style="{'width':(100 / $store.state.grid) + '%'}"
    />
  </ul>
</template>


<!--
Mine Controller
@look src/components/mine/controller.js
-->
<script>
export { default } from "@/components/mine/controller";
</script>


<!--
Mine Style Sheets
@look src/components/mine/style.scss
-->
<style lang="scss">
@import "@/components/mine/style";
</style>
<template>
  <li class="mine-item"><button v-if="data">{{data.mineCount}}</button></li>
</template>


<!--
Mine Item Controller
@look src/components/mine-item/controller.js
-->
<script>
export { default } from "@/components/mine-item/controller";
</script>


<!--
Mine Item Style Sheets
@look src/components/mine-item/style.scss
-->
<style lang="scss">
@import "@/components/mine-item/style";
</style>
<template>
  <div id="app">
    <Main />
  </div>
</template>

<!--
App Controller
-->
<script>
import Main from './components/main.vue'
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<!--
App Style Sheet
-->
<style lang="sass">
@import "@/sass/index";
</style>

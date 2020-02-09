<template>
  <div>
    <div class="flex justify-between items-center mb-10">
      <!-- OYUN HEADER -->
      <h1>
        <span class="color-orange">MINE</span>
        <span class="color-blue">SWEEPER</span>
      </h1>
      <!-- HEADER SCORE GÖSTERİM ALANI -->
      <div class="header-score-text area">
        <label>Score</label>
        <span>
          <b>45</b>
        </span>
      </div>
      <!-- HEADER SCORE SON -->
    </div>
    <!-- HEADER KULLANICI BİLGİLERİ, MATRIX ve BAŞLATMA ALANI -->
    <div class="flex justify-between items-center user-controls">
      <div class="area">
        <!-- KULLANICI BİLGİLERİ -->
        <label>Name</label>
        <span>
          <b>Kerem Yavuz</b>
        </span>
        <!-- KULLANICI BİLGİLERİ SON -->
      </div>
      <div class="area">
        <select class="control" @change="changeGrid">
          <!-- GRID BOYUTLARI YÜKLENİYOR -->
          <option v-for="x in grids" :value="x" :key="x">{{`${x}x${x}`}} Grid</option>
          <!-- GRID BOYUTLARI SON -->
        </select>
      </div>
      <div class="area user-controls-button p0">
        <!-- OYUN BAŞLAT BUTONU -->
        <button class="control btn btn-middle btn-orange">Start</button>
        <!-- OYUN BAŞLAT BUTONU SON -->
      </div>
    </div>
  </div>
</template>

<!--
Header Style Sheets
@look src/components/header/style.scss
-->
<style lang="scss">
@import "@/components/header/style";
</style>

<!--
Header Controller
@look src/components/header/controller.js
-->
<script>
export { default } from "@/components/header/controller";
</script>
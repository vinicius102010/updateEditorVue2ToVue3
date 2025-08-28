<script setup lang="ts">
import MyTwoButtonsCe from "./components/MyTwoButtons.ce.vue";
</script>

<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <img
          alt="Vue logo"
          src="http://www.sarah.br/media/3462/logo_header.png" />
      </div>
      <div class="col-12"></div>
    </div>

    <div key="row" class="row q-col-gutter-sm justify-center q-my-md">
      <div key="col" class="col-12">
        <MyTwoButtonsCe></MyTwoButtonsCe>
      </div>
    </div>
  </div>
</template>

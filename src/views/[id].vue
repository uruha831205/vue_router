<script setup>
import { useRoute } from "vue-router";
const get_route = useRoute();
</script>

<template>
  <div class="layout">
    <div>get route' params : {{ get_route.params }}</div>
    <br />
    <div>get route' path : {{ get_route.path }}</div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

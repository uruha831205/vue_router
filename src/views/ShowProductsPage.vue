<script setup>
import { useRoute } from "vue-router";
const get_route = useRoute();
</script>
<template>
  <h1>This is show products page!</h1>
  <div>{{ get_route.params.message }}</div>
</template>
<style></style>

<script setup>
import { useRouter } from "vue-router";
</script>

<template>
  <div class="home">
    <h1>請選擇您的年齡類別</h1>
    <router-link to="/adult">成年</router-link>
    <router-link to="/minor">未成年</router-link>
  </div>
</template>

<style>
.btn_routerlink {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.btn_routerlink:hover {
  background-color: transparent;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>

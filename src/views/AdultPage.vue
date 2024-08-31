<template>
  <div>
    <h1>Adult Page</h1>
    <p>This is the page for adults.</p>
    <router-link to="/adult/a" class="link" replace>adult_a</router-link>
    <router-link to="/adult/b" class="link" replace>adult_b</router-link>
    <router-link to="/adult/c" class="link" replace>adult_c</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link {
  margin: 0 5px;
}
</style>

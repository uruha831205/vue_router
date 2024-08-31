<script setup>
import { ref } from "vue";

const airsoftZIndex = ref(0);
const anyZIndex = ref(0);
const realZIndex = ref(0);

const setBoxZindex = (choose) => {
  // box1ZIndex.value = choose === "airsoft" ? 2 : 1;
  // box2ZIndex.value = choose === "real" ? 2 : 1;

  if (choose === "airsoft") {
    airsoftZIndex.value = 2;
    anyZIndex.value = 1;
    realZIndex.value = 1;
  } else if (choose === "any") {
    anyZIndex.value = 2;
    airsoftZIndex.value = 1;
    realZIndex.value = 1;
  } else if (choose === "real") {
    realZIndex.value = 2;
    airsoftZIndex.value = 1;
    anyZIndex.value = 1;
  }
};
</script>

<template>
  <main class="layout">
    <router-link
      class="box airsoft-gun"
      to="/main/airsoft"
      @mouseenter="setBoxZindex('airsoft')"
    >
      <div class="pic airsoft-pic">
        <div class="description">
          <div class="title">生存遊戲123</div>
          <div class="context">有價值的假日黃金戰士</div>
        </div>
      </div>
    </router-link>

    <router-link
      class="box any"
      to="/main/any"
      @mouseenter="setBoxZindex('any')"
    >
      <div class="pic any-pic">
        <div class="description">
          <div class="title">隨意逛逛123</div>
          <div class="context">嗯...算了，沒事，我自己逛逛就好</div>
        </div>
      </div>
    </router-link>

    <router-link
      class="box real-gun"
      to="/main/real"
      @mouseenter="setBoxZindex('real')"
    >
      <div class="pic real-pic">
        <div class="description">
          <div class="title">真實槍枝123</div>
          <div class="context">生命財產誠可貴，保重</div>
        </div>
      </div>
    </router-link>
  </main>
</template>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.layout:hover .pic:not(:hover) {
  filter: blur(2px);
}

.box {
  flex: 1;
  height: 100%;
  transition: all 0.3s ease;
  background-color: black;
}

.box:hover {
  flex: 3;
  scale: 1.04;
}

.pic {
  /*filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.5));*/
  box-shadow: inset 0px 0px 100px black;
  position: relative;
}

.pic:hover {
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 15px rgba(255, 255, 255, 0.7);
}

.description {
  position: absolute;
  bottom: 10%;
  text-shadow: 2px 2px 10px black;
  font-weight: bold;
  font-size: 1.2em;
  opacity: 0;
}

.airsoft-pic {
  width: 100%;
  height: 100%;
  background: url("../assets/img/bb_bullet.jpg");
  background-size: cover;
}

.any-pic {
  width: 100%;
  height: 100%;
  background: url("../assets/img/dog.png");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.real-pic {
  width: 100%;
  height: 100%;
  background: url("../assets/img/real_bullet.jpeg");
  background-position: right;
  background-size: cover;
  z-index: 1;
}

.airsoft-gun:hover {
  z-index: v-bind(airsoftZIndex);
}

.any:hover {
  z-index: v-bind(anyZIndex);
}

.real-gun:hover {
  z-index: v-bind(realZIndex);
}

.airsoft-pic .description {
  text-align: left;
  color: yellow;
  left: 10%;
}

.any-pic .description {
  text-align: center;
  color: white;
}

.real-pic .description {
  text-align: right;
  color: red;
  right: 10%;
}

.airsoft-gun:hover .description,
.real-gun:hover .description,
.any:hover .description {
  transition: 0.5s;
  transition-delay: 50ms;
  opacity: 1;
}
</style>

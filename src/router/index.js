import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: import("../views/GunLandingPage.vue"),
    },
    {
      path: "/adult",
      name: "adult",
      component: import("../views/AdultPage.vue"),
      children: [
        {
          path: "a",
          name: "adult_a",
          component: import("../views/adultpages/a.vue"),
        },
        {
          path: "b",
          name: "adult_b",
          component: import("../views/adultpages/b.vue"),
        },
        {
          path: "c",
          name: "adult_c",
          component: import("../views/adultpages/c.vue"),
        },
      ],
    },
    {
      path: "/minor",
      name: "minor",
      component: import("../views/MinorPage.vue"),
    },
    {
      path: "/main/:message",
      name: "main",
      component: import("../views/ShowProductsPage.vue"),
    },
    {
      path: "/:id",
      name: "dynamic_url",
      component: import("../views/[id].vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: import("../views/404.vue"),
    },
  ],
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import test from "../lib-components/test.vue";
import Home from "../lib-components/libfiras-sample.vue";
import not from "../lib-components/not.vue";


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/:catchAll(.*)",
    component: not,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
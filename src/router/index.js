import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Photo from "../views/Photo.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [{ path: "/photo/:id", component: Photo }],
  },
  {
    path: "/pageNotFound",
    alias: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

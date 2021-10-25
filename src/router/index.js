import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Manajemen from "../views/Manajemen.vue";
import Pelanggan from "../views/Klien.vue";
import Settings from "../views/Settings.vue";
import Add_Manajemen from "../views/Manajemen/Tambah.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manajemen",
    name: "Manajemen",
    component: Manajemen,
  },
  {
    path: "/pelanggan",
    name: "Pelanggan",
    component: Pelanggan,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/manajemen/add",
    name: "Add_Manajemen",
    component: Add_Manajemen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

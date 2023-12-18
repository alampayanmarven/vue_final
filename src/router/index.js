import { createRouter, createWebHistory } from "vue-router";

import Beelzebub from '../views/BeelzebubView.vue'
import Fate from '../views/FateView.vue'
import Jojo from '../views/JojoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/beel",
      name: "beelzebub",
      component: Beelzebub,
    },

    {
      path: "/fate",
      name: "fateseries",
      component: Fate,
    },

    {
      path: "/jojo",
      name: "jojo",
      component: Jojo,
    }
  ],
});

export default router;

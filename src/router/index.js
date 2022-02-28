import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/children'
  },
  {
    path: '/children',
    name: 'Children',
    component: () => import("@/views/children/Children.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/children/Home.vue"),
      },
      {
        path: "alert",
        component: () => import("@/views/children/Alert.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

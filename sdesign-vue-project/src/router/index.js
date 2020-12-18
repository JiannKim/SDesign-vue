import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// import AppMain from "@/views/AppMain.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      // 코드 스플리팅(필요한 페이지를 열때만 데이터를 가져와준다. 임포트를 하지않고 가져온다. )
      component: () => import("@/views/AppMain.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("@/views/PricingPage.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FaqPage.vue"),
    },
    {
      path: "/sounds",
      name: "sounds",
      component: () => import("@/views/SoundsPage.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("@/views/AccountPage.vue"),
      meta: { auth: true },
      children: [
        {
          path: "upload",
          name: "upload",
          component: () => import("@/components/tabs/UploadTab.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/components/tabs/ProfileTab.vue"),
        },
        {
          path: "subscrib",
          name: "subscrib",
          component: () => import("@/components/tabs/SubscribTab.vue"),
        },
        {
          path: "favorites",
          name: "favorites",
          component: () => import("@/components/tabs/FavoritesTab.vue"),
        },
      ],
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchSoundsPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    next("/main");
    return;
  }
  next();
});

export default router;

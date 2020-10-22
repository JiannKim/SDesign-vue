import Vue from "vue";
import VueRouter from "vue-router";
// import SignupView from "@/views/SignupView.vue";
// import LoginView from "@/views/LoginView.vue";
import PricingPage from "@/views/PricingPage.vue";
import FaqPage from "@/views/FaqPage.vue";
import SpiPage from "@/views/SpiPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/signup",
      // 코드 스플리팅(필요한 페이지를 열때만 데이터를 가져와준다. )
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/pricing",
      component: PricingPage,
    },
    {
      path: "/faq",
      component: FaqPage,
    },
    {
      path: "/spi",
      component: SpiPage,
    },
  ],
});

export default router;
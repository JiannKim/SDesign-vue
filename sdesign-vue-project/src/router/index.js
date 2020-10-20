import Vue from "vue";
import VueRouter from "vue-router";
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import PricingPage from "@/views/PricingPage.vue";
import FaqPage from "@/views/FaqPage.vue";
import SpiPage from "@/views/SpiPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/signup",
      component: SignupView,
    },
    {
      path: "/login",
      component: LoginView,
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

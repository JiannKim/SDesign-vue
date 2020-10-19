import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../components/views/SignupPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/signup",
      component: SignupPage,
    },
  ],
});

export default router;

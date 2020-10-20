import Vue from "vue";
import VueRouter from "vue-router";
import SignupView from "../components/views/SignupView.vue";
import LoginView from "../components/views/LoginView.vue";

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
  ],
});

export default router;

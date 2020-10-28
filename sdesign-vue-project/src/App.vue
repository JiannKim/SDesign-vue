<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <!-- 모달 폼 -->
    <SignFormView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import SignFormView from "@/views/SignFormView.vue";
import TheFooter from "@/components/common/TheFooter.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "app",
  components: {
    TheHeader,
    SignFormView,
    TheFooter,
  },
  methods: {},
};
</script>

<style>
@import "./assets/css/common.css";
</style>

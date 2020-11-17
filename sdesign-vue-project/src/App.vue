<template>
  <div id="app">
    <TheHeader />
    <div id="side-page">
      <router-view></router-view>
    </div>
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

/* 컴포넌트 영역 잡아주기 위해 헤더 높이만큼 패딩값 넣기 */
#side-page {
  padding-top: 73px;
}
</style>

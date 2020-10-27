<template>
  <div name="main">
    <MainTop />
    <MainCenter />
    <MainBottom />
  </div>
</template>

<script>
import MainTop from "@/components/MainTop.vue";
import MainCenter from "@/components/MainCenter.vue";
import MainBottom from "@/components/MainBottom.vue";

export default {
  components: {
    MainTop,
    MainCenter,
    MainBottom,
  },
};
</script>

<style></style>

<template>
  <div name="main">
    <MainTop />
    <MainCenter />
    <MainBottom />
    <MainUnder />
  </div>
</template>

<script>
import MainTop from "@/components/MainTop.vue";
import MainCenter from "@/components/MainCenter.vue";
import MainBottom from "@/components/MainBottom.vue";
import MainUnder from "@/components/MainUnder.vue";

export default {
  components: {
    MainTop,
    MainCenter,
    MainBottom,
    MainUnder,
  },
};
</script>

<style></style>

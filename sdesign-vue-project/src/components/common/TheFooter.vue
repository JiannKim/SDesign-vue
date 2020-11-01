<template>
  <div id="app-footer-wrapper">
    <div class="footer-logo-image">
      <img
        src="https://i.ibb.co/d4yZmMC/s-Design-Pro-Logo-01.png"
        alt="s-Design-Logo"
      />
    </div>
    <div class="footer-lists">
      <div class="lists-column">
        <h3 v-for="title in titles" :key="title.index">{{ title.list }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [{ list: "Product" }, { list: "Company" }, { list: "Improve" }],
    };
  },
};
</script>

<style scoped lang="scss">
$bgColor: #000;

#app-footer-wrapper {
  width: 100%;
  height: 390px;
  background-color: $bgColor;
  position: relative;
  top: 60;

  border: 1px solid darkorange;
}

.footer-logo-image {
  border: 1px solid springgreen;
  img {
    width: 10%;
    filter: invert(100%);
  }
}
</style>

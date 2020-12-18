<template>
  <div id="account-page-wrapper">
    <div class="top-title-section">
      <h1 class="page-title">My Page</h1>
    </div>
    <div class="tab-titles">
      <ul>
        <li v-for="tab in tabs" :key="tab.index">
          <router-link :to="tab" class="tab-title"
            >{{ tab.mainText }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="contents-section">
      <router-view :name="tabs.path"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const tabs = [
      { mainText: "Upload", path: "upload" },
      { mainText: "Profile", path: "profile" },
      { mainText: "Subscrib", path: "subscrib" },
      { mainText: "Favorites", path: "favorites" },
    ];
    return {
      tabs,
    };
  },
};
</script>

<style scoped lang="scss">
.top-title-section {
  padding-bottom: 40px;
}
.tab-titles {
  border-bottom: 1px solid #e0e0e0;
  ul {
    display: flex;
    justify-content: space-around;
    max-width: 664px;
    margin: 0 auto;
    position: relative;
    li {
      width: 90px;
      font-size: 16px;
      position: relative;
      display: flex;
      justify-content: center;
    }
    .tab-title {
      width: 100%;
      padding: 10px;
      color: #777777;
      &:hover {
        color: #313131;
      }
    }
    .router-link-active {
      color: #313131;
    }
    .router-link-active::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #000;
      display: block;
      border-radius: 25px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>

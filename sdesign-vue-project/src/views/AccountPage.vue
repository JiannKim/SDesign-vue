<template>
  <div id="account-page-wrapper">
    <div class="top-title-section">
      <h1 class="page-title">My Page</h1>
    </div>
    <div class="tab-titles">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.index"
          @click="onClickTab(tab)"
          :class="{ active: selectedTab === tab }"
        >
          {{ tab.mainText }}
        </li>
      </ul>
    </div>
    <div class="contents-section">
      <UploadTab v-if="selectedTab === tabs[0]" />
      <ProfileTab v-else-if="selectedTab === tabs[1]" />
      <SubscribTab v-else-if="selectedTab === tabs[2]" />
      <FavoritesTab v-else />
    </div>
  </div>
</template>

<script>
import UploadTab from "@/components/tabs/UploadTab.vue";
import ProfileTab from "@/components/tabs/ProfileTab.vue";
import FavoritesTab from "@/components/tabs/FavoritesTab.vue";
import SubscribTab from "@/components/tabs/SubscribTab.vue";

export default {
  components: {
    UploadTab,
    ProfileTab,
    FavoritesTab,
    SubscribTab,
  },
  data() {
    const tabs = [
      { mainText: "Upload" },
      { mainText: "Profile" },
      { mainText: "Subscrib" },
      { mainText: "Favorites" },
    ];
    return {
      tabs,
      selectedTab: "",
    };
  },
  methods: {
    onClickTab(tab) {
      this.selectedTab = tab;
    },
  },
  created() {
    this.selectedTab = this.tabs[1];
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
      width: 80px;
      padding: 13px;
      font-size: 16px;
      position: relative;
      color: #777777;
      cursor: pointer;
    }
    .active::after {
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
    li:hover,
    .active {
      color: #313131;
    }
  }
}
</style>

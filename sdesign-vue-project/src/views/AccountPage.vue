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
      <!-- <UploadForm v-if="selectedTab === tabs[0]" /> -->
      <UploadTab v-if="selectedTab === tabs[0]" />
      <template v-else-if="selectedTab === tabs[1]">
        <p>profile 섹션</p>
      </template>
      <template v-else>
        <p>subscrib 섹션</p>
      </template>
    </div>
  </div>
</template>

<script>
// import UploadForm from "@/components/account/UploadForm.vue";
import UploadTab from "@/components/tabs/UploadTab.vue";

export default {
  components: {
    // UploadForm,
    UploadTab,
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
    this.selectedTab = this.tabs[0];
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

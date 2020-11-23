<template>
  <div id="account-page-wrapper">
    <div class="top-section">
      <h1 class="page-title">My Page</h1>
    </div>

    <div class="contents-section">
      <div class="tab-titles">
        <ul v-for="tab in tabs" :key="tab.index">
          <li>{{tab.mainText}}</li>
        </ul>
      </div>
      <template>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import { fetchSounds } from "@/api";

export default {
  data() {
    const tabs = [
      { mainText: "Upload" },
      { mainText: "Profile" },
      { mainText: "Subscrib" },
    ];
    return {
      tabs,
      active: true,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetchSounds();
      console.log("fetchData response =>", response);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped lang="scss">
.top-section {
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
}
.contents-section {
  border: 1px solid aquamarine;
  .tab-titles {
    border: 1px solid darkblue;
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
    li {
      // border: 1px solid palevioletred;
      width: 100px;
      padding: 13px;
      font: {
        size: 18px;
        weight: 200;
      }
    }
    li:hover {
      background-color: #e0e0e0;
      border-radius: 7px;
    }
  }
}
</style>
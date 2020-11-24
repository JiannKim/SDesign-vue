<template>
  <div id="account-page-wrapper">
    <div class="top-section">
      <h1 class="page-title">My Page</h1>
    </div>

    <div class="contents-section">
      <div class="tab-titles">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.index"
            @click="onClickTab(tab)"
            :class="{active : selectedTab === tab}"
          >{{tab.mainText}}</li>
        </ul>
      </div>
      <template v-if="selectedTab === tabs[0]">
        <div>
          <label for="fname">제목</label>
          <input type="text" name="fname" id="fname" v-model="fname" />
        </div>

        <!-- 
        <audio class="player" controls ref="player">
          <source
            src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
            ref="source"
          />
        </audio> 
        -->

        <div>
          <label for="Files">
            <input type="file" />
          </label>
          <!-- <input type="file" /> -->
        </div>
        <div>
          <!-- <p>{{file.name}}</p> -->
          <p>{{fname}}</p>
          <!-- <span>remove</span> -->
        </div>
        <!-- <div>
          <button>Add</button>
        </div>-->
        <div>
          <button>Submit</button>
        </div>
        <hr />
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </template>
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
      selectedTab: "",
      fname: "",
    };
  },
  methods: {
    async fetchData() {
      const response = await fetchSounds();
      console.log("fetchData response =>", response);
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
  },
  created() {
    this.fetchData();
    this.selectedTab = this.tabs[0];
  },
};
</script>

<style scoped lang="scss">
.top-section {
  padding-bottom: 40px;
  border-bottom: 1px solid #e1e1e1;
}
.contents-section {
  border: 1px solid aquamarine;
  .tab-titles {
    border: 1px solid darkblue;
    max-width: 500px;
    margin: 0 auto;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        // border: 1px solid palevioletred;
        width: 80px;
        padding: 13px;
        font-size: 16px;
      }
      li:hover {
        background-color: #e0e0e0;
        border-radius: 7px;
      }
    }
  }
}
</style>
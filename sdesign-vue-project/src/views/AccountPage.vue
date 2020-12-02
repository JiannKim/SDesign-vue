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
      <UploadForm v-if="selectedTab === tabs[0]" />
      <!-- <template v-if="selectedTab === tabs[0]">
        <div class="upload tab-content">
          <div class="input-container">
            <label for="fname">제목</label>
            <input type="text" name="fname" id="fname" v-model="fname" />
          </div>
          <div class="input-container">
            <label for="ftag">태그</label>
            <input type="text" name="ftag" id="ftag" v-model="ftag" />
          </div>
          <div class="file-uploader">
            <label for="files" class="input-label">
              <input class="me" type="file" id="files" />
              파일찾기
            </label>
          </div>
          <div class="file-submit">
            <div class="select-option">
              <fa-icon icon="caret-down" class="caret-icon" />
              <select name="categories" id="categories" class="select-box">
                <option v-for="option in order" :key="option.index">{{
                  option.text
                }}</option>
              </select>
            </div>
            <button class="submit-button">등록하기</button>
          </div>
        </div>
        <div class="tab-upload-lists">
          <div class="bottom-title-section">
            <h2>Upload List</h2>
          </div>
          <LoadingSpinner v-if="isLoading" />
          <ul v-else>
            <SoundsListItem
              v-for="listItem in listItems"
              :key="listItem._id"
              :listItem="listItem"
            />
          </ul>
        </div>
      </template> -->
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
// import SoundsListItem from "@/components/common/SoundsListItem.vue";
// import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import UploadForm from "@/components/account/UploadForm.vue";
// import { fetchSounds } from "@/api";

export default {
  components: {
    // SoundsListItem,
    // LoadingSpinner,
    UploadForm,
  },
  data() {
    const tabs = [
      { mainText: "Upload" },
      { mainText: "Profile" },
      { mainText: "Subscrib" },
      { mainText: "Favorites" },
    ];
    // const order = [
    //   { text: "카테고리를 선택해주세요", value: "" },
    //   { text: "Walla", value: "walla" },
    //   { text: "Theme", value: "theme" },
    //   { text: "Whoosh", value: "whoosh" },
    //   { text: "Wind", value: "wind" },
    //   { text: "Cartoon", value: "cartoon" },
    // ];
    return {
      // userToken: "",
      tabs,
      selectedTab: "",
      // fname: "",
      // ftag: "",
      // order,
      // listItems: [],
      // isLoading: false,
    };
  },
  methods: {
    // async fetchData() {
    //   this.isLoading = true;
    //   const { data } = await fetchSounds();
    //   console.log("fetchData response =>", data);
    //   this.isLoading = false;
    //   this.listItems = data.result;
    // },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
  },
  created() {
    // this.fetchData();
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

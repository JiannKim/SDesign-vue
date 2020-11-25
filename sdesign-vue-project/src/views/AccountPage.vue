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
        <div class="upload tab-content">
          <div class="input-container">
            <label for="fname">제목</label>
            <input type="text" name="fname" id="fname" v-model="fname" />
          </div>
          <div class="input-container">
            <label for="ftag">태그</label>
            <input type="text" name="ftag" id="ftag" v-model="ftag" />
          </div>
        </div>

        <!-- 
        <audio class="player" controls ref="player">
          <source
            src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
            ref="source"
          />
        </audio> 
        -->

        <div class="upload file-uploader">
          <label for="files" class="input-label">
            <input class="me" type="file" id="files" ref="file" />
            파일찾기
          </label>
          <!-- <p>{{file}}aa.png</p> -->
        </div>
        <div class="upload file-submit">
          <!-- <p>{{file}}</p> -->
          <p>{{fname}}</p>
          <p>{{ftag}}</p>
          <!-- <span>remove</span> -->
          <div class="test">
            <!-- <label for="categories" class="cate" @click="selected()">카테고리</label> -->
            <fa-icon icon="caret-down" class="caret-icon" />
            <select name="categories" id="categories" class="input-select-box" ref="selected">
              <option v-for="option in order" :key="option.index">{{option.text}}</option>
            </select>
          </div>
          <button class="input-submit-button">등록하기</button>
        </div>
        <!-- <div>
          <button>Add</button>
        </div>-->
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
      { mainText: "Favorites" },
    ];
    const order = [
      { text: "카테고리를 선택해주세요", value: "" },
      { text: "Walla", value: "walla" },
      { text: "Theme", value: "theme" },
      { text: "Whoosh", value: "whoosh" },
      { text: "Wind", value: "wind" },
      { text: "Cartoon", value: "cartoon" },
    ];
    return {
      tabs,
      selectedTab: "",
      fname: "",
      ftag: "",
      fileTitle: "",
      order,
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
    // selected() {
    //   this.$refs.selected.click();
    // },
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
}
.contents-section {
  border: 1px solid olive;
  .upload {
    // border: 1px solid hotpink;
    display: flex;
    max-width: 521px;
    margin: 0 auto;
    position: relative;
    margin-top: 27px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
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
  .tab-content {
    // max-width: 521px;
    // margin: 0 auto;
    border: none;
    display: block;
    margin-top: 28px;
    .input-container {
      display: grid;
      text-align: left;
      margin-top: 9px;
      // border: 1px solid green;
      input {
        padding: 5px;
        font-size: 16px;
        height: 30px;
        margin-top: 5px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
      }
    }
  }
  .file-uploader {
    position: relative;
    display: flex;
    align-items: center;
    // max-width: 521px;
    // margin: 0 auto;
    // border: 1px solid #e0e0e0;
    // border-radius: 4px;
    .input-label {
      overflow: hidden;
      cursor: pointer;
      width: 90px;
      height: 100%;
      padding: 12px 0 10px 0;
      margin-right: 15px;
      border-right: 1px solid #e0e0e0;
      background-image: linear-gradient(to bottom, #f3f3f3, #e0e0e0);

      input[type="file"] {
        position: absolute;
        top: 10px;
        left: 4px;
        // filter: alpha(opacity=0);
        // opacity: 0;
        outline: none;
        background: white;
        cursor: inherit;
        z-index: -1;
      }
    }
    // .input-label:hover {
    //   background: #ececec;
    //   transition: none;
    // }
  }
  .test {
    position: relative;
    width: 252px;
    // margin: 0 auto;
    margin: 0 auto 0 0;
    // border: 1px solid;
    .input-select-box {
      // position: relative;
      width: 100%;
      height: 100%;
      padding: 11px;
      font-size: 16px;
      outline: none;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background-image: linear-gradient(to bottom, #f3f3f3, #e0e0e0);
      -webkit-appearance: none; // 네이티브 외형 감추기
      -moz-appearance: none;
    }
    .caret-icon {
      position: absolute;
      top: 13px;
      right: 10px;
    }
  }
  .input-label,
  .input-select-box:hover {
    background: #ececec;
    transition: none;
  }
  .input-submit-button {
    all: unset;
    width: 103px;
    padding: 13px 0 10px 0;
    border: solid 1px #e0e0e0;
    border-radius: 4px;
    color: #e0e0e0;
  }
  .input-submit-button:hover {
    border: 1px solid;
    color: #313131;
  }
}
</style>
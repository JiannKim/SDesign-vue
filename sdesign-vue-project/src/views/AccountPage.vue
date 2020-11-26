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
          :class="{active : selectedTab === tab}"
        >{{tab.mainText}}</li>
      </ul>
    </div>
    <div class="contents-section">
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
          <div class="file-uploader">
            <label for="files" class="input-label">
              <input class="me" type="file" id="files" ref="file" />
              파일찾기
            </label>
            <!-- <p>{{file}}aa.png</p> -->
          </div>
          <div class="file-submit">
            <div class="select-option">
              <fa-icon icon="caret-down" class="caret-icon" />
              <select name="categories" id="categories" class="select-box">
                <option v-for="option in order" :key="option.index">{{option.text}}</option>
              </select>
            </div>
            <button class="submit-button">등록하기</button>
          </div>
        </div>
        <div class="tab-upload-lists">
          <div class="bottom-title-section">
            <h2>Upload List</h2>
          </div>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <!-- <li v-for="listItem in listItems" :key="listItem._id">{{listItem}}</li> -->
            <!-- <li>{{this.listItems}}</li> -->
            <SoundsListItem v-for="listItem in listItems" :key="listItem._id" :listItem="listItem" />
          </ul>
        </div>

        <!-- 
        <audio class="player" controls ref="player">
          <source
            src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
            ref="source"
          />
        </audio> 
        -->
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
import SoundsListItem from "@/components/common/TheSoundsListItem.vue";
import { fetchSounds } from "@/api";

export default {
  components: {
    SoundsListItem,
  },
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
      // userToken: "",
      tabs,
      selectedTab: "",
      fname: "",
      ftag: "",
      order,
      listItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchSounds();
      console.log("fetchData response =>", data);
      console.log("data.result[].tags =>", data.result[0].tags);
      this.listItems = `${data.result.result}`;
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
.contents-section {
  // border: 1px solid olive;
  .upload {
    display: flex;
    max-width: 521px;
    margin: 0 auto;
    position: relative;
    margin-top: 27px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .tab-content {
    border: none;
    display: block;
    margin-top: 28px;
    .input-container {
      display: grid;
      text-align: left;
      margin-top: 9px;
      input {
        padding: 5px;
        font-size: 16px;
        height: 30px;
        margin-top: 4px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        outline: none;
      }
      input:focus {
        box-shadow: 1px 1px 6px 0 #e0e0e0;
      }
    }
    .file-uploader {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 32px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
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
      .input-label:hover {
        background: #ececec;
        transition: none;
      }
    }
    .file-submit {
      display: flex;
      margin-top: 20px;
      .select-option {
        position: relative;
        width: 252px;
        margin: 0 auto 0 0;
        .select-box {
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
        .select-box:hover {
          background: #ececec;
          transition: none;
        }
      }
      .submit-button {
        all: unset;
        width: 103px;
        padding: 13px 0 10px 0;
        border: solid 1px #e0e0e0;
        border-radius: 4px;
        color: #e0e0e0;
        cursor: pointer;
      }
      .submit-button:hover {
        border: 1px solid;
        color: #313131;
      }
    }
  }
  .tab-upload-lists {
    border: 1px solid violet;
    margin-top: 103px;
    .bottom-title-section {
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 20px;
      h2 {
        font-weight: 100;
        text-align: left;
        max-width: 1170px;
        max-width: 81%;
        margin: 0 auto;
      }
      // share-alt-square
    }
  }
}
</style>
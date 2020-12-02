<template>
  <div class="contents-section">
    <form class="upload form-content" @submit.prevent="submitForm">
      <div class="input-container">
        <label for="fname">제목</label>
        <input type="text" name="fname" id="fname" v-model="title" />
      </div>
      <div class="input-container">
        <label for="ftag">태그</label>
        <input type="text" name="ftag" id="ftag" v-model="tags" />
      </div>
      <div class="file-uploader">
        <label for="files" class="input-label">
          <input type="file" id="files" accept="audio/*" @change="isFile" />
          파일찾기
        </label>
      </div>
      <div class="file-select">
        <div class="select-option">
          <fa-icon icon="caret-down" class="caret-icon" />
          <select
            name="categories"
            id="categories"
            class="select-box"
            v-model="category"
          >
            <option value="">-- 카테고리 선택 --</option>
            <option v-for="option in order" :key="option.index">
              {{ option.text }}
            </option>
          </select>
        </div>
        <button type="submit" class="submit-button">등록하기</button>
      </div>
    </form>
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Upload List</h2>
      </div>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <p>{{ logMessage }}</p>
        <SoundsListItem
          v-for="listItem in listItems"
          :key="listItem._id"
          :listItem="listItem"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchSounds, createSounds } from "@/api";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  components: {
    SoundsListItem,
    LoadingSpinner,
  },
  data() {
    const order = [
      { text: "Walla", value: "walla" },
      { text: "Theme", value: "theme" },
      { text: "Whoosh", value: "whoosh" },
      { text: "Wind", value: "wind" },
      { text: "Cartoon", value: "cartoon" },
    ];
    return {
      title: "",
      tags: "",
      category: "",
      files: "",
      order,
      listItems: [],
      isLoading: false,
      logMessage: "",
    };
  },
  methods: {
    isFile(event) {
      // let file = event.target.files;
      // console.log("file", file);
      const uploadSound = event.target.files[0];
      this.files = window.URL.createObjectURL(uploadSound);
      // this.files = file;
      console.log(this.files);
    },
    async submitForm() {
      const formData = [
        { soundName: this.title },
        { tags: this.tags },
        { category: this.category },
        { userFile: this.files },
      ];
      const token = this.$store.state.token;
      try {
        const { data } = await createSounds(formData, token);
        console.log("createData response =>", data);
      } catch (error) {
        console.log("catch err =>", error);
      }
    },
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchSounds();
      console.log("fetchData response =>", data);
      if (data.result.length === 0) {
        this.isLoading = false;
        this.logMessage = "업로드한 사운드가 없습니다.";
      } else {
        this.isLoading = false;
        this.listItems = data.result;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped lang="scss">
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
  .form-content {
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
    .file-select {
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
  .form-upload-lists {
    margin: 103px 0 90px 0;
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
    }
    ul {
      max-width: 88.5%;
      margin: 0 auto;
      // border-top: 1px solid $primary;
      margin-top: 44px;
    }
  }
}
</style>

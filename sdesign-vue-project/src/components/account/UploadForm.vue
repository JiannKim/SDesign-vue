<template>
  <div class="contents-section">
    <form class="form-content" @submit.prevent="submitForm">
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
          <input
            style="display: none"
            type="file"
            id="files"
            accept="audio/*"
            ref="soundFile"
            @change="isFile"
          />
          파일찾기
        </label>
        <span>{{ this.soundFile }}</span>
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
        <button
          type="submit"
          class="submit-button"
          :disabled="!title || !category || !soundFile"
          :class="{ disabled: !title || !category || !soundFile }"
        >
          등록하기
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { createSounds } from "@/api/posts";

export default {
  data() {
    const order = [
      { text: "Walla", value: "walla" },
      { text: "Theme", value: "theme" },
      { text: "Whoosh", value: "whoosh" },
      { text: "Wind", value: "wind" },
      { text: "Cartoon", value: "cartoon" },
      { text: "Game", value: "game" },
    ];
    return {
      title: "",
      tags: "",
      category: "",
      uploadSound: "",
      order,
      soundFile: "",
    };
  },
  methods: {
    isFile() {
      const files = event.target.files[0];
      this.uploadSound = files;
      this.soundFile = files.name;
    },
    async submitForm() {
      const formData = {
        soundName: this.title,
        tags: this.tags,
        category: this.category,
        userFile: this.uploadSound,
      };
      const token = this.$store.state.token;
      try {
        const { data } = await createSounds(formData, token);
        this.inntForm();
        this.$emit("refresh");
        return data;
      } catch (error) {
        return;
      }
    },
    inntForm() {
      this.title = "";
      this.tags = "";
      this.category = "";
      this.soundFile = "";
    },
  },
};
</script>

<style scoped lang="scss">
.contents-section {
  .form-content {
    max-width: 521px;
    margin: 0 auto;
    position: relative;
    border-radius: 4px;
    border: none;
    display: block;
    margin-top: 70px;
    .input-container {
      display: grid;
      text-align: left;
      margin-top: 9px;
      input {
        padding: 5px;
        font-size: 16px;
        height: 30px;
        margin-top: 4px;
        border: 1px solid $primary;
        border-radius: 4px;
        outline: none;
      }
      input:focus {
        box-shadow: 1px 1px 6px 0 $primary;
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
        background-image: $nomal-select;
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
        width: 50%;
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
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid;
        color: #313131;
      }
      .disabled {
        border: solid 1px #e0e0e0;
        color: #e0e0e0;
      }
    }
  }
}

// 모바일
@media (max-width: 599px) {
  .form-content {
    width: 90%;
  }
}
</style>

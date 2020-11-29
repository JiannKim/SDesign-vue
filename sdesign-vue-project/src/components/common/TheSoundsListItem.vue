<template>
  <li id="sound-list-items-wrapper" :class="{ isMore: !isSelected }">
    <div class="enabled-container">
      <div class="list-remove">
        <button class="list-remove-button" v-if="!isSelected">
          <span></span>
        </button>
      </div>
      <div class="sound-info">
        <div class="play-container">
          <!-- <p>filePath</p> -->
          <vue-plyr id="plyr">
            <audio class="player-box plyr--full-ui" controls ref="player">
              <source :src="listItem.filePath" ref="source" />
            </audio>
          </vue-plyr>
          <!-- <audio class="player-box" controls controlslist="nodownload" ref="player">
            <source :src="listItem.filePath" ref="source" />
          </audio>-->
        </div>
        <div class="icons">
          <div class="sound-like icon">
            <a href="javascript:;">
              <fa-icon icon="heart" />
            </a>
          </div>
          <div class="sound-download icon">
            <a
              :href="listItem.filePath"
              @click.prevent="
                downloadItem(listItem.filePath, listItem.soundName)
              "
            >
              <!-- <p>mp3</p> -->
              <span>mp3</span>
              <fa-icon icon="download" id="dicon" />
            </a>
          </div>
        </div>
        <div class="sound-title">
          <!-- <p>soundName:</p> -->
          <span>Title:</span>
          <p>
            {{ listItem.soundName }}
          </p>
        </div>
        <span
          class="arrow"
          :class="{ active: !isSelected }"
          @click="clicked"
        ></span>
      </div>
    </div>
    <transition name="detail-fade">
      <div class="disabled-container" v-if="!isSelected">
        <div class="detail-parts-1">
          <div>
            <!-- <p>category</p> -->
            <span>Category:</span>
            <p>
              {{ listItem.category }}
            </p>
          </div>
          <div>
            <!-- <p>tags</p> -->
            <span>Tags:</span>
            <p>
              {{ isTag + listItem.tags.join(" #") }}
            </p>
          </div>
        </div>
        <div class="detail-parts-2">
          <!-- <p>accountName</p> -->
          <span>Sound Designer</span>
          <div class="part-sound-designer">
            <span class="designer-img"></span>
            <p>
              {{ listItem.accountId.accountName }}
            </p>
          </div>
        </div>
        <div class="detail-parts-3">
          <!-- <p>share icon</p> -->
          <span>Share</span>
          <a id="isShare" ref="isShare" @click="clipModal()">
            <fa-icon icon="share-alt-square" />
          </a>
          <template>
            <modal name="clip-modal" :width="390" :height="32">
              <div class="clipboard">
                <textarea
                  name=""
                  id="copyPath"
                  v-model="listItem.filePath"
                  cols="35"
                  rows="2"
                >
                </textarea>
                <button @click="isCopied()">copy</button>
              </div>
            </modal>
          </template>
          <!-- </p> -->
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    const isTag = this.listItem.tags.length > 0 ? "#" : "";
    return {
      isTag,
      isSelected: true,
    };
  },
  methods: {
    clicked() {
      this.isSelected = this.isSelected ? false : true;
    },
    // download 버튼 활성화 시켜주는 api
    downloadItem(url, label) {
      Axios.get(url, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "audio/mp3" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
    clipModal() {
      this.$modal.show("clip-modal");
    },
    isCopied() {
      let copyText = document.querySelector("#copyPath");
      copyText.setAttribute("type", "text");
      copyText.select();
      document.execCommand("copy");
      this.$modal.hide("clip-modal");
    },
  },
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
#sound-list-items-wrapper {
  border-bottom: 1px solid $primary;
  position: relative;
  max-width: 100%;
  height: 88px;
  overflow: hidden;
  margin: 0 auto;

  // 요소 제목 스타일
  span {
    font-weight: bold;
  }
  // 요소 내용 스타일
  p {
    color: #a1a1a1;
    display: inline;
  }
}
// sound list info
.enabled-container {
  display: flex;
  // width: 100%;
  height: 87px;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
  }
  .list-remove {
    width: 55px;
    margin-left: 5px;
    .list-remove-button {
      all: unset;
      width: 16px;
      height: 16px;
      cursor: pointer;
      // 삭제 버튼
      span {
        &:before,
        &:after {
          position: relative;
          top: 1px;
          left: -2px;
          transform: rotate(45deg);
          content: "";
          display: block;
          width: 20px;
          height: 2px;
          background-color: rgb(213, 54, 54);
          border-radius: 2px;
        }
        &:after {
          transform: rotate(-45deg);
          position: relative;
          top: -1px;
          left: -2px;
        }
      }
    }
  }
  .sound-info {
    // width: 1209px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .play-container {
      display: flex;
      // width: 659px;
      max-width: 56%;
      min-width: 56%;
    }
  }
  .icons {
    display: flex;
    justify-content: space-between;
    width: 125px;
    .icon,
    a {
      border-radius: 4px;
      background-color: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .sound-like {
      width: 36px;
      height: 28px;
    }
    .sound-download {
      width: 78px;
      height: 28px;
      a {
        width: 100%;
        height: 100%;
        span {
          font-size: 14px;
          margin-right: 7px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
      a:hover {
        background-image: linear-gradient(
          -45deg,
          #00c0ff 0%,
          #ffcf00 49%,
          #fc4f4f 80%,
          #00c0ff 100%
        );
        // 텍스트만
        // background-clip: text;
        // -webkit-background-clip: text;
        // -moz-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // -moz-text-fill-color: transparent;
        animation: slidebg 2s linear infinite;
      }
      @keyframes slidebg {
        to {
          background-position: 50vw;
        }
      }
    }
  }
  .sound-title {
    text-align: left;
    min-width: 200px;
    width: 220px;
    text-overflow: ellipsis;
    padding-top: 2px;
  }
  // 더보기 화살표
  .arrow {
    width: 19px;
    height: 18px;
    position: relative;
    bottom: 0px;
    right: 20px;
    &:before,
    &:after {
      position: absolute;
      top: 10px;
      left: 2px;
      transform: rotate(40deg);
      content: "";
      display: inline-block;
      width: 9px;
      height: 2px;
      background-color: #313131;
      border-radius: 2px;
      transition: 0.4s ease;
    }
    &:after {
      position: absolute;
      transform: rotate(-40deg);
      top: 10px;
      left: 8px;
    }
  }
  .active {
    transform: rotate(0);
    transform: translate(10, -6px);
    &:before {
      transform: rotate(-40deg);
    }
    &:after {
      transform: rotate(40deg);
    }
  }
}

// transition 컨트롤러
.detail-fade-enter-active {
  transition: all 0.4s ease;
}
.detail-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.detail-fade-enter,
.detail-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
// more info -> 디테일 영역
.disabled-container {
  width: 92.8%;
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  .detail-parts-1 {
    width: 445px;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .detail-parts-2,
  .detail-parts-3 {
    max-width: 150px;
    display: flex;
    flex-flow: column;
    span {
      margin-bottom: 5px;
    }
    .part-sound-designer {
      display: flex;
      align-items: center;
      .designer-img {
        display: inline-block;
        text-align: center;
        width: 35px;
        height: 35px;
        background-color: #fff;
        border-radius: 7px;
        border: 1px solid $primary;
        margin-right: 18px;
      }
    }
  }
  .detail-parts-3 {
    a {
      color: $sub-txt;
      font-size: 40px;
      :hover {
        color: $link-txt;
      }
    }
  }
}
// detail section show!
.isMore {
  height: 185px !important;
  background-color: $list-bg;
}
// clip modal show
.clipboard {
  display: flex;
  justify-content: space-between;
  width: 390px;
  margin: 0 auto;
  border-radius: 3px;
  textarea {
    width: 100%;
    border: 1px solid $active-btn;
    // border: none;
    outline: none;
    padding: 0 5px;
  }
  button {
    all: unset;
    border: 1px solid $active-btn;
    background: $nomal-btn;
    outline: none;
    padding: 5px;
    &:hover {
      background: $hover-btn;
    }
    &:active {
      background-color: $active-btn;
    }
  }
}
</style>

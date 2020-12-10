<template>
  <li id="sound-list-items-wrapper" :class="{ isMore: !isClicked }">
    <div class="enabled-container">
      <!-- <div class="list-remove">
        <button
          class="list-remove-button"
          :class="{ on: !isClicked }"
          v-if="!isClicked"
        >
          <span></span>
        </button>
      </div> -->
      <div class="sound-info">
        <div class="play-container">
          <vue-plyr id="plyr">
            <audio class="player-box plyr--full-ui" controls ref="player">
              <source :src="listItem.filePath" ref="source" />
            </audio>
          </vue-plyr>
        </div>
        <div class="enabled-el">
          <div class="icons">
            <div class="sound-like icon">
              <a href="javascript:;">
                <fa-icon icon="heart" />
              </a>
            </div>
            <div class="sound-download icon">
              <a
                href="javascript:;"
                @click.prevent="
                  downloadItem(listItem.filePath, listItem.soundName)
                "
              >
                <span>mp3</span>
                <fa-icon icon="download" id="dicon" />
              </a>
            </div>
          </div>
          <div class="sound-title">
            <span>Title:</span>
            <p>
              {{ listItem.soundName }}
            </p>
          </div>
        </div>
        <span
          class="arrow"
          :class="{ active: !isClicked }"
          @click="clicked"
        ></span>
      </div>
    </div>
    <transition name="detail-fade">
      <div class="disabled-container" v-if="!isClicked">
        <div class="detail-parts-1">
          <div>
            <span>Category:</span>
            <p>
              {{ listItem.category }}
            </p>
          </div>
          <div>
            <span>Tags:</span>
            <p>
              {{ isTag + listItem.tags.join(" #") }}
            </p>
          </div>
        </div>
        <div class="detail-parts-2">
          <span>Sound Designer</span>
          <div class="part-sound-designer">
            <span class="designer-img"></span>
            <p>
              {{ listItem.accountId.accountName }}
            </p>
          </div>
        </div>
        <div class="detail-parts-3">
          <span>Share</span>
          <a id="isShare" ref="isShare" @click="clipModal()">
            <fa-icon icon="share-alt-square" />
          </a>
          <!-- clipboard modal section -->
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
        </div>
        <div class="list-remove">
          <button
            class="list-remove-button"
            v-if="this.listItem.myItem === true"
            @click="submitRemove"
          >
            remove
          </button>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
import { downloadItem, removeItem } from "@/api";

export default {
  data() {
    const isTag = this.listItem.tags.length > 0 ? "#" : "";
    return {
      isTag,
      isClicked: true,
      downloadItem,
    };
  },
  methods: {
    async submitRemove() {
      const data = this.listItem._id;
      const token = this.$store.state.token;
      try {
        await removeItem({ soundId: data }, token);
        this.$router.go(0);
      } catch (error) {
        console.log("err =>", error);
      }
    },
    clicked() {
      this.isClicked = this.isClicked ? false : true;
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
  // width: 100%;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  .arrow {
    cursor: pointer;
  }
  // X
  // .list-remove {
  //   // width: 25px;
  //   // margin-left: 10px;
  //   // padding: 0px 5px;
  //   position: absolute;
  //   // top: 0;
  //   bottom: 10px;
  //   left: 18px;
  //   .list-remove-button {
  //     all: unset;
  //     // width: 16px;
  //     width: 44px;
  //     // height: 16px;
  //     height: 13px;
  //     cursor: pointer;
  //     font-size: 11px;
  //     background-color: rgb(230, 0, 0);
  //     border-radius: 4px;
  //     color: #fff;
  //     // 삭제 버튼
  //     span {
  //       &:before,
  //       &:after {
  //         position: relative;
  //         top: 1px;
  //         left: -2px;
  //         transform: rotate(45deg);
  //         content: "";
  //         display: block;
  //         width: 15px;
  //         height: 2px;
  //         background-color: rgb(213, 54, 54);
  //         border-radius: 2px;
  //       }
  //       &:after {
  //         transform: rotate(-45deg);
  //         position: relative;
  //         top: -1px;
  //         left: -2px;
  //       }
  //     }
  // }
  // }
  .sound-info {
    // width: 1209px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .play-container {
      display: flex;
      min-width: 47%;
      width: 56%;
    }
  }
  .enabled-el {
    display: flex;
    width: 100%;
    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 125px;
      margin: 0 40px 0 20px;
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
      min-width: 25%;
      text-overflow: ellipsis;
      text-align: left;
      line-height: 30px;
      padding-top: 2px;
    }
  }
  // 더보기 화살표
  .arrow {
    width: 20px;
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
  max-width: 97%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: left;
  .detail-parts-1 {
    width: 30%;
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
        margin: 5px 10px 0 0;
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
  .list-remove {
    position: absolute;
    bottom: -20px;
    left: 0;
    text-align: center;
    .list-remove-button {
      all: unset;
      width: 48px;
      height: 15px;
      cursor: pointer;
      font-size: 12px;
      background-color: rgb(230, 0, 0);
      border-radius: 4px;
      color: #fff;
    }
  }
}
// detail section show!
.isMore {
  height: 185px !important;
  background-color: $list-bg;
  border-top: 1px solid $base-color;
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

// 태블릿
@media (max-width: 1020px) {
  .enabled-el {
    .icons {
      .sound-download {
        margin-left: 5px;
        width: 68px;
      }
    }
    .sound-title {
      margin-right: 20px;
    }
  }
}
@media (max-width: 750px) {
  #sound-list-items-wrapper {
    height: 108px;
  }
  .enabled-container {
    height: 105px;
    display: flex;
    flex-flow: column;
    padding: 0 10px;
    .sound-info {
      display: block;
      .play-container {
        width: 90%;
      }
      .enabled-el {
        display: flex;
        flex-flow: row-reverse;
        justify-content: space-between;
        .icons {
          margin: 0;
          .sound-download {
            a:hover {
              animation: slidebg 1s linear infinite;
            }
          }
        }
      }
      .arrow {
        position: absolute;
        top: 20px;
      }
    }
  }
}
// 모바일 반응형
@media (max-width: 440px) {
}
</style>

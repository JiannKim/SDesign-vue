<template>
  <li id="sound-list-items-wrapper">
    <div class="enabled-container">
      <div class="list-remove">
        <button class="list-remove-button">
          <span></span>
        </button>
      </div>
      <div class="sound-info">
        <div class="play-container">
          <!-- <p>filePath</p> -->
          <vue-plyr id="plyr">
            <audio class="player-box" controls playsinline controlslist ref="player">
              <source :src="listItem.filePath" ref="source" />
            </audio>
          </vue-plyr>
          <!-- <audio class="player-box" controls  controlsList="nodownload" ref="player">
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
              @click.prevent="downloadItem(listItem.filePath,listItem.soundName)"
            >
              <p>mp3</p>
              <fa-icon icon="download" id="dicon" />
            </a>
          </div>
        </div>
        <div style="text-align: left; width: 200px;">
          <!-- <p>soundName:</p> -->
          Title: {{listItem.soundName}}
        </div>
        <span class="arrow" :class="{active: !isSelected}" @click="clicked"></span>
      </div>
    </div>
    <div class="disabled-container" :class="{isMore: !isSelected}">
      <div>
        <!-- <p>category</p> -->
        {{listItem.category}}
      </div>
      <div>
        <!-- <p>tags</p> -->
        {{isTag+listItem.tags.join(" #")}}
      </div>
      <div>
        <!-- <p>accountName</p> -->
        {{listItem.accountId.accountName}}
      </div>
    </div>
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
    clicked: function () {
      this.isSelected = this.isSelected ? false : true;
    },
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
  // border: 1px solid powderblue;
  border-bottom: 1px solid $primary;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  max-width: 1275px;
  // height: 87px;
  margin: 0 auto;
}
.enabled-container {
  display: flex;
  width: 100%;
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
    width: 1209px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .play-container {
      display: flex;
      width: 659px;
      .player-box {
        width: 100%;
        color: $primary;
        background-color: $list-bg;
        outline: none;
      }
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
      // cursor: pointer;
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
        p {
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
        animation: slidebg 1.5s linear infinite;
      }
      @keyframes slidebg {
        to {
          background-position: 20vw;
        }
      }
    }
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
.disabled-container {
  // border: 1px solid wheat;
  width: 100%;
  display: none;
}
.isMore {
  display: block;
}
</style>
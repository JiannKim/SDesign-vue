<template>
  <div id="sounds-page-wrapper">
    <!-- <div class="top-player-bar">
      <div class="player-bar-section">
        <div class="play-icons">
          <a href="javascript:;" class="bar-play-icon">
            <fa-icon class="fa-icon" :icon="['fa', 'step-backward']"></fa-icon>
          </a>
          <a
            href="javascript:;"
            class="bar-play-icon"
          >
            <fa-icon :icon="['fa', 'play']"></fa-icon>
          </a>
          <a href="javascript:;" class="bar-play-icon">
            <fa-icon class="fa-icon" :icon="['fa', 'step-forward']"></fa-icon>
          </a>
        </div>
        <a href="javascript:;">
          PLAY ALL
        </a>
        <a href="javascript:;" class="bar-volume-icon">
          <fa-icon :icon="['fa', 'volume-up']"></fa-icon>
        </a>
        <input
          type="range"
          id="js-Range"
          min="0.1"
          max="10.0"
          value="3"
          step="0.1"
        />
      </div>
      <button class="buy-button">
        구매 하기
      </button>
      <div class="top-bar-progress"></div>
    </div> -->
    <div class="sounds-page-contents">
      <h1 class="page-title">All Sounds ({{ totalCount }})</h1>
      <SelectBox />
      <div class="contents-player">
        <div class="form-upload-lists">
          <ul>
            <SoundsListItem
              v-for="listItem in listItems"
              :key="listItem.index"
              :listItem="listItem"
            />
          </ul>
          <infinite-loading
            slot="spinner"
            spinner=""
            @infinite="infiniteHandler"
          >
            <span slot="spinner">
              <LoadingSpinner />
            </span>
            <div slot="no-more" class="log-msg">{{ logMessage }}</div>
            <div slot="no-results" class="log-msg">{{ logMessage }}</div>
          </infinite-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchSounds } from "@/api/posts";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import SelectBox from '@/components/common/SelectBox.vue';

export default {
  components: {
    LoadingSpinner,
    SoundsListItem,
    SelectBox
  },
  data() {
    return {
      totalCount: 0,
      logMessage: "",
      listItems: [],
      paginator: {},
    };
  },
 
  methods: {
    async infiniteHandler($state) {
      try {
        await setTimeout(async () => {
          const token = this.$store.state.token;
          const { data } = await fetchSounds(token, this.paginator.next);
          if (data.totalCount === 0) {
            this.logMessage = "등록된 사운드가 없네요 :)";
          }
          if (data.result.length) {
            this.listItems = this.listItems.concat(data.result);
            this.paginator = data.paginator;
            this.totalCount = data.totalCount;
            this.logMessage = "목록의 끝입니다 :)";
            $state.loaded();
          } else {
            $state.complete();
          }
        }, 200);
      } catch (err) {
        return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
#sounds-page-wrapper {
  width: 100%;
  height: auto;
  button {
    cursor: pointer;
  }
}
// 상단 플레이 바 영역
// .top-player-bar {
//   width: 84%;
//   min-width: 700px;
//   height: 66px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // border: 1px solid rgb(98, 0, 255);
// }
// .player-bar-section,
// .play-icons {
//   width: 520px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .play-icons {
//     width: 150px;
//   }
// }
// .bar-play-icon {
//   width: 43px;
//   height: 43px;
//   font-size: 20px;
//   background-color: #fff;
//   border: 1px solid #a1a1a1;
//   border-radius: 9px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   outline: none;
//   margin: 5px;
//   color: #a1a1a1;
// }
// .bar-play-icon:nth-child(1),
// .bar-play-icon:nth-child(3) {
//   width: 33px;
//   height: 33px;
//   .fa-icon {
//     font-size: 14px;
//   }
// }
// .bar-play-icon:hover {
//   background-color: #000;
//   border: 1px solid #a1a1a1;
//   color: #fff;
// }
// .bar-volume-icon {
//   border: none;
//   width: 36px;
// }
// button,
// a {
//   width: 112px;
//   height: 37px;
//   background-color: #fff;
//   border: 1px solid #a1a1a1;
//   border-radius: 17px;
//   color: #a1a1a1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font: {
//     size: 18px;
//     weight: 600;
//   }
// }
// .buy-button {
//   border: 1px solid #313131;
//   border-radius: 5px;
//   color: #313131;
// }
// .top-bar-progress {
//   height: 4px;
//   width: 100%;
//   transition: all 0.3s ease;
//   position: absolute;
//   left: 0;
//   top: 140px;
//   background-color: #2a50717d;
// }

.sounds-page-contents {
  width: 80%;
  margin: 0 auto;
  .form-upload-lists {
    margin: 73px 0 90px 0;
    ul {
      // max-width: 88.5%;
      // margin: 0 auto;
      border-top: 1px solid $primary;
      // margin-top: 44px;
    }
    .log-msg {
      padding: 20px 0;
    }
  }
}
</style>

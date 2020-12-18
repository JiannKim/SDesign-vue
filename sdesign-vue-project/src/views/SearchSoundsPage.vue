<template>
  <div id="sounds-page-wrapper">
    <div class="sounds-page-contents">
      <h1 class="page-title">Search Sounds ({{ totalCount }})</h1>
      <div class="contents-player">
        <div class="form-upload-lists">
          <ul>
            <SoundsListItem
              v-for="listItem in listItems"
              :key="listItem.index"
              :listItem="listItem"
            />
          </ul>
          <!-- <p class="log-msg">{{ logMessage }}</p>
          <LoadingSpinner v-if="isLoading" /> -->
          <infinite-loading
            slot="append"
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
import { searchSounds } from "@/api";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
// import test from "lodash";

export default {
  components: {
    LoadingSpinner,
    SoundsListItem,
  },
  data() {
    return {
      opOne: [
        { text: "Most recent", value: "Most recent" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      opTwo: [
        { text: "Any length", value: "Any length" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      opThree: [
        { text: "All libraries", value: "All libraries" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      totalCount: "",
      logMessage: "",
      isLoading: false,
      listItems: [],
      paginator: {},
      keyword: "",
    };
  },
  methods: {
    async infiniteHandler($state) {
      try {
        console.log(this.$store.state.searchtext);
        this.keyword = this.$store.state.searchtext;
        const { data } = await searchSounds(this.keyword, this.paginator.next);
        if (data.result.length) {
          this.listItems = this.listItems.concat(data.result);
          this.paginator = data.paginator;
          this.totalCount = data.totalCount;
          this.logMessage = "목록의 끝입니다 :)";
          $state.loaded();
        } else {
          this.logMessage = "검색된 사운드가 없네요 :)";
          $state.complete();
        }
      } catch (error) {
        return error;
      }
    },
  },
  created() {
    this.infiniteHandler();
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
.sounds-page-contents {
  width: 80%;
  margin: 0 auto;
  .form-upload-lists {
    margin: 73px 0 90px 0;
    ul {
      border-top: 1px solid $primary;
    }
    .log-msg {
      padding-top: 20px;
    }
  }
}
// 모바일 반응형
@media (max-width: 660px) {
  .sounds-page-contents {
    .form-upload-lists {
      margin: 0;
    }
  }
}
</style>

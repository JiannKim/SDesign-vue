<template>
  <div id="sounds-page-wrapper">
    <div class="sounds-page-contents">
      <h1 class="page-title">Search Sounds ({{ totalCount }})</h1>
      <div class="contents-player">
        <div class="form-upload-lists">
          <ul>
            <SoundsListItem
              v-for="listItem in listItems"
              :key="listItem"
              :listItem="listItem"
            />
          </ul>
          <LoadingSpinner v-if="isLoading" />
          <p class="log-msg">{{ logMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchSounds } from "@/api/posts";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import _ from "lodash";

export default {
  components: {
    LoadingSpinner,
    SoundsListItem,
  },
  data() {
    return {
      // opOne: [
      //   { text: "Most recent", value: "Most recent" },
      //   { text: "A", value: "A" },
      //   { text: "B", value: "B" },
      //   { text: "C", value: "C" },
      // ],
      // opTwo: [
      //   { text: "Any length", value: "Any length" },
      //   { text: "A", value: "A" },
      //   { text: "B", value: "B" },
      //   { text: "C", value: "C" },
      // ],
      // opThree: [
      //   { text: "All libraries", value: "All libraries" },
      //   { text: "A", value: "A" },
      //   { text: "B", value: "B" },
      //   { text: "C", value: "C" },
      // ],
      totalCount: "",
      logMessage: "",
      isLoading: false,
      listItems: [],
      paginator: {},
      keyword: "",
    };
  },
  watch: {
    "$store.state.searchtext": {
      handler(value) {
        this.keyword = value;
        this.listItems = [];
        this.paginator = {};
        this.fetchSearchData();
      },
    },
  },
  methods: {
    async fetchSearchData() {
      try {
        this.isLoading = true;
        const token = this.$store.state.token;
        this.keyword = this.$store.state.searchtext;
        const { data } = await searchSounds(
          token,
          this.keyword,
          this.paginator.next
        );
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        this.isLoading = false;
        this.listItems = this.listItems.concat(data.result);
        if (this.paginator.hasNext === false) {
          this.totalCount = data.totalCount;
          this.logMessage = "목록의 끝입니다 :)";
          if (data.totalCount === 0) {
            this.logMessage = "검색된 사운드가 없네요 :)";
          }
        }
      } catch (e) {
        return;
      }
    },
    async debounceScroll() {
      if (this.paginator.hasNext === true) {
        const scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        const scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight > scrollHeight - 500) {
          await this.fetchSearchData();
        }
      }
    },
  },
  created() {
    this.fetchSearchData();
    window.addEventListener("scroll", _.debounce(this.debounceScroll, 200));
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
      padding: 20px 0;
    }
  }
}
// 모바일 반응형
@media (max-width: 660px) {
  .sounds-page-contents {
    .form-upload-lists {
      margin: 0;
    }
    .page-title {
      padding-bottom: 50px;
    }
  }
}
</style>

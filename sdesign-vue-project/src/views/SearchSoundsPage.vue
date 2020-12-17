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
            <div slot="no-more" class="log-msg">목록의 끝입니다 :)</div>
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
  // watch: {
  //   "$store.state.searchtext": {
  //     handler(value) {
  //       console.log("watch", value);
  //       this.keyword = value;
  //       console.log(value);
  //     // const { data } = await searchSounds(value, this.paginator.next);
  //     // this.paginator = data.paginator;
  //     // this.totalCount = data.totalCount;
  //     // this.listItems = data.result;
  //     // this.listItems = this.listItems.concat(data.result);
  //     // console.log("change value =>", value);
  //     // this.infiniteHandler();
  //     // if (data.totalCount > 0) {
  //     //   this.paginator = data.paginator;
  //     //   this.logMessage = "";
  //     // } else if (data.totalCount === 0) {
  //     //   this.logMessage = "검색 결과가 없습니다.";
  //     //   this.listItems = [];
  //     // }
  //     // this.infiniteHandler();
  //     // this.$router.go();
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  // watch: {
  //   "$store.state.searchtext": {
  //     async handler(value) {
  //       this.keyword = value;
  //       const data = await this.$store.dispatch(
  //         "SEARCH",
  //         this.$store.state.searchtext
  //       );
  //       this.paginator = data.paginator;
  //       this.listItems = data.result;
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    // async submitSearch() {
    //   try {
    //     console.log(this.paginator);
    //     const { data } = await searchSounds(this.keyword, this.paginator.next);
    //     this.totalCount = data.totalCount;
    //     this.paginator = data.paginator;
    //     console.log(this.paginator);
    //     console.log(data);
    //     // this.listItems = data.result;
    //     this.listItems = this.listItems.concat(data.result);
    //     if (this.paginator.hasNext === false) {
    //       this.isLoading = false;
    //       this.logMessage = "목록의 끝입니다 :)";
    //       if (this.totalCount === 0) {
    //         this.logMessage = "사운드를 등록해주세요.";
    //       }
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // async debounceScroll() {
    //   if (this.paginator.hasNext == true) {
    //     const scrollHeight = Math.max(
    //       document.documentElement.scrollHeight,
    //       document.body.scrollHeight
    //     );
    //     const scrollTop = Math.max(
    //       document.documentElement.scrollTop,
    //       document.body.scrollTop
    //     );
    //     const clientHeight = document.documentElement.clientHeight;
    //     if (scrollTop + clientHeight > scrollHeight - 500) {
    //       console.log("스크롤 리서치");
    //       await this.submitSearch();
    //     }
    //   }
    // },

    async infiniteHandler($state) {
      try {
        console.log("ddddd");
        console.log(this.$store.state.searchtext);
        this.keyword = this.$store.state.searchtext;
        const { data } = await searchSounds(this.keyword, this.paginator.next);
        if (data.result.length) {
          this.listItems = this.listItems.concat(data.result);
          this.paginator = data.paginator;
          this.totalCount = data.totalCount;
          $state.loaded();
        } else {
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
  // created() {
  //   this.submitSearch();
  //   window.addEventListener("scroll", test.debounce(this.debounceScroll, 200));
  // },
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

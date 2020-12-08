<template>
  <!-- 검색 토글 -->
  <div id="side-tab-search-wrapper">
    <input
      type="checkbox"
      class="tab-search-button"
      @click="searchModalMounted"
    />
    <img
      class="search-icon"
      src="https://i.ibb.co/pWW7yMx/search-Icon-02.png"
      alt="search button"
    />
    <modal name="search-modal" class="search-modal">
      <form id="search" @submit.prevent="submitSearch">
        <span>
          <img
            class="search-icon"
            src="https://i.ibb.co/QDNng2N/search-Icon-03.png"
            alt="serch-Icon"
          />
        </span>
        <input
          type="text"
          class="search-input"
          placeholder="Search for sound effects"
          v-model="keywordItem"
          v-focus
        />
      </form>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywordItem: "",
    };
  },
  methods: {
    async submitSearch() {
      try {
        const data = await this.$store.dispatch("SEARCH", this.keywordItem);
        console.log(data);
        this.$router.push({
          path: "/sounds",
          query: { keyword: this.keywordItem },
        });
        this.keywordItem = "";
        this.$modal.hide("search-modal");
      } catch (error) {
        console.log(error);
      }
    },
    searchModalMounted() {
      this.$modal.show("search-modal");
    },
  },
};
</script>

<style scoped lang="scss">
#side-tab-search-wrapper {
  /* ??? */
  display: none;
  position: relative;
  width: 94%;
  margin: 0 30px;
  z-index: 1;
  user-select: none;
  -webkit-user-select: none;
  .tab-search-button {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: -20px;
    right: 0px;
    cursor: pointer;
    opacity: 0; /* hide checkbox */
    z-index: 2; /* 돋보기 앞에 배치 */
    -webkit-touch-callout: none;
  }
}
// 돋보기 검색 버튼 아이콘
.search-icon {
  position: absolute;
  top: -20px;
  right: 0;
  width: 33px;
  display: none;
}
// 검색 모달 창
#search {
  position: fixed;
  // top: 75px;
  // left: 0;
  width: 100%;
  // height: 42px;
  // overflow: hidden;
  // background: rgba(255, 255, 255, 0.836);
  // -webkit-font-smoothing: antialiased;
  // transform-origin: 0% 0%;
  padding: 20px 0;
  transform: translate(0%, 2%);
  .search-input {
    width: 90%;
    height: 45px;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    outline: none;
    padding: 7px 10px 7px 40px;
    box-sizing: border-box;
    background-color: #f3f3f3;
    &:focus {
      box-shadow: 0 0 5px 1px #a550a6;
    }
  }
  span {
    position: relative;
    .search-icon {
      position: absolute;
      top: 27%;
      left: 0;
      padding-left: 7px;
      width: 16px;
      z-index: 2;
    }
  }
}

/* media Quary */

/* 태블릿 */
@media (max-width: 1020px) {
  #side-tab-search-wrapper {
    display: block;
  }
  .search-icon {
    display: flex;
    justify-content: center;
    margin: 5px;
  }
}
/* 모바일 */
@media (max-width: 440px) {
}
</style>

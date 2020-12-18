<template>
  <div>
    <h1>페이버릿 탭 섹션 입니다. (개발중)</h1>
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Favorites List ({{ totalCount }})</h2>
      </div>
      <ul>
        <p>{{ logMessage }}</p>
        <SoundsListItem
          v-for="listItem in listItems"
          :key="listItem.index"
          :listItem="listItem"
        />
      </ul>
      <infinite-loading
        slot="spinner"
        spinner="waveDots"
        @infinite="infiniteHandler"
      >
        <span slot="spinner"><LoadingSpinner /></span>
        <div slot="no-more">목록의 끝입니다 :)</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { fetchMyFavorite } from "@/api";

export default {
  components: {
    SoundsListItem,
    LoadingSpinner,
  },
  data() {
    return {
      logMessage: "",
      totalCount: 0,
      listItems: [],
      paginator: {},
    };
  },
  methods: {
    async infiniteHandler($state) {
      try {
        const token = this.$store.state.token;
        const { data } = await fetchMyFavorite(token, this.paginator.next);
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        if (this.totalCount === 0) {
          this.isLoading = false;
          this.logMessage = "저장된 사운드가 없습니다.";
        }
        if (data.result.length) {
          this.listItems = this.listItems.concat(data.result);
          this.paginator = data.paginator;
          $state.loaded();
        } else {
          $state.complete();
        }
      } catch (error) {
        return error;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-upload-lists {
  margin: 103px 0 90px 0;
  .bottom-title-section {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    h2 {
      font-weight: 100;
      text-align: left;
      // max-width: 1170px;
      // max-width: 81%;
      max-width: 88%;
      margin: 0 auto;
    }
  }
  ul {
    max-width: 88.5%;
    margin: 0 auto;
    // border-top: 1px solid $primary;
    margin-top: 44px;
  }
  .infinite-loading-container {
    padding-top: 20px;
  }
}
</style>

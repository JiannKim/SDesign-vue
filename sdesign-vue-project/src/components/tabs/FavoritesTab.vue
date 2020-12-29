<template>
  <div>
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Favorites List ({{ totalCount }})</h2>
      </div>
      <ul>
        <SoundsListItem
          v-for="listItem in listItems"
          :key="listItem.index"
          :listItem="listItem"
          @reload="isReload"
        />
        <LoadingSpinner v-if="loading" />
      </ul>
      <infinite-loading
        slot="spinner"
        spinner="waveDots"
        @infinite="infiniteHandler"
      >
        <span slot="spinner"><LoadingSpinner /></span>
        <div slot="no-more" class="log-msg">{{ logMessage }}</div>
        <div slot="no-results" class="log-msg">{{ logMessage }}</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { fetchMyFavorite } from "@/api/posts";

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
      loading: false,
    };
  },
  watch: {
    loading() {
      this.infiniteHandler();
    },
  },
  methods: {
    async infiniteHandler($state) {
      try {
        const token = this.$store.state.token;
        const { data } = await fetchMyFavorite(token, this.paginator.next);
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        if (data.totalCount === 0) {
          this.logMessage = "좋아하는 사운드를 수집하세요 :)";
        }
        if (data.result.length) {
          this.loading = false;

          this.listItems = this.listItems.concat(data.result);
          this.paginator = data.paginator;
          this.logMessage = "목록의 끝입니다 :)";
          $state.loaded();
        } else {
          $state.complete();
        }
      } catch (error) {
        return;
      }
    },
    isReload() {
      this.listItems = [];
      this.loading = true;
    },
  },
};
</script>

<style scoped lang="scss">
.form-upload-lists {
  margin: 70px 0 90px 0;
  .bottom-title-section {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    h2 {
      font-weight: 100;
      text-align: left;
      max-width: 88%;
      margin: 0 auto;
    }
  }
  ul {
    max-width: 88.5%;
    margin: 0 auto;
    margin-top: 44px;
  }
  .log-msg {
    padding-top: 20px;
  }
}
</style>

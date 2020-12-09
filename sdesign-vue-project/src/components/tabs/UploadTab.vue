<template>
  <div>
    <UploadForm @refresh="fetchMyData" />
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Upload List ({{ totalCount }})</h2>
      </div>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <p>{{ logMessage }}</p>
        <SoundsListItem
          v-for="listItem in listItems"
          :key="listItem.index"
          :listItem="listItem"
          @refresh="fetchMyData"
        />
      </ul>
      <infinite-loading
        slot="append"
        spinner="waveDots"
        @infinite="infiniteHandler"
      >
        <div slot="no-more">목록의 끝입니다 :)</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import { fetchMySounds } from "@/api";
import UploadForm from "@/components/account/UploadForm.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";

export default {
  components: {
    UploadForm,
    SoundsListItem,
    LoadingSpinner,
  },
  data() {
    return {
      totalCount: "",
      logMessage: "",
      isLoading: false,
      listItems: [],
      paginator: {},
    };
  },
  methods: {
    // async fetchMyData() {
    //   const token = this.$store.state.token;
    //   try {
    //     this.isLoading = true;
    //     const { data } = await fetchMySounds(token, this.paginator.next);
    //     this.totalCount = data.totalCount;
    //     this.paginator = data.paginator;
    //     // console.log("fetchMyData response =>", data);
    //     if (data.result.length === 0) {
    //       this.isLoading = false;
    //       this.logMessage = "업로드된 사운드가 없습니다.";
    //     } else {
    //       for (let i = 0; i < data.result.length; i++) {
    //         data.result[i].myItem = true;
    //       }
    //       this.isLoading = false;
    //       this.listItems = data.result;
    //       // this.paginator = data.paginator;
    //     }
    //   } catch (error) {
    //     console.log("this ", error);
    //   }
    // },
    async infiniteHandler($state) {
      try {
        const token = this.$store.state.token;
        const { data } = await fetchMySounds(token, this.paginator.next);
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        if (data.result.length === 0) {
          this.isLoading = false;
          this.logMessage = "업로드된 사운드가 없습니다.";
        }
        if (data.result.length) {
          for (let i = 0; i < data.result.length; i++) {
            data.result[i].myItem = true;
          }
          // this.isLoading = false;
          // this.listItems = data.result;
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
  // created() {
  //   this.fetchMyData();
  // },
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
      max-width: 1170px;
      max-width: 81%;
      margin: 0 auto;
    }
  }
  ul {
    max-width: 88.5%;
    margin: 0 auto;
    // border-top: 1px solid $primary;
    margin-top: 44px;
  }
}
</style>

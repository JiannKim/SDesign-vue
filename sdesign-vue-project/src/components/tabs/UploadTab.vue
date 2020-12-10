<template>
  <div>
    <UploadForm />
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Upload List ({{ totalCount }})</h2>
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
import { fetchMySounds } from "@/api";
import UploadForm from "@/components/account/UploadForm.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

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
      // title: "",
    };
  },
  // watch: {
  //   "$route.query.title": {
  //     async handler(value) {
  //       // const token = this.$store.state.token;
  //       // const { data } = await fetchMySounds(token, this.paginator.next);

  //       this.title = value;
  //       console.log(value);
  //       // this.$router.go();
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    // async fetchMyData() {
    //   const token = this.$store.state.token;
    //   console.log("패치데이터가 리프레시로 실행");
    //   try {
    //     //     this.isLoading = true;
    //     const { data } = await fetchMySounds(token, this.paginator.next);
    //     console.log("어웨이트 실행");
    //     this.listItems = this.listItems.concat;
    //     //     this.totalCount = data.totalCount;
    //     //     this.paginator = data.paginator;
    //     //     // console.log("fetchMyData response =>", data);
    //     //     if (data.result.length === 0) {
    //     //       this.isLoading = false;
    //     //       this.logMessage = "업로드된 사운드가 없습니다.";
    //     //     } else {
    //     //       for (let i = 0; i < data.result.length; i++) {
    //     //         data.result[i].myItem = true;
    //     //       }
    //     //       this.isLoading = false;
    //     //       this.listItems = data.result;
    //     //       // this.paginator = data.paginator;
    //     //     }
    //   } catch (error) {
    //     //     console.log("this ", error);
    //   }
    // },
    async infiniteHandler($state) {
      try {
        const token = this.$store.state.token;
        const { data } = await fetchMySounds(token, this.paginator.next);
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        if (this.totalCount === 0) {
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

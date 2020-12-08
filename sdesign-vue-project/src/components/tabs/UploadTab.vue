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
          :key="listItem._id"
          :listItem="listItem"
          @refresh="fetchMyData"
        />
      </ul>
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
    };
  },
  methods: {
    async fetchMyData() {
      const token = this.$store.state.token;
      try {
        this.isLoading = true;
        let { data } = await fetchMySounds(token);
        console.log("fetchMyData response =>", data);
        if (data.result.length === 0) {
          this.isLoading = false;
          this.logMessage = "업로드된 사운드가 없습니다.";
        } else {
          for (let i = 0; i < data.result.length; i++) {
            data.result[i].myItem = true;
          }
          this.isLoading = false;
          this.listItems = data.result;
          this.totalCount = data.totalCount;
        }
      } catch (error) {
        console.log("this ", error);
      }
    },
  },
  created() {
    this.fetchMyData();
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

<template>
  <div>
    <UploadForm @refresh="reloadUpdate" />
    <div class="form-upload-lists">
      <div class="bottom-title-section">
        <h2>Upload List ({{ totalCount }})</h2>
      </div>
      <ul>
        <SoundsListItem
          v-for="listItem in listItems"
          :key="listItem.index"
          :listItem="listItem"
          @refresh="reloadRemove"
        />
      </ul>
      <LoadingSpinner v-if="isLoading" />
      <p class="log-msg">{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
import { fetchMySounds } from "@/api";
import UploadForm from "@/components/account/UploadForm.vue";
import SoundsListItem from "@/components/common/SoundsListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import test from "lodash";
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
    async fetchMyData() {
      const token = this.$store.state.token;
      try {
        this.isLoading = true;
        const { data } = await fetchMySounds(token, this.paginator.next);
        this.totalCount = data.totalCount;
        this.paginator = data.paginator;
        for (let i = 0; i < data.result.length; i++) {
          data.result[i].myItem = true;
        }
        this.isLoading = false;
        this.listItems = this.listItems.concat(data.result);
        if (this.paginator.hasNext == false) {
          this.isLoading = false;
          this.logMessage = "목록의 끝입니다 :)";
          if (this.totalCount === 0) {
            this.logMessage = "사운드를 등록해주세요.";
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    async debounceScroll() {
      if (this.paginator.hasNext == true) {
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
          await this.fetchMyData();
        }
      }
    },
    remove(index) {
      this.$delete(this.listItems, index);
    },
    async reloadRemove() {
      const soundid = this.$store.state.soundid;
      let id;
      for (let i = 0; i < this.listItems.length; i++) {
        if (this.listItems[i]._id === soundid) {
          id = i;
          break;
        }
      }
      this.remove(id);
    },
    reloadUpdate() {
      this.$router.go();
    },
  },
  created() {
    this.fetchMyData();
    window.addEventListener("scroll", test.debounce(this.debounceScroll, 200));
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

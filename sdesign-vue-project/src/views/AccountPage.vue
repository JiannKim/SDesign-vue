<template>
  <div id="account-page-wrapper">
    <h1 class="page-title">My Page</h1>

    <div class="upload-section">
      <h3>Upload List</h3>
      <hr />
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import { fetchSounds } from "@/api";

export default {
  data() {
    return {
      // key: value,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetchSounds();
      console.log("fetchData response =>", response);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>
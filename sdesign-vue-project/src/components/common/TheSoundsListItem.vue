<template>
  <li>
    <div>
      <p>soundName</p>
      {{listItem.soundName}}
    </div>
    <div>
      <p>category</p>
      <!-- {{listItem.category}} -->
    </div>
    <div>
      <p>tags</p>
      <!-- {{listItem.tags}} -->
    </div>
    <div>
      <p>accountName</p>
      <!-- {{listItem.accountName}} -->
    </div>
  </li>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
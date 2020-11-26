<template>
  <li>
    <div>
      <p>filePath</p>
      <audio class="player" controls ref="player">
        <source :src="listItem.filePath" ref="source" />
      </audio>
    </div>
    <div>
      <p>soundName</p>
      {{listItem.soundName}}
    </div>
    <div>
      <p>category</p>
      {{listItem.category}}
    </div>
    <div>
      <p>tags</p>
      {{isTag+listItem.tags.join(" #")}}
    </div>
    <div>
      <p>accountName</p>
      {{listItem.accountId.accountName}}
    </div>
  </li>
</template>

<script>
export default {
  data() {
    const isTag = this.listItem.tags.length > 0 ? "#" : "";
    return {
      isTag,
    };
  },
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  color: #e0e0e0;
  font-size: 12px;
}
</style>
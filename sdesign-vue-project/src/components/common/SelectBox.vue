<template>
  <div class="contents-select">
    <select name="abcd" id="op1">
      <option
        v-for="option in opOne"
        :key="option.id"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
    <select name="abcd" id="op2">
      <option
        v-for="option in opTwo"
        :key="option.id"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
    <select name="abcd" id="op3">
      <option
        v-for="option in opThree"
        :key="option.id"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opOne: [
        { text: "Most recent", value: "Most recent" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      opTwo: [
        { text: "Any length", value: "Any length" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
      opThree: [
        { text: "All libraries", value: "All libraries" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
    }
  },
}
</script>

<style lang="scss">
.contents-select {
  max-width: 585px;
  display: flex;
  justify-content: space-between;
  // justify-content: space-around;
  margin: 70px 0;
  select {
    width: 175px;
    height: 43px;
    padding: 0 13px;
    border: none;
    border-radius: 4px;
    background: $dis-select;
    color: #fff;
    appearance: none;
    // margin-right: 10px;
    outline: none;
    font: {
      size: 14px;
      weight: 600;
    }
    /* Select caret Icon Background */
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: 96% center;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMA/ROrKqImGsYXwa++piJlNALv5+bQyp2XUg4HhoQSotHMAAAAzUlEQVRYw+3RuQ7CMBBF0XGchC37voD//zMxUswIOQXOUFC8W440p3mEEEIIIYTQd0VVvO7d17iKDnD1PDRtUpBXkbTNMNfBYNUZW1Z4XmZsXRUM3o3ZE1PrvXoEg5PZxPTDu27nKRgs1fZ6TXc8VYZvfDMssrelD+x88sT47C63E5FEPMe+JxfZ084LFzWLEo+7aLd137t99YVILHIqt55IzJXvyUX2IhIXJertJc6Ti74nF9mTi6Oy3sieuKXUulzol9U1IYQQQgj9fU8Znhyj7M/eQgAAAABJRU5ErkJggg==");
    &:hover {
      background: $en-select;
      /* Select caret Icon Background */
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: 96% center;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMA/ROrKqImGsYXwa++piJlNALv5+bQyp2XUg4HhoQSotHMAAAAzUlEQVRYw+3RuQ7CMBBF0XGchC37voD//zMxUswIOQXOUFC8W440p3mEEEIIIYTQd0VVvO7d17iKDnD1PDRtUpBXkbTNMNfBYNUZW1Z4XmZsXRUM3o3ZE1PrvXoEg5PZxPTDu27nKRgs1fZ6TXc8VYZvfDMssrelD+x88sT47C63E5FEPMe+JxfZ084LFzWLEo+7aLd137t99YVILHIqt55IzJXvyUX2IhIXJertJc6Ti74nF9mTi6Oy3sieuKXUulzol9U1IYQQQgj9fU8Znhyj7M/eQgAAAABJRU5ErkJggg==");
    }
  }
}

// 모바일 반응형
@media (max-width: 660px) {
  .sounds-page-contents {
    .contents-select {
      flex-flow: column;
      margin: 70px 0 50px 0;
      select {
        min-width: 100%;
        margin-bottom: 10px;
      }
    }
    .form-upload-lists {
      margin: 0;
    }
  }
}
</style>
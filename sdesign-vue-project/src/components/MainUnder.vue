<template>
  <div id="main-under-wrapper">
    <span class="under-darkness-box">
      <h1>이 곳은 UNDER 섹션입니다.</h1>
    </span>
    <div class="under-image">
      <img src="https://i.ibb.co/0VJNmhX/sdesign-under-img-tiny.png" alt="sdesign-under-image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-under-wrapper {
  width: 100%;
  height: auto;
  /* background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  position: relative;
  top: 60px;
  overflow: hidden;
  margin: 0 0 50px 0;

  border: 1px solid pink;
}

.under-darkness-box {
  width: 40%;
  height: 823px;
  display: flex;
  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}

.under-image {
  width: 100%;
  height: auto;
  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}

.under-image img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
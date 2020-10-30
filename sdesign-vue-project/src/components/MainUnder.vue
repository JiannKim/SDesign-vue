<template>
  <div id="main-under-section-wrapper">
    <div class="under-bgimage">
      <!-- <img src="https://i.ibb.co/0VJNmhX/sdesign-under-img-tiny.png" alt="sdesign-under-image" /> -->
    </div>
    <!-- 좌측 다크니스 박스 -->
    <div class="under-darkness-box"></div>
    <!-- 컨텐츠 영역 -->
    <div class="under-section-contents">
      <div class="contents-title">
        <h1 style="font-size: 42px">
          신뢰받는
          <br />선도 브랜드,
          <br />대행사 네트워크.
        </h1>
      </div>
      <div class="contents-clients-logo">
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
        <img src="https://i.ibb.co/0MfwqfB/mago.png" alt="mago" border="0" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-under-section-wrapper {
  width: 100%;
  height: 823px;
  position: relative;
  top: 60px;
  left: 0;
  overflow: hidden;
  margin: 0 0 80px 0;
  display: flex;
  align-items: center;

  border: 1px solid pink;
}

.under-bgimage {
  width: 100%;
  background-image: url("../assets/sdesign_under_img_tiny.png");
  background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: fixed;
  background-position: top right;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  /* left: 33%;
  width: 67%; */
}

.under-bgimage::after {
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -2px;
  width: 100%;
  content: "";
  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
}

/* 좌측 다크니스 박스 */
.under-darkness-box {
  width: 40%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}

.under-section-contents {
  max-width: 80%;
  max-height: 823px;
  margin: 0 auto;
  /* padding: 0 25px 88px; */
  text-align: left;
  position: relative;
  /* top: 9%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contents-title {
  width: 24%;
  height: 100%;
  padding: 0 8% 10%;
  word-break: keep-all;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: middle;
  color: #fff;
}

.contents-clients-logo {
  width: 60%;
  padding: 1% 2.5%;
}
/* 임시 고양이 이미지 */
.contents-clients-logo img {
  width: 25%;
}

/* 반응형 */

/* 웹 */
@media (max-width: 1600px) {
}
@media (max-width: 1500px) {
}
@media (max-width: 1250px) {
}

/* 태블릿 */
@media (max-width: 1020px) {
  #main-under-section-wrapper {
    /* width: 100%; */
    height: 723px;
    /* position: relative;
  top: 60px;
  left: 0;
  overflow: hidden;
  margin: 0 0 80px 0;
  display: flex;
  align-items: center; */
  }
}
@media (max-width: 750px) {
  #main-under-section-wrapper {
    height: 623px;
    top: 0px;
  }
  .contents-title h1 {
    font-size: 36px !important;
  }
}
@media (max-width: 599px) {
  .under-darkness-box {
    /* width: 100%;
    height: 40%; */
    display: none;
    /* position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); */
  }
  .under-section-contents {
    /* max-width: 80%; */
    /* max-height: 823px; */
    /* margin: 0 auto; */
    /* padding: 0 25px 88px; */
    /* text-align: left; */
    /* position: relative; */
    /* top: 9%; */
    /* display: flex; */
    flex-flow: column;
    /* justify-content: space-between; */
    /* align-items: center; */
  }
  .contents-title {
    width: 250px;
    height: 170px;
    /* padding: 0 8% 10%; */
    /* word-break: keep-all; */
    /* font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    vertical-align: middle; */
    /* color: #fff; */
  }
  /* .contents-clients-logo {
    width: 70%;
  } */
}

/* 블랙베리 모바일 */
@media (max-width: 489px) {
  .contents-clients-logo {
    width: 80%;
  }
}

/* 모바일 */
@media (max-width: 470px) {
}
/* 아이폰se 모바일 */
@media (max-width: 369px) {
  .contents-clients-logo {
    width: 100%;
  }
}
</style>
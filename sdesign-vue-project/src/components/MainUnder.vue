<template>
  <div id="main-under-section-wrapper" class="wrapper">
    <div id="under-section-container">
      <!-- 언더영역 배경 -->
      <div class="under-bgimage"></div>
      <!-- 좌측 다크니스 박스 -->
      <div class="under-darkness-box"></div>
      <!-- 컨텐츠 영역 -->
      <div class="under-section-contents">
        <div class="contents-title">
          <h1 style="font-size: 42px">
            신뢰받는
            <br />선도 브랜드, <br />대행사 네트워크.
          </h1>
        </div>
        <div class="contents-clients-logo">
          <img src="https://i.ibb.co/SNVy3H3/bbc.png" alt="bbc" />
          <img src="https://i.ibb.co/jkHzLBp/disney.png" alt="disney" />
          <img src="https://i.ibb.co/NYGp0C9/guitarhero.png" alt="guitarhero" />
          <img src="https://i.ibb.co/s1fKStr/vh1.png" alt="vh1" />
          <img src="https://i.ibb.co/82rMGfF/mtv.png" alt="mtv" />
          <img src="https://i.ibb.co/1844xBj/konami.png" alt="konami" />
          <img src="https://i.ibb.co/kydht4F/nbc.png" alt="nbc" />
          <img
            src="https://i.ibb.co/VCpxcSL/nickelodeon.png"
            alt="nickelodeon"
          />
          <img src="https://i.ibb.co/JkRGBGM/aljazeera.png" alt="aljazeera" />
          <img src="https://i.ibb.co/RBYLCZW/nokia.png" alt="nokia" />
          <img src="https://i.ibb.co/whJ9D40/ogilvy.png" alt="ogilvy" />
          <img src="https://i.ibb.co/s9sRn9Q/pixar.png" alt="pixar" />
          <img
            src="https://i.ibb.co/b3F3rBL/playstation.png"
            alt="playstation"
          />
          <img src="https://i.ibb.co/z4jZyty/vice.png" alt="vice" />
          <img src="https://i.ibb.co/jTjsrNL/zynga.png" alt="zynga" />
          <img src="https://i.ibb.co/5sD2zk3/cbs.png" alt="cbs" />
          <img src="https://i.ibb.co/42gWd4w/comedy.png" alt="comedy" />
          <img src="https://i.ibb.co/ZB9c8WB/discovery.png" alt="discovery" />
          <img src="https://i.ibb.co/5T5Jhyk/hbo.png" alt="hbo" />
          <img src="https://i.ibb.co/F7DTGQG/microsoft.png" alt="microsoft" />
        </div>
      </div>
    </div>
    <div class="under-section-bottom">
      <h1>Sound like a Pro.</h1>
      <router-link to="/pricing">지금 무료로 시작하세요.</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#main-under-section-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  top: 32px;
  left: 0;
  display: flex;
  flex-flow: column;
}

#under-section-container {
  width: 100%;
  height: 823px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  top: 0;
  z-index: 1;
}

.under-section-bottom {
  width: 100%;
  height: 350px;
  color: #fff;
  background-color: #000;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  line-height: 50px;

  // sass 적용
  h1 {
    font-size: 42px;
  }
  a {
    font: {
      size: 42px;
      weight: 800;
    }
    color: #5e39f1;
  }
}

.under-bgimage {
  width: 100%;
  height: 823px;
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
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.under-section-contents {
  max-width: 80%;
  max-height: 820px;
  margin: 0 auto;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contents-title {
  width: 24%;
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
  width: 50%;
  padding: 1% 2.5%;
}
/* 임시 고양이 이미지 */
.contents-clients-logo img {
  width: 9%;
  margin: 4.5% 6%;
  opacity: 0.4;
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
    height: 100%;
  }
  #under-section-container,
  .under-bgimage,
  .under-darkness-box {
    height: 723px;
  }
  .under-section-bottom {
    height: 300px;
  }
  .contents-clients-logo {
    width: 100%;
  }
}
@media (max-width: 750px) {
  #main-under-section-wrapper {
    height: 100%;
    top: 0px;
  }
  #under-section-container,
  .under-bgimage,
  .under-darkness-box {
    height: 500px;
  }
  .contents-title h1 {
    font-size: 36px !important;
  }
  .under-section-bottom {
    height: 220px;
    h1 {
      font-size: 36px;
    }
    a {
      font: {
        size: 36px;
        weight: 800;
      }
      color: #5e39f1;
    }
  }
}
@media (max-width: 599px) {
  .under-darkness-box {
    display: none;
  }
  .under-section-contents {
    flex-flow: column;
  }
  .contents-title {
    width: 250px;
    height: 120px;
  }
}

/* 블랙베리 모바일 */
@media (max-width: 489px) {
  .contents-clients-logo {
    width: 80%;
  }
  .under-section-bottom {
    height: 200px;
    h1 {
      font-size: 30px;
    }
    a {
      font: {
        size: 30px;
        weight: 800;
      }
      color: #5e39f1;
    }
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

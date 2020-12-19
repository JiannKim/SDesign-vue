<template>
  <div id="main-top-wrapper" class="wrapper">
    <div class="main-top-image"></div>
    <div class="main-top-headline-box">
      <div class="main-top-headline">
        <h1>완벽한 사운드를 찾아보세요.</h1>
        <p>
          매주 업데이트되는 280,000 개 이상의 음향효과 라이브러리를 무제한
          다운로드하세요.
        </p>
        <button class="main-top-headline-button" @click="isMore">
          음향효과 듣기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isMore() {
      this.$router.push("/sounds");
    },
  },
};
</script>

<style scoped lang="scss">
#main-top-wrapper {
  position: relative;
  top: 0;
}

.main-top-image {
  position: relative;
  top: 0;
  width: 100%;
  height: 480px;
  background-image: url(../assets/mainTopImg.png);
  overflow: hidden;
  background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom;
}

.main-top-headline-box {
  position: absolute;
  top: 0;
  width: 50%;
  height: 480px;
  background-color: rgba(0, 0, 0, 0.5);
}

.main-top-headline {
  position: relative;
  top: 0;
  padding: 75px 0;
  width: 35%;
  min-width: 300px;
  display: flex;
  flex-flow: column;
  margin: 20px 40%;
  h1 {
    text-align: left;
    width: 350px;
    font-family: Helvetica;
    font-size: 52px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fefefe;
    text-align: left;
  }
  p {
    width: 151%;
    max-width: 554px;
    height: 36px;
    margin: 30px 0;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
    /* transition: width 0.5s cubic-bezier(0.8,0.2,0.1,1.6); */
  }
}
/* .main-top-headline button {
    all: unset;
    width: 167px;
    height: 59px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;
} */

.main-top-headline-button {
  /* all: unset; */
  width: 167px;
  height: 59px;
  border-radius: 3px;
  border: solid 1px #fff;
  background: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  outline: none;
}
.main-top-headline-button::after {
  background-color: #fff;
  content: "";
  height: 170px;
  width: 40px;
  left: -80px;
  top: -70px;
  opacity: 0.3;
  position: absolute;
  transform: rotate(40deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
.main-top-headline-button:hover::after {
  left: 130%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);

  -webkit-transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

// 반응형

@media (max-width: 1600px) {
  .main-top-headline {
    min-width: 350px;
    margin: 20px auto;
    p {
      width: 130%;
      word-break: keep-all;
    }
  }
}
@media (max-width: 1500px) {
  .main-top-headline {
    min-width: 330px;
    margin: 20px auto;
    p {
      width: 400px;
    }
  }
}
@media (max-width: 1250px) {
  .main-top-headline {
    min-width: 330px;
  }
}
/* 태블릿 */
@media (max-width: 1020px) {
  .main-top-image {
    background-image: url(../assets/1020px.png);
    width: 100%;
    background-attachment: scroll;
  }
  .main-top-headline-box {
    background-color: rgba(0, 0, 0, 0);
    .main-top-headline {
      min-width: 210px;
      margin: 0 auto;
    }
  }
}
@media (max-width: 750px) {
  .main-top-headline p {
    width: 400px;
  }
}
@media (max-width: 599px) {
  .main-top-headline {
    min-width: 140px;
  }
}
/* 블랙베리 모바일 */
@media (max-width: 489px) {
  #main-top-wrapper {
    height: 580px;
  }
  .main-top-image {
    height: 286px;
    overflow: hidden;
  }
  .main-top-headline-box {
    display: block;
    position: relative;
    width: 100%;
    height: 289px;
    background-color: #101010;
    .main-top-headline {
      top: 30px;
      min-width: 335px;
      padding: 0;
      margin: 0 auto;
      h1 {
        font-size: 40px;
        width: 269px;
        margin: 0;
      }
      p {
        margin-bottom: 27px;
        width: 315px;
      }
      .main-top-headline-button {
        width: 335px;
        height: 51px;
      }
    }
  }
  /* #menu { padding-bottom: 31px; } */
}
/* 모바일 */
@media (max-width: 470px) {
  .main-top-image {
    width: 100%;
    height: 286px;
  }
  .main-top-headline-box {
    /* display: block; */
    background-color: #101010;
    position: relative;
    width: 100%;
    height: 290px;
    .main-top-headline {
      top: 0px;
      min-width: 305px;
      padding: 0;
      margin: 0 auto;
      h1 {
        font-size: 40px;
        width: 269px;
        margin: 15px 0 4px 0;
      }
      p {
        width: 310px;
      }
      .main-top-headline-button {
        width: 305px;
        height: 51px;
      }
    }
  }
}
/* 아이폰se 모바일 */
@media (max-width: 369px) {
  #main-top-wrapper {
    height: 470px;
    top: 53px;
  }

  .main-top-image {
    background-image: url(../assets/mediaSE.png);
    width: 100%;
    height: 220px;
  }
  .main-top-headline-box {
    display: block;
    position: relative;
    width: 100%;
    height: 267px;
    background-color: #101010;
    .main-top-headline {
      min-width: 270px;
      padding: 0;
      margin: 0 auto;
      h1 {
        font-size: 33px;
        width: 240px;
        margin: 15px 0 4px 0;
      }
      p {
        margin-bottom: 30px;
        width: 100%;
      }
      .main-top-headline-button {
        width: 270px;
        height: 51px;
      }
    }
  }
}
</style>

<template>
  <div id="main-bottom-wrapper">
    <div class="bottom-position">
      <h1 class="bottom-title titles">세계에서 가장 널리 사용되는 음향효과 플랫폼</h1>

      <div class="numbers-title titles">
        <div class="title-position">
          <p>{{registeredUser}}</p>
          <span>등록된 사용자 수</span>
        </div>

        <div class="title-position">
          <p>{{soundNumber}}</p>
          <span>효과음의 수</span>
        </div>
      </div>
      <transition name="fade-images">
        <div class="bottom-images titles">
          <div class="images-position">
            <div class="position-img">
              <img src="https://i.ibb.co/1XkBWf6/A-D-Icon-01.png" alt="A-Icon" />
            </div>
            <div class="position-description">
              <h2>Focus</h2>
              <p>
                전문 음향효과에 집중하고,
                <br />선별된 사운드가 매주 추가됩니다.
              </p>
            </div>
          </div>

          <div class="images-position img-b">
            <div class="position-img">
              <img src="https://i.ibb.co/cTYQdzT/A-D-Icon-02.png" alt="B-Icon" />
            </div>
            <div class="position-description">
              <h2>Varies</h2>
              <p>
                국내에서 가장 다양하고
                인기있는 음향효과 라이브러리입니다.
              </p>
            </div>
          </div>

          <div class="images-position">
            <div class="position-img">
              <img src="https://i.ibb.co/BnZ5QcB/A-D-Icon-03.png" alt="C-Icon" />
            </div>
            <div class="position-description">
              <h2>Free</h2>
              <p>
                추가되는 비용과 절차없이
                원하는만큼 사운드를 사용할 수 있습니다.
              </p>
            </div>
          </div>

          <div class="images-position">
            <div class="position-img">
              <img src="https://i.ibb.co/yRRfb7n/A-D-Icon-04.png" alt="D-Icon" />
            </div>
            <div class="position-description">
              <h2>Service</h2>
              <p>
                24시간 이내로 응대하여
                <br />고객의 불편을 최소화 하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registeredUser: "2,666,690",
      soundNumber: "282,944",
      show: true,
    };
  },
};
</script>

<style scoped>
#main-bottom-wrapper {
  margin: 107px 0;
  padding: 0;
  width: 100%;
  height: 588px;
  position: relative;
  top: 60px;
  background-color: #f5f4ff;
}

.bottom-position {
  position: relative;
  top: 83px;
  width: 1220px;
  margin: 0 auto;
}

.titles {
  /* position: absolute; */
  top: 0;
  left: 286px;
  text-align: left;
}
.bottom-title {
  font-size: 28px;
  margin-top: 83px;
  /* position: absolute;
  top: 0;
  left: 286px; */
}

.numbers-title {
  font-size: 42px;
  font-weight: 600;
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
  width: 445px;
  height: 79px;
  /* position: absolute;
  top: 154px;
  left: 286px; */
}

.title-position span {
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  margin-top: 13px;
  /* bottom: 0; */
  color: rgba(49, 49, 49, 0.8);
}

.bottom-images {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  width: 100%;
  /* transition: display 0.3s cubic-bezier(0.38, 0.88, 0.38, 0.88); */
}

.images-position {
  width: 250px;
  height: auto;
}

.position-img {
  width: 83px;
  height: 100px;
  position: relative;
  top: 0;
}

.position-img img {
  width: 100%;
  position: absolute;
  bottom: 0;
}

/* .img-b img {
  width: 65px;
} */

.position-description {
  width: 100%;
  margin-top: 28px;
  word-break: keep-all;
}

.position-description p {
  margin-top: 12px;
}

/* 트랜지션 태그 영역 효과 */
.fade-images-enter-active {
  transition: opacity 0.4s;
}

.fade-images-enter {
  opacity: 0;
}

/* 반응형 */

@media (max-width: 1600px) {
}
@media (max-width: 1500px) {
}
@media (max-width: 1250px) {
  #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 20%;
  }
  .bottom-position {
    width: 880px;
  }
  /* 거슬리는.. 이미지 b... ㅜ.ㅜ */
  .img-b img {
    width: 68px;
    margin: 0 10px;
  }
  .images-position {
    margin-bottom: 50px;
    width: 275px;
  }
}

/* 태블릿 */
@media (max-width: 1020px) {
  #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 20%;
  }
  .bottom-position {
    width: 600px;
  }
  /* 거슬리는.. 이미지 b... ㅜ.ㅜ */
  .img-b img {
    width: 68px;
    margin: 0 10px;
  }
  .images-position {
    margin-bottom: 50px;
    width: 275px;
  }
}
@media (max-width: 750px) {
  #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 20%;
  }
  .bottom-position {
    width: 460px;
  }
  .bottom-title {
    font-size: 24px;
  }
  .images-position {
    margin-bottom: 50px;
    width: 220px;
  }
}
@media (max-width: 599px) {
}

/* 블랙베리 모바일 */
@media (max-width: 489px) {
  #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 60px;
  }
  .bottom-position {
    top: 53px;
    width: 340px;
  }
  .bottom-title {
    font-size: 28px;
  }
  .numbers-title {
    font-size: 36px;
    width: 100%;
  }
  .bottom-images {
    margin: 30px 0;
  }
  /* 거슬리는.. 이미지 b... ㅜ.ㅜ */
  /* .img-b img {
    width: 68px;
    margin: 0 10px;
  } */
  .images-position {
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .position-description {
    width: 65%;
  }
}

/* 모바일 */
@media (max-width: 470px) {
  /* #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 60px;
  }
  .bottom-position {
    top: 53px;
    width: 280px;
  }
  .bottom-title {
    font-size: 24px;
  }
  .numbers-title {
    font-size: 28px;
    width: 270px;
  }
  .title-position span {
    font-size: 15px;
    margin-top: 10px;
  }
  .bottom-images {
    margin: 10px 0;
  }
  .images-position {
    margin-bottom: 40px;
  } */
}

/* 아이폰se 모바일 */
@media (max-width: 369px) {
  #main-bottom-wrapper {
    height: auto;
    top: 0;
    padding-bottom: 60px;
  }
  .bottom-position {
    top: 53px;
    width: 280px;
  }
  .bottom-title {
    font-size: 24px;
  }
  .numbers-title {
    font-size: 30px;
    width: 270px;
  }
  .title-position span {
    font-size: 15px;
    margin-top: 10px;
  }
  .bottom-images {
    margin: 10px 0;
  }
  .images-position {
    margin-bottom: 40px;
  }
}
</style>
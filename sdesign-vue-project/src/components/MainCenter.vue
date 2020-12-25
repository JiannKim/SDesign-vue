<template>
  <div id="main-center-wrapper" class="wrapper">
    <!-- 카드섹션 1 -->
    <section class="main-center-contents">
      <h1>주요 카테고리</h1>
      <div class="center-contents-categories">
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/X8NkVLQ/walla.png"
              alt="walla sound effects"
            />
            <h3>
              <span>walla</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/Gp7Rzb2/whoosh.png"
              alt="whoosh sound effects"
            />
            <h3>
              <span>whoosh</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/C90RPzt/wind.png"
              alt="walla sound effects"
            />
            <h3>
              <span>wind</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/4sQCBYB/footsteps.png"
              alt="walla sound effects"
            />
            <h3>
              <span>footsteps</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/YDQs9Jj/cartoon.png"
              alt="walla sound effects"
            />
            <h3>
              <span>cartoon</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/svHs7YT/drones.png"
              alt="walla sound effects"
            />
            <h3>
              <span>drones</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container-wide">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/fn51Pbw/menu.png"
              alt="walla sound effects"
            />
            <h3>
              <span>menus & interfaces</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container-wide">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/bbLxzNq/ambience.png"
              alt="walla sound effects"
            />
            <h3>
              <span>ambience</span>
            </h3>
          </router-link>
        </div>
      </div>
    </section>
    <!-- 카드섹션 2 -->
    <section class="main-center-contents">
      <h1>음향효과 찾아보기</h1>
      <!-- 탭영역 -->
      <ul class="tabs">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ active: selectedTab === tab }"
          @click="onClickTab(tab)"
        >
          {{ tab.title }}
        </li>
        <span class="mover"></span>
      </ul>
      <div v-if="selectedTab === tabs[0]">
        <!-- 최근 탭 -->
        <div class="center-contents-categories latest">
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/8KBMxX2/theme-Park.png"
                alt="walla sound effects"
              />
              <h3>
                <span>theme park</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/YD33HH5/GFX.png"
                alt="whoosh sound effects"
              />
              <h3>
                <span>gfx animation</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/6RYyQWc/final-Round.png"
                alt="walla sound effects"
              />
              <h3>
                <span>final round</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/zVDXFhL/quiet.png"
                alt="walla sound effects"
              />
              <h3>
                <span>quiet streets</span>
              </h3>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else-if="selectedTab === tabs[1]">
        <!-- 지역 탭 -->
        <div class="center-contents-categories location">
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/s5VyDf8/seoul.png"
                alt="walla sound effects"
              />
              <h3>
                <span>서 울</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/CH6yPL9/shanghai.png"
                alt="whoosh sound effects"
              />
              <h3>
                <span>상 하 이</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/0sQ6w2r/london.png"
                alt="walla sound effects"
              />
              <h3>
                <span>런 던</span>
              </h3>
            </router-link>
          </div>
          <div class="browse-container">
            <router-link to="/sounds">
              <img
                src="https://i.ibb.co/qryWT7S/india.png"
                alt="walla sound effects"
              />
              <h3>
                <span>인 도</span>
              </h3>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- 태그 탭 -->
        <div class="center-contents-categories tags">
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>적막한</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>시원한</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>음악</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>신비로운</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>습지</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>소름끼치는</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>광활한</span>
              </h3>
            </router-link>
          </div>
          <div class="tags-container">
            <router-link to="/sounds">
              <h3>
                <span>기계음</span>
              </h3>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- 카드섹션 3 -->
    <section class="main-center-contents">
      <h1>사운드 디자이너</h1>
      <div class="center-contents-categories">
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/cvvDS37/a.png"
              alt="walla sound effects"
            />
            <h3>
              <span>aaa</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img src="https://i.ibb.co/HxvXQBx/b.png" alt="b image" />
            <h3>
              <span>bbb</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img src="https://i.ibb.co/DCJtb0G/c.png" alt="c image" />
            <h3>
              <span>ccc</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img src="https://i.ibb.co/WHp9S14/d.png" alt="d image" />
            <h3>
              <span>ddd</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/Fq0wcgK/e.png"
              alt="walla sound effects"
            />
            <h3>
              <span>eee</span>
            </h3>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/sounds">
            <img
              src="https://i.ibb.co/99QX7nb/f.png"
              alt="walla sound effects"
            />
            <h3>
              <span>fff</span>
            </h3>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    const tabs = [
      { id: 1, title: "최근" },
      { id: 2, title: "지역" },
      { id: 3, title: "태그" },
    ];
    return {
      query: "",
      submitted: false,
      tabs,
      selectedTab: tabs[0],
      searchResult: [],
    };
  },
  methods: {
    onClickTab: function(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style lang="scss">
.tabs {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 5px;
  width: 200px;
  overflow: hidden;
  position: relative;
  li {
    list-style: none;
    width: 33.333%;
    height: 30px;
    margin: 1px;
    color: #7c7c7c;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 260ms cubic-bezier(0.38, 0.38, 0.38, 0.38);
    &:first-child.active ~ .mover {
      transform: translateX(0) scale(0.333);
    }
    &:nth-child(2).active ~ .mover {
      transform: translateX(33.333%) scale(0.333);
    }
    &:nth-child(3).active ~ .mover {
      transform: translateX(calc(33.333% * 2)) scale(0.333);
    }
  }
  .active {
    color: $base-color;
  }
  .mover {
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 7px;
    border-radius: 5px;
    background: $base-color;
    transform-origin: 0 0;
    transition: transform 0.25s;
  }
}

.main-center-contents {
  padding-top: 56px;
  width: 1231px;
  margin: 0 auto;
  /* position: relative;
  top: 73px; */
}

.main-center-contents h1 {
  text-align: left;
  margin: 19px 5px 19px 5px;
}
.main-center-contents img {
  width: 100%;
  display: flex;
}
.main-center-contents h3::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  content: "\A";
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(16, 22, 35, 0.26)
  );
  /* background: -moz-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: -webkit-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: -webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,.8)),to(rgba(16,22,35,.26)));
  background: -o-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26)); */
}

.center-contents-categories {
  display: flex;
  flex-flow: wrap;
  justify-content: start;
  width: 100%;
  margin: 0 auto;
}

.categories-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 195px;
  height: 140px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.3);
}

.categories-container-wide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 605px;
  height: 205px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.3);
}
/* .center-contents-categories a { width: 100%; } */

/* 음향효과 찾아보기 섹션 */
.browse-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 297px;
  height: 145px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.3);
}
.main-center-contents h3:hover::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  content: "\A";
  background: #e2ccff50;
  /* background: linear-gradient(to top,rgba(255, 255, 255, 0.486),#f5f4ff4b); */
  /* background: -moz-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: -webkit-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: -webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,.8)),to(rgba(16,22,35,.26)));
  background: -o-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
  background: linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26)); */
}

.center-contents-categories h3 {
  color: #fff;
  position: absolute;
  margin: 0;
  left: 0;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 5.5px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.03s cubic-bezier(0.8, 0.2, 0.1, 1.6);
}
.center-contents-categories h3:hover {
  color: #202020;
  transition: color 0.03s cubic-bezier(0.8, 0.2, 0.1, 1.6);
}
.center-contents-categories span {
  z-index: 1;
  text-indent: 5px;
}
/* 음향효과 찾아보기 탭 */
.browse-tabs {
  display: flex;
  margin: 10px;
  width: 200px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}
.tab-title {
  all: unset;
  padding: 7px 17px;
  color: #aaaaaa;
  cursor: pointer;
}
.tab-titled {
  all: unset;
  padding: 7px 17px;
  font-weight: bold;
  color: #202020;
  border-bottom: 2px solid #1a1a1a;
}

.tags h3 {
  color: #fff;
  /* transition: color 0.03s cubic-bezier(0.8, 0.2, 0.1, 1.6); */
  /* position: absolute;
    margin: 0;
    left: 0;
    top: 0;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    text-indent: 5px; */
}
.tags-container h3::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  content: "\A";
  background: #fbfbff66;
  /* background: -moz-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: -webkit-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: -webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,.8)),to(rgba(16,22,35,.26)));
    background: -o-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26)); */
}
.tags-container h3:hover::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  content: "\A";
  background-color: #f5f4ff;
  /* background: linear-gradient(to top,rgba(255, 255, 255, 0.486),#f5f4ff4b); */
  /* background: -moz-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: -webkit-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: -webkit-gradient(linear,0 0,0 100%,from(rgba(0,0,0,.8)),to(rgba(16,22,35,.26)));
    background: -o-linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26));
    background: linear-gradient(to top,rgba(0,0,0,.8),rgba(16,22,35,.26)); */
}
.tags-container h3:hover {
  color: #202020;
  /* transition: color 0.03s cubic-bezier(0.8, 0.2, 0.1, 1.6); */
}
/* tags container */
.tags-container {
  display: flex;
  flex-flow: column;
  margin: 5px;
  width: 297px;
  height: 67px;
  border-radius: 5px;
  background-color: rgba(133, 133, 133, 0.5);
  /* overflow: hidden; */
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.07);
}

/* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- */

/* 반응형 */
@media (max-width: 1600px) {
}
@media (max-width: 1500px) {
  .main-center-contents {
    width: 1010px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 158px;
    height: 119px;
  }
  .categories-container-wide {
    width: 494px;
    height: 168px;
  }
  .browse-container,
  .tags-container {
    width: 242px;
  }
}
@media (max-width: 1250px) {
  .main-center-contents {
    width: 900px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 140px;
    height: 105px;
  }
  .categories-container-wide {
    width: 440px;
    height: 150px;
  }
  .browse-container {
    width: 215px;
    height: 130px;
  }
  .tags-container {
    width: 215px;
  }
  .center-contents-categories h3 {
    font-size: 14px;
  }
}
/* 태블릿 */
@media (max-width: 1020px) {
  .main-center-contents {
    width: 660px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 210px;
    height: 140px;
  }
  .categories-container-wide {
    width: 650px;
    height: 165px;
  }
  /* 이미지 칸에 맞게 채우기 */
  .categories-container-wide a {
    width: 100%;
  }
  .browse-container {
    width: 320px;
    height: 165px;
  }
  .tags-container {
    width: 320px;
  }
}
@media (max-width: 750px) {
  .main-center-contents {
    width: 470px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 222px;
    height: 140px;
  }
  .categories-container-wide,
  .browse-container {
    width: 455px;
    height: 155px;
  }
  .tags-container {
    width: 222px;
  }
}
@media (max-width: 599px) {
  .main-center-contents {
    width: 400px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 190px;
    height: 110px;
  }
  .categories-container-wide {
    width: 390px;
    height: 132px;
  }
  .browse-container {
    width: 455px;
    height: 155px;
  }
  .tags-container {
    width: 455px;
  }
}

/* 블랙베리 모바일 */
@media (max-width: 489px) {
  .main-center-contents {
    width: 353px;
    flex-grow: 1;
    margin: 0 auto;
    padding-top: 30px;
    /* top: 68px; */
  }
  .categories-container {
    width: 169px;
    height: 105px;
    margin: 3.5px;
  }
  .categories-container-wide {
    width: 345px;
    height: 112px;
    margin: 3.5px;
  }
  .browse-container {
    width: 345px;
    height: 145px;
  }
  .tags-container {
    width: 166px;
  }
}

/* 모바일 */
@media (max-width: 470px) {
  .main-center-contents {
    width: 353px;
    flex-grow: 1;
    margin: 0 auto;
    padding-top: 30px;
    top: 48px;
  }
  .categories-container {
    width: 169px;
    height: 105px;
    margin: 3.5px;
  }
  .categories-container-wide {
    width: 345px;
    height: 112px;
    margin: 3.5px;
  }
  .browse-container {
    width: 345px;
    height: 145px;
  }
  .tags-container {
    width: 345px;
  }
}

/* 아이폰se 모바일 */
@media (max-width: 369px) {
  #main-center-wrapper {
    position: relative;
    top: 50px;
  }
  .main-center-contents {
    width: 290px;
    flex-grow: 1;
    margin: 0 auto;
  }
  .categories-container {
    width: 137px;
    height: 90px;
  }
  .categories-container-wide {
    width: 282px;
    height: 95px;
  }
  .browse-container {
    width: 282px;
    height: 115px;
  }
  .center-contents-categories span {
    font-size: 12px;
  }
}
</style>

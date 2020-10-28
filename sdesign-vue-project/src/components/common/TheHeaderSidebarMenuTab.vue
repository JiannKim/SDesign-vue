<template>
  <div id="sidebar-tab-menu-wrapper">
    <nav class="sidebar-tab-menu-button">
      <input id="tab-menu-button" type="checkbox" />
      <!-- 햄버거 메뉴 버튼을 만드는 스펜태그 가운데 스펜은 보이지 않게 한다. -->
      <span></span>
      <!-- 가운데 스펜은 없는척 -->
      <span id="hidden-span"></span>
      <span></span>

      <!-- 버튼이 체크되면 나타나는 메뉴박스 -->
      <!-- <div id="lists-wrapper"> -->
      <ul id="sidebar-tab-menu-lists">
        <router-link to="/pricing">
          <li>Pricing</li>
        </router-link>
        <router-link to="/faq">
          <li>FAQ</li>
        </router-link>
        <li>Login</li>
        <li>SignUp</li>
      </ul>
      <!-- </div> -->
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 메뉴 탭 스타일 */
#sidebar-tab-menu-wrapper {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 30px;
  transition: margin 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
}

.sidebar-tab-menu-button {
  display: none;
  position: relative;
  top: 0px;
  left: 0px;

  z-index: 2;

  -webkit-user-select: none;
  user-select: none;
}

.sidebar-tab-menu-button input {
  display: block;
  width: 45px;
  height: 35px;
  position: absolute;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/* 햄버거 만들기 */
.sidebar-tab-menu-button span {
  display: block;
  width: 35px;
  height: 4px;
  margin: 6px 5px 0px 5px;
  position: relative;

  background: #313131;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

/* 메뉴 탭 버튼의 가운데 스팬 숨김 */
#hidden-span {
  background-color: #fff;
}

.sidebar-tab-menu-button span:first-child {
  transform-origin: 0% 0%;
}

.sidebar-tab-menu-button span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 햄버거버튼 X자로 변환 */
.sidebar-tab-menu-button input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: cdcdcd;
}

/* 가운데 스펜 숨기기 */
.sidebar-tab-menu-button input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  /* transform: rotate(0deg) scale(0.2, 0.2); */
}

/* 마지막 스펜 옮기기 */
.sidebar-tab-menu-button input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/* 기본 위치 왼쪽상단 고정 */
#sidebar-tab-menu-lists {
  text-align: left;
  position: fixed;
  /* width: 150px;
  height: 226px; */
  width: 50%;
  height: 100%;
  margin: 20px 0 0 -55px;
  /* padding: 10px 50px 30px 50px; */
  padding: 10px 0px 30px 40px;
  padding-top: 30px;
  background: rgba(255, 255, 255, 0.836);
  display: flex;
  flex-flow: column;
  /* justify-content: space-around; */
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-250%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
#sidebar-tab-menu-lists::before {
  content: "";
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 20px;
  width: 20px;
  height: 100%;
}
#sidebar-tab-menu-lists a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;
  width: 120px;
}
#sidebar-tab-menu-lists li {
  padding: 10px 0;
  font-size: 22px;
  transform: translateX(10px);
}
#sidebar-tab-menu-lists li:hover {
  padding-left: 5px;
  color: #313131;
}

/* And let's slide it in from the left */
#tab-menu-button:checked ~ #sidebar-tab-menu-lists {
  /* 위에 있는 ul의 트랜스폼을 넌해주겠다! 나오게 해줌 */
  transform: none;
}

/* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- *


  /* media Quary */
/* 태블릿 */
@media (max-width: 1020px) {
  .sidebar-tab-menu-button {
    display: block !important;
  }
}
@media (max-width: 750px) {
}
@media (max-width: 599px) {
}

/* 모바일 */
@media (max-width: 440px) {
  /* .app-header-wrapper {width: 100%;} */
}
</style>

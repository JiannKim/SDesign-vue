<template>
  <header id="app-header-wrapper">
    <router-link class="app-header-logo-link" to="/main">
      <img
        class="app-header-logo"
        src="https://i.ibb.co/pWfncYT/s-Design-Logo-01.png"
        alt="s-Design-Logo"
      />
    </router-link>
    <!-- <a class="app-header-logo-link" href="/">
      <img
        class="app-header-logo"
        src="https://i.ibb.co/pWfncYT/s-Design-Logo-01.png"
        alt="s-Design-Logo"
      />
    </a> -->
    <div class="app-header-search-box">
      <img
        class="header-search-icon"
        src="https://i.ibb.co/5LmPhyS/serch-Icon.png"
        alt="serch-Icon"
      />
      <input type="text" placeholder="Search for sound effects" />
    </div>
    <ul class="app-header-menu-lists">
      <!-- <li class="header-menu-list" v-for="item in lists" :key="item.index">
      <router-link to="/pricing">{{item.list}}</router-link>
      </li>-->

      <!-- 
      <router-link
        class="header-menu-list"
        v-for="item in lists"
        :key="item.index"
        to="/pricing"
        tag="li"
      >{{item.list}}</router-link>-->

      <li class="header-menu-list">
        <router-link to="/pricing" target="blank">Pricing</router-link>
      </li>
      <li class="header-menu-list">
        <router-link to="/faq">FAQ</router-link>
      </li>
      <!-- <li class="header-menu-list">
        <router-link to="/spi">SPI</router-link>
      </li> -->
      <li @click="loginMounted" class="header-menu-list form-list">
        Login
      </li>
      <li @click="signupMounted" class="header-menu-list form-list">
        Sign Up
      </li>
    </ul>
    <div id="header-wrapper">
      <AppSidebarTabMenu />
      <AppHeaderSearchTab />
    </div>
  </header>
</template>

<script>
import AppSidebarTabMenu from "../views/AppSidebarTabMenu.vue";
import AppHeaderSearchTab from "./AppHeaderSearchTab.vue";

export default {
  data() {
    return {
      lists: [{ list: "Pricing" }, { list: "FAQ" }, { list: "SPI" }],
      address: [{ add: "/pricing" }, { add: "/faq" }, { add: "spi" }],
    };
  },
  components: {
    AppSidebarTabMenu,
    AppHeaderSearchTab,
  },
  methods: {
    loginMounted() {
      this.$modal.show("example");
    },
    signupMounted() {
      this.$modal.show("example2");
    },
    // modalHide() {
    //   this.$modal.hideAll();
    // },
  },
};
</script>

<style>
* {
  transition: all 0.3s cubic-bezier(0.38, 0.88, 0.38, 0.88);
}

/* 헤더 박스 스타일 */
#app-header-wrapper {
  background-color: #fff;
  min-height: 60px;
  width: 100%;
  height: 73px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  position: fixed;
  z-index: 2;
}
/* ul-li */
.app-header-menu-lists {
  display: flex;
  margin-right: 150px;
  width: 450px;
  list-style: none;
}
/* .app-header-menu-lists li {
  display: flex;
  align-items: center;
} */
.header-menu-list a {
  color: #313131;
  text-decoration: none;
}
.header-menu-list {
  font-size: 16px;
  font-weight: 500;
  margin-left: 50px;
  cursor: pointer;
}
.form-list {
  font-weight: 600;
}
/* header logo */
.app-header-logo {
  width: 50px;
  margin: 0 30px 0 147px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-header-search-box {
  width: 743px;
  height: 43px;
  border-radius: 3px;
  background-color: #f3f3f3;
  position: relative;
  display: flex;
  transition: width 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
}
.header-search-icon {
  position: absolute;
  left: 19px;
  top: 13px;
}

.app-header-search-box input {
  border: none;
  background-color: #f3f3f3;
  font-size: 17px;
  /* width: 670px; */
  width: 100%;
  align-items: center;
  margin-left: 45px;
  margin: 0 5px 0 45px;
  outline: none;
}

/* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- *


  /* media Quary */
@media (max-width: 1600px) {
  .app-header-wrapper {
    width: 100%;
  }
  .app-header-search-box {
    width: 40%;
    transition: width 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
  }
}
@media (max-width: 1500px) {
  .app-header-search-box {
    width: 41%;
  }
  .app-header-logo {
    margin-left: 50px;
  }
  .app-header-menu-lists {
    margin-right: 50px;
  }
}
@media (max-width: 1250px) {
  .app-header-logo {
    margin-left: 30px;
  }
  .app-header-search-box {
    width: 38%;
  }
  .app-header-menu-lists {
    margin-right: 30px;
    padding: 0;
  }
}
/* 태블릿 */
@media (max-width: 1020px) {
  #app-header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
  }
  #header-wrapper {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 0 30px;
    transition: margin 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
    /* border: 1px solid red; */
  }
  .app-header-logo-link {
    z-index: 1;
  }
  .app-header-search-box {
    display: none;
  }
  .app-header-menu-lists {
    display: none;
  }
}
@media (max-width: 750px) {
}
@media (max-width: 599px) {
}

/* 모바일 */
@media (max-width: 440px) {
  .app-header-wrapper {
    width: 100%;
  }
}
</style>

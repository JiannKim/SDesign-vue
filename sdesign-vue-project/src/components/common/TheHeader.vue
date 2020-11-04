<template>
  <header id="app-header-wrapper">
    <router-link class="app-header-logo-link" to="/main">
      <img
        class="header-logo"
        src="https://i.ibb.co/d4yZmMC/s-Design-Pro-Logo-01.png"
        alt="s-Design-Logo"
      />
    </router-link>
    <div class="app-header-search-box">
      <img
        class="header-search-icon"
        src="https://i.ibb.co/QDNng2N/search-Icon-03.png"
        alt="serch-Icon"
      />
      <input type="text" placeholder="Search for sound effects" />
    </div>
    <ul class="app-header-menu-lists">
      <!-- 
      <router-link
        class="header-menu-list"
        v-for="item in lists"
        :key="item.index"
        to="/pricing"
        tag="li"
      >{{item.list}}</router-link>-->

      <li class="header-menu-list">
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li class="header-menu-list">
        <router-link to="/faq">FAQ</router-link>
      </li>
      <li @click="loginMounted" class="header-menu-list form-list">Login</li>
      <li @click="signupMounted" class="header-menu-list form-list signup-li">Sign Up</li>
    </ul>
    <div id="header-wrapper">
      <TheHeaderSidebarMenuTab />
      <TheHeaderSearchTab />
    </div>
  </header>
</template>

<script>
import TheHeaderSidebarMenuTab from "@/components/common/TheHeaderSidebarMenuTab.vue";
import TheHeaderSearchTab from "@/components/common/TheHeaderSearchTab.vue";

export default {
  data() {
    return {
      lists: [{ list: "Pricing" }, { list: "FAQ" }, { list: "SPI" }],
      address: [{ add: "/pricing" }, { add: "/faq" }, { add: "spi" }],
    };
  },
  components: {
    TheHeaderSidebarMenuTab,
    TheHeaderSearchTab,
  },
  methods: {
    loginMounted() {
      this.$modal.show("login-modal");
    },
    signupMounted() {
      this.$modal.show("signup-modal");
    },
  },
};
</script>

<style scoped>
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
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2rem;
  z-index: 2;
}
/* ul-li */
.app-header-menu-lists {
  display: flex;
  align-items: center;
  margin-right: 100px;
  width: 420px;
  list-style: none;
}
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
.signup-li {
  border: 1px solid #282828;
  border-radius: 20px;
  padding: 10px;
  width: 80px;
}
/* header logo */
.header-logo {
  width: 100px;
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
  width: 17px;
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
  .app-header-search-box {
    width: 40%;
    transition: width 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
  }
}
@media (max-width: 1500px) {
  .app-header-search-box {
    width: 41%;
  }
  .header-logo {
    margin-left: 50px;
  }
  .app-header-menu-lists {
    margin-right: 50px;
  }
}
@media (max-width: 1250px) {
  .header-logo {
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
  }
  .header-logo-link {
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
}
/* 아이폰se 모바일 */
@media (max-width: 369px) {
  #app-header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
  }
  @-moz-document url-prefix() {
    #app-header-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

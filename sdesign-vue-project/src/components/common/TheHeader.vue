<template>
  <header id="app-header-wrapper">
    <router-link class="app-header-logo-link" to="/">
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
      <li class="header-menu-list">
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li class="header-menu-list">
        <router-link to="/faq">FAQ</router-link>
      </li>
      <!-- 1. 로그인이 되었을 때 -->
      <template v-if="isUserLogin">
        <div class="login-user">
          <div
            class="header-menu-list users-info"
            @click="userInfo = !userInfo"
          >
            Signed in as
            <span>{{ $store.state.nickname }}</span>
          </div>
          <div v-if="!userInfo" class="user-info-box">
            <a href="javascript:;" @click="logoutUser" class="users-info"
              >등록하기
            </a>
            <a
              href="javascript:;"
              @click="logoutUser"
              class="users-info logout-btn"
            >
              <span>로그아웃</span>
            </a>
          </div>
        </div>
      </template>
      <!-- 2. 로그아웃이 되었을 때 -->
      <template v-else>
        <li @click="loginMounted" class="header-menu-list form-list">Login</li>
        <li @click="signupMounted" class="header-menu-list form-list signup-li">
          Sign Up
        </li>
      </template>
    </ul>
    <!-- 태블릿 모드 -->
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
      userInfo: true,
    };
  },
  components: {
    TheHeaderSidebarMenuTab,
    TheHeaderSearchTab,
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    loginMounted() {
      this.$modal.show("login-modal");
    },
    signupMounted() {
      this.$modal.show("signup-modal");
    },
    // store에 있는 clearUserEmail함수를 가져와서 로그아웃 기능의 메서드를 만들어준다
    logoutUser() {
      return this.$store.commit("clearUserEmail");
    },
  },
};
</script>

<style scoped lang="scss">
$bgColor-common: #fff;
$txtColor-common: #313131;

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
  width: 100%;
  align-items: center;
  margin-left: 45px;
  margin: 0 5px 0 45px;
  outline: none;
}

.login-user {
  position: relative;
  font-size: 16px;
  font-weight: 400;

  span {
    font-weight: 600;
  }

  // 유저 인포 자세히 보기 박스
  .user-info-box {
    position: absolute;
    top: 40px;
    right: 0;
    width: 130px;
    height: auto;
    // display: flex;
    // flex-flow: column;
    // justify-content: center;
    // align-items: center;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 7px;
    // border: 1px solid teal;
  }
  .user-info-box::after,
  .user-info-box::before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .user-info-box::after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 9px;
    margin-left: -9px;
  }
  .user-info-box::before {
    border-color: rgba(224, 224, 224, 0);
    border-bottom-color: #e0e0e0;
    border-width: 10px;
    margin-left: -10px;
  }
  a {
    color: $txtColor-common;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  // .logout-btn {
  //   margin-top: 16px;
  //   font-weight: 600;
  // }
}

#header-wrapper {
  z-index: -1;
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

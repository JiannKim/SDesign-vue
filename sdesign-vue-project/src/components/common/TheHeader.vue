<template>
  <header id="app-header-wrapper">
    <div @click="isHide">
      <router-link to="/" class="app-header-logo-link">
        <img
          class="header-logo"
          src="https://i.ibb.co/d4yZmMC/s-Design-Pro-Logo-01.png"
          alt="s-Design-Logo"
        />
      </router-link>
    </div>
    <form @submit.prevent="submitSearch" class="app-header-search-box">
      <img
        class="header-search-icon"
        src="https://i.ibb.co/QDNng2N/search-Icon-03.png"
        alt="serch-Icon"
      />
      <input
        type="text"
        placeholder="Search for sound effects"
        v-model="keywordItem"
      />
    </form>
    <ul class="app-header-menu-lists">
      <li class="header-menu-list">
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li class="header-menu-list">
        <router-link to="/faq">FAQ</router-link>
      </li>
      <li class="header-menu-list">
        <router-link to="/sounds">
          Sounds
        </router-link>
      </li>
      <!-- 1. 로그인이 되었을 때 -->
      <template v-if="isUserLogin">
        <div class="login-user">
          <div class="header-menu-list users-info" @click="accountModalMounted">
            ME
          </div>
          <modal name="account-modal" class="account-modal">
            <AccountModal />
          </modal>
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
      <TheHeaderSidebarMenuTab ref="child" />
      <TheHeaderSearchTab />
    </div>
  </header>
</template>

<script>
import TheHeaderSidebarMenuTab from "@/components/common/TheHeaderSidebarMenuTab.vue";
import TheHeaderSearchTab from "@/components/common/TheHeaderSearchTab.vue";
import AccountModal from "@/components/common/AccountModal.vue";

export default {
  data() {
    return {
      keywordItem: "",
      paginator: "",
    };
  },
  components: {
    TheHeaderSidebarMenuTab,
    TheHeaderSearchTab,
    AccountModal,
  },
  methods: {
    async submitSearch() {
      try {
        const config = {
          token: this.$store.state.token,
          keyword: this.keywordItem,
          next: this.paginator.next,
        };
        await this.$store.dispatch("SEARCH", config);
        this.$router.push({
          path: "/search",
          query: { keyword: this.keywordItem },
        });
        this.$forceUpdate();
        this.initKeyword();
      } catch (error) {
        console.log(error);
      }
    },
    accountModalMounted() {
      this.$modal.show("account-modal");
    },
    loginMounted() {
      this.$modal.show("login-modal");
    },
    signupMounted() {
      this.$modal.show("signup-modal");
    },
    initKeyword() {
      this.keywordItem = "";
    },
    // 자식 컴포의 사이드탭 닫기
    isHide() {
      this.$refs.child.isHide();
    },
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped lang="scss">
/* 헤더 박스 스타일 */
#app-header-wrapper {
  background-color: #fff;
  min-height: 60px;
  width: 100%;
  height: 73px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2rem;
  z-index: 2;
  .app-header-logo-link {
    width: 100px;
    display: flex;
    margin: 0 30px 0 147px;
    z-index: 1;
    /* header logo */
    .header-logo {
      width: 100px;
    }
  }
}
.app-header-search-box {
  // width: 830px;
  width: 100%;
  height: 43px;
  margin: 0 5%;
  border-radius: 3px;
  background-color: #f3f3f3;
  position: relative;
  display: flex;
  transition: width 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
  .header-search-icon {
    position: absolute;
    left: 19px;
    top: 13px;
    width: 17px;
  }
  input {
    border: none;
    background-color: #f3f3f3;
    font-size: 17px;
    width: 100%;
    align-items: center;
    margin-left: 45px;
    margin: 0 5px 0 45px;
    outline: none;
  }
}
/* ul-li */
.app-header-menu-lists {
  display: flex;
  align-items: center;
  margin-right: 100px;
  width: 520px;
  list-style: none;
  .header-menu-list {
    font-size: 16px;
    margin-left: 46px;
    a {
      color: #313131;
      text-decoration: none;
    }
  }
}

// 폼 메뉴
.form-list {
  font-weight: 600;
  cursor: pointer;
  &.signup-li {
    border: 1px solid $base-color;
    border-radius: 20px;
    padding: 10px;
    margin-left: 20px;
    width: 80px;
  }
}
// 로그인이 되었을때
.login-user {
  position: relative;
  font-size: 16px;
  font-weight: 400;
  .users-info,
  span {
    font-weight: 600;
    cursor: pointer;
  }
}

#header-wrapper {
  z-index: -1;
}

/* Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark-Remark- *

  /* media Quary */
@media (max-width: 1600px) {
  .app-header-search-box {
    // width: 47%;
    transition: width 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
  }
}
@media (max-width: 1500px) {
  .app-header-search-box {
    width: 55%;
  }
  .app-header-logo-link {
    margin-left: 120px !important;
  }
  .app-header-menu-lists {
    margin-right: 50px;
  }
}
@media (max-width: 1250px) {
  .app-header-logo-link {
    margin-left: 85px !important;
  }
  .app-header-search-box {
    // width: 45%;
    margin: 0 30px;
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
  .app-header-logo-link {
    margin: 0 auto !important;
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

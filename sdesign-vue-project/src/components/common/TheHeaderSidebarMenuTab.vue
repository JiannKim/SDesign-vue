<template>
  <div id="sidebar-tab-menu-wrapper">
    <nav class="sidebar-tab-menu">
      <div class="menu-button">
        <input
          id="tab-menu-button"
          type="checkbox"
          ref="hideTab"
          @click="isChecked"
        />
        <!-- 햄버거 메뉴 버튼을 만드는 스펜태그 가운데 스펜은 보이지 않게 한다. -->
        <span></span>
        <!-- 가운데 스펜은 없는척 -->
        <span id="hidden-span"><p>menu</p></span>
        <span></span>
      </div>
      <!-- transition 효과 주기(추후) -->
      <!-- <transition name="listbox-fade"> -->
      <ul class="sidebar-tab-menu-lists" :class="{ isChecked: checked }">
        <li>
          <router-link to="/" class="tab-menu-lists-list">
            <fa-icon :icon="['fa', 'home']" />
          </router-link>
        </li>
        <li>
          <router-link to="/pricing" class="tab-menu-lists-list">
            Pricing
          </router-link>
        </li>
        <li>
          <router-link to="/faq" class="tab-menu-lists-list">
            FAQ
          </router-link>
        </li>
        <li>
          <router-link to="/sounds" class="tab-menu-lists-list">
            Sounds
          </router-link>
        </li>
        <!-- 1. 로그인이 되었을 때 -->
        <template v-if="isUserLogin">
          <p class="users-info isSigned">
            Signed in as
            <span class="user-name">{{ $store.state.nickname }}</span>
          </p>
          <router-link
            to="/account/profile"
            class="tab-menu-lists-list users-info"
            >My page</router-link
          >
          <a
            href="javascript:;"
            @click="logoutUser"
            class="tab-menu-lists-list users-info"
            >Logout</a
          >
        </template>
        <!-- 2. 로그아웃이 되었을 때 -->
        <template v-else>
          <li @click="loginMounted" class="tab-menu-lists-list form-list">
            Login
          </li>
          <li @click="signupMounted" class="tab-menu-lists-list form-list">
            SignUp
          </li>
        </template>
      </ul>
      <div :class="{ hideTab: checked }" @click="isHide"></div>
      <!-- </transition> -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    isHide() {
      if (this.checked) this.$refs.hideTab.click();
    },
    isChecked() {
      this.checked === true ? (this.checked = false) : (this.checked = true);
    },
    loginMounted() {
      this.$modal.show("login-modal");
    },
    signupMounted() {
      this.$modal.show("signup-modal");
    },
    modalHide() {
      this.$modal.hideAll();
    },
    logoutUser() {
      return this.$store.commit("clearUserInfo");
    },
  },
};
</script>

<style scoped lang="scss">
/* 메뉴 탭 스타일 */
#sidebar-tab-menu-wrapper {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 30px;
  transition: margin 0.5s cubic-bezier(0.4, 0.2, 0.05, 2);
}
// menu X button (데스크탑에서 숨기기)
.sidebar-tab-menu {
  display: none;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 2;
  user-select: none;
  -webkit-user-select: none;
  #tab-menu-button {
    display: block;
    width: 45px;
    height: 35px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }
}
// 햄버거 버튼 공장
.sidebar-tab-menu {
  .menu-button {
    span {
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
      p {
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -4px;
      }
    }
    span {
      &:first-child {
        transform-origin: 0% 0%;
      }
      &:nth-last-child(2) {
        transform: translate(0);
      }
    }
    // 클릭시 햄버거 X 변환
    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(1px, 0);
      // 가운데 스펜 숨기기
      &:nth-child(3) {
        opacity: 0;
        transform: translate(30%) scale(-0.2, 0.2);
      }
      // 마지막 스펜
      &:nth-child(4) {
        transform: rotate(-45deg) translate(-1px, -1px);
      }
    }
  }
}
/* 기본 위치 왼쪽상단 고정 */
.sidebar-tab-menu-lists {
  position: fixed;
  width: 39%;
  height: 100%;
  margin: 21px 0 0 -35px;
  padding: 10px 0px 30px 40px;
  padding-top: 30px;
  background: rgba(255, 255, 255, 0.836);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-flow: column;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-250%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  .tab-menu-lists-list {
    color: rgba(37, 37, 37, 0.7);
    width: 120px;
    height: 30px;
    margin: 10px 0;
    padding: 3px 0;
    font-size: 22px;
    display: flex;
    &:hover {
      transform: translateX(5px);
      color: #313131;
    }
  }
  // 로그인 사용자 정보
  .users-info {
    width: 135px;
    font-size: 22px;
  }
  .isSigned {
    width: 90%;
    margin: 5px 0;
    .user-name {
      all: unset;
      font-weight: 600;
    }
  }
  .form-list {
    font-weight: 600;
  }
}
/* 파이어폭스 스타일 */
@-moz-document url-prefix() {
  .sidebar-tab-menu-lists {
    text-align: left;
    position: fixed;
    width: 50%;
    height: 100%;
    margin: 20px -50px;
    padding: 10px 0px 30px 40px;
    padding-top: 30px;
    background: rgba(255, 255, 255, 0.836);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-flow: column;
    /* justify-content: space-around; */
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-250%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  // .sidebar-tab-menu-lists::before {
  //   content: "";
  //   background: rgba(0, 0, 0, 0.8);
  //   position: absolute;
  //   top: 0;
  //   left: 20px;
  //   width: 20px;
  //   height: 100%;
  // }
}

/* And let's slide it in from the left */
/* #tab-menu-button:checked ~ #sidebar-tab-menu-lists { */
/* (위에 있는 ul의 트랜스폼을 넌해주겠다) 나오게 해줌 */
/* transform: none;
} */

/* 위에 있는 ul의 트랜스폼을 넌해주겠다! 나오게 해줌 */
.isChecked {
  transform: none;
}
// 사이드 탭 닫기
.hideTab {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* media Quary */

/* 태블릿 */
@media (max-width: 1020px) {
  .sidebar-tab-menu {
    display: block !important;
  }
}
</style>

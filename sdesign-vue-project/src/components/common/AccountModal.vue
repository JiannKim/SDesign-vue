<template>
  <div class="user-info-box">
    <div class="user-info">
      Signed in as
      <router-link to="/account/profile" class="user-name-link" @click.native="meHide">
        <span>{{ $store.state.nickname }}</span>
      </router-link>
    </div>
    <div>
      <router-link to="/account/profile" @click.native="meHide">My page</router-link>
    </div>
    <a @click="logoutUser" href="javascript:;" class="logout-btn">
      <span>Logout</span>
    </a>
  </div>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";
export default {
  data() {
    return {};
  },
  methods: {
    // store에 있는 clearUserInfo함수를 가져와서 로그아웃 기능의 메서드를 만들어준다
    async logoutUser() {
      this.$store.commit("clearUserInfo"); // 토큰과 닉네임을 초기화 해주는 메서드를 가져와 로그아웃을 시킴
      await deleteCookie("sd_auth");
      await deleteCookie("sd_user");
      this.$router.push("/");
    },
    meHide() {
      this.$emit("meHide");
    },
  },
};
</script>

<style lang="scss">
.user-info-box {
  width: 125px;
  position: absolute;
  top: 40px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  z-index: 2;
  ::after,
  ::before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    width: 0;
    height: 0;
    pointer-events: none;
  }
  ::after {
    border-bottom-color: #fff;
    border-width: 9px;
    margin-left: -10px;
    width: 1px;
    top: -17px;
  }
  ::before {
    border-bottom-color: rgba(237, 237, 237, 0.3);
    filter: blur(0.3px);
    width: 1px;
    top: -18px;
    border-width: 9px;
    margin-left: -10px;
  }
  .user-info {
    font-size: 14px;
    padding: 10px;
    span {
      font-weight: 600;
      cursor: pointer;
    }
  }
  .user-name-link {
    display: inline;
    padding: 0;
    border: 0;
    border-bottom: 1px solid;
  }
  a {
    color: $base-color;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    border-top: 1px solid #e0e0e0;
  }
  .logout-btn {
    background-color: #e0e0e085;
    border-radius: 0 0 4px 4px;
  }
}
</style>

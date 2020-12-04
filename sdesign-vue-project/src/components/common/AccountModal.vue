<template>
  <div class="user-info-box">
    <div class="user-info" @click="modalHide">
      Signed in as
      <span> {{ $store.state.nickname }}</span>
    </div>
    <div @click="modalHide">
      <router-link to="/account">My page</router-link>
    </div>
    <!-- <a href="/account" @click="modalHide">My page</a> -->
    <a href="javascript:;" @click="logoutUser" class="logout-btn">
      <span>Logout</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    // store에 있는 clearUserInfo함수를 가져와서 로그아웃 기능의 메서드를 만들어준다
    logoutUser() {
      this.$store.commit("clearUserInfo"); // 토큰과 닉네임을 초기화 해주는 메서드를 가져와 로그아웃을 시킴
      this.$router.push("/");
    },
    modalHide() {
      this.$modal.hide("account-modal");
    },
  },
};
</script>

<style lang="scss">
.user-info-box {
  position: absolute;
  width: 150px;
  height: auto;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  span {
    font-weight: 600;
    cursor: pointer;
  }
  &.user-info-box::after,
  &.user-info-box::before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &.user-info-box::after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 9px;
    margin-left: -9px;
  }
  &.user-info-box::before {
    border-color: rgba(224, 224, 224, 0);
    border-bottom-color: #e0e0e0;
    border-width: 10px;
    margin-left: -10px;
  }
  .user-info {
    font-size: 14px;
    padding: 10px 0;
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

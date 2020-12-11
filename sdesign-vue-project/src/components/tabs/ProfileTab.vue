<template>
  <div>
    <div class="user-profile">
      <div class="user-profile-img">
        <img class="u-img" src="" alt="" />
        <button class="u-img-submit button">
          <fa-icon icon="plus-circle" />
        </button>
        <input
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
          ref="submit-input"
        />
      </div>
      <div class="user-profile-info">
        <p class="u-email">User Email{{ this.useremail }}</p>
        <p class="u-name">{{ this.nickname }}</p>
      </div>
      <div class="user-profile-edit">
        <button class="u-edit">
          수정하기
          <fa-icon icon="pen" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useremail: this.$store.state.useremail,
      nickname: this.$store.state.nickname,
    };
  },
};
</script>

<style scoped lang="scss">
.user-profile {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 1px solid pink;
  .user-profile-img {
    position: relative;
    width: 250px;
    min-width: 200px;
    min-height: 250px;
    border-radius: 30%;
    margin: 50px 0;
    // border: 1px solid;
    box-shadow: $box-shadow;
    .u-img-submit {
      all: unset;
      font-size: 40px;
      position: absolute;
      bottom: 0;
      left: 210px;
      background: #fff;
      cursor: pointer;
    }
    input {
      display: none;
      position: absolute;
      bottom: 0;
      left: 240px;
      width: 85px;
    }
  }
  .user-profile-info {
    height: 65px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    border: 1px solid saddlebrown;
    .u-email,
    .u-name {
      font: {
        size: 20px;
        weight: bold;
      }
    }
    .u-email {
      font-size: 26px;
    }
  }
  .user-profile-edit {
    width: 220px;
    border: 1px solid violet;
    .u-edit {
      width: 100%;
      height: 40px;
      border-radius: 7px;
      margin: 20px 0;
      background: $default-gradient;
      color: #fff;
      font-size: 16px;
      border: none;
      outline: none;
      &:hover {
        background-color: $hover-primary;
      }
      &:active {
        background-color: $active-primary;
      }
    }
  }
}
</style>

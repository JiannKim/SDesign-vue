<template>
  <div>
    <div class="user-profile">
      <div class="user-profile-img">
        <div class="test">
          <img class="u-img" ref="userImg" :src="this.userimage" alt="" />
          <!-- <input
            type="file"
            accept="image/*"
            @change="onFileUpload"
            ref="submitInput"
          /> -->
        </div>
        <button
          class="u-img-submit"
          :disabled="clicked"
          :class="{ disabled: clicked }"
          @click="isAdd"
        >
          <fa-icon icon="plus-circle" />
        </button>
      </div>
      <div class="user-profile-info">
        <p class="u-email">User Email{{ this.useremail }}</p>
        <!-- <p class="u-name">{{ this.nickname }}</p> -->
        <p class="u-name">{{ this.$store.state.nickname }}</p>
      </div>
      <div class="user-profile-edit">
        <template v-if="!clicked">
          <form class="edit-form" @submit.prevent="submitForm">
            <input
              class="img-form"
              type="file"
              accept="image/*"
              @change="onFileUpload"
              ref="submitInput"
            />
            <input type="text" v-model="nickname" class="edit-name" />
            <div class="btn-wrapper">
              <button class="edit-save" type="submit">저장</button>
              <button class="edit-cancel" @click="isClicked">취소</button>
            </div>
          </form>
        </template>
        <button
          class="u-edit"
          :class="{ updateForm: !clicked }"
          v-if="clicked"
          @click="isClicked"
        >
          수정하기
          <fa-icon icon="pen" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateProfile } from "@/api";

export default {
  data() {
    return {
      useremail: this.$store.state.useremail,
      nickname: this.$store.state.nickname,
      userimage: [],
      clicked: true,
    };
  },
  methods: {
    async submitForm() {
      let formData = {
        userImg: this.userimage,
        accountName: this.nickname,
      };
      const token = this.$store.state.token;
      try {
        const { data } = await updateProfile(formData, token);
        console.log("업데이트프로필 실행");
        console.log(data);
      } catch (error) {
        return error;
      }
    },
    isAdd() {
      this.$refs.submitInput.click();
    },
    // isFile() {
    //   this.userimage = event.target.files[0];
    // },
    onFileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.userimage = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.userimage = e.target.result;
      };
      reader.readAsDataURL(files[0]);
      // this.createImage(files[0]);
    },
    // createImage(file) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     this.userimage = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    isClicked() {
      this.clicked = this.clicked ? false : true;
    },
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
}
.user-profile-img {
  position: relative;
  width: 250px;
  height: 250px;
  min-width: 200px;
  min-height: 250px;
  border-radius: 30%;
  margin: 50px 0;
  box-shadow: $box-shadow;
  .test {
    width: 250px;
    height: 250px;
    border: none;
    border-radius: 30%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .u-img {
      width: 100%;
      height: auto;
      position: relative;
      top: 0;
      left: 0;
    }
  }
  .u-img-submit {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    position: absolute;
    bottom: 0;
    left: 210px;
    background: #fff;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
  .disabled {
    color: rgb(206, 206, 206);
    // background-color: rgb(206, 206, 206);
  }
}
.user-profile-info {
  height: 65px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
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
  .u-edit {
    width: 100%;
    height: 35px;
    border-radius: 4px;
    margin: 20px 0;
    background: $default-gradient;
    color: #fff;
    font-size: 14px;
    border: none;
    outline: none;
    &:hover {
      background: $hover-primary;
    }
    &:active {
      background-color: $active-primary;
    }
  }
  .edit-form {
    display: grid;
    text-align: left;
    margin-top: 9px;
    .img-form {
      display: none;
    }
    .edit-name {
      padding: 5px;
      font-size: 16px;
      height: 30px;
      margin-top: 4px;
      border: 1px solid $primary;
      border-radius: 4px;
      outline: none;
      &:focus {
        box-shadow: 1px 1px 6px 0 $primary;
      }
    }
    .btn-wrapper {
      max-width: 70%;
      display: flex;
      justify-content: space-between;
      .edit-save,
      .edit-cancel {
        width: 45%;
        height: 35px;
        border-radius: 4px;
        margin: 20px 0;
        color: #fff;
        border: none;
        outline: none;
      }
      .edit-save {
        background: $default-gradient;
        &:hover {
          background: linear-gradient(to bottom, #7930ffeb, #6b1cffeb);
        }
        &:active {
          background-color: $active-primary;
        }
      }
      .edit-cancel {
        background: $cancel-bg;
        &:hover {
          background: linear-gradient(to bottom, #b5b5b5eb, #8e8e8eeb);
        }
        &:active {
          background-color: $active-primary;
        }
      }
    }
  }
}
</style>

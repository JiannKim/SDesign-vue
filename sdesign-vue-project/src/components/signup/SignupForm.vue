<template>
  <div id="form-container">
    <h2>가입 폼</h2>
    <form @submit="submitForm">
      <div>
        아이디:
        <input type="text" v-model="userid" />
      </div>
      <div>
        비밀번호:
        <input type="text" v-model="password" />
      </div>
      <div>
        닉네임:
        <input type="text" v-model="username" />
      </div>
    </form>
    <button id="form-button">가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "",
      password: "",
      username: "",
    };
  },
  methods: {
    submitForm() {
      // const userData = {
      //   userdi: this.userid,
      //   password: this.password,
      //   username: this.username,
      // };
    },
  },
};
</script>

<style>
#form-container {
  /* border: 1px solid blue; */
  box-sizing: border-box;
  background-color: #fff;
  color: #313131;
  min-width: 320px;
  min-height: 400px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  /* vertical-align: middle; */
  top: 10px;
}
form {
  background: #fff;
  /* width: 300px; */
  height: 130px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: baseline;
  padding: 10px;
  /* margin: 0 auto; */
  /* border: none; */
  /* border: 1px solid red; */
}
</style>

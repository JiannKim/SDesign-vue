<template>
  <div class="spinner-container">
    <div class="spinner1" />
    <div class="spinner2" />
    <div class="spinner3" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
}
.spinner1 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  animation: spin 1s linear infinite;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  left: 30px;
}
.spinner1::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  top: -5px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #8546faeb, #5000e4eb);
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner2 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation: spinn 1.2s linear infinite;
  position: relative;
  top: 0;
  left: -1px;
}
.spinner2::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  top: -3px;
  border-radius: 30%;
  background: linear-gradient(to bottom, #8546faeb, #5000e4eb);
}
@keyframes spinn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.spinner3 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation: spinnn 2s linear infinite;
  position: relative;
  top: 0;
  left: -31px;
}
.spinner3::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  top: -3px;
  background: linear-gradient(to bottom, #8546faeb, #5000e4eb);
}
@keyframes spinnn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

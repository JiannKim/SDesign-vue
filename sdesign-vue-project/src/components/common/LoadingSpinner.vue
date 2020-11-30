<template>
  <div class="spinner-container">
    <div class="spinner" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
}
.spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  animation: spin 1s linear infinite;
  position: relative;
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
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
}
</style>

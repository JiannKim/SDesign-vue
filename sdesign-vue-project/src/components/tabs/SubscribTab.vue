<template>
  <div id="subscrib-container">
    <div class="subscrib-wrapper">
      <div class="card-products">
        <span class="product-title">
          SUBSCRIBE AND SAVE
        </span>
        <div class="product-contents">
          <p>Annual Unlimited</p>
          <div class="product-pay">
            <span> $ </span>
            199
          </div>
        </div>
      </div>
      <div class="cancel-products">
        <div class="cancel-content">
          <p>Billing Information</p>
          <span>Do you want to cancel your subscription?</span>
        </div>

        <button class="button unsubscribe-btn">Unsubscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#subscrib-container {
  background: #000;
}
.subscrib-wrapper {
  width: 57%;
  min-width: 370px;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  p {
    font: {
      size: 24px;
      weight: 600;
    }
  }
  span {
    color: #a1a1a1;
    font-size: 20px;
  }
}
// 구독 카드
.card-products {
  width: 70%;
  min-width: 330px;
  height: 190px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px 0;
  margin: 50px 0;
  font-size: 34px;
  box-shadow: $box-shadow;
  .product-title {
    letter-spacing: 1.5px;
    color: $link-txt;
    font-size: 12px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e1e1e1;
  }
  .product-contents {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 105px;
    margin-top: 35px;
  }
  .product-pay {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 77px;
  }
}
button {
  width: 150px;
  height: 47px;
  background-color: transparent;
  border-radius: 4px;
  font: {
    size: 16px;
    weight: 600;
  }
}
.cancel-products {
  width: 70%;
  min-width: 350px;
  padding: 20px 0;
  margin: 20px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cancel-content {
    text-align: left;
    text-align: left;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    p {
      font-size: 20px;
    }
    span {
      padding-top: 10px;
      font-size: 16px;
    }
  }
  // 구독취소 버튼
  .unsubscribe-btn {
    // transition: none;
    border: 1px solid #a1a1a1;
    color: #a1a1a1;
    outline: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
      color: #fff;
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
}
</style>

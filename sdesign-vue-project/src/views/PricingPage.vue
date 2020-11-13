<template>
  <div id="pricing-page-wrapper">
    <!-- 이곳은 pricing page 입니다. -->
    <div class="top-section">
      <h1 class="page-title">
        세계에서 가장 인기있는 사운드 웹 사이트에 가입하세요.
      </h1>
      <p>
        280,000 개 이상의 전문 사운드를 우리의 라이브러리에서 다운로드하세요
      </p>
    </div>
    <div class="middle-section">
      <div class="products-wrapper">
        <div class="card-products">
          <span class="product-title">
            PAY AS YOU GO
          </span>
          <div class="product-contents">
            <p>15 Downloads</p>
            <div class="product-pay">
              <span> $ </span>
              20
            </div>
            <button class="button">Access now</button>
          </div>
        </div>
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
            <button class="button">Access now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <!-- <div class="bottom-title"> -->
        <!-- <h4> -->
        <!-- 우리는 가장 큰 미디어와 광고 브랜드의 신뢰를 받고 있습니다. -->
        <!-- </h4> -->
      <!-- </div> -->
      <div class="bottom-logo-icons">
        <span>
          <img src="https://i.ibb.co/P5BQgMG/client-1-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/JyhZsLJ/client-3-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/Y3NhV1Y/client-6-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/M5gG68t/client-7-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/L5hfQfN/client-4-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/VSnqJbW/client-10-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/6DgHXTP/client-2-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/fX8CRpG/client-11-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/4YM9BqX/client-12-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/SVpc6QK/client-13-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/6rrV743/client-9-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/TWhy1TM/client-14-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/D94Wdyh/client-16-2x.png" />
        </span>
        <span>
          <img src="https://i.ibb.co/yW99sMp/client-15-2x.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#pricing-page-wrapper {
  // width: 100%;
  // display: flex;
  // justify-content: center;
  // flex-flow: column;
  background-color: #f2f2f2;
}

.top-section {
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  flex-flow: column;
  h1 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 100px;
  }
}

.middle-section {
  width: 57%;
  min-width: 920px;
  margin: 0 auto;
  .products-wrapper {
    display: flex;
    justify-content: space-between;
    .card-products {
      width: 500px;
      min-width: 330px;
      height: 260px;
      background-color: #fff;
      position: relative;
      top: -26px;
      border-radius: 4px;
      padding: 24px 0;
      margin: 10px;
      font-size: 34px;
      .product-contents {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 160px;
        margin-top: 35px;
      }
      .product-title {
        letter-spacing: 1.5px;
        color: #a1a1a1;
        font-size: 12px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e1e1e1;
      }
      p {
        font: {
          size: 24px;
          weight: 600;
        }
      }
      .product-pay {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 77px;
        span {
          color: #a1a1a1;
          font-size: 20px;
        }
      }
      button {
        width: 150px;
        height: 47px;
        color: #313131;
        background: #fff;
        border: 1px solid;
        border-radius: 4px;
        font: {
          size: 16px;
          weight: 600;
        }
      }
    }
  }
}
// .bottom-title {
//   letter-spacing: 1px;
//   margin-bottom: 10px;
//   color: #828282;
//   h4 {
//     font-size: 14px;
//     font-weight: 400;
//   }
// }
.bottom-logo-icons {
  width: 100%;
  margin: 0 auto;
  height: 81px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    width: 44px;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
}
</style>

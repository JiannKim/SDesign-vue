<template>
  <div id="app-footer-wrapper">
    <div class="footer-wrapper">
      <div class="footer-logo-image">
        <img
          src="https://i.ibb.co/d4yZmMC/s-Design-Pro-Logo-01.png"
          alt="s-Design-Logo"
        />
      </div>
      <div class="footer-lists">
        <div class="lists-column">
          <h4>Product</h4>
          <ul>
            <router-link tag="li" :to="{ name: 'sounds' }">Sounds</router-link>
            <router-link tag="li" :to="{ name: 'pricing' }"
              >Pricing</router-link
            >
            <router-link tag="li" :to="{ name: 'faq' }">FAQ</router-link>
          </ul>
        </div>

        <div class="lists-column">
          <h4>Company</h4>
          <ul>
            <router-link tag="li" :to="{ name: 'sounds' }">Product</router-link>
            <router-link tag="li" :to="{ name: 'pricing' }"
              >Company</router-link
            >
            <router-link tag="li" :to="{ name: 'faq' }">Improve</router-link>
          </ul>
        </div>

        <div class="lists-column">
          <h4>Improve</h4>
          <ul>
            <router-link tag="li" :to="{ name: 'sounds' }">Product</router-link>
            <router-link tag="li" :to="{ name: 'pricing' }"
              >Company</router-link
            >
            <router-link tag="li" :to="{ name: 'faq' }">Improve</router-link>
          </ul>
        </div>
      </div>
      <div class="footer-social-icons">
        <div class="sns-icons">
          <fa-icon class="fa-icon" :icon="['fab', 'github']" />
          <fa-icon class="fa-icon" :icon="['fab', 'twitter']" />
          <fa-icon class="fa-icon" :icon="['fab', 'instagram']" />
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      sDesign &copy; 2020 - All rights reserved
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$bgColor: #000;

#app-footer-wrapper {
  width: 100%;
  height: 390px;
  background-color: $bgColor;
  position: relative;
  top: 60;
}
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 82px 0 0 0;
  width: 57%;
  min-width: 800px;
  margin: 0 auto;
}

.footer-logo-image {
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  img {
    width: 50%;
    min-width: 100px;
    filter: invert(100%);
    margin: 0 10px;
  }
}

.footer-lists {
  display: flex;
  justify-content: space-between;
  width: 40%;

  .lists-column {
    width: auto;
    color: #fff;
    text-align: left;

    h4 {
      margin: 7px 0;
    }
    li {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 24px;
    }
  }
}

.footer-social-icons {
  width: 200px;
  padding: 10px 0;

  .sns-icons {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    font-size: 28px;
    .fa-icon {
      margin: 0 18px;
    }
  }
}

.footer-copyright {
  position: absolute;
  bottom: 50px;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

/* 반응형 */

/* 웹 */
@media (max-width: 1600px) {
}
@media (max-width: 1500px) {
}
@media (max-width: 1250px) {
}

/* 태블릿 */
@media (max-width: 1020px) {
  .footer-wrapper {
    min-width: 750px;
    .footer-logo-image {
      width: 150px;
    }
    .footer-social-icons {
      width: 150px;
      .fa-icon {
        margin: 0 11px;
        font-size: 24px;
      }
    }
  }
}
@media (max-width: 750px) {
  .footer-wrapper {
    min-width: 610px;
  }
}
@media (max-width: 599px) {
  .footer-wrapper {
    min-width: 490px;
    .footer-logo-image {
      width: 120px;
      img {
        min-width: 70px;
      }
    }
    .footer-social-icons {
      width: 120px;
      .fa-icon {
        margin: 0 9px;
        font-size: 20px;
      }
    }
  }
}

/* 블랙베리 모바일 */
@media (max-width: 489px) {
  #app-footer-wrapper {
    height: 600px;
  }

  .footer-wrapper {
    min-width: 90%;
    height: 458px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 50px;
    .footer-logo-image {
      justify-content: center;
      img {
        min-width: 100px;
      }
    }
    .footer-lists {
      height: 340px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      .lists-column {
        text-align: center;
      }
    }
    .footer-social-icons {
      padding: 0;
      width: 165px;
      .fa-icon {
        margin: 0 16px;
        font-size: 24px;
      }
    }
  }

  .footer-copyright {
    bottom: 46px;
  }
}
/* 모바일 */
@media (max-width: 470px) {
}
/* 아이폰se 모바일 */
@media (max-width: 369px) {
}
</style>

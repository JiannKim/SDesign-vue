<template>
  <div id="faq-page-wrapper">
    <div class="top-section">
      <h1 class="page-title">Frequently Asked Questions</h1>
    </div>
    <div class="middle-section">
      <span class="middle-title">자주 묻는 질문</span>
      <div class="middle-tables">
        <div class="tables-">
          <div @click="onClickTab(tab)" class="tables-list">
            구독이 만료되거나 계정을 삭제하더라도 사운드를 계속 사용할 수
            있습니까?
          </div>
          <template>
            <div>
              네. 현재 Soundsnap에 활성 구독이 없거나 활성 계정이없는 경우에도
              사운드를 무기한으로 사용할 수 있습니다. 최종 사용자 라이선스의
              동일한 규칙이 계속 적용됩니다.
            </div>
          </template>
        </div>
        <!-- <template>
          <div>
            현재 Visa, Mastercard, Paypal 및 American Express를 사용할 수
            있습니다.
          </div>
        </template>
        <template>
          <div>
            아니요, 귀하의 결제 정보는 당사 서버에 절대 남아 있지 않습니다. 연간
            계정의 경우 귀하의 신용 정보는 신용 카드 프로세서에 의해 안전하게
            저장됩니다.
          </div>
        </template> -->
        <!-- <template v-if="selectedTab === tabs[0]">
          <div>
            네. 현재 Soundsnap에 활성 구독이 없거나 활성 계정이없는 경우에도
            사운드를 무기한으로 사용할 수 있습니다. 최종 사용자 라이선스의
            동일한 규칙이 계속 적용됩니다.
          </div>
        </template> -->
        <!-- <template v-else-if="selectedTab === tabs[1]">
          <div>
            현재 Visa, Mastercard, Paypal 및 American Express를 사용할 수
            있습니다.
          </div>
        </template>
        <template v-else>
          <div>
            아니요, 귀하의 결제 정보는 당사 서버에 절대 남아 있지 않습니다. 연간
            계정의 경우 귀하의 신용 정보는 신용 카드 프로세서에 의해 안전하게
            저장됩니다.
          </div>
        </template> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const tabs = [
      {
        id: 1,
        title:
          "구독이 만료되거나 계정을 삭제하더라도 사운드를 계속 사용할 수 있습니까?",
      },
      { id: 2, title: "어떤 결제 방법을 사용할 수 있습니까?" },
      { id: 3, title: "내 신용 카드 정보를 저장합니까?" },
    ];
    return {
      tabs,
      selectedTab: tabs[0],
    };
  },
  methods: {
    onClickTab: function(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped lang="scss">
#faq-page-wrapper {
  background-color: #000;
  color: #fff;
}

.top-section {
  h1 {
    margin-bottom: 50px;
  }
}

.middle-section {
  border: 1px solid springgreen;
  text-align: left;
  padding: 0 50px;
  span {
    font: {
      size: 32px;
      weight: 600;
    }
  }
  .middle-tables {
    border: 1px solid aqua;
    max-width: 1170px;
    margin: auto;
    position: relative;
    .tables-list {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 20px;
      cursor: pointer;
    }
  }
}
</style>

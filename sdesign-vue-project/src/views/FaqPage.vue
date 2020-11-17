<template>
  <div id="faq-page-wrapper">
    <div class="top-section">
      <h1 class="page-title">Frequently Asked Questions</h1>
    </div>
    <div class="middle-section">
      <div class="middle-tables">
        <span class="middle-title">Q. 자주 묻는 질문</span>
        <div class="tables-contents">
          <div @click="quesOne = !quesOne" class="tables-list">
            <p>
              구독이 만료되거나 계정을 삭제하더라도 사운드를 계속 사용할 수
              있나요?
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesOne }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesOne" class="list-answer">
                네. 현재 SDsign에 활성 구독이 없거나 활성 계정이없는 경우에도
                사운드를 무기한으로 사용할 수 있습니다. 최종 사용자 라이선스의
                동일한 규칙이 계속 적용됩니다.
              </div>
            </transition>
          </div>
        </div>
        <div class="tables-contents">
          <div @click="quesTwo = !quesTwo" class="tables-list">
            <p>
              어떤 결제 방법을 사용하나요?
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesTwo }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesTwo" class="list-answer">
                현재 Visa, Mastercard, Paypal 및 American Express를 사용할 수
                있습니다.
              </div>
            </transition>
          </div>
        </div>
        <div class="tables-contents">
          <div @click="quesThree = !quesThree" class="tables-list">
            <p>
              내 신용 카드 정보를 저장하나요?
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesThree }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesThree" class="list-answer">
                아니요, 귀하의 결제 정보는 당사 서버에 절대 남아 있지 않습니다.
                연간 계정의 경우 귀하의 신용 정보는 신용 카드 프로세서에 의해
                안전하게 저장됩니다.
              </div>
            </transition>
          </div>
        </div>
        <div class="tables-contents">
          <div @click="quesFour = !quesFour" class="tables-list">
            <p>
              인보이스 / 영수증이 필요해요.
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesFour }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesFour" class="list-answer">
                구매를 완료하기 전에 회사 정보를 입력해야합니다. 프로필
                페이지에서 '청구 및 인보이스'탭을 선택하여 영수증을 찾을 수
                있습니다. 거기에서 영수증의 pdf를보고 다운로드 할 수있는
                "인보이스"를 클릭하십시오.
              </div>
            </transition>
          </div>
        </div>
        <div class="tables-contents">
          <div @click="quesFive = !quesFive" class="tables-list">
            <p>
              결제 프로세스를 로드하는 중에 문제가 발생했다는 메시지가
              표시됬어요.
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesFive }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesFive" class="list-answer">
                브라우저의 플러그인 때문일 수 있습니다. 브라우저 플러그인
                (DuckDuckGo, Privacy Badger 등)을 사용중인 경우 비활성화하거나
                페이지를 새로 고침하기 전에 비공개 / 시크릿 모드를 사용하세요.
              </div>
            </transition>
          </div>
        </div>
        <div class="tables-contents">
          <div @click="quesSix = !quesSix" class="tables-list">
            <p>
              결제 취소 진행은 어떻게 하나요?
              <fa-icon
                icon="caret-down"
                class="caret-icon"
                :class="{ activeIcon: !quesSix }"
              />
            </p>
            <transition name="list-fade">
              <div v-if="!quesSix" class="list-answer">
                페이지 내에서 구독 취소를 하시면 몇 일 내로 구독이 취소 됩니다.
                결제된 금액은 이용 횟수에 따라 차감 후 환불 됩니다. (이용 횟수에
                따라 추가 결제 될 수 있습니다.)
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quesOne: true,
      quesTwo: true,
      quesThree: true,
      quesFour: true,
      quesFive: true,
      quesSix: true,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
// transition 컨트롤러
.list-fade-enter-active {
  transition: all 0.4s ease;
}
.list-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.list-fade-enter, .list-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#faq-page-wrapper {
  background-color: #000;
  color: #fff;
}

.top-section {
  h1 {
    margin: 0 10px 50px;
  }
}
.middle-section {
  text-align: left;
  padding: 30px;
  .middle-tables {
    max-width: 1170px;
    margin: auto;
    position: relative;
    // padding-bottom: 30px;
    span {
      color: #828282;
      display: flex;
      margin-bottom: 25px;
      font: {
        size: 32px;
        weight: 600;
      }
    }
    .tables-list {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 24px 0;
      cursor: pointer;
      font-size: 18px;
      p {
        display: flex;
        justify-content: space-between;
        .caret-icon {
          padding: 0 10px;
          transform: rotate(90deg);
          transition: 0.17s ease-in-out;
        }
        .activeIcon {
          transform: rotate(0deg);
        }
      }
      .list-answer {
        padding-top: 20px;
        font-size: 16px;
        color: #828282;
      }
    }
  }
}
</style>

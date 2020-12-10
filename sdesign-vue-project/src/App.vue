<template>
  <div id="app">
    <TheHeader />
    <div id="side-page">
      <router-view></router-view>
    </div>
    <!-- 모달 폼 -->
    <SignFormView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import SignFormView from "@/views/SignFormView.vue";
import TheFooter from "@/components/common/TheFooter.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "app",
  components: {
    TheHeader,
    SignFormView,
    TheFooter,
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./style/common.css";

/* 컴포넌트 영역 잡아주기 위해 헤더 높이만큼 패딩값 넣기 */
#side-page {
  padding-top: 73px;
}
// theHeaderSearchTab
.search-modal {
  &.vm--container {
    top: 70px !important;
  }
  .vm--modal {
    top: 3px !important;
    left: 0 !important;
    width: 100% !important;
    height: 90px !important;
    background: rgba(255, 255, 255, 0.836);
  }
  .vm--overlay {
    opacity: 0 !important;
  }
}
// my account modal custom
.account-modal {
  .vm--modal {
    max-width: 152px;
    max-height: 150px;
    left: 92% !important;
    top: 6% !important;
    // margin-right: 20px !important;
    background: rgba(255, 255, 255, 0) !important;
    overflow: unset !important;
    transform: translate(-50%, 0) !important;
    border-radius: 7px;
    transition: opacity 0.2s ease;
    box-shadow: 0 10px 50px -5px rgba(27, 33, 58, 0.3) !important;
  }
  .vm--overlay {
    opacity: 0 !important;
  }
}

// plyr style customs
.plyr {
  transition: $sub-transition;
  width: 100%;
  .plyr__controls {
    --plyr-color-main: transition;
    --plyr-audio-control-color: #313131;
    --plyr-audio-controls-background: transition;
    --plyr-control-radius: 11px;
    --plyr-audio-control-color-hover: none;
    padding: var(--plyr-control-spacing, 10px 10px 10px 0) !important;
    .plyr__controls__item {
      &:first-child {
        padding: var(--plyr-control-spacing, 10px 10px 10px 0) !important;
      }
    }
    .plyr__progress,
    .plyr__volume {
      & input[type="range"] {
        color: rgba(141, 0, 222, 0.4);
        // color: #909090;
      }
    }
    // .plyr__control[role="menuitemradio"] {
    //   --plyr-color-main: #e0e0e0;
    // }
    .plyr__menu {
      display: none;
    }
  }
}
</style>

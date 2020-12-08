import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vmodal from "vue-js-modal";
import store from "@/store/index";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import InfiniteLoading from "vue-infinite-loading";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faHome,
  faPlay,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeOff,
  faHeart,
  faDownload,
  faAngleDown,
  faCaretDown,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faTwitter,
  faGithub,
  faInstagram,
  faSearch,
  faTimes,
  faHome,
  faPlay,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeOff,
  faHeart,
  faDownload,
  faAngleDown,
  faCaretDown,
  faShareAltSquare
);

// fontawesome icon 사용을 위한 전역 컴포넌트로 등록
Vue.component("fa-icon", FontAwesomeIcon);
// input에 v-focus를 해주기 위해 전역 등록
Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  },
});

// vue-js-modal 기능 사용을 위한 등록
Vue.use(vmodal, {
  componentName: "Modal",
});
// vue-plyr 모듈 사용을 위한 등록
Vue.use(VuePlyr);

Vue.use(InfiniteLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  vmodal,
  store,
  VuePlyr,
  InfiniteLoading,
  render: (h) => h(App),
}).$mount("#app");

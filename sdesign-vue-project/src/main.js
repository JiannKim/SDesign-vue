import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vmodal from "vue-js-modal";
import store from "@/store/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import TheHeader from "@/components/common/TheHeader.vue";

library.add(faTwitter, faGithub, faInstagram, faSearch, faTimes, faHome);

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

Vue.config.productionTip = false;

new Vue({
  router,
  vmodal,
  store,
  render: (h) => h(App),
}).$mount("#app");

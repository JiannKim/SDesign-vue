import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vmodal from "vue-js-modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTwitter, faGithub, faSearch, faTimes);

Vue.component("fa-icon", FontAwesomeIcon);
// vue-js-modal 기능 사용을 위한 등록
Vue.use(vmodal, {
  componentName: "Modal",
});

Vue.config.productionTip = false;

new Vue({
  vmodal,
  router,
  render: (h) => h(App),
}).$mount("#app");

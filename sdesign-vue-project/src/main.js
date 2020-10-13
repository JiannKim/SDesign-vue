import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faTwitter,
  faGithub,
  faSearch
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  tamplate: '<AppHeaderSearchTab />',
}).$mount('#app');

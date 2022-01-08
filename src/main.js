import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./sizing.css";
import "./colors.css";
import 'material-icons/iconfont/material-icons.css';import '@mdi/font/css/materialdesignicons.css'
Vue.use(BootstrapVue);

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

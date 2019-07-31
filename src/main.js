import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { rtdbPlugin } from 'vuefire';
import VueGtm from 'vue-gtm';

window.ENV = process.env.NODE_ENV || 'development';

Vue.config.productionTip = false;

Vue.use(rtdbPlugin);
Vue.use(VueGtm, {
	id: 'GTM-TKN6L75',
	enabled: true
});

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');

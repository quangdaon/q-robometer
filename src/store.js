import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		percent: 0.5
	},
	mutations: {
		updatePercent(state, val) {
			state.percent = val;
		}
	},
	actions: {
		updatePercent(context, val) {
			context.commit('updatePercent', val);
		}
	}
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		percent: 0.5,
		history: [],
		sessionHistory: []
	},
	mutations: {
		updatePercent(state, val) {
			state.percent = val;
		},
		updatePercentRelative(state, val) {
			state.percent += val;
		},
		normalizePercent(state) {
			if (state.percent > 1) state.percent = 1;
			if (state.percent < 0) state.percent = 0;
		}
	},
	actions: {
		updatePercent(context, val) {
			context.commit('updatePercent', val);
			context.commit('normalizePercent');
		},
		handleChange(context, val) {
			context.commit('updatePercentRelative', val.change);
			context.commit('normalizePercent');
		}
	}
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		sessionHistory: [],
		showFullHistory: false
	},
	mutations: {
		logAction(state, input) {
			state.sessionHistory.push(input);
		},
		clearSessionHistory(state) {
			Vue.set(state, 'sessionHistory', []);
		},
		toggleHistoryMode(state, val) {
			if (typeof val !== 'undefined') {
				state.showFullHistory = val;
			} else {
				state.showFullHistory = !state.showFullHistory;
			}
		}
	},
	actions: {
		clearSessionHistory(context) {
			context.commit('clearSessionHistory');
		},
		toggleHistoryMode(context, val) {
			context.commit('toggleHistoryMode', val);
		}
	}
});

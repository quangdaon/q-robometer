import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAction, vuexfireMutations  } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ready: false,
		history: [],
		sessionHistory: [],
		showFullHistory: false
	},
	getters: {
		percent(state) {
			return state.history.reduce((a, b) => a + b.change, 0.5);
		}
	},
	mutations: {
		...vuexfireMutations,
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
		},
		stateReady(state) {
			state.ready = true
		}
	},
	actions: {
		setHistoryRef: firebaseAction(({ bindFirebaseRef, commit }, { ref }) => {
			bindFirebaseRef('history', ref).then(() => {
				commit('stateReady')
			});
		}),
		clearSessionHistory(context) {
			context.commit('clearSessionHistory');
		},
		toggleHistoryMode(context, val) {
			context.commit('toggleHistoryMode', val);
		}
	}
});

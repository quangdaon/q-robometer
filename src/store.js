import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAction, vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ready: false,
		history: [],
		showFullHistory: false,
		sessionStart: Date.now()
	},
	getters: {
		percent(state) {
			return state.history.reduce((a, b) => a + b.change, 0.5);
		},
		sessionHistory(state) {
			return state.history.filter(p => p.submitted > state.sessionStart);
		}
	},
	mutations: {
		...vuexfireMutations,
		clearSessionHistory(state) {
			Vue.set(state, 'sessionStart', Date.now());
		},
		toggleHistoryMode(state, val) {
			if (typeof val !== 'undefined') {
				state.showFullHistory = val;
			} else {
				state.showFullHistory = !state.showFullHistory;
			}
		},
		stateReady(state) {
			state.ready = true;
		}
	},
	actions: {
		setHistoryRef: firebaseAction(({ bindFirebaseRef, commit }, { ref }) => {
			bindFirebaseRef('history', ref).then(() => {
				commit('stateReady');
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

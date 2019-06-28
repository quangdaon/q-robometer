import Vue from 'vue';
import Vuex from 'vuex';

const storageKey = '__q-app-state';

const storage = JSON.parse(localStorage.getItem(storageKey)) || {};

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		percent: storage.percent || 0.5,
		history: storage.history || [],
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
		},
		logAction(state, input) {
			state.history.push(input);
			state.sessionHistory.push(input);
		},
		clearSessionHistory(state) {
			Vue.set(state, 'sessionHistory', []);
		}
	},
	actions: {
		updatePercent(context, val) {
			context.commit('updatePercent', val);
			context.commit('normalizePercent');
			context.dispatch('saveState');
		},
		handleChange(context, input) {
			context.commit('logAction', input);
			context.commit('updatePercentRelative', input.change);
			context.commit('normalizePercent');
			context.dispatch('saveState');
		},
		saveState(context) {
			const { percent, history } = context.state;
			const saved = { percent, history };
			localStorage.setItem(storageKey, JSON.stringify(saved));
		},
		clearSessionHistory(context) {
			context.commit('clearSessionHistory');
		}
	}
});

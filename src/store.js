const crypto = require('crypto');
import Vue from 'vue';
import Vuex from 'vuex';
import Fingerprint2 from 'fingerprintjs2';
import { firebaseAction, vuexfireMutations } from 'vuexfire';
import { db } from './db';

const storageKey = '__q-app-state';

const storage = JSON.parse(localStorage.getItem(storageKey)) || {};

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		fingerprint: null,
		ready: false,
		history: [],
		showFullHistory: typeof storage.showFullHistory !== 'undefined' ? storage.showFullHistory : true,
		sessionStart: Date.now(),
		auth: { validated: false, key: '' }
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
		},
		setAuth(state, val) {
			state.auth.validated = val.validated;
			state.auth.key = val.key;
		},
		setFingerprint(state, val) {
			state.fingerprint = val;
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
		saveSettings(context) {
			const { showFullHistory } = context.state;
			const saved = { showFullHistory };
			localStorage.setItem(storageKey, JSON.stringify(saved));
		},
		toggleHistoryMode(context, val) {
			context.commit('toggleHistoryMode', val);
			context.dispatch('saveSettings');
		},
		unauth(context) {
			context.commit('setAuth', {
				validated: false,
				key: ''
			});
		},
		async initFingerprint(context) {
			const components = await Fingerprint2.getPromise();
			const values = components.map(c => c.value);
			const hash = Fingerprint2.x64hash128(values.join(''), 31);

			context.commit('setFingerprint', hash);
		},
		async authenticate(context, val) {
			const hash = crypto.createHmac('sha256', val).digest('hex');
			await context.dispatch('validateHash', hash);

			const logData = {
				type: 'auth',
				category: 'AuthenticationAttempt',
				action: 'Success',
				label: '***********',
				gtm: true
			};

			if (!context.state.auth.validated) {
				alert('nope!');
				logData.action = 'Failure';
				logData.label = val;
			}

			context.dispatch('logData', logData);

		},
		async validateHash(context, hash) {
			const snapshot = await db.ref('auth/password/' + hash).once('value');

			if (snapshot.val()) {
				const hmac = crypto.createHmac('sha256', snapshot.val()).digest('hex');

				context.commit('setAuth', {
					validated: true,
					key: hmac
				});
			}
		},
		logData(context, data) {
			const logGtm = data.gtm;
			delete data.gtm;

			if (context.state.fingerprint) {
				data.fingerprint = context.state.fingerprint;
			}

			data.timestamp = Date.now();

			db.ref('logs').push(data);

			if (logGtm) {
				const gtmEvent = {
					event: data.type,
					category: data.category,
					action: data.action,
					label: data.label,
					value: data.value
				};

				Vue.gtm.trackEvent(gtmEvent);
			}
		}
	}
});

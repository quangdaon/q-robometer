<template>
	<div class="panel">
		<div class="panel-section">
			<div class="panel-section-title">
				<h3>Settings</h3>
			</div>
			<div class="panel-row">
				<div class="panel-left">
					<label for="panel-history-full">Show full history</label>
				</div>
				<div class="panel-right">
					<input type="checkbox" id="panel-history-full" v-model="showFullHistory">
				</div>
			</div>
		</div>
		<div class="panel-section" v-if="auth.validated">
			<div class="panel-section-title">
				<h3>Submit</h3>
			</div>
			<form @submit.prevent="submit" @keyup.esc="resetSubmit" class="panel-form">
				<div class="panel-row">
					<div class="panel-left">
						<label for="panel-change">Change %</label>
					</div>
					<div class="panel-right">
						<input type="number" id="panel-change" v-model.number="changePercent" min="-8" max="8" step="0.5">
					</div>
				</div>
				<div class="panel-row">
					<div class="panel-left">
						<label for="panel-message">Message</label>
					</div>
					<div class="panel-right">
						<input type="text" id="panel-message" v-model="message">
					</div>
				</div>
				<div class="panel-row">
					<div class="panel-buttons">
						<button @click.prevent="clearLog" type="button">Clear Log</button>
						<button @click.prevent="resetSubmit" type="button">Reset</button>
						<button type="submit" :disabled="!canSubmit">Submit</button>
					</div>
				</div>
			</form>
		</div>
		<div class="panel-section" v-else>
			<div class="panel-section-title">
				<h3>Authenticate</h3>
			</div>
			<form @submit.prevent="authenticate" @keyup.esc="resetAuth" class="panel-form">
				<div class="panel-row">
					<div class="panel-left">
						<label for="panel-pass">What's the password???</label>
					</div>
					<div class="panel-right">
						<input type="password" id="panel-pass" v-model="password">
					</div>
				</div>
				<div class="panel-row">
					<div class="panel-buttons">
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { db } from '../db';
	import { mapState } from 'vuex';

	const historyRef = db.ref('pings');

	export default {
		name: 'ControlPanel',
		data() {
			return {
				changePercent: 0,
				message: '',
				password: '',
				canSubmit: true
			};
		},
		methods: {
			async submit() {
				this.canSubmit = false;
				let ping = {
					change: this.changed,
					message: this.message,
					submitted: Date.now(),
					key: this.$store.state.auth.key
				};


				try {
					await historyRef.push(ping);

					this.$store.dispatch('logData', {
						gtm: true,
						type: 'update',
						category: 'Ping',
						action: ping.change > 0 ? '+ Human' : ping.change < 0 ? '+ Robot' : 'Neutral',
						label: ping.message,
						value: Math.abs(ping.change)
					});

					this.resetSubmit();
				} catch (e) {
					alert('something went wrong');

					this.$store.dispatch('logData', {
						gtm: true,
						event: 'auth',
						category: 'AuthenticationDeactivated',
						action: e.message,
						label: ping.key
					});

					this.$store.dispatch('unauth');
				}

				this.canSubmit = true;
			},
			resetSubmit() {
				this.changePercent = 0;
				this.message = '';
			},
			resetAuth() {
				this.password = '';
			},
			clearLog() {
				this.$store.dispatch('clearSessionHistory');
			},
			authenticate() {
				this.$store.dispatch('authenticate', this.password);
				this.resetAuth();
			}
		},
		computed: {
			...mapState(['auth']),
			showFullHistory: {
				get() {
					return this.$store.state.showFullHistory;
				},
				set(val) {
					this.$store.dispatch('toggleHistoryMode', val);
				}
			},
			changed() {
				return this.changePercent / 100;
			}
		}
	};
</script>

<style scoped>
	.panel {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 1em;
		border: 1px solid #000;
		background: #ddd;
		width: 300px;
	}
	
	.panel-section {
		margin-bottom: 1em;
	}
	
	.panel-section:last-child {
		margin-bottom: 0;
	}
	
	.panel-section-title h3 {
		margin: 0;
	}
	
	.panel-row {
		display: flex;
		margin: 1em 0;
		align-items: center;
	}
	
	.panel-row:last-child {
		margin-bottom: 0;
	}
	
	.panel-left {
		flex: 0 0 35%;
		padding-right: 0.5em;
		text-align: right;
	}
	
	.panel-right {
		flex: 0 0 65%;
	}
	
	.panel-right input {
		display: block;
		width: 100%;
		min-width: 0;
		max-width: none;
	}
	
	.panel-right input[type="checkbox"] {
		display: inline-block;
		text-align: left;
		width: auto;
		margin: 0;
	}
	
	.panel-buttons {
		margin-left: auto;
	}
</style>
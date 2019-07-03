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
		<div class="panel-section">
			<div class="panel-section-title">
				<h3>Submit</h3>
			</div>
			<form @submit.prevent="submit" @keyup.esc="reset" class="panel-form">
				<div class="panel-row">
					<div class="panel-left">
						<label for="panel-change">Change %</label>
					</div>
					<div class="panel-right">
						<input type="number" id="panel-change" v-model.number="changePercent" min="-100" max="100" step="0.5">
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
						<button @click.prevent="reset" type="button">Reset</button>
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { db } from '../db';

	let historyRef = db.ref('pings');
	export default {
		name: 'ControlPanel',
		data() {
			return {
				changePercent: 0,
				message: ''
			};
		},
		firebase: {
			history: historyRef
		},
		methods: {
			submit() {
				let ping = {
					change: this.changed,
					message: this.message
				};
				
				historyRef.push(ping);
				this.$emit('change', ping);
				
				this.reset();
			},
			reset() {
				this.changePercent = 0;
				this.message = '';
			},
			clearLog() {
				this.$store.dispatch('clearSessionHistory');
			}
		},
		computed: {
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
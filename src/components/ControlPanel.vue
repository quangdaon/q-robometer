<template>
	<div class="panel">
		<div class="panel-row">
			<div class="panel-left">
				<label for="panel-change">Change %</label>
			</div>
			<div class="panel-right">
				<input type="number" id="panel-change" v-model.number="changePercent" min="0" max="100" step="0.2">
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
			<div class="panel-submit">
				<button @click="submit">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ControlPanel',
		data() {
			return {
				changePercent: 0,
				message: ''
			};
		},
		methods: {
			submit() {
				this.$emit('change', {
					change: this.changed,
					message: this.message
				})
			}
		},
		computed: {
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
	
	.panel-row {
		display: flex;
		margin: 1em 0px;
	}
	
	.panel-row:first-child {
		margin-top: 0;
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
	
	.panel-submit {
		margin-left: auto;
	}
</style>
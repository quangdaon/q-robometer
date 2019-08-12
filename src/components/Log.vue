<template>
	<div class="log">
		<div class="log-item" v-for="(update, i) in history" :key="i">
			<p class="log-message" :style="getStyles(update)">
				{{ getMessage(update) }}
			</p>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapState } from 'vuex';

	export default {
		name: 'Log',
		computed: {
			...mapState({
				fullHistory: 'history',
				showFullHistory: 'showFullHistory'
			}),
			...mapGetters({
				sessionHistory: 'sessionHistory'
			}),
			history() {
				return this.showFullHistory ? this.fullHistory : this.sessionHistory;
			}
		},
		methods: {
			getMessage({ change, message }) {
				const percentSymbol = change === 0 ? '±' : '+';
				const percentText = `${(Math.abs(change) * 100).toFixed(2) * 1}%`;
				const percentFavor = change > 0 ? 'Human' : change < 0 ? 'Robot' : '';

				return `${percentSymbol}${percentText} ${percentFavor} - ${message}`;
			},
			getStyles({ change }) {
				const styles = {};
				if (change > 0) {
					styles.color = '#080';
				}
				if (change < 0) {
					styles.color = '#d00';
				}

				return styles;
			}
		}
	};
</script>

<style scoped>
	.log:hover .log-message {
		opacity: 0.25;
	}
	
	.log:hover .log-message:hover {
		opacity: 1;
	}
	
	.log-item {
		padding: 0.25em 0;
	}
	
	
	.log-message {
		position: relative;
		font-size: 0.875em;
		font-style: italic;
		margin: 0;
		line-height: 1;
		transform-origin: center center;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.log-item:hover .log-message {
		z-index: 2;
		transform: scale(1.25);
		overflow: visible;
	}
</style>

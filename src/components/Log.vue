<template>
	<div class="log">
		<div class="log-item" v-for="(update, i) in history" :key="i">
			<p class="log-message" :style="getStyles(update)">{{ getMessage(update) }}</p>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Log',
		computed: {
			...mapState({
				history: 'sessionHistory'
			})
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
	.log-message {
		font-size: 0.875em;
		font-style: italic;
		margin: 0;
		line-height: 1.5;
	}
</style>
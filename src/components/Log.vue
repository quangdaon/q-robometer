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
				let percentText = (change * 100).toFixed(2) * 1 + '%';
				if (change >= 0) {
					percentText = `+${percentText}`;
				}

				return `${percentText} - ${message}`;
			},
			getStyles({ change }) {
				return { color: change >= 0 ? '#080' : '#d00' };
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
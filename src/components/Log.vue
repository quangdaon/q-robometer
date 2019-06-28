<template>
	<div class="log">
		<div class="log-item" v-for="(update, i) in history" :key="i">
			<p :class="getMessageClasses(update)">{{ getMessage(update) }}</p>
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
			getMessageClasses(update) {
				return { 'log-message': true };
			},
			getMessage({ change, message }) {
				let percentText = (change * 100).toFixed(2) * 1 + '%';
				if (change < 0) {
					percentText = `+${percentText}`;
				}

				return `${percentText} - ${message}`;
			}
		}
	};
</script>

<style scoped>

</style>
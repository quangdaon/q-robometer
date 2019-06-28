<template>
	<div id="app">
		<div class="main">
			<h1>Quangdao's Robometer</h1>
			<scale :percentage="percent" />
			<input type="range" v-model.number="percentInput" @input="updatePercent(percentInput)" min="0" max="1" step="0.0001">
			<log />
		</div>
		
		<control-panel />
	</div>
</template>

<script>
	import Scale from './components/Scale';
	import Log from './components/Log';
	import ControlPanel from './components/ControlPanel';

	export default {
		name: 'app',
		data() {
			return {
				percentInput: 0,
			};
		},
		components: {
			'scale': Scale,
			'log': Log,
			'control-panel': ControlPanel
		},
		mounted() {
			this.percentInput = this.$store.state.percent;
		},
		methods: {
			updatePercent(val) {
				this.$store.dispatch('updatePercent', val)
			}
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
	
	#app {
		font-family: Roboto, sans-serif;
	}
	
	.main {
		max-width: 1080px;
		margin: auto;
		text-align: center;
	}
</style>

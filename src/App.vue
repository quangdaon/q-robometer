<template>
	<div id="app">
		<div class="main">
			<h1>Quangdao's Robometer</h1>
			<scale :percentage="percent" />
			<input type="range" v-model="percent" min="0" max="1" step="0.0001">
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
				percent: 0.5
			};
		},
		components: {
			'scale': Scale,
			'log': Log,
			'control-panel': ControlPanel
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
	
	#app {
		font-family: Roboto, sans-serif;
	}
	
	.main {
		max-width: 1350px;
		margin: auto;
		text-align: center;
	}
</style>

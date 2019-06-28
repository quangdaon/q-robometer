<template>
	<div id="app">
		<div class="main">
			<h1>Quangdao's Robometer</h1>
			<scale />
			<log />
		</div>
		
		<control-panel @change="handleControlPanelInput" />
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
			};
		},
		components: {
			'scale': Scale,
			'log': Log,
			'control-panel': ControlPanel
		},
		mounted() {
		},
		methods: {
			updatePercent(val) {
				this.$store.dispatch('updatePercent', val);
			},
			handleControlPanelInput(input) {
				this.$store.dispatch('handleChange', input);
			}
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,400i&display=swap');
	
	*, *:before, *:after {
		box-sizing: border-box;
	}
	
	#app {
		font-family: Roboto, sans-serif;
	}
	
	.main {
		max-width: 900px;
		margin: auto;
		text-align: center;
	}
</style>

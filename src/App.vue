<template>
	<div id="app">
		<div class="main">
			<h1>Quangdao's Robometer</h1>
			<scale />
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
		text-align: center;
	}
</style>

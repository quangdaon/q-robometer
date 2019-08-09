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
	import { db } from './db';

	const historyRef = db.ref('pings');
	
	export default {
		name: 'app',
		data() {
			return {};
		},
		components: {
			'scale': Scale,
			'log': Log,
			'control-panel': ControlPanel
		},
		mounted() {
			this.$store.dispatch('setHistoryRef', historyRef);
			this.$store.dispatch('initFingerprint');
			this.$gtm.trackView('Home', '/');
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
		padding: 2em;
		margin: auto;
		text-align: center;
	}
	
	.main h1 {
		margin-top: 0;
	}
</style>

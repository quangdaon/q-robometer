<template>
	<div class="scale">
		<div class="scale-label scale-label-robot">
			<p><span class="scale-label-percent">{{percentRobot}}</span> Robot</p>
		</div>
		<div class="scale-meter">
			<div class="scale-meter-container">
				<div class="scale-meter-progress" :style="{width: percentHuman}"></div>
			</div>
		</div>
		<div class="scale-label scale-label-human">
			<p><span class="scale-label-percent">{{percentHuman}}</span> Human</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Scale',
		props: {
			percentage: {
				type: Number,
				required: true,
				validator(val) {
					return val >= 0 && val <= 1;
				}
			}
		},
		methods: {
			getPercentDisplay(val) {
				return (val * 100).toFixed(2) * 1 + '%';
			}
		},
		computed: {
			percentRobot() {
				return this.getPercentDisplay(1 - this.percentage);
			},
			percentHuman() {
				return this.getPercentDisplay(this.percentage);
			}
		}
	};
</script>

<style scoped>
	.scale {
		display: flex;
		width: 100%;
		align-items: center;
	}
	
	.scale-label {
		flex: 0 0 10%;
		font-size: 2em;
	}
	
	.scale-label-percent {
		font-size: 0.75em;
	}
	
	.scale-meter {
		flex: 1 1 auto;
		padding: 0 1em;
	}
	
	.scale-meter-container {
		position: relative;
		background: #ddd;
		height: 30px;
	}
	
	.scale-meter-progress {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background: #000;
	}
</style>
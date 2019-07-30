<template>
	<div class="scale" v-if="ready">
		<div class="scale-label scale-label-human">
			<p class="scale-label-percent">{{percentHuman}}</p>
			<p>Human</p>
		</div>
		<div class="scale-meter">
			<div class="scale-meter-container" :class="{danger: percent <= 0}">
				<div class="scale-meter-progress" :style="{width: `calc(${percentHuman} + 50px)`, background: getColor}"></div>
			</div>
		</div>
		<div class="scale-label scale-label-robot">
			<p class="scale-label-percent">{{percentRobot}}</p>
			<p>Robot</p>
		</div>
	</div>
</template>

<script>

	// https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage
	import { mapGetters, mapState } from 'vuex';

	const percentColors = [
		{ pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
		{ pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
		{ pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }];

	const getColorForPercentage = function (pct) {
		let i;
		for (i = 1; i < percentColors.length - 1; i++) {
			if (pct < percentColors[i].pct) {
				break;
			}
		}
		const lower = percentColors[i - 1];
		const upper = percentColors[i];
		const range = upper.pct - lower.pct;
		const rangePct = (pct - lower.pct) / range;
		const pctLower = 1 - rangePct;
		const pctUpper = rangePct;
		const color = {
			r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
			g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
			b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
		};
		return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
		// or output as hex if preferred
	};

	export default {
		name: 'Scale',
		data() {
			return {};
		},
		methods: {
			getPercentDisplay(val) {
				return (val * 100).toFixed(2) * 1 + '%';
			}
		},
		computed: {
			...mapState(['ready']),
			...mapGetters(['percent']),
			percentRobot() {
				return this.getPercentDisplay(1 - this.percent);
			},
			percentHuman() {
				return this.getPercentDisplay(this.percent);
			},
			getColor() {
				return getColorForPercentage(this.percent);
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
	
	.scale-label p {
		margin: 0;
		line-height: 1.5;
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
		border-radius: 50px;
		overflow: hidden;
	}
	
	.scale-meter-container.danger {
		animation: danger 0.5s alternate infinite linear;
	}
	
	.scale-meter-progress {
		position: absolute;
		left: -50px;
		top: 0;
		height: 100%;
		width: 100%;
		background: #000;
		border-radius: 50px;
		transition: width 300ms;
	}
	
	@keyframes danger {
		from {
			background: #ddd;
		}
		to {
			background: #f00;
		}
	}
</style>
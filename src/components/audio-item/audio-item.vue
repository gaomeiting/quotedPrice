<template>
<ul>
	<li v-for="(item, index) in list" :key="index" @click.stop="goAudioDetails(index)">
		<div class="content">
			<div class="cover" :style="'background-image: url('+item.cover+')'">
				<div class="mask">
					<div class="icon" @click.stop="settingCurrentSong(index)" :class="index === currentSongIndex && !currentTime ? 'icon_loading' : ''" >
						<i class="iconfont"v-if="(index != currentSongIndex) || (index === currentSongIndex && !song && currentTime) " :class="index === currentSongIndex && flag ? 'icon-pause' : 'icon-bofang'"></i>
					</div>
				</div>
			</div>
			<div class="text">
				<h3>{{item.info}}</h3>
				<p>{{type}}-{{level}}类</p>
			</div>
			<div class="progress-wrap">
				<span>{{ index != currentSongIndex || !diff || (song && index === currentSongIndex && flag) ? '0:00' : currentTime }}</span>
				<div class="progress-content">
					<progress-bar :percent="percent" @triggerPercent="setSongProgress"></progress-bar>
				</div>
				<span>{{format(item.duration)}}</span>
			</div>
		</div>
	</li>
	<audio :src="list[currentSongIndex] && list[currentSongIndex].url" ref="audio" @timeupdate="updateTime" @play="ready" @ended="end"></audio>
</ul>
</template>

<script type="text/ecmascript-6">
import ProgressBar from 'components/progress-bar/progress-bar';
import { audioHandlerProgress } from 'assets/js/mixins'
export default {
	mixins: [ audioHandlerProgress ],
	props: {
		list: {
			type: Array,
			default() {
				return []
			}
		},
		type: {
			type: String,
			default: ''
		},
		level: {
			type: String,
			default: ''
		}
	},
	methods: {
		goAudioDetails(index) {
			this.$emit('goAudioDetails', index)
		}
	},
	components: {
		ProgressBar
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.progress-wrap {
	display: flex;
	align-items: center;
	.progress-content {
		flex: 1;
		margin: 0 8px;
	}
}
li {
	display: flex;
	align-items: center;
	padding: 12px;
	margin: 16px 0;
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		.progress-wrap {
			width: 100%;
		}
		.cover {
			flex: 0 0 78px;
			width: 78px;
			height: 78px;
			overflow: hidden;
			border-radius: 6px;
			background-size: cover;
			background-position: top center;
			background-repeat: no-repeat;
			box-shadow: 1px 1px 6px rgba(0,0,0,0.1), -1px -1px 6px rgba(0,0,0,0.1);
			.mask {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgba(0,0,0,0.7);
			}
		}
		.text {
			flex: 1;
			text-align: center;
			h3 {
				color: $color-text-l;
				line-height: 1.5;
				margin-bottom: 8px;
				@include ellipsis(2);
			}
		}
	}
	.icon {
		width: 40px;
		height: 40px;
		&.icon_loading {
			background-image: url('/common/images/loading.gif');
			background-size: 16px 16px;
			background-position: center center;
			background-repeat: no-repeat;
		}
		i {
			font-size: 40px;
			color: $color-text-l;
			color: $color-background-d;
		}
	}
}
</style>
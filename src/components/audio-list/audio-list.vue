<template>
<ul>
	<li v-for="(item, index) in list" :key="index" @click.stop="goAudioDetails(index)">
		<div class="content">
			<figure>
				<img :src="item.cover">
			</figure>
			<div class="text">
				<h3>{{item.info}}</h3>
				<p>{{type}}-{{level}}类</p>
			</div>
		</div>
		<div v-if="!hideAudio" class="icon" @click.stop="settingCurrentSong(index)" :class="index === currentSongIndex && !currentTime ? 'icon_loading' : ''" >
			<i class="iconfont"  v-if="(index != currentSongIndex) || (index === currentSongIndex && !song && currentTime) " :class="index === currentSongIndex && flag ? 'icon-pause' : 'icon-bofang'"></i>
		</div>
	</li>
	<audio :src="list[currentSongIndex] && list[currentSongIndex].url" ref="audio" @timeupdate="updateTime" @play="ready" @ended="end"></audio>
</ul>
</template>

<script type="text/ecmascript-6">
import { audioHandler } from 'assets/js/mixins'
export default {
	mixins: [ audioHandler ],
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
		},
		hideAudio: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		goAudioDetails(index) {
			this.$emit('goAudioDetails', index)
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
li {
	display: flex;
	align-items: center;
	padding: 12px;
	border-radius: 6px;
	box-shadow: 1px 1px 6px rgba(0,0,0,0.1), -1px -1px 6px rgba(0,0,0,0.1);
	margin: 16px 0;
	.content {
		flex: 1;
		display: flex;
		align-items: center;
		figure {
			flex: 0 0 78px;
			width: 78px;
			height: 78px;
			overflow: hidden;
			border-radius: 6px;
			img {
				width: 100%;
				min-height: 100%;
			}
		}
		.text {
			flex: 1;
			padding-left: 12px;
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
		}
	}
}
</style>
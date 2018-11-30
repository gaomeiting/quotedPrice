<template>
<div>
  <div class="category">
	  <div class="info">
		  <div class="icon" :style="'background-image: url(/common/images/'+level.type+'_bg.png)'">
			  <p>
				  {{level.type}}类<br>
				  {{name}}
			  </p>
		  </div>
		  <div class="text">
			  <h3>{{level.type}}类{{name}}</h3>
			  <p v-html="level.summary"></p>
			 <p class="price-wrap"> <small>￥</small>  <strong>{{level.price}}</strong> <small>{{level.unit}}</small> <small class="inlineBlock" v-if="!level.originalUnit">￥{{level.originalPrice}}</small></p>
			<p class="price-wrap" v-if="level.originalUnit"> <small>￥</small>  <strong>{{level.originalPrice}}</strong><small>{{level.originalUnit}}</small></p>
		  </div>
	  </div>
  </div>
  <audio-list :list="level.audioList" @goAudioDetails="goAudioDetails" :type="name" :level="level.type" :hideAudio="hideAudio"></audio-list>
</div>
</template>

<script type="text/ecmascript-6">
import AudioList from 'components/audio-list/audio-list';
import { mapMutations } from 'vuex';
export default {
	props: {
		level: {
			type: Object,
			default() {
				return {}
			}
		},
		name: {
			type: String,
			default: ''
		},
		type: {
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
			let currentAudio = {...this.level.audioList[index], name: this.type, type: this.level.type}
			this.setCurrentAudio(currentAudio);
			let path= `/index/${currentAudio.name}/${currentAudio.type}/${currentAudio.id}`;
			this.$router.push(path)
		},
		...mapMutations({
			'setCurrentAudio': 'SET_CURRENTAUDIO'
		})	
	},
	components: {
		AudioList
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.category {
	.info {
		display: flex;
		.icon {
			flex: 0 0 116px;
			width: 116px;
			height: 116px;
			overflow: hidden;
			border-radius: 6px;
			background-size: cover;
			background-position: center top;
			background-repeat: no-repeat;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			p {
				font-size: $font-size-large-x;
				color: $color-background-d;
				line-height: 1.4;
				letter-spacing: 4px;
			}
		}
		.text {
			flex: 1;
			padding-left: 12px;
			h3 {
				font-size: $font-size-large-x;
				color: $color-text-l;
				padding-bottom: 8px;
			}
			p {
				&:first-of-type {
					color: $color-text-d;
					line-height: 1.5;
					@include ellipsis(3);
				}
				&.price-wrap {
					display: flex;
					align-items: baseline;
					line-height: 1.2;
					strong {
						font-size: $font-size-large;
						color: red;
						font-weight: bold;
					}
					small {
						font-size: $font-size-small;
						&:first-of-type {
							color: red;
						}
						&.inlineBlock {
							text-decoration: line-through;
							flex: 1;
							text-align: right;
							padding-top: 12px;
						}
					}
				}
			}
		}
	}
}
</style>
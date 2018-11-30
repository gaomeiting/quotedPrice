<template>
<div class="current" v-if="list.length>0">
	<div class="audio-wrap">
		<audio-item :list="list" :type="category.name" :level="levelText"></audio-item>
	</div>
	<h3 class="title">报价详细说明</h3>
	<p class="content" v-html="details"></p>
	<div class="footer-btns-wrap">
		<footer-btns></footer-btns>
	</div>
</div>
</template>
<script type="text/ecmascript-6">
import AudioItem from 'components/audio-item/audio-item';
import FooterBtns from 'components/footer-btns/footer-btns';
import { data } from 'api/data';
import { mapGetters, mapMutations } from 'vuex';
import { Dialog } from 'vant';
export default {
	data () {
		return {
			details: '',
			list: [],
			data,
			levelText: ''
		}
	},
	created () {
		let name = this.currentAudio.name || this.$route.params.type;
		console.log(this.$route.params.level)
		let currentAudioType = this.currentAudio.type || this.$route.params.level
		let audioIndex = this.$route.params.audioId;
		let levelType = this.$route.params.level;
		this.savedCategory(name)
		let level = this.category.category.find(item => {
			return currentAudioType === item.type
		})
		this.details = level.details;
		this.levelText = level.nameText;
		if(this.currentAudio.name) {
			this.list.push(this.currentAudio)
		}
		else {
			let audioList = level.audioList;
			let currentAudioIndex = audioList.findIndex(item => {
				return item.id === audioIndex;
			});
			if(currentAudioIndex === -1) {
				Dialog.alert({
					message: '未找到该音频'
				}).then(() => {
					this.$router.push('/')
				})
			}
			audioList[currentAudioIndex]['type']= levelType;
			this.setCurrentAudio(audioList[currentAudioIndex])
			this.list.push(audioList[currentAudioIndex])
		} 

	},
	methods: {
		savedCategory(name) {
			let category = this.data.find(item => {
				return item.type === name;
			})
			if(!category) {
				//没有当前分类；
				Dialog.alert({
					message: '没有当前分类'
				}).then(() => {
					this.$router.push('/')
				})
			}
			this.setCategory(category)
		},
		...mapMutations({
			'setCategory': 'SET_CATEGORY',
			'setCurrentAudio': 'SET_CURRENTAUDIO'
		})
	},
	computed: {
		...mapGetters(['currentAudio', 'category'])
	},
	components: {
		AudioItem,
		FooterBtns
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.current {
	padding-bottom: 56px;
}
.content {
	padding: 16px;
	line-height: 1.5;
	
}
.audio-wrap {
	border-bottom: 8px solid $color-background;
}
.title {
	line-height: 40px;
	font-size: $font-size-medium-x;
	font-weight: bold;
	color: $color-text-l;
	padding: 0 16px;
}
.footer-btns-wrap {
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
}
</style>
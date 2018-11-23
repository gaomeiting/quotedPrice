<template>
<div class="current">
	<div class="audio-wrap">
		<audio-item :list="list" :type="category.name" :level="currentAudio.type"></audio-item>
	</div>
	<h3 class="title">报价详细说明</h3>
	<p class="content" v-html="details"></p>
</div>
</template>
<script type="text/ecmascript-6">
import AudioItem from 'components/audio-item/audio-item';
import { mapGetters } from 'vuex';
export default {
	data () {
		return {
			details: '',
			list: []
		}
	},
	created () {
		if(!this.currentAudio.name) {
			this.$router.back();
			return;
		}
		let level = this.category.category.find(item => {
			return this.currentAudio.type === item.type
		})
		this.details = level.details;
		this.list.push(this.currentAudio)
	},
	computed: {
		...mapGetters(['currentAudio', 'category'])
	},
	components: {
		AudioItem
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
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
</style>
<template>
<div class="current" v-if="list">
	<div class="top-wrap">
		<div class="poster-wrap placeholder">
			<img src="/common/images/bg.png" alt="">
		</div>
	</div>
	<panel v-for="(item, index) in list" :key="index" :title="item.name" :item="item" @goDetail="goDetail">
		<div class="category-wrap">
			<category-list :item="item" :hideAudio="true"></category-list>
		</div>
	</panel>
</div>
</template>
<script type="text/ecmascript-6">
import Panel from 'components/panel/panel';
import CategoryList from 'components/category-list/category-list';
import { data } from 'api/data';
import { handlerError } from 'assets/js/mixins'
import { mapMutations } from 'vuex';
export default {
	data() {
		return {
			list: data
		}
	},
	methods: {
		goDetail(item) {
			this.setCategory(item)
			this.$router.push(`/index/${item.type}`)
		},
		...mapMutations({
			'setCategory': 'SET_CATEGORY'
		})	
	},
	components: {
		Panel,
		CategoryList
	}
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.top-wrap {
	padding: 16px;
	@include border-1px($color-background)
}
.poster-wrap {
	border-radius: 6px;
	@include autoHeight(100%, 37.6%);
}
.category-wrap {
	padding: 0 16px;
}
</style>
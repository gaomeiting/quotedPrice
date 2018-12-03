<template>
<div class="current">
	<div class="category-wrap" v-if="category.category.length > 0">
		<div class="switches-wrap">
			<switches :switches="switches" @switchItem="switchItem" :currentIndex="currentCategoryIndex"></switches>
		</div>
		<transition name="fadePage" mode="out-in">
			<category v-for="(item, index) in category.category" :key="index" v-if="currentCategoryIndex === index" :level="category.category[currentCategoryIndex]" :name="category.name" :type="category.type"></category>
		</transition>
	</div>
	<div class="details">
		<h3>报价详细说明</h3>
		<p class="content" v-html="category.category[currentCategoryIndex]['details']"></p>
	</div>
	<div class="footer-btns-wrap">
		<footer-btns></footer-btns>
	</div>
</div>
</template>
<script type="text/ecmascript-6">
import Category from 'components/category/category';
import Switches from 'components/switches/switches';
import FooterBtns from 'components/footer-btns/footer-btns';
import { mapGetters, mapMutations } from 'vuex';
import { data } from 'api/data';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			currentCategoryIndex: 0,
			switches: [],
			data
		}
	},
	created () {
		let routeCurrentCategoryIndex = this.$route.query.currentCategoryIndex * 1;
		if(routeCurrentCategoryIndex) {
			this.currentCategoryIndex = routeCurrentCategoryIndex;
		}
		let name =  this.$route.params.type;
		this.savedCategory(name)
		let category = this.category.category;
		for( let i= 0; i<category.length; i++) {
			let name = `${category[i]['nameText']}`
			this.switches[i]= { name }
		}
	},
	
	computed: {
		...mapGetters(['category'])	
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
		switchItem(index) {
			this.currentCategoryIndex = index;
		},
		...mapMutations({
			'setCategory': 'SET_CATEGORY'
		})
	},
	components: {
		Category,
		Switches,
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
.category-wrap {
	padding: 16px;
	border-bottom: 8px solid $color-background;
	.switches-wrap {
		text-align: center;
		margin-bottom: 28px;
	}
}
.details {
	padding: 16px;
	h3 {
		line-height: 40px;
		font-size: $font-size-medium-x;
		font-weight: bold;
		color: $color-text-l;
	}
	> p {
		line-height: 1.5;
	}
}
.footer-btns-wrap {
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
}
</style>
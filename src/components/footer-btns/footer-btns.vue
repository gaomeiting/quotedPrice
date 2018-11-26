<template>
  <ul class="switches">
	<li class="switch-item" @click.stop="goHome">
		<i class="iconfont icon-shouye"></i>
	  	<span> 返回首页 </span>
	</li>
	<li class="switch-item">
		<a href="tel:18710009559">
			<i class="iconfont icon-dianhua"></i>
			<span> 拨打电话 </span>
		</a>
	</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
	methods: {
		goHome() {
			this.$router.push('/')
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.switches {
	 
	width: 280px;
	display: flex;
	background-color: $color-text-l;
	border-radius: 16px;
	border: 1px solid $color-background-d;
	color: $color-background-d;
	padding: 8px 0;
	a {
		color: $color-background-d;
	}
	.switch-item {
		flex: 1;
		text-align: center;
		font-size: $font-size-medium;
		&:first-of-type {
			border-right: 1px solid $color-text-d;
		}
	}
}
</style>
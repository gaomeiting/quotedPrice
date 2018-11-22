<template>
  <div class="panel">
	  	<h2>
			<strong>
				{{title}} 
			</strong>
			<i class="iconfont icon-more"></i>
		</h2>
	  <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
h2 {
	height: 56px;
	line-height: 56px;
	padding: 0 16px;
	display: flex;
	strong {
		flex: 1;
		font-size: $font-size-large-x;
		color: $color-text-l;
	}
	
}
</style>
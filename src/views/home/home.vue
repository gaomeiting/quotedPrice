<template>
<div class="current">
	<div class="top-wrap">
		<div class="poster-wrap placeholder">
			<img src="http://e.hiphotos.baidu.com/image/h%3D300/sign=cc25cc7498cad1c8cfbbfa274f3f67c4/83025aafa40f4bfb0786420f0e4f78f0f7361813.jpg" alt="">
		</div>
	</div>
	<panel title="导读">
		<div class="category-wrap">
			<category></category>
		</div>
	</panel>
</div>
</template>
<script type="text/ecmascript-6">
import Panel from 'components/panel/panel';
import Category from 'components/category/category';
import { handlerError } from 'assets/js/mixins'
export default {
	components: {
		Panel,
		Category
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
	@include autoHeight(100%, 38%);
}
.category-wrap {
	padding: 0 16px;
}
</style>
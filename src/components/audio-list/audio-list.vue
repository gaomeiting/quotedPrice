<template>
<ul>
	<li>
		<div class="content">
			<figure>
				<img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=a792b4baaecc7cd9e52d32d909002104/32fa828ba61ea8d3f622db539a0a304e251f5860.jpg">
			</figure>
			<div class="text">
				<h3>雷沙革村的读墨雷沙革村的读墨雷沙革村的读墨雷沙革村的读墨雷沙革村的读墨雷沙革村的读墨</h3>
				<p>导读-A类</p>
			</div>
		</div>
		<div class="icon">
			<i class="iconfont icon-bofang"></i>
		</div>
	</li>
</ul>
</template>

<script type="text/ecmascript-6">
export default {
	
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
				font-size: $font-size-medium-x;
				color: $color-text-l;
				line-height: 1.5;
				margin-bottom: 8px;
				@include ellipsis(2);
			}
		}
	}
	.icon {
		i {
			font-size: 40px;
			color: $color-text-l;
		}
	}
}
</style>
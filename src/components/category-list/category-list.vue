<template>
<div>
	<div class="category" v-for="(level, index) in item.category" :key="index" @click.stop="goDetailLevel(item, index)">
		<category :level="level" :name="item.name" :type="item.type" :hideAudio="hideAudio"></category>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
import Category from 'components/category/category';
export default {
	props: {
		item: {
			type: Object,
			default() {
				return {}
			}
		},
		hideAudio: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		goDetailLevel(item, index) {
			this.$emit('goDetailLevel', item, index)
		}
	},
	components: {
		Category
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
			background-image: url('/common/images/a_bg.png');
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
				&:last-of-type {
					display: flex;
					align-items: baseline;
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
						&:last-of-type {
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
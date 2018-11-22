<template>
  <ul class="switches">
	<li class="switch-item" v-for="(item, index) in switches" :key="index" @click.stop="selectItem(index)" :class=" {'active' : currentIndex===index} ">
	  	<span> {{item.name}} </span>
	</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
	props: {
		currentIndex: {
			type: Number,
			default: 0
		},
		switches: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		selectItem(index) {
			this.$emit('switchItem', index)
		}
	}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "~assets/scss/variable";
.switches {
	 
	display: inline-block;
	cursor: pointer;
	.switch-item {
		display: inline-block;
		padding: 6px 0 10px;
		font-size: $font-size-medium;
		margin: 0 20px -2px;
		/* color: $color-theme; */
		&.active {
			color: $color-sub-theme;
			border-bottom: 3px solid $color-sub-theme;
		}
	}
}
</style>
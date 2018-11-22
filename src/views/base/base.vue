<template>
<div class="current">
	<div class="nav-bar-wrap">
		<nav-bar></nav-bar>
	</div>
</div>
</template>
<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar';
import { handlerError } from 'assets/js/mixins'
import { getData } from 'api/api'
export default {
	components: {
      NavBar
    }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variable";
@import "~assets/scss/mixin";


</style>
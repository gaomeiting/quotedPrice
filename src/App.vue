<template>
<div  id="app" class="app">
  
  <transition name="fadePage" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>
<script type="text/ecmascript-6">

  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      
    }
    
  }
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  position: relative;
  border: 1px solid rgba(0,0,0,0);
}
</style>

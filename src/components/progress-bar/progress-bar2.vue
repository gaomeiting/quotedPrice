<template>
<div class="dragnum dragbox" @click="timeClick($event)" @mousemove="timeMove($event)" @mouseleave="timeEnd($event)" ref="dragbox">
    <div class="progress">
      <div class="progressbar" :style="{width:distance+10+'px',transition:'width '+transTime+'s'}">
      </div>
    </div>
    <div class="bardrag" @mousedown="timeDown($event)" @mouseup="timeEnd($event)" :style="{left:distance+'px'}">
    </div>
</div>
</template>
<script type="text/ecmascript-6">
const BTNWIDTH = 14;
export default {
data() {
	return {
		pos: {},
	    startX: null,
	    locked: false,
	    distance: 0, //当前位置
	    endDistance: 0, //上次操作结束位置
	    transTime: 0.05, //点击拖动动画
	    dragWidth: 0, //进度条宽度

	    startNum: 10,
	    endNum: 501010,
	    nowNum: 101010
	}
},
methods: {
        mousePos (e) {
          var pos = {};
          pos.x = e.pageX;
          this.pos = pos;
          return pos;
        },
        timeDown(e) { // 当鼠标指针移动到元素上方，并按下鼠标左键时
          this.transTime = 0;
          this.mousePos(e);
          this.startX = this.pos.x;
          this.locked = true;
          this.endDistance = this.distance;
          // console.log(this.pos);
        },
        timeMove(e) { // 当鼠标指针移动到元素上方移动时
          if (!this.locked) return;
          var pos = this.mousePos(e);
          var moveX = pos.x - this.startX;
          if (this.distance >= this.dragWidth) {
            this.distance = this.dragWidth - 20;
            console.log(123)
          } else {
            if ((this.distance <= 0 && moveX < 0) || (this.distance >= this.dragWidth && moveX > 0)) return;
            this.distance = Math.max(this.endDistance + moveX, 0);
            this.countNum(this.distance);

          }
          // console.log(moveX);
        },
        timeEnd(e) {
          this.transTime = .3;
          this.locked = false;
        },
        timeClick(e) { //点击拖动到指定位置
          var x = e.offsetX,
            moveX = x - this.distance;
          this.distance += moveX;
          this.countNum(this.distance);
          console.log(this.startNum, this.endNum, this.nowNum)

        },
        countNum(num) {
        	let maxLen = this.dragWidth - BTNWIDTH
          var len = this.endNum - this.startNum;
          var scale = Math.ceil(this.dragWidth / len);

          this.nowNum = Math.min(this.endNum, this.startNum + Math.ceil(num / scale));
        }

      },
      mounted() {
        this.dragWidth =this.$refs.dragbox.offsetWidth;
        console.log(this.dragWidth)
      }
}
</script>

<style scoped lang="scss" rel="stylesheet/css">
  @import "~assets/scss/variable";


    .dragbox {
      width: 100%;
      position: relative;
      height: 20px;
      /* background: red; */
      cursor: pointer;
    }
	
    .progress {
      background: #a7a7a7;
      height: 2px;
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
    }

    .progressbar {
      background-color: #337ab7;
      float: left;
      width: 0;
      height: 100%;
      font-size: 12px;
      line-height: 20px;
      color: #fff;
      text-align: center;
      -webkit-transition: width .6s ease;
      -o-transition: width .6s ease;
      transition: width .6s ease;
    }

    .bardrag {
      position: absolute;
      top: -6px;
      /* left: 10px; */
      display: inline-block;
      height: 14px;
      width: 14px;
      background-color: #337ab7;
      border: 1px solid #e1e0de;
      border-radius: 50%;
      cursor: pointer;
    }

    .dragnum {
      display: inline-block;
      vertical-align: middle;
    }
</style>
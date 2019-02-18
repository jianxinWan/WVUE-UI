<template>
    <div class="loading-warp animated" :style="bgColorInfo" :class="isAllScreen">
      <canvas ref="cvs"></canvas>
    </div>
</template>
<script>
  export default {
    name: 'w-loading',
    props: {
      bgColor: {
        type: String,
        default: 'rgba(255,255,255,0.8)'
      },
      colorArray: {
        type: Array,
        default: function () {
          return [
            {color: '#269DD9'},
            {color: '#26D9D9'},
            {color: '#62D926'},
            {color: 'rgb(255,73,73)'}
          ]
        }
      },
      allScreen: {
        type: Boolean,
        default: false
      },
      thickness: {
        type: String,
        default: '40'
      },
      canvasSize: {
        type: String,
        default: '350'
      },
      speedAndSize: {
        type: String,
        default: '30'
      },
      addRedius: {
        type: String,
        default: '15'
      }
    },
    data () {
      return {
        msg: 'Loading.....',
        bgColorInfo: {
          backgroundColor: this.bgColor
        }
      }
    },
    computed: {
      isAllScreen: function () {
        return {
          'isAllScreen': this.allScreen
        }
      }
    },
    beforeMount: function () {
    },
    mounted: function () {
      let M = Math
      let PI = M.PI
      let TWOPI = PI * 2
      let HALFPI = PI / 2
      let canvas = this.$refs.cvs
      let ctx = canvas.getContext('2d')
      let width = canvas.width = this.canvasSize
      let height = canvas.height = this.canvasSize
      let cx = width / 2
      let cy = height / 2
      let count = this.thickness
      let sizeBase = 0.1
      let sizeDiv = 5
      let tick = 0
      ctx.translate(cx, cy)
      let vm = this;
      (function loop () {
        requestAnimationFrame(loop)
        ctx.clearRect(-width / 2, -height / 2, width, height)
        let angle = tick / 10
        let radius = -10 + M.sin(tick / 15) * vm.speedAndSize
        let size
        for (let i = 0; i < count; i++) {
          angle += PI / 100
          radius += i / vm.addRedius
          size = sizeBase + i / sizeDiv

          ctx.beginPath()
          ctx.arc(M.cos(angle) * radius, M.sin(angle) * radius, size, 0, TWOPI, false)
          ctx.fillStyle = vm.colorArray[0].color
          ctx.fill()

          ctx.beginPath()
          ctx.arc(M.cos(angle) * -radius, M.sin(angle) * -radius, size, 0, TWOPI, false)
          ctx.fillStyle = vm.colorArray[1].color
          ctx.fill()

          ctx.beginPath()
          ctx.arc(M.cos(angle + HALFPI) * radius, M.sin(angle + HALFPI) * radius, size, 0, TWOPI, false)
          ctx.fillStyle = vm.colorArray[2].color
          ctx.fill()

          ctx.beginPath()
          ctx.arc(M.cos(angle + HALFPI) * -radius, M.sin(angle + HALFPI) * -radius, size, 0, TWOPI, false)
          ctx.fillStyle = vm.colorArray[3].color
          ctx.fill()
        }
        tick++
      })()
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import './loading.less';
</style>

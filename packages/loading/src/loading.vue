<template>
    <div class="loading-warp animated" :style="bgColorInfo" :class="isAllScreen">
      <canvas ref="cvs"></canvas>
    </div>
</template>
<script>
  export default {
    name: 'w-loading',
    props:{
      bgColor:{
        type:String,
        default:'rgba(255,255,255,0.8)'
      },
      colorArray:{
        type:Array,
        default:function(){
          return [
            {color:'#269DD9'},
            {color:'#26D9D9'},
            {color:'#62D926'},
            {color:'rgb(255,73,73)'}
          ]
        }
      },
      allScreen:{
        type:Boolean,
        default:false
      },
      thickness:{
        type:String,
        default:'40'
      },
      canvasSize:{
        type:String,
        default:'350'
      },
      speedAndSize:{
        type:String,
        default:'30'
      },
      addRedius:{
        type:String,
        default:'15'
      }
    },
    data(){
      return {
        msg:'Loading.....',
        bgColorInfo:{
          backgroundColor: this.bgColor
        }
      }
    },
    computed:{
      isAllScreen:function () {
        return {
          'isAllScreen' : this.allScreen
        }
      }
    },
    beforeMount:function(){
    },
    mounted:function () {
      let M = Math,
        PI = M.PI,
        TWOPI = PI * 2,
        HALFPI = PI / 2,
        canvas = this.$refs.cvs,
        ctx = canvas.getContext( '2d' ),
        width = canvas.width = this.canvasSize,
        height = canvas.height = this.canvasSize,
        cx = width / 2,
        cy = height / 2,
        count = this.thickness,
        sizeBase = 0.1,
        sizeDiv = 5,
        tick = 0;
      ctx.translate( cx, cy );
      let vm = this;
      (function loop() {
        requestAnimationFrame( loop );
        ctx.clearRect( -width / 2, -height / 2, width, height );
        let angle = tick / 10,
          radius = -10 + M.sin( tick / 15 ) * vm.speedAndSize,
          size;
        for( let i = 0; i < count; i++ ) {
          angle += PI /100;
          radius += i / vm.addRedius;
          size = sizeBase + i / sizeDiv;

          ctx.beginPath();
          ctx.arc( M.cos( angle ) * radius, M.sin( angle ) * radius, size, 0, TWOPI, false );
          ctx.fillStyle = vm.colorArray[0].color;
          ctx.fill();

          ctx.beginPath();
          ctx.arc( M.cos( angle ) * -radius, M.sin( angle ) * -radius, size, 0, TWOPI, false );
          ctx.fillStyle = vm.colorArray[1].color;
          ctx.fill();

          ctx.beginPath();
          ctx.arc( M.cos( angle + HALFPI ) * radius, M.sin( angle + HALFPI ) * radius, size, 0, TWOPI, false );
          ctx.fillStyle =vm.colorArray[2].color ;
          ctx.fill();

          ctx.beginPath();
          ctx.arc( M.cos( angle + HALFPI ) * -radius, M.sin( angle + HALFPI ) * -radius, size, 0, TWOPI ,false);
          ctx.fillStyle = vm.colorArray[3].color;
          ctx.fill();
        }
        tick++;
        })();
    },
    methods:{
    }
  }
</script>
<style lang="less">
  @import '../../style/loading.less';
</style>

<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="transition">
      <li v-for="(item ,index) in slides" :key="item+index" v-show="index===nowIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides"
          @click="goto(index)"
          class="slide-page-point"
          :key="index"
          >
        <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
      </li>
    </ul>
    <div class="control-wrapper">
      <a class="prev" @click="goto(prevIndex)"></a>
      <a class="next" @click="goto(nextIndex)"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'w-swiper',
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 3000
      },
      transition: {
        type: String,
        default: 'move'
      },
      target: {
        type: String,
        default: '_blank'
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.nowIndex = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>

<style>
  @import "../../style/swiper.css";
</style>

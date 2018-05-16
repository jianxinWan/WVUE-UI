<template>
    <button
      @click="$emit('click')"
      class="w_button"
      :disabled="disabled"
      :class="[
    'w_button--'+type,
    {'is-general': general, 'is-disabled': disabled, 'is-round': round,'is-broad':broad},
    'w_button--size-'+size
    ]"
    >
      <i v-if="icon !== ''" :class="icon"></i>
      <slot></slot>
    </button>
</template>
<script>
  /* eslint-disable key-spacing */

  export default{
    name: 'WButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      general: Boolean,
      disabled:Boolean,
      round: Boolean,
      broad:Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
<style lang="less">
  @import "../../style/button.less";
</style>

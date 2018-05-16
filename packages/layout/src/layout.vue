<template>
  <div
    :type="type"
  >
    <div>
      这里是header
    </div>
    <div>
      这里是content
    </div>
    <div>
      这里是footer
    </div>
    <slot></slot>
  </div>
</template>
<script>
  /* eslint-disable key-spacing */

  export default {
    name: 'layout',
    data () {
      return {
        // eslint-disable-next-line key-spacing
        msg:'layout'
      }
    },
    props: {
      type: {
        type:String,
        default:'default'
      }
    }
  }
</script>
<style>
</style>

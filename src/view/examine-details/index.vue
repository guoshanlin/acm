<template>
  <div>
    <!--<div>-->
      <!--<i-button @click="copy">复制</i-button>-->
    <!--</div>-->
    <!--<div id="copy">-->
      <active-deltail :id="rowId" type="examine" ref="activDeltail"></active-deltail>
    <!--</div>-->
  </div>
</template>

<script>
  import activeDeltail from 'components/active-deltail/index'

  export default {
    name: 'index',
    data() {
      return {
        rowId: this.$route.query.id
      }
    },
    components: {
      activeDeltail
    },
    methods: {
      copy () {
          let range = document.createRange()
          range.selectNode(document.getElementById('copy'))
          let selection = window.getSelection()
          if (selection.rangeCount > 0) selection.removeAllRanges()
          selection.addRange(range)
          document.execCommand('copy')
          alert('复制成功！')
      }
    },
    mounted () {
      this.$nextTick(() => {
        // this.initItem()
      })
    }
  }
</script>

<style scoped>

</style>

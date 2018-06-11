<template>
  <div>
    <active-deltail :id="rowId"></active-deltail>
  </div>
</template>

<script>
  import activeDeltail from 'components/active-deltail/index'

  export default {
    name: 'index',
    data () {
      return {
        rowId: this.$route.query.id
      }
    },
    components: {
      activeDeltail
    },
    mounted () {
      this.$nextTick(() => {
       // this.initItem()
      })
    }
  }
</script>

<style>

</style>

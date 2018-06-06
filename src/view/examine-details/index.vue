<template>
  <div>
    <datails-item :row='item' :button="buttonName" @click="itemDetails" @exmine="exmine"></datails-item>
  </div>
</template>

<script>
  import datailsItem from 'components/datails-item/index'

  export default {
    name: 'index',
    data () {

    },
    components: {
      datailsItem
    }
  }
</script>

<style scoped>

</style>

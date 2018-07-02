<template>
  <div class="b wrapper-box">
    <Menu mode="horizontal" :active-name="activeName" @on-select="menuSelect">
      <MenuItem name="1">基本信息</MenuItem>
      <!--<MenuItem name="2">活动议程</MenuItem>-->
      <MenuItem name="3">周边信息</MenuItem>
    </Menu>
    <div class="content-wrapper">
      <div v-if="activeName == 1">
        <active-deltail :id="rowId" type="info"></active-deltail>
      </div>
    </div>
  </div>
</template>

<script>
  import activeDeltail from 'components/active-deltail/meeting-deltail'
  export default {
    name: "index",
    data () {
      return {
       activeName: 1,
        rowId: this.$route.query.id
      }
    },
    created () {
      setTimeout(() => {

      }, 20)
    },
    components: {
      activeDeltail
    },
    methods: {
      menuSelect (name) {
        this.activeName = name
        this.$Message.warning(name)
      }
    }
  }
</script>

<style scoped>

</style>

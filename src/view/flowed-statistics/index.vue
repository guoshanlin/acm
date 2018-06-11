<template>
  <div class="b wrapper-box">
    <h3 class="fz14">流量统计</h3>
    <Menu mode="horizontal" active-name="0" @on-select="menuSelect">
      <MenuItem name="0">报名统计</MenuItem>
      <MenuItem name="1">签到统计</MenuItem>
    </Menu>

    <div v-if="statistics == 0">
      <div class="posct wrapper-border m-t10" style="height: 260px;">报名统计</div>
    </div>

    <div v-else>
      <div class="posct wrapper-border m-t10" style="height: 260px;">签到统计</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        statistics: 0
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      menuSelect(v){
        this.statistics = v
      },
    }
  }
</script>

<style scoped>

</style>

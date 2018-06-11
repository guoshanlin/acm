<template>
  <div class="b wrapper-box">
    <h3 class="fz14">我的账户</h3>
    <div class="content-wrapper m-t10 wrapper-border m-t20">
      <div class="clear">
        <span>报名签到统计</span>
        <a class="c1 fr" @click="routePush('/base/joinStatistics')">详情</a>
      </div>
      <div class="fbox fz14 m-t10 ct c3 statistics-wrapper">
        <div class="flex">
          <span class="fz20 c2">1</span><br>
          <span>签到人数</span>
        </div>
        <div class="flex">
          <span class="fz20 c2">1</span><br>
          <span>报名人数</span>
        </div>
        <div class="flex">
          <span class="fz20 c2">100%</span><br>
          <span>签到率</span>
        </div>
      </div>
    </div>
    <div class="content-wrapper m-t10 wrapper-border">
      <div class="clear">
        <span>门票订单统计</span>
        <a class="c1 fr" @click="routePush('/base/joinStatistics')">详情</a>
      </div>
      <div class="fbox fz14 m-t10 ct c3 statistics-wrapper">
        <div class="flex">
          <span class="fz20 c2">0</span><br>
          <span>门票订单</span>
        </div>
        <div class="flex">
          <span class="fz20 c2">0</span><br>
          <span>售出门票</span>
        </div>
        <div class="flex">
        </div>
      </div>
    </div>
    <div class="content-wrapper m-t10 wrapper-border">
      <div class="clear">
        <span>互动统计</span>
        <a class="c1 fr" @click="routePush('/base/interactivityStatistics')">详情</a>
      </div>
      <div class="posct m-t10 statistics-wrapper" style="padding: 80px 0">
        暂无统计数据
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    created() {
      setTimeout(() => {
        this.getTicket()
      }, 20)
    },
    methods: {
      getTicket() {
        this.requestAjax("get", "ticket", {}).then((data) => {
          console.log(JSON.stringify(data))
        })
      }
    }
  }
</script>

<style scoped>

  .statistics-wrapper {
    padding: 36px 0;
    border-top: 1px solid #e3e2e5;
  }

</style>

<template>
  <div class="b wrapper-box">
    <h3 class="fz14">签到管理</h3>
    <div class="content-wrapper m-t10 wrapper-border">
      <a :href="url">下载微信二维码</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        url: 'https://pmp.coreware.cn/acm/weixin/createwxaqrcode?toUrl=pages/exhibition-details/exhibition-details?id=' + this.$route.query.id
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {}
  }
</script>

<style scoped>

</style>

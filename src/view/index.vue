<template>
  <div class="layout">
    <!--顶部栏-->
    <top-header></top-header>
    <div class="index-tab">
      <Row type="flex" justify="center">
        <i-col><h3 @click="routePush('/index/home')"><a>首页</a></h3></i-col>
        <i-col><h3 @click="routePush('/index/home')"><a>行业</a></h3></i-col>
        <i-col><h3 @click="routePush('/index/home')"><a>生活</a></h3></i-col>
        <i-col><h3 @click="routePush('/index/home')"><a>亲子</a></h3></i-col>
        <i-col><h3 @click="routePush('/index/home')"><a>学习</a></h3></i-col>
        <i-col><h3 @click="routePush('/index/home')"><a>展会</a></h3></i-col>
      </Row>
    </div>
    <div class="layout-content min-height clearFix m-0">
       <router-view></router-view>
    </div>
    <div class="layout-copy">
       <i-footer></i-footer>
    </div>
  </div>
</template>

<script>
  import topHeader from 'components/header'
  import iFooter from 'components/footer'
  export default {
    data () {
      return {}
    },
    methods: {
    },
    components: {
      topHeader,
      iFooter
    }
  }
</script>

<style>
  .layout {background-size:cover;background-position:50% 50%;background-repeat: no-repeat;height: 100%; overflow-y: auto}
  .layout-copy {text-align: center; color: #9ea7b4;}
  .index-tab{height: 50px;line-height: 50px;background-color: #44bb9a}
  .index-tab h3{height: 50px;}
  .index-tab h3:hover{background-color: #0CAE6C;}
  .index-tab a{display: inline-block; height: 45px; font-size: 20px;padding: 0 30px;color: #fff}
  .min-height{ min-height: calc( 100% - 220px)}
</style>

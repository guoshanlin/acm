<template>
  <div class="wrapper-content">
    <div class="content posct">
      <div class="login-wrapper b wrapper-box">
        <div class="header-wrapper clear ct c1">
          <a class="fl c1" style="display: none">
            <Icon type="ios-home" class="fz14"></Icon>
            回到首页</a>
          <span class="fz16">登录聚热会</span>
          <a class="fr c1" style="display: none">注册新账号
            <Icon type="ios-arrow-right" class="fz16" style="vertical-align: middle;margin-top: -3px;"></Icon>
          </a>
        </div>

        <div class="content-box">
          <div class="">
            <h3 class="c3">聚热会帐号登录</h3>
            <div class="ipu-wrapper">
              <i-input type="text" v-model="username" placeholder="聚展会帐号 邮箱/手机">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </i-input>
            </div>
            <div class="ipu-wrapper">
              <i-input type="password" v-model="password" placeholder="请输入您的密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </i-input>
            </div>
            <div class="ipu-wrapper clear">
              <Checkbox label="twitter" v-model="remember">记住我</Checkbox>
              <a class="c1 fr">忘记密码</a>
            </div>
            <div class="ipu-wrapper">
              <Button type="primary" long style="height: 38px">登录</Button>
            </div>
          </div>

          <div class="c3 ct fz14 m-t30 m-b10 division"> 用社交账号登录 </div>
          <div class=" posct">
            <div class="fbox login-coagent ct">
              <div class="flex posct icon-item">
                <a class="c3">
                  <div class="icon icon-weixin iconfont c fz24" style="background: #19C943"></div>
                  <div>微信登录</div>
                </a>
              </div>
              <div class="flex posct icon-item">
                <a class="c3">
                  <div class="icon icon-qq iconfont c fz24" style="background: #ddd"></div>
                  <div>qq登录</div>
                </a>
              </div>
              <div class="flex posct icon-item">
                <a class="c3">
                  <div class="icon icon-weibo iconfont c fz24" style="background: #ddd"></div>
                  <div>微博登录</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        remember: true
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

  .wrapper-content {
    min-height: 100vh;
    background: url(https://cdn.huodongxing.com/Content/v2.0/img/login_bg.jpg?auth_key=1529497541-0-0-ce4a440…) no-repeat center;
    background-size: cover;
  }

  .content {
    height: 100vh;
  }

  .login-wrapper {
    width: 480px;
    padding-bottom: 20px;
  }

  .header-wrapper {
    line-height: 50px;
    border-bottom: 1px solid #dedfdf;
  }

  .content-box {
  }

  .content-box h3 {
    padding: 16px
  }

  .ipu-wrapper {
    padding: 0 16px;
    margin-bottom: 14px;
  }

  .login-coagent {
    width: 320px;
  }

  .icon-item .icon {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
  }

  .division:before, .division:after {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background: #ddd;
    vertical-align: middle
  }

</style>

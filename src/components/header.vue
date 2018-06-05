<template>
  <div>
    <Menu mode="horizontal" class="headPrimary" active-name="1" theme="light">
      <div class="clearFix">
        <!--<列表导栏>-->
        <div class="float-l">
          <div class="t-left">
            <div id="login"></div>
          </div>
        </div>
        <div class="float-r header-r">
           <div>
             <Row type="flex" justify="center" class="code-row-bg">
               <i-col><div class="header-nav"><a @click="loginShow = true">注册/登录</a></div></i-col>
               <i-col><div class="header-nav"><a @click="routePush('/index/role')">活动管理</a></div></i-col>
               <i-col><div class="header-nav"><a>网站地图</a></div></i-col>
               <i-col><div class="header-nav"><a>联系我们</a></div></i-col>
               <i-col><div class="header-nav"><a>帮助中心</a></div></i-col>
             </Row>
           </div>
           <div>
             <Row type="flex" justify="center" class="code-row-bg">
               <i-col>
                 <div class="header-nav">
                  <i-input v-model="searchKey" placeholder="搜索展会/活动或主办方名称" style="width: 300px"></i-input>
                 </div>
               </i-col>
               <i-col>
                 <div class="header-nav"><i-button type="primary">搜索</i-button></div>
               </i-col>
               <i-col>
                 <div class="header-nav"><i-button type="primary" @click="routePush('/index/initiating')">发起活动</i-button></div>
               </i-col>
             </Row>
           </div>
        </div>
        <div class="clearFix"></div>
      </div>
    </Menu>
    <div v-if="loginShow">
      <i-login @onCancel="loginShow = false"></i-login>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import iLogin from 'components/modal/login'
  export default {
    data () {
      return {
        searchKey: '',
        loginShow: false
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    destroyed () {

    },
    methods: {
      /**
       *
       * 退出登录
       */
      logout () {
        const _type = 'POST'
        const _params = {}
        const _url = 'logout'
        this.requestAjax(_type, _url, _params, (res) => {
          this.logoutThen(res)
        })
      },
      /**
       * 退出后触发
       * @param res
       */
      logoutThen (res) {
         if (res.data.success) {
           /*this.$router.push('/login')*/
         }
      }
    },
    mounted () {
      this.$nextTick(() => {

      })
    },
    components: {
      iLogin
    }
  }
</script>

<style>
  #app .ivu-menu-horizontal{height: 130px;}
  /*.ivu-menu.ivu-menu-horizontal .ivu-row-flex{height:130px;}*/
  .headPrimary {min-width: 992px;background: #b1e8d2}
   #login{display: inline-block; height: 60px; width:280px;background:url("../assets/logo_core.png") no-repeat; background-size: 90% 90%;margin-top: 35px; margin-left: 25px;}
  .header-r{ width: calc(100% - 335px);height: 130px;}
  .header-r>div{height: 65px; line-height: 65px;}
  .header-nav{margin: 0px 15px;}
  .header-nav a{color:#000000;}
</style>

<template>
  <div>
    <Menu mode="horizontal" class="headPrimary meeting-menu" active-name="1" theme="light">
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
               <i-col><div class="header-nav"><a v-if="!showAdmin" @click="loginShow = true">注册/登录</a></div>
                 <Dropdown  v-if="showAdmin"  class="drop-index-header" @on-click="handleSubmit">
                   <a href="javascript:void(0)" class="c3">{{userData.nickName}}/{{userData.phone}}<Icon type="arrow-down-b"></Icon></a>
                   <DropdownMenu slot="list">
                     <DropdownItem name="my">我的活动</DropdownItem>
                     <DropdownItem name="password" divided>修改密码</DropdownItem>
                     <DropdownItem  name="logout" divided>退出</DropdownItem>
                   </DropdownMenu>
                 </Dropdown>
               </i-col>
               <i-col><div class="header-nav" v-if="showAdmin"><a @click="routePush('/meeting')">主办方管理中心</a></div></i-col>
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
                 <div class="header-nav"><i-button type="primary" @click="initiatingActivity">发起活动</i-button></div>
               </i-col>
             </Row>
           </div>
        </div>
        <div class="clearFix"></div>
      </div>
    </Menu>
    <div v-if="loginShow">
      <i-login @onCancel="onCancel"></i-login>
    </div>
    <i-password :show="passModalShow" @cancel="passModalShow = false"></i-password>
  </div>
</template>

<script>
  import {setIsLogin, setUserInfo} from 'js/cache'
  import {mapMutations, mapGetters} from 'vuex'
  import iLogin from 'components/modal/login'
  import iPassword from 'components/modal/password'
  export default {
    data () {
      return {
        showAdmin: false,
        searchKey: '',
        passModalShow: false,
        loginShow: this.$route.query.id == 'password' ? true : false
      }
    },
    computed: {
      ...mapGetters([
        'userData',
        'isLogin'
      ])
    },
    destroyed () {

    },
    methods: {
      ...mapMutations({
        setUserDate: 'SET_USERDATA',
        setIsLogin: 'SET_ISLOGIN'
      }),
      /**
       *
       * 退出登录
       */
      logout () {
        this.requestAjax('POST', 'logout', {}).then((res) => {
          this.showAdmin = false
          setIsLogin(false)
          this.setIsLogin(false)
          this.setUserDate(null)
          setUserInfo(null)
          this.routePush('/index')
        }, () => {
          this.showAdmin = false
          setIsLogin(false)
          this.setIsLogin(false)
          this.setUserDate(null)
          setUserInfo(null)
          this.routePush('/index')
        })
      },
      onCancel (obj) {
        this.loginShow = false
        if (obj && obj.login) {
          this.showAdmin = obj.login
        }
      },
      handleSubmit (name) {
        console.log(name)
        switch ('' + name) {
          case 'my': // 我的活动/展会
            break
          case 'logout': // 退出登录
            this.logout()
            break
          case 'password': // 修改密码
          this.passModalShow = true
            break
          default:
        }
      },
     initiatingActivity () {
        if (this.isLogin) {
          this.routePush('/initiatingActivity')
        } else {
          this.$Message.error('请先登入')
        }
     }
    },
    mounted () {
      this.$nextTick(() => {
        console.log(this.isLogin)
        this.showAdmin = this.isLogin
      })
    },
    components: {
      iLogin,
      iPassword
    }
  }
</script>

<style>
  .meeting-menu {height: 130px !important;background: #b1e8d2!important;}
  /*.ivu-menu.ivu-menu-horizontal .ivu-row-flex{height:130px;}*/
  .headPrimary {min-width: 992px;background: #b1e8d2}
   #login{display: inline-block; height: 60px; width:280px;background:url("../assets/logo_core.png") no-repeat; background-size: 90% 90%;margin-top: 35px; margin-left: 25px;}
  .header-r{ width: calc(100% - 335px);height: 130px;}
  .header-r>div{height: 65px; line-height: 65px;}
  .header-nav{margin: 0px 15px;}
  .header-nav a{color:#000000;}
  .drop-index-header .ivu-select-dropdown{top:50px !important;}
</style>

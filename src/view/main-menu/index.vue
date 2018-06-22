<template>

  <div class="wrapper-content">
    <div class="app-header b c3">
      <Row type="flex" justify="end">
        <i-col class="header-col"><a class="c3" @click="routePush('/index')">返回首页</a></i-col>
   <!--     <i-col class="header-col">店铺认证</i-col>
        <i-col class="header-col">套餐升级</i-col>-->
        <i-col class="header-col">
        <Dropdown @on-click="handleSubmit">
          <a href="javascript:void(0)" class="c3">{{userData.nickName}}/{{userData.phone}}<Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
           <!-- <DropdownItem>商户列表</DropdownItem>-->
            <!--<DropdownItem name="my">我的活动</DropdownItem>-->
            <DropdownItem name="password" divided>修改密码</DropdownItem>
            <DropdownItem  name="logout" divided>退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </i-col>
      </Row>
    </div>
    <div class="cloud-left-menu">

      <div class="user-pic-wrapper posct cursor-p" @click="routePush('/index')">
        <img src="../../assets/logo_core.gif">
      </div>

      <Menu theme="dark" :active-name="activeNenu" width="160px"  class="menu-wrapper" @on-select="changeMenu">
        <template v-for="(item,i) in menuList">
          <MenuItem :name="item.path" :key="i"><Icon :type="item.icon"></Icon>{{item.title}}</MenuItem>
        </template>
      </Menu>

<!--      <div class="c3 posct" style="position:absolute;width: 100%;height:40px;bottom:0;"><img width="60" src="../../assets/logo_core.png" ></div>-->
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <i-password :show="passModalShow" @cancel="passModalShow = false"></i-password>
  </div>

</template>

<script>
  import {setIsLogin, setUserInfo} from 'js/cache'
  import {mapMutations, mapGetters} from 'vuex'
  import iPassword from 'components/modal/password'

  export default {
    data () {
      return {
        activeNenu: this.$route.path,
        menuList:'',
        passModalShow: false
      }
    },
    created () {
      setTimeout(() => {
        if (!this.isLogin) {
          this.$Message.error('请先等登入')
          this.routePush('/index')
        }
      }, 20)
    },
    components: {
      iPassword
    },
    computed: {
      ...mapGetters([
        'userData',
        'isLogin'
      ])
    },
    methods: {
      ...mapMutations({
        setUserDate: 'SET_USERDATA',
        setIsLogin: 'SET_ISLOGIN'
      }),
      changeMenu (name) {
        this.routePush(name)
      },
      /**
       *
       * 退出登录
       */
      logout () {
        const _type = 'POST'
        const _params = {}
        const _url = 'logout'
        this.requestAjax(_type, _url, _params).then((res) => {
          setIsLogin(false)
          this.setIsLogin(false)
          this.setUserDate(null)
          setUserInfo(null)
          this.routePush('/index')
        }, () => {
          setIsLogin(false)
          this.setIsLogin(false)
          this.setUserDate(null)
          setUserInfo(null)
          this.routePush('/index')
        })
      },
      handleSubmit (name) {
        switch ('' + name) {
          case 'logout': // 退出登录
            this.logout()
            break
          case 'password': // 修改密码
           this.passModalShow = true
            break
          default:
        }
      }
    },
    mounted () {
      if (this.userData.role == 99 || this.userData.role == 98) {
        this.menuList = [
          {icon: 'android-walk', path: '/meeting', title: '活动'},
          {icon: 'person', path: '/role', title: '用户管理'},
          {icon: 'ios-person-outline', path: '/member', title: '会员管理'},
          {icon: 'social-yen', path: '/finance/myAccount', title: '财务'},
          {icon: 'android-call', path: '/marketing', title: '营销'},
          {icon: 'ios-world-outline', path: '/promotion', title: '推广'},
          {icon: 'ios-compose', path: '/examine', title: '活动审核'},
          {icon: 'android-checkmark-circle', path: '/payment', title: '提现审批'},
          {icon: 'social-yen-outline', path: '/paymentAudit', title: '提现支付'}
        ]
      } else {
        this.menuList = [
          {icon: 'android-walk', path: '/meeting', title: '活动'},
          {icon: 'ios-person-outline', path: '/member', title: '会员管理'},
          {icon: 'social-yen', path: '/finance/myAccount', title: '财务'}
        ]
      }
    }
  }
</script>

<style scoped>
  .app-header{
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .header-col{
    margin-right: 24px;
  }
  .app-content{
    padding: 50px 0 0 160px;

  }
  .cloud-left-menu{
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    width: 160px;
    z-index: 1000;
    background: #222430;
  }
  .user-pic-wrapper{
    height: 140px;
  }
  .user-pic-wrapper img{
    width: 140px;
  }

  .menu-wrapper{
    background: #222430;
  }
</style>

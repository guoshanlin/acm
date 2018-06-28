<template>
    <div class="header b">
      <section class="wrapper">
        <nav class="top-nav clear">
          <div class="top-menu fl">
            <ul class="menu c3" v-if="!showAdmin">
              <li class="menu-item menu-item-welcome">您好，欢迎访问本站！</li>
              <li class="menu-item menu-item-login">
                <a class="user-login" href="javascript:void(0)" @click="routePush('/login')">登录</a>
              </li>
              <li class="menu-item menu-item-reg">
                <a href="javascript:void(0)" @click="routePush('/register')">注册</a>
              </li>
            </ul>
            <ul class="menu c3" v-if="showAdmin">
              <li class="menu-item menu-item-welcome">您好，欢迎访问本站！</li>
              <li class="menu-item menu-item-reg">
                <a href="javascript:void(0)" @click="passModalShow = true">修改密码</a>
              </li>
              <li class="menu-item menu-item-reg">
                <a href="javascript:void(0)" @click="logout">退出</a>
              </li>
            </ul>
          </div>
          <div class="top-menu fr">
            <ul class="menu">
              <li class="menu-item"><a href="javascript:void(0)">公告</a></li>
              <li class="menu-item"><a href="javascript:void(0)">地图</a></li>
              <li class="menu-item"><a href="javascript:void(0)">标签</a></li>
              <li class="menu-item"><a href="javascript:void(0)">链接</a></li>
              <li v-if="showAdmin" class="menu-item"><a href="javascript:void(0)" @click="routePush('/meeting')">主办方中心</a></li>
              <li v-if="showAdmin" class="menu-item"><a href="javascript:void(0)" class="c1" @click="routePush('/initiatingActivity')"><Icon class="fz15" type="paper-airplane"></Icon> 发布活动</a></li>
            </ul>
          </div>
        </nav>

        <nav class="header-nav clear fbox">
          <a href="javascript:void(0)" class="logo fl" title="聚热会">
            <img src="../assets/logo_core.gif" alt="聚热会">
          </a>
          <div class="flex posct">
            <div class="search-wrapper fbox">
              <input v-model="searchValue" class="search"/>
              <a class="search-btn" href="javascript:void(0)" @click="searchEvent">搜索</a>
            </div>
          </div>
          <div class="header-menu fr fz14">
            <ul class="menu">
              <li class="menu-item">
                <a class="c1" href="javascript:void(0)">首页</a>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0)">行业</a>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0)">生活</a>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0)">亲子</a>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0)">学习</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <i-password :show="passModalShow" @cancel="passModalShow = false"></i-password>
    </div>
</template>

<script>
  import {setIsLogin, setUserInfo} from 'js/cache'
  import {mapMutations, mapGetters} from 'vuex'
  import iPassword from 'components/modal/password'

  export default {
    data() {
      return {
        searchValue: '',
        showAdmin: false,
        passModalShow: false,
        loginShow: this.$route.query.id == 'password' ? true : false
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    computed: {
      ...mapGetters([
        'userData',
        'isLogin'
      ])
    },
    mounted () {
      this.$nextTick(() => {
        console.log(this.isLogin)
        this.showAdmin = this.isLogin
      })
    },
    methods: {
      ...mapMutations({
        setUserDate: 'SET_USERDATA',
        setIsLogin: 'SET_ISLOGIN'
      }),
      searchEvent(){
        this.$Message.info('搜索：' + this.searchValue)
      },
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
      }
    },
    components: {
      iPassword
    }
  }
</script>

<style scoped>

  .header {
    height: 108px;
    margin-bottom: 24px;
    border-bottom: 1px #f2f2f2 solid;
    height: 108px;
    padding: 4px 20px 0;
  }
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    clear: both;
  }
  .top-nav {
    height: 36px;
  }
  ul.menu>li {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  ul>li>a {
    padding: 6px 12px;
    display: block;
    color: #999;
  }
  ul>li>a:hover{
    color: #e1244e;
  }
  .top-menu.fl>ul>li>a {
    padding: 6px;
  }

  .header-nav {
    margin-top: 12px;
    height: 56px;
  }
  .logo img {
    max-height: 36px;
  }
  .header-menu>ul>li>a {
    padding: 12px 16px 20px;
    display: block;
  }

  .search-wrapper{
    width: 420px;
    height: 36px;
    display: inline-block;
    margin-top: -18px;
  }

  .search{
    display: inline-block;
    height: 36px;
    width: 340px;
    outline: none;
    border: 1px #f2f2f2 solid;
    padding-left: 10px;
  }
  .search-btn{
    display: inline-block;
    color: #fff;
    background: #e1244e;
    width: 80px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    float: right;
  }

</style>

<template>
  <div class="wrapper-content">
    <div class="content posct">
      <div class="login-wrapper b wrapper-box">
        <div class="header-wrapper clear ct c1">
          <a class="fl c1" @click="routePush('/index')">
            <Icon type="ios-home" class="fz14"></Icon>
            回到首页</a>
          <span v-if="switchFlag" class="fz16">登录知识e站</span>
          <span v-else class="fz16">注册知识e站帐号</span>
          <!--<a class="fr c1" @click="switchEvent">-->
            <!--<span v-if="switchFlag">注册新账号</span>-->
            <!--<span v-else>已有账号登录</span>-->
            <!--<Icon type="ios-arrow-right" class="fz16" style="vertical-align: middle;margin-top: -3px;"></Icon>-->
          <!--</a>-->
        </div>

        <div class="content-box">
          <div v-if="switchFlag">
            <h3 class="c3">知识e站帐号登录</h3>
            <div class="ipu-wrapper">
              <i-input type="text" v-model="formLogin.username" placeholder="知识e站帐号 邮箱/手机">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </i-input>
            </div>
            <div class="ipu-wrapper">
              <i-input type="password" v-model="formLogin.password" placeholder="请输入您的密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </i-input>
            </div>
            <div class="ipu-wrapper clear">
              <Checkbox label="twitter" v-model="formLogin.remember">记住我</Checkbox>
              <a class="c1 fr">忘记密码</a>
            </div>
            <div class="ipu-wrapper">
              <Button type="primary" long style="height: 38px" @click="loginEvent">登录</Button>
            </div>
          </div>

          <div v-else style="padding: 24px 14px 0">
            <Form ref="formRegister" :model="formRegister" :rules="ruleRegister" :label-width="80">
              <FormItem label="手机号码" prop="phone">
                <i-input type="text" :maxlength="11" v-model="formRegister.phone" placeholder="请输入您的常用手机"></i-input>
              </FormItem>
              <FormItem label="电子邮箱" prop="email">
                <i-input type="text" v-model="formRegister.email" placeholder="请输入您的常用邮箱"></i-input>
              </FormItem>
              <FormItem label="登录密码" prop="password">
                <i-input type="password" v-model="formRegister.password" placeholder="长度不低于6位（字母、数字组合）"></i-input>
              </FormItem>
              <FormItem label="确认密码" prop="passwordCheck">
                <i-input type="password" v-model="formRegister.passwordCheck" placeholder="请再次输入密码"></i-input>
              </FormItem>
              <FormItem label="个人昵称" prop="nickName">
                <i-input type="text" v-model="formRegister.nickName" placeholder="请输入昵称"></i-input>
              </FormItem>
              <div>
                <Checkbox v-model="formRegister.remember" class="in-line">我已阅读并同意 <a class="c1"> 用户隐私及服务协议</a></Checkbox>
              </div>
              <div class="" style="margin-top: 14px">
                <Button type="primary" long style="height: 38px" @click="registerEvent" :disabled="!formRegister.remember">注册</Button>
              </div>
            </Form>
          </div>

          <div class="c3 ct fz14 m-t30 m-b10 division"> 用社交账号登录</div>
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
                  <div>QQ登录</div>
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

  import utils from "js/utils"
  import {setUserInfo, setIsLogin} from 'js/cache'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    data() {

      const checkPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'))
        } else if (utils.isPhone(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
      const checkUserPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户手机号'))
        } else if (utils.isPhone(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,30}$/.test(value)) {
            callback(new Error('密码必须为6-30位字母、数字组合'))
          }
          if (this.formRegister.passwordCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formRegister.validateField('passwordCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formRegister.password) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      }

      return {
        switchFlag: true,
        //switchFlag: this.$route.path == "/login",
        formLogin: {
          username: '',
          password: '',
          remember: true
        },
        formRegister: {
          phone: '',
          email: '',
          password: '',
          passwordCheck: '',
          nickName: '',
          checkbox: false,
          remember: false
        },
        ruleRegister: {
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          password: [
            {required: true, validator: validatePass, trigger: 'blur'}
          ],
          passwordCheck: [
            {required: true, validator: validatePassCheck, trigger: 'blur'}
          ],
          nickName: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    created () {
      setTimeout(() => {
      }, 20)
    },
    watch: {
      '$route' (to, from) {
        this.switchFlag = to.path == '/login'
      }
    },
    methods: {
      ...mapMutations({
        setUserDate: 'SET_USERDATA',
        setIsLogin: 'SET_ISLOGIN'
      }),
      switchEvent () {
        return
        this.routePush( this.switchFlag ? '/register' : '/login')
      },
      loginEvent() {
        if (utils.isEmpty(this.formLogin.username)) {
          this.$Message.error('用户名（邮箱或手机号）不可为空')
          return
        }
        if (utils.isEmpty(this.formLogin.password)) {
          this.$Message.error('密码不可为空')
          return
        }
        this.requestAjax('POST', 'login', {
          phone: this.formLogin.username,
          passWord: this.formLogin.password
        }).then((data) => {
          if (data.success) {
            this.setIsLogin(true)
            this.setUserDate(data.data.member)
            setUserInfo(data.data.member)
            setIsLogin(true)
            if (this.$route.query.oldPath) {
              this.routePush(this.$route.query.oldPath)
            } else {
              // this.routePush('/index')
              this.routePush('/meeting')
            }
          } else {
            this.$Message.error(data.desc)
          }
        })
      },
      registerEvent() {
        this.$refs.formRegister.validate((valid) => {
          if (valid) {
            const _params = {
              phone: this.formRegister.phone,
              passWord: this.formRegister.password,
              email: this.formRegister.email,
              nickName: this.formRegister.nickName
            }
            this.requestAjax('POST', 'members', _params).then((data) => {
              if (data.success) {
                this.$Message.success('注册成功')
                this.switchFlag = true
                this.formLogin.username = _params.phone
                this.formLogin.password = _params.passWord
                this.$refs.formRegister.resetFields()
              } else {
                this.$Message.error(data.desc)
              }
            })
          }
        })
      }
    }
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

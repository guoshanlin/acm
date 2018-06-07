<style>
  /*单独login的css*/
  @import '../css/login.css';
</style>

<template>
  <div class="login-content" @keydown="keyDownEvent">
    <div class="top-logo">
      <div class="icon_img">
        <div :class="classbz">
          <a href="javascript:void(0)" class="loginTopTitle"></a>
        </div>
      </div>
    </div>
    <div class="text-img">
      <img src="../assets/login_txt2.png"/>
    </div>
    <div class="lc-block toggled" id="l-login">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>

        <FormItem prop="user">
          <i-input type="text" v-model="formInline.user" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password">
          <i-input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem class="t-left">
          <CheckboxGroup v-model="formInline.checkbox" class="in-line">
             <Checkbox label="remember">记住密码</Checkbox>
          </CheckboxGroup>
          <div v-show="loginFail" id="loginMsg" class="in-line"><Icon type="sad-outline"></Icon><span>用户名或密码不正确</span></div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

  import {setUserInfo} from 'js/cache'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    data () {
      return {
        name: '',
        title: '必应IT运维快线',
        classbz: '',
        msg: '登录中，请稍候...',
        loginFail: false,
        formInline: {
          user: 'admin',
          password: '1',
          checkbox: ['remember']
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    destroyed () {
      document.onkeydown = () => {}
    },
    methods: {
      ...mapMutations({
        setUserDate: 'SET_USERDATA'
      }),
      /**
       * 登录前的验证
       * @param name
       */
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login()
          }
        })
      },

      /**
       *
       * 登录
       */
      login () {
        const _type = 'POST'
        const _params = {
          userName: this.formInline.user,
          passWord: this.formInline.password
        }
        const _url = 'login'
        this.requestAjax(_type, _url, _params, (res) => {
          this.loginThen(res)
        })
      },

      /**
       * 登录后的处理方法
       * @param res
       */
      loginThen (res) {
        const _data = res.data
        if (_data.success) {
          this.loginFail = false
          this.setUserDate(_data.data.user)
          setUserInfo(_data.data.user)
       //   this.$Message.success('登录成功')
          this.$router.push('/index/role')
        } else if (!_data.message) {
          this.loginFail = true
          this.$Message.error('登录失败')
        }
      },
      /**
       * 键盘事件
       * @param key
       */
      keyDownEvent (key) {
        console.log(key)
      }
    },
    mounted () {
      this.$nextTick(() => {
          document.onkeydown = (event) => {
            var e = event || window.event
            if (e && e.keyCode === 13) {
              this.handleSubmit('formInline')
              e.preventDefault()
            }
          }
      })
    }
  }
</script>

<template>
  <div class="wrapper">
    <Row>
      <i-col span="18">
        <div class=" b wrapper-box" v-if="!initiating">
          <Affix :offset-top="10" style="padding:5px 0px;">
            <Row type="flex" :gutter=5>
              <i-col span="12">
                <Row type="flex" justify="start">
                  <i-col>
                    <Button type="primary" @click="addMeeting()">创建活动</Button>
                  </i-col>
                </Row>
              </i-col>
              <i-col span="12">
                <Row type="flex" justify="end">
                  <i-col>
                    <i-input class="width-letf" placeholder="请输入活动名称" v-model="keyWord"></i-input>
                  </i-col>
                  <i-col>
                    <Button type="primary"  class="m-r15 m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
                  </i-col>
                </Row>
              </i-col>
            </Row>
          </Affix>
          <Menu mode="horizontal" active-name="all" @on-select="menuSelect">
            <MenuItem name="all">全部活动</MenuItem>
            <MenuItem name="0,1,3">未开始</MenuItem>
            <MenuItem name="2">进行中</MenuItem>
            <MenuItem name="99">已结束</MenuItem>
            <MenuItem name="-1">未通过</MenuItem>
          </Menu>

          <div class="list-wrapper">
            <ul class="list">
              <li class="list-item fbox" v-for="item in data" :key="item.id">
                <meeting-item :row="item"></meeting-item>
              </li>
            </ul>

            <!--分页-->
            <div style="text-align: right; padding-top: 5px;">
              <Page show-total show-sizer show-elevator style="display: inline-block;" placement="top"
                    :total="total"
                    :page-size="parms.limit"
                    :current="parms.offset"
                    @on-change="changePage"
                    @on-page-size-change="changeSize"></Page>
            </div>
          </div>
        </div>
        <div class="initiating" v-if="initiating">
          <router-view></router-view>
        </div>
      </i-col>
      <i-col span="6">
        <div class=" b wrapper-box m-l10">
          <div class="clear rig-title">
            <h3 class="c2">活动</h3>
          </div>
          <ul class="rig-list-wrapper">
            <li>可使用场次<span class="c4 fr">0场</span></li>
            <li>已创建场次<span class="fr">0场</span></li>
          </ul>
          <Button type="error" size="large" class="meeting-go-buy">立即订购</Button>
        </div>
        <div class="b wrapper-box m-l10 m-t10">
          <div class="clear rig-title m-b10">
            <h3 class="c2">活动官方公众号</h3>
          </div>
          <img v-lazy="loadImg" width="100%"/>
        </div>
        <div class=" b wrapper-box m-l10 m-t10">
          <div class="clear rig-title">
            <h3 class="c2">使用指南</h3>
          </div>
          <ul class="rig-list-wrapper">
            <li><a class="c2">会前设置</a></li>
            <li><a class="c2">会中设置</a></li>
            <li><a class="c2">参会管理</a></li>
            <li><a class="c2">数据统计</a></li>
          </ul>
        </div>
        <div class=" b wrapper-box m-l10 m-t10">
          <div class="clear rig-title">
            <h3 class="c2">使用指南</h3>
          </div>
          <ul class="rig-list-wrapper">
            <li><a class="c2">如何进入微盟活动小程序？</a></li>
            <li><a class="c2">活动邀请函如何修改基本信息？</a></li>
            <li><a class="c2">活动邀请函如何修改活动议程？</a></li>
            <li><a class="c2">如何查看报名的具体人员情况？</a></li>
          </ul>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import meetingItem from 'components/meeting-item/index'
  export default {
    data () {
      return {
        initiating: false,
        keyWord: '',
        total: 0,
        data: [],
        timer: {},
        parms: {
          limit: 20,
          offset: 1
        },
        loadImg: ''
      }
    },
    created () {
      if (this.$route.path === '/meeting') {
        this.initiating = false
      } else {
        this.initiating = true
      }
      console.log(this.$route.path)
      setTimeout(() => {

      }, 20)
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/meeting') {
          this.initiating = false
          this.initItem()
        }
      }
    },
    methods: {
      searchDriver () {
        this.parms.keyWord = this.keyWord
        this.initItem()
      },
      menuSelect (name) {
        this.parms.status = name
        this.initItem()
      },
      addMeeting () {
        this.initiating = true
        this.routePush('/meeting/initiating')
      },
      /**
       *跳页
       * @param v
       */
      changePage (v) {
        this.parms.offset = v
        this.$Message.warning(v)
      },
      /**
       *改变页面展示用户条数
       * @param v
       */
      changeSize (v) {
        this.parms.limit = v
        this.$Message.warning(v)
      },
      /**
       * 加载活动
       */
      initItem () {
        const _type = 'GET'
        const _params = this.parms
        const _url = 'activitys'
        this.requestAjax(_type, _url, _params).then((data) => {
          if (!data.message) {
            this.total = !isNaN(+data.data.total) ? +data.data.total : 0
            this.data = data.data.rows
          }
        })
      }
    },
    components: {
      meetingItem
    },
    mounted () {
      this.$nextTick(() => {
        this.initItem()
        if (!this.initiating) {
           document.querySelector('.ivu-page-options-elevator').title = '输入后回车跳至指定页'
        }
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.initItem()
        }, 60 * 1000)
      })
    }
  }
</script>

<style>

  .wrapper{
    margin: 10px;
  }
  .list-wrapper{
    margin: 10px 0;
  }
  .list-item{
    position: relative;
    border: 1px solid #e3e2e5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .rig-list-wrapper{padding: 10px 0}
  .rig-list-wrapper li{
    line-height: 40px;
  }
  .rig-list-wrapper li:nth-child(n+2){border-top: 1px solid #f4f4f4;}
  .meeting-go-buy{
    display: block;
    margin: 0 auto;
    width: 80%;
  }
  .rig-list-wrapper li a:hover{
    color: #118fff!important;
  }
  .rig-title h3:before{
    content: '';
    display: block;
    width: 3px;
    height: 14px;
    background: #2589ff;
    display: inline-block;
    margin-right: 5px;
    vertical-align: -2px;
  }
</style>

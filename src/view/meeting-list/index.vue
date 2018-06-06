<template>
  <div class="wrapper">
    <Row>
      <Col span="18">
        <div class=" b wrapper-box">
          <Affix :offset-top="10" style="padding:5px 0px;">
            <Row type="flex" :gutter=5>
              <i-col span="12">
                <Row type="flex" justify="start">
                  <i-col>
                    <Button type="primary" @click="addMeeting">创建会议</Button>
                  </i-col>
                </Row>
              </i-col>
              <i-col span="12">
                <Row type="flex" justify="end">
                  <i-col>
                    <i-input class="width-letf" placeholder="请输入会议名称" v-model="keyWord"></i-input>
                  </i-col>
                  <i-col>
                    <Button type="primary"  class="m-r15 m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
                  </i-col>
                </Row>
              </i-col>
            </Row>
          </Affix>
          <Menu mode="horizontal" active-name="1" @on-select="menuSelect">
            <MenuItem name="1">全部会议</MenuItem>
            <MenuItem name="2">未开始</MenuItem>
            <MenuItem name="3">进行中</MenuItem>
            <MenuItem name="4">已结束</MenuItem>
          </Menu>

          <div class="list-wrapper">
            <ul class="list">
              <li class="list-item fbox" v-for="item in [1,2,3,4,5]">
                <Button class="manage-btn" type="primary">管理</Button>
                <div class="pic-wrapper">
                  <img width="100%" height="100%" v-lazy="loadImg">
                  <span class="tips b1 c">进行中</span>
                </div>
                <div class="info-wrapper flex c2">
                  <h3 class="fz13">北京奥运会开幕(复制)</h3>
                  <div>会议ID：16434 <span class="b2 c3 meeting-version">体验版</span></div>
                  <div class="fbox">
                    <div class="flex"><div>报名时间：2018-06-05 17:37 ~ 2018-07-05 17:00</div></div>
                    <div class="flex"><Icon type="person"></Icon> 发布者：林先生</div>
                  </div>
                  <div class="fbox">
                    <div class="flex"><div>报名时间：2018-06-05 17:37 ~ 2018-07-05 17:00</div></div>
                    <div class="flex"><Icon type="ios-location"></Icon> 北京市北京市东城区</div>
                  </div>
                  <div class="fbox tools-wrapper">
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 基本信息</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 门票管理</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 会议邀请</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 人员管理</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 订单管理</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 微信墙</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 参会统计</a></div>
                    <div class="flex"><a class="c2"><Icon type="ios-paper-outline c1"></Icon> 复制会议</a></div>
                  </div>
                </div>
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
      </Col>
      <Col span="6">
        <div class=" b wrapper-box" style="margin-left: 10px">
          侧边
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyWord: '',
        total: 0,
        parms: {
          keyWord: '',
          limit: 20,
          offset: 1
        },
        loadImg: "https://static.veer.com/veer/static/resources/FourPack/2018-06-04/9dc68eb66cfc44ceb921a8c8c2cc8c0a.jpg"
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      searchDriver(){
        this.$Message.warning('搜索')
      },
      addMeeting(){
        this.$Message.warning('创建会议')
      },
      menuSelect(name){
        this.$Message.warning(name)
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
    }
  }
</script>

<style scoped>

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
  .manage-btn{
    position: absolute;
    top: 23px;
    right: 30px;
  }
  .pic-wrapper{
    width: 130px;
    height: 130px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .pic-wrapper .tips{
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 10px;
    border-radius: 0 4px 0 4px;
  }
  .info-wrapper{
    padding: 10px;
    line-height: 20px;
  }
  .meeting-version{
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 8px
  }
  .tools-wrapper{
    border-top: 1px solid #e3e2e5;
    margin-top: 8px;
  }
</style>

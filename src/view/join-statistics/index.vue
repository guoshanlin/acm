<template>
  <div class="b wrapper-box">
    <h3 class="fz14">我的账户</h3>
    <Menu mode="horizontal" active-name="0" @on-select="menuSelect">
      <MenuItem name="0">报名统计</MenuItem>
      <MenuItem name="1">签到统计</MenuItem>
    </Menu>
    <div v-if="statistics == 0">
      <div class="content-wrapper m-t10 wrapper-border m-t20">
        <div class="clear">
          <span>报名签到统计</span>
        </div>
        <div class="fbox fz14 m-t10 ct c3 statistics-wrapper">
          <div class="flex">
            <span class="fz20 c2">1</span><br>
            <span>总人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">1</span><br>
            <span>实际报名</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">100%</span><br>
            <span>报名率</span>
          </div>
        </div>
        <div>
          <div class="clear m-b10">
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Table border ref="$table" :columns="registerRateCol" :data="registerRateData"></Table>
        </div>
        <div class="m-t30">
          <div class="clear">
            <RadioGroup @on-change="orderStatusChange" v-model="orderStatus" type="button">
              <Radio label="昨天"></Radio>
              <Radio label="最近7天"></Radio>
              <Radio label="最近30天"></Radio>
            </RadioGroup>
            <DatePicker class="m-l5" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
        </div>
      </div>
      <div class="content-wrapper m-t20 wrapper-border">
        <div class="clear">
          <span>报名渠道统计</span>
          <Button class="fr" type="primary">导出</Button>
        </div>
        <Table class="m-t10" border ref="$table" :columns="channelRateCol" :data="channelRateData"></Table>
      </div>
      <div class="content-wrapper wrapper-border m-t20">
        <div class="clear">
          <span>报名订单统计</span>
        </div>
        <div class="fbox fz14 m-t10 ct c3 statistics-wrapper">
          <div class="flex">
            <span class="fz20 c2">1</span><br>
            <span>订单数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">1</span><br>
            <span>售出票数</span>
          </div>
          <div class="flex">
          </div>
        </div>
        <div class="m-t30">
          <div class="clear">
            <RadioGroup @on-change="orderStatusChange" v-model="orderStatus" type="button">
              <Radio label="昨天"></Radio>
              <Radio label="最近7天"></Radio>
              <Radio label="最近30天"></Radio>
            </RadioGroup>
            <DatePicker class="m-l5" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="content-wrapper wrapper-border m-t20">
        <div class="clear">
          <span>签到率统计</span>
        </div>
        <div class="fbox fz14 m-t10 ct c3 statistics-wrapper">
          <div class="flex">
            <span class="fz20 c2">{{data.ticket && data.ticket[0].报名人数 != null ? data.ticket[0].报名人数 : 0}}</span><br>
            <span>报名人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{data.ticket && data.ticket[0].签到人数 != null  ? data.ticket[0].签到人数 : 0 }}</span><br>
            <span>签到人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{data.ticket && data.ticket[0].签到率 != null ? data.ticket[0].签到率 + '%' : "0%"}}</span><br>
            <span>签到率</span>
          </div>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>签到方式统计</span>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Table class="m-t10" border ref="$table" :columns="signInCol" :data="signInData"></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        statistics: 0,

        registerRateCol: [
          {
            title: "报名名称",
            align: 'center',
            key: "name"
          },
          {
            title: "总人数",
            align: 'center',
            key: "total"
          },
          {
            title: "实际报名",
            align: 'center',
            key: "actual"
          },
          {
            title: "报名率",
            align: 'center',
            key: "rate"
          }
        ],
        registerRateData: [
          {
            name: '免费报名',
            total: 18,
            origin: "John Brown",
            actual: '10',
            rate: '50%'
          },
          {
            name: '付费报名',
            total: 18,
            origin: "后台添加",
            actual: '12',
            rate: '50%'
          }
        ],

        channelRateCol: [
          {
            title: "渠道表",
            align: 'center',
            key: "name"
          },
          {
            title: "报名人数",
            align: 'center',
            key: "total"
          },
          {
            title: "占比",
            align: 'center',
            key: "rate"
          }
        ],
        channelRateData: [
          {
            name: '邀请函',
            total: 18,
            rate: '50%'
          },
          {
            name: '嘉宾海报',
            total: 32,
            rate: '50%'
          },
          {
            name: '炫耀海报',
            total: 2,
            rate: '50%'
          },
          {
            name: '报名二维码',
            total: 31,
            rate: '50%'
          },
          {
            name: '签到二维码',
            total: 23,
            rate: '50%'
          },
          {
            name: '后台添加',
            total: 212,
            rate: '50%'
          }
        ],

        signInCol: [
          {
            title: "签到方式",
            align: 'center',
            key: "name"
          },
          {
            title: "签到人数",
            align: 'center',
            key: "total"
          },
          {
            title: "占比",
            align: 'center',
            key: "rate"
          }
        ],
        signInData: [
          {
            name: '位置签到',
            total: 18,
            rate: '50%'
          },
          {
            name: '微信扫码签到',
            total: 32,
            rate: '50%'
          },
          {
            name: '后台标记签到',
            total: 2,
            rate: '50%'
          },
          {
            name: 'APP签到',
            total: 31,
            rate: '50%'
          },
          {
            name: '人脸识别签到',
            total: 23,
            rate: '50%'
          }
        ],
        orderStatus: "昨天",

        id: this.$route.query.id,
        data: '',
      }
    },
    created() {
      setTimeout(() => {
        this.requestTicket()
      }, 20)
    },
    methods: {
      menuSelect(v){
        this.statistics = v
      },
      orderStatusChange(v){
        this.$Message.warning(v)
      },

      requestTicket () {
        this.requestAjax('get', 'report', {id: this.id}).then((data) => {
          this.data = data.data
        })
      }
    }
  }
</script>

<style scoped>

  .statistics-wrapper {
    padding: 36px 0;
    border-top: 1px solid #e3e2e5;
  }

</style>

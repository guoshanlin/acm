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
            <span class="fz20 c2">{{reportEntered.activity ? reportEntered.activity.number : 0}}</span><br>
            <span>总人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{reportEntered.activity ? reportEntered.activity.numberActual : 0}}</span><br>
            <span>实际报名</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{reportEntered.activity ? reportEntered.activity.numberRete : 0}}%</span><br>
            <span>报名率</span>
          </div>
        </div>
        <div>
          <div class="clear m-b10">
            <Button class="fr" type="primary"  @click="exportTableData('orderInfo')">导出</Button>
          </div>
          <Table border ref="$orderInfo" :columns="registerRateCol" :data="registerRateData"></Table>
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
          <div class="posct wrapper-border m-t10">
             <div id="joinChart1" style="height: 260px; width: 100%"></div>
          </div>
        </div>
      </div>
      <div class="content-wrapper m-t20 wrapper-border" style="display: none;">
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
            <span class="fz20 c2">{{reportEntered.orders ? reportEntered.orders[0].number : 0}}</span><br>
            <span>订单数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{reportEntered.orders ? reportEntered.orders[0].ticketNumber : 0}}</span><br>
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
          <div class="posct wrapper-border m-t10">
            <div id="joinChart2" style="height: 260px; width: 100%"></div>
          </div>
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
            <span class="fz20 c2">{{reportSign.number}}</span><br>
            <span>报名人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{reportSign.signNumber}}</span><br>
            <span>签到人数</span>
          </div>
          <div class="flex">
            <span class="fz20 c2">{{reportSign.signRete}}%</span><br>
            <span>签到率</span>
          </div>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>签到方式统计</span>
            <Button class="fr" type="primary" @click="exportTableData('reportSign')">导出</Button>
          </div>
          <Table class="m-t10" border ref="$reportSign" :columns="signInCol" :data="signInData"></Table>
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
            total: 0,
            actual: '0',
            rate: '0%'
          },
          {
            name: '付费报名',
            total: 0,
            actual: '0',
            rate: '0%'
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
            name: '票券二维码',
            total: 0,
            rate: '0%'
          },
          {
            name: '活动二维码',
            total: 0,
            rate: '0%'
          },
          {
            name: '票券序列号',
            total: 0,
            rate: '0%'
          }
        ],
        orderStatus: "昨天",

        id: this.$route.query.id,
        reportSign: {number: 0,signNumber: 0,signRete: 0},    // 签到统计数据
        reportEntered: {},     // 报名统计数据
        charts: {}
      }
    },
    created() {
      setTimeout(() => {
        // 报名统计
        this.requesrReportEntered()
        // 签到统计
        this.requestReportSign()
        this.initChart()
      }, 20)
    },
    methods: {
      menuSelect(v){
        this.statistics = v
        setTimeout(() => {
          this._resize()
          if (v == 0) {
            this.initChart()
          }
        }, 20)
      },
      orderStatusChange(v){
        this.$Message.warning(v)
      },
      // 签到统计
      requestReportSign () {
        this.requestAjax('get', 'reportSign', {id: this.id}).then(res => {
          if(res.success){
            let data = res.data.data[0], reportSign = this.reportSign
            for(let k in reportSign){
              this.reportSign[k] = data[k]
            }
            for(let i =0, ilen = this.signInData.length; i < ilen; i++){
              this.signInData[i].total = data["signType" + i]
              this.signInData[i].rate = data["signTypeRete" + i] + "%"
            }
          }
        })
      },
      // 报名统计
      requesrReportEntered(){
        this.requestAjax('get', 'reportEntered', {id: this.id}).then(res => {
          if(res.success){
            this.reportEntered = res.data
            if(this.reportEntered.orderInfo){
              this.registerRateData = [{
                name: '免费报名',
                total: this.reportEntered.orderInfo[0].freeNumber,
                actual: this.reportEntered.orderInfo[0].freeActualNumber,
                rate: this.reportEntered.orderInfo[0].freeRete + '%'
              }, {
                  name: '付费报名',
                  total: this.reportEntered.orderInfo[0].chargeActualNumber,
                  actual: this.reportEntered.orderInfo[0].chargeNumber,
                  rate: this.reportEntered.orderInfo[0].chargeRete + '%'
                }]
            }
          }
        })
      },
      exportTableData(name){
        this.$refs["$"+name].exportCsv({filename:name})
      },
      initChart () {
        this.charts.joinChart1Chart = this.echarts.init(document.getElementById('joinChart1'))
        this.charts.joinChart2Chart = this.echarts.init(document.getElementById('joinChart2'))
        let data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86],
          ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92],
          ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111],
          ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85],
          ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85],
          ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44],
          ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92],
          ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64],
          ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111],
          ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]]
        let option = {
          color: ["#00ADFF","#5fff21"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          grid: {
            top: '10%',
            left: '5%',
            right: '10%',
            bottom: '10%',
            width: '85%',
            height: '80%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: "#ccc"
            },
            data: data.map((item) => {
              return item[0];
            })
          },
          yAxis: {
            type: 'value',
            scale: true,
            axisLabel: {
              color: "#ccc"
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#515151'
              }
            },
            min:0,
            boundaryGap: [0.2, 0.2]
          },
          series: [
            {
              type: 'line',
              showSymbol: false,
              name: '免费报名',
              data: data.map((item) => {
                return item[1]
              })
            }
          ]
        }
        this.charts.joinChart1Chart.setOption(option)
        option.series[0].name= '订单数'
        option.series.push({
          type: 'line',
          showSymbol: false,
          name: '售出票数',
          data: data.map((item) => {
            return Math.round(Math.random() * item[1])
          })
        })
        this.charts.joinChart2Chart.setOption(option)
      },
      _resize () {
        for (let char in this.charts) {
          this.charts[char].resize()
        }
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

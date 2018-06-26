<template>
  <div class="b wrapper-box">
    <h3 class="fz14">流量统计</h3>
    <Menu mode="horizontal" active-name="0" @on-select="menuSelect">
      <MenuItem name="0">访问量统计</MenuItem>
      <MenuItem name="1">访客分析</MenuItem>
    </Menu>

    <div v-if="statistics == 0">
      <div class="posct wrapper-border m-t10" style="min-height: 260px;">
        <div class="m-t30 full-width">
          <div class="clear">
            <RadioGroup @on-change="orderStatusChange" v-model="orderStatus" type="button">
              <Radio label="昨天"></Radio>
              <Radio label="最近7天"></Radio>
              <Radio label="最近30天"></Radio>
            </RadioGroup>
            <DatePicker class="m-l5" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <div class="posct wrapper-border m-t10" style="height: 400px;">
             <Row class="full-width">
                <i-col :span="12">
                  <div class="t-center">
                    <i-circle :percent="100" stroke-color="#2db7f5" :size="200" :stroke-width="10">
                      <span class="demo-Circle-inner fz24 c7">80</span><br>  <br>
                      <span class="demo-Circle-inner fz16">总浏览量</span>
                    </i-circle>
                  </div>
                </i-col>
                 <i-col :span="12">
                   <div class="t-center">
                     <i-circle :percent="100" :size="200" stroke-color="#5cb85c" :stroke-width="10">
                       <span class="demo-Circle-inner fz24 c6">10</span>
                       <br>
                       <br>
                       <span class="demo-Circle-inner fz16">总访客数</span>
                     </i-circle>
                   </div>
                 </i-col>
             </Row>
          </div>
          <div class="clear m-t30">
            <div>访问量趋势图</div>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <div class="posct wrapper-border m-t10" style="height: 260px;">
             <div id="pageView" style="height: 260px; width: 100%"></div>
          </div>
          <div class="posct wrapper-border m-t10">
            <i-table border :columns="columns" :data="data"></i-table>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
        <div class="content-wrapper m-t10 wrapper-border m-t20">
            <div class="clear">
              <RadioGroup @on-change="orderStatusChange" v-model="orderStatus" type="button">
                <Radio label="昨天"></Radio>
                <Radio label="最近7天"></Radio>
                <Radio label="最近30天"></Radio>
              </RadioGroup>
              <DatePicker class="m-l5" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
            </div>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>访客性别分布</span>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Row type="flex" align="middle">
            <i-col :span="12">
              <div class="posct wrapper-border m-t10" style="height: 260px;">
                <div id="flowed1" style="width: 100%; height: 260px;"></div>
              </div>
            </i-col>
            <i-col :span="12">
              <div style="padding: 20px;">
                <i-table border :columns="table.columns" :data="table.data"></i-table>
              </div>
            </i-col>
          </Row>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>省份分布 TOP10</span>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Row type="flex">
            <i-col :span="12">
              <div class="posct wrapper-border m-10" style="height: 400px;">
                 <div id="map1" style="width:100%;height: 400px"></div>
              </div>
            </i-col>
            <i-col :span="12">
              <div class="posct wrapper-border m-10" style="height: 400px;">chart 图表2</div>
            </i-col>
          </Row>
            <div class="m-10">
              <i-table border :columns="table.columnsPro" :data="table.dataPro"></i-table>
            </div>
       </div>
        <div class="content-wrapper m-t20 wrapper-border">
            <div class="clear">
              <span>城市分布 TOP10</span>
              <Button class="fr" type="primary">导出</Button>
            </div>
            <Row type="flex">
              <i-col :span="12">
                <div class="posct wrapper-border m-10" style="height: 400px;">
                  <div id="map2" style="width:100%;height: 400px"></div>
                </div>
              </i-col>
              <i-col :span="12">
                <div class="posct wrapper-border m-10" style="height:400px;">chart 图表2</div>
              </i-col>
            </Row>
              <div class="m-10">
                <i-table border :columns="table.columnsCity" :data="table.dataCity"></i-table>
              </div>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>终端系统分布</span>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Row type="flex" align="middle">
            <i-col :span="12">
              <div class="posct wrapper-border m-t10" style="height: 260px;">
                <div id="flowed2" style="width: 100%; height: 260px;"></div>
              </div>
            </i-col>
            <i-col :span="12">
              <div style="padding: 20px;">
                <i-table border :columns="table.columnsTer" :data="table.dataTer"></i-table>
              </div>
            </i-col>
          </Row>
        </div>
        <div class="content-wrapper m-t20 wrapper-border">
          <div class="clear">
            <span>终端机型分布 Top 10</span>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <Row type="flex" align="middle">
            <i-col :span="12">
              <div class="posct wrapper-border m-t10" style="height: 260px;">
                <div id="flowed3" style="width: 100%; height: 260px;"></div>
              </div>
            </i-col>
            <i-col :span="12">
              <div style="padding: 20px;">
                <i-table border :columns="table.columnsTerTop" :data="table.dataTerTop"></i-table>
              </div>
            </i-col>
          </Row>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        statistics: 0,
        orderStatus: '昨天',
        width: {
          width01: document.documentElement.clientWidth - 330
        },
        columns: [
          {title: '页面/场景', width: 100, key: 'company', sortable: false},
          {title: '总浏览量PV', width: 110, key: 'position', sortable: false},
          {title: '日最高PV', key: 'position', sortable: false},
          {title: '日最低PV', key: 'position', sortable: false},
          {title: '日平均PV', key: 'position', sortable: false},
          {title: '总访客数UV', width: 110, key: 'position', sortable: false},
          {title: '日最高UV', key: 'position', sortable: false},
          {title: '日最低UV', key: 'position', sortable: false},
          {title: '日平均UV', key: 'position', sortable: false}
        ],
        data: [{company: '订单详情页', position: 1}, {company: '提交订单页', position: 1}],
        table: {
          columns: [
            {title: '性别', key: 'name', sortable: false},
            {title: '访客数', key: 'value', sortable: false},
            {title: '占比', key: 'position', sortable: false}
            ],
          data: [
            {value: 335, name: '男'},
            {value: 310, name: '女'},
            {value: 234, name: '未知'}
            ],
          columnsPro: [
            {title: '省份', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
            ],
          dataPro: [],
          columnsCity: [
            {title: '城市', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataCity: [],
          columnsTer: [
            {title: '终端系统', key: 'name', sortable: false},
            {title: '访客数', key: 'value', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataTer: [
            {value: 335, name: 'android'},
            {value: 310, name: 'ios'},
            {value: 234, name: '未知'}
          ],
          columnsTerTop: [
            {title: '终端机型', key: 'name', sortable: false},
            {title: '访客数', key: 'value', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataTerTop: [
            {value: 335, name: 'pra-al00x'},
            {value: 310, name: '终端机型2'},
            {value: 234, name: '未知'}
            ]
        },
        charts: {}
      }
    },
    created () {
      setTimeout(() => {
        this.initChart()
      }, 20)
    },
    methods: {
      menuSelect (v) {
        this.statistics = v
        setTimeout(() => {
          this._resize()
          if (v == 1) {
            this.initChart1()
          } else {
            this.initChart()
          }
        }, 20)
      },
      orderStatusChange () {

      },
      initChart () {
        this.charts.pageViewChart = this.echarts.init(document.getElementById('pageView'))
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
          color: ["#00ADFF"],
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
              color: "#ccc",
              // formatter: (value)=> {
              //   if(value>=10000 &&  value<100000000){
              //     return value/10000 + "万";
              //   }else if(value>=100000000 &&  value<1000000000000){
              //     return value/100000000 + "亿";
              //   }else if(value>=1000000000000){
              //     return value/1000000000000 + "兆";
              //   }else {
              //     return value;
              //   }
              // }
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
              name: '浏览量',
              data: data.map((item) => {
                return item[1]
              })
            }
          ]
        }
        this.charts.pageViewChart.setOption(option)
      },
      initChart1 () {
        this.charts.flowed1Chart = this.echarts.init(document.getElementById('flowed1'))
        this.charts.flowed2Chart = this.echarts.init(document.getElementById('flowed2'))
        this.charts.flowed3Chart = this.echarts.init(document.getElementById('flowed3'))
        this.charts.map1Chart = this.echarts.init(document.getElementById('map1'))
        this.charts.map2Chart = this.echarts.init(document.getElementById('map2'))

        let option = {
          // title: {
          //   text: '报障类型',
          //   x: 'right',
          //   top: '20'
          // },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            x: 'left',
            top: '55',
            data: this.table.data.map((item) => {
              return item.name
            })
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.table.data,
              label: {
                normal: {
                  show: true,
                  position: 'inner',
                  color: '#000',
                  formatter: '{b} : {c} ({d}%)'
                }
              }
            }
          ]
        }
        this.charts.flowed1Chart.setOption(option)
        option.legend.data = this.table.dataTer.map((item) => {
          return item.name
        })
        option.series[0].data = this.table.dataTer
        this.charts.flowed2Chart.setOption(option)
        option.legend.data = this.table.dataTerTop.map((item) => {
          return item.name
        })
        option.series[0].data = this.table.dataTerTop
        this.charts.flowed3Chart.setOption(option)

        let optionMap = {
          // title: {
          //   text: '省份分布 TOP10',
          //   subtext: '纯属虚构',
          //   left: 'center'
          // },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data:['iphone3','iphone4','iphone5']
          },
          grid: {

          },
          visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true
          },
          series: [
            {
              name: 'iphone3',
              type: 'map',
              mapType: 'china',
              roam: false,
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data:[
                {name: '北京',value: Math.round(Math.random()*1000) },
                {name: '天津',value: Math.round(Math.random()*1000) },
                {name: '上海',value: Math.round(Math.random()*1000) },
                {name: '重庆',value: Math.round(Math.random()*1000) },
                {name: '河北',value: Math.round(Math.random()*1000) },
                {name: '河南',value: Math.round(Math.random()*1000) },
                {name: '云南',value: Math.round(Math.random()*1000) },
                {name: '辽宁',value: Math.round(Math.random()*1000) },
                {name: '黑龙江',value: Math.round(Math.random()*1000) },
                {name: '湖南',value: Math.round(Math.random()*1000) },
                {name: '安徽',value: Math.round(Math.random()*1000) },
                {name: '山东',value: Math.round(Math.random()*1000) },
                {name: '新疆',value: Math.round(Math.random()*1000) },
                {name: '江苏',value: Math.round(Math.random()*1000) },
                {name: '浙江',value: Math.round(Math.random()*1000) },
                {name: '江西',value: Math.round(Math.random()*1000) },
                {name: '湖北',value: Math.round(Math.random()*1000) },
                {name: '广西',value: Math.round(Math.random()*1000) },
                {name: '甘肃',value: Math.round(Math.random()*1000) },
                {name: '山西',value: Math.round(Math.random()*1000) },
                {name: '内蒙古',value: Math.round(Math.random()*1000) },
                {name: '陕西',value: Math.round(Math.random()*1000) },
                {name: '吉林',value: Math.round(Math.random()*1000) },
                {name: '福建',value: Math.round(Math.random()*1000) },
                {name: '贵州',value: Math.round(Math.random()*1000) },
                {name: '广东',value: Math.round(Math.random()*1000) },
                {name: '青海',value: Math.round(Math.random()*1000) },
                {name: '西藏',value: Math.round(Math.random()*1000) },
                {name: '四川',value: Math.round(Math.random()*1000) },
                {name: '宁夏',value: Math.round(Math.random()*1000) },
                {name: '海南',value: Math.round(Math.random()*1000) },
                {name: '台湾',value: Math.round(Math.random()*1000) },
                {name: '香港',value: Math.round(Math.random()*1000) },
                {name: '澳门',value: Math.round(Math.random()*1000) }
              ]
            },
            {
              name: 'iphone4',
              type: 'map',
              mapType: 'china',
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data:[
                {name: '北京',value: Math.round(Math.random()*1000) },
                {name: '天津',value: Math.round(Math.random()*1000) },
                {name: '上海',value: Math.round(Math.random()*1000) },
                {name: '重庆',value: Math.round(Math.random()*1000) },
                {name: '河北',value: Math.round(Math.random()*1000) },
                {name: '安徽',value: Math.round(Math.random()*1000) },
                {name: '新疆',value: Math.round(Math.random()*1000) },
                {name: '浙江',value: Math.round(Math.random()*1000) },
                {name: '江西',value: Math.round(Math.random()*1000) },
                {name: '山西',value: Math.round(Math.random()*1000) },
                {name: '内蒙古',value: Math.round(Math.random()*1000) },
                {name: '吉林',value: Math.round(Math.random()*1000) },
                {name: '福建',value: Math.round(Math.random()*1000) },
                {name: '广东',value: Math.round(Math.random()*1000) },
                {name: '西藏',value: Math.round(Math.random()*1000) },
                {name: '四川',value: Math.round(Math.random()*1000) },
                {name: '宁夏',value: Math.round(Math.random()*1000) },
                {name: '香港',value: Math.round(Math.random()*1000) },
                {name: '澳门',value: Math.round(Math.random()*1000) }
              ]
            },
            {
              name: 'iphone5',
              type: 'map',
              mapType: 'china',
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data:[
                {name: '北京',value: Math.round(Math.random()*1000) },
                {name: '天津',value: Math.round(Math.random()*1000) },
                {name: '上海',value: Math.round(Math.random()*1000) },
                {name: '广东',value: Math.round(Math.random()*1000) },
                {name: '台湾',value: Math.round(Math.random()*1000) },
                {name: '香港',value: Math.round(Math.random()*1000) },
                {name: '澳门',value: Math.round(Math.random()*1000) }
              ]
            }
          ]
        }

         this.charts.map1Chart.setOption(optionMap)
         this.charts.map2Chart.setOption(optionMap)
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
  .c6 {color: #5cb85c}
  .c7 {color: #2db7f5}
</style>

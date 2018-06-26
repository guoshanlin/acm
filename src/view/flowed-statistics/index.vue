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
          <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
          <div class="clear m-t30">
            <div>访问量趋势图</div>
            <Button class="fr" type="primary">导出</Button>
          </div>
          <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
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
            <i-col :span="8">
              <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
            </i-col>
            <i-col :span="16">
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
              <div class="posct wrapper-border m-10" style="height: 260px;">
                 <div id="preMap" style="height: 260px"></div>
              </div>
            </i-col>
            <i-col :span="12">
              <div class="posct wrapper-border m-10" style="height: 260px;">chart 图表2</div>
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
                <div class="posct wrapper-border m-10" style="height: 260px;">chart 图表</div>
              </i-col>
              <i-col :span="12">
                <div class="posct wrapper-border m-10" style="height: 260px;">chart 图表2</div>
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
              <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
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
              <div class="posct wrapper-border m-t10" style="height: 260px;">chart 图表</div>
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
            {title: '性别', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
            ],
          data: [{}],
          columnsPro: [
            {title: '省份', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
            ],
          dataPro: [{}],
          columnsCity: [
            {title: '城市', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataCity: [{}],
          columnsTer: [
            {title: '终端系统', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataTer: [{}],
          columnsTerTop: [
            {title: '终端机型', key: 'company', sortable: false},
            {title: '访客数', key: 'position', sortable: false},
            {title: '占比', key: 'position', sortable: false}
          ],
          dataTerTop: [{}]
        }
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
      },
      orderStatusChange () {

      },
      initChart () {

      }
    }
  }
</script>

<style scoped>

</style>

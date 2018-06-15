<template>
  <div class="parenting">
    <div class="wrapper-box fbox">
      <div>
        <div class="t-right parenting-title">亲子:</div>
      </div>
      <div class="flex">
        <RadioGroup v-model="parms.type" type="button" size="small" @on-change="radioChange">
          <Radio label="" value="">不限</Radio>
          <Radio v-for="value in radio" :label="value" :key="value" :value="value"></Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="wrapper-box m-t15">
      <div class="list-item" v-for="item in data" :key="item.id">
        <activity-item :row='item'></activity-item>
      </div>
    </div>
    <div class="wrapper-box m-t15">
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
</template>

<script>
  import activityItem from 'components/activity-item/item'
  export default {
    name: 'index',
    data () {
      return {
        parms: {
          type: '',
          limit: 20,
          offset: 1
        },
        data: '',
        total: 0,
        timer: {},
        radio: ['演出', '文艺', '手工', '公益', '户外出游', '运动健康', '聚会交友', '休闲娱乐', '投资理财', '时尚', '心理', '体育赛事']
      }
    },
    methods: {
      /**
       *跳页
       * @param v
       */
      changePage (v) {
        this.parms.offset = v
        this.loadItem()
      },
      /**
       *改变页面展示用户条数
       * @param v
       */
      changeSize (v) {
        this.parms.limit = v
        this.loadItem()
      },
      /**
       *筛选
       */
      radioChange (name) {
        this.loadItem()
      },
      loadItem () {
        this.requestAjax('get', 'activitys', this.parms).then((data) => {
          if (!data.message) {
            this.total = !isNaN(+data.data.total) ? +data.data.total : 0
            this.data = data.data.rows
          } else {
            this.data = []
          }
        })
      }
    },
    components: {
      activityItem
    },
    mounted () {
      this.$nextTick(() => {
        window.onresize = () => {}
        this.loadItem()
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.loadItem()
        }, 60 * 1000)
      })
    }
  }
</script>

<style>
  .parenting{ padding: 20px;}
  .parenting .wrapper-box{background-color:#ffffff}
  .parenting-title{padding:0 20px; line-height: 34px;}
  .ivu-radio-wrapper{margin: 5px!important;}
  .list-wrapper{margin: 10px 0;}
  .parenting .list-item{
    position: relative;
    border: 1px solid #e3e2e5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .parenting .ivu-radio-group-button .ivu-radio-wrapper:last-child,.ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper:first-child{border-radius:0;}
</style>

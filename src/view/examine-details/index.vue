<template>
  <div  class="wrapper b wrapper-box">
    <div class="datails-item">
      <datails-item :row='data' :button="buttonName"  @exmine="exmine"></datails-item>
    </div>
    <div class="datails-item m-t10">
      <div class="fbox">
         <div class="datails-flex-item t-right"><h3>票种:</h3></div>
         <div class="flex t-left">
           <div v-if="data.isNeedPay == 0">免费</div>
           <div v-if="data.isNeedPay == 1">&nbsp;<span class="span-title">非会员价:</span>&nbsp;{{data.nonMBPrice}}元&nbsp;&nbsp;&nbsp;<span class="span-title">会员价:</span>&nbsp;{{data.mbPrice}}元</div>
         </div>
      </div>
    </div>
    <div class="datails-item m-t10">
      <div class="fbox">
         <div class="datails-flex-item t-right"><h3>活动标签:</h3></div>
         <div class="flex t-left">
           <Tag color="blue" v-for="item in label" :key="item">{{item}}</Tag>
         </div>
      </div>
    </div>
    <div class="datails-item m-t10">
      <div class="fbox">
        <div class="datails-flex-item t-right"><h3>详情摘要:</h3></div>
        <div class="flex t-left">
           <div>
             <pre v-html = 'data.remark'></pre>
           </div>
        </div>
      </div>
    </div>
    <div class="datails-item m-t10">
      <div class="fbox">
        <div class="datails-flex-item t-right"><h3>详细内容:</h3></div>
        <div class="flex t-left">
          <div>
            <pre v-html = 'data.content'></pre>
          </div>
        </div>
      </div>
    </div>
    <!--新增表单承载标签-->
    <input-from v-if="inputForm.show" @changeOptions="getExmineVal" :options="inputForm.option" :value="inputForm.value" :modalDisabled="inputForm.modalDisabled" :modalshow="inputForm.modalshow"/>
  </div>
</template>

<script>
  import datailsItem from 'components/datails-item/index'
  import inputFrom from 'components/modal/inputFrom.vue'

  export default {
    name: 'index',
    data () {
      return {
        data: {},
        label: [],
        buttonName: '审核',
        inputForm: {
          show: false,
          modalDisabled: false,
          modalshow: false,
          option: {
            title: '审核',
            width: '512',
            opintions: [
              [
                {
                  title: '审核结果',
                  id: 'checked',
                  type: 'radio',
                  titlespan: 5,
                  colspan: 19,
                  required: true
                }
              ],
              [
                {
                  title: '首页推广',
                  id: 'recommend',
                  type: 'radio',
                  titlespan: 5,
                  colspan: 19,
                  required: true
                }
              ],
              [
                {
                  title: '审批意见',
                  id: 'checkedRemark',
                  type: 'textarea',
                  titlespan: 5,
                  colspan: 19,
                  required: false
                }
              ]
            ],
            button: [{
              type: 'primary',
              title: '确定',
              click: 'handle'
            }]
          },
          value: {
            checked: '1',
            recommend: '0',
            checkedRemark: ''
          }
        }
      }
    },
    components: {
      datailsItem,
      inputFrom
    },
    methods: {
      /**
       * 审核
       * @param row
       */
      exmine (row) {
        this.inputForm.modalshow = true
        this.inputForm.show = true
        this.inputForm.modalDisabled = false
        this.inputForm.value.id = row.id
      },

      getExmineVal (val, type) {
        this.inputForm.value = val // 表单填写的内容;
        if (type === 'cancel') { // 按钮操作
          this.inputForm.modalshow = false // 隐藏modal
          return
        }
        let newVal = {}
        Object.assign(newVal, val)
        this.inputForm.modalDisabled = true
        this.submitAjax('activitys', newVal, '审核')
      },
      /**
       * 提交表单
       * @param url
       * @param obj
       */
      submitAjax (url, obj, msg) {
        const _type = 'POST'
        this.requestAjax(_type, url, obj).then((data) => {
          if (data.success) {
            this.$Message.success(msg + '用户成功')
            this.inputForm.modalshow = false
            this.initItem()
          } else if (!data.message) {
            this.$Message.success(msg + '用户失败')
          }
          this.inputForm.modalDisabled = false
        },(err) => {
          this.$Message.success(msg + '用户失败')
          this.inputForm.modalDisabled = false
        })
      },
      initItem () {
        const _type = 'GET'
        const _params = {id: this.$route.query.id}
        const _url = 'activitys'
        this.requestAjax(_type, _url, _params).then((data) => {
          if (!data.message) {
            this.data = data.data.rows[0]
            this.label = this.data.label.split(',')
          }
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initItem()
      })
    }
  }
</script>

<style>
  .wrapper{margin: 10px}
  .datails-flex-item { display: inline-block; width: 100px; margin-right: 10px}
  .span-title{ font-weight: bold}
  .datails-item{position: relative; border: 1px solid #e3e2e5; padding: 10px; border-radius: 5px; line-height: 26px;}
  pre {
    white-space: pre-wrap; /*css-3*/
    white-space: -moz-pre-wrap; /*Mozilla,since1999*/
    white-space: -pre-wrap; /*Opera4-6*/
    white-space: -o-pre-wrap; /*Opera7*/
    word-wrap: break-word; /*InternetExplorer5.5+*/
  }
</style>

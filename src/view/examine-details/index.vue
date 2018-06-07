<template>
  <div  class="wrapper b wrapper-box">
    <div class="datails-item">
      <datails-item :row='data' :button="buttonName"  @exmine="exmine"></datails-item>
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
                  colspan: 7,
                  required: true
                },
                {
                  title: '是否强力推荐',
                  id: 'recommend',
                  type: 'radio',
                  titlespan: 5,
                  colspan: 7,
                  required: true
                }
              ],
              [
                {
                  title: '审批意见',
                  id: 'remark',
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
            checked: 'true',
            recommend: 'false',
            remark: ''
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
            this.loadTable()
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
 .datails-item{position: relative}
</style>

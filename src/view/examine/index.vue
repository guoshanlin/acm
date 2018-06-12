<template>
  <div class="wrapper b wrapper-box">
    <div style="position: relative">
      <Row type="flex" justify="end" class="search-wrapper">
        <i-col>
          <i-input class="width-letf" placeholder="请输入活动名称" v-model="keyWord"></i-input>
        </i-col>
        <i-col>
          <Button type="primary"  class="m-r15 m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
        </i-col>
      </Row>
      <Menu mode="horizontal" active-name="0" @on-select="menuSelect" class="menu-tab">
        <MenuItem name="0">待审核</MenuItem>
        <MenuItem name=">0">已通过</MenuItem>
        <MenuItem name="<0">未通过</MenuItem>
      </Menu>
      <div class="list-wrapper">
        <ul class="list">
          <li class="list-item" v-for="item in data" :key="item.id">
            <activity-item :row='item' :button="buttonName" @click="itemDetails" @exmine="exmine"></activity-item>
          </li>
        </ul>
      </div>
      <!--分页-->
      <div style="text-align: right; padding-top: 5px;">
        <Page show-total show-sizer show-elevator style="display: inline-block;" placement="top"
              :total="total"
              :page-size="parms.limit"
              :current="parms.offset"
              @on-change="changePage"
              @on-page-size-change="changeSize"></Page>
      </div>
      <!--新增表单承载标签-->
      <input-from v-if="inputForm.show" @changeOptions="getExmineVal" :options="inputForm.option" :value="inputForm.value" :modalDisabled="inputForm.modalDisabled"
                  :modalshow="inputForm.modalshow"/>
    </div>
  </div>
</template>

<script>
  import activityItem from 'components/activity-item/index'
  import inputFrom from 'components/modal/inputFrom.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
        keyWord: '',
        buttonName: '审核',
        data: [],
        total: 0,
        parms: {
        /*  sort: 'createTime',*/
          status: 0,
          limit: 20,
          offset: 1
        },
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
                  id: 'importance',
                  type: 'radio',
                  titlespan: 5,
                  colspan: 19,
                  required: true
                }
              ],
              [
                {
                  title: '审批意见',
                  id: 'reviewRemark',
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
            importance: '0',
            reviewRemark: ''
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    components: {
      activityItem,
      inputFrom
    },
    methods: {
      /**
       *跳页
       * @param v
       */
      changePage (v) {
        this.parms.offset = v
        this.initItem()
      },
      /**
       *改变页面展示用户条数
       * @param v
       */
      changeSize (v) {
        this.parms.limit = v
        this.initItem()
      },
      /**
       * 切换tab
       * @param name
       */
      menuSelect (name) {
        this.parms.status = name
        this.initItem()
      },
      searchDriver () {
        this.parms.keyWord = this.keyWord
        this.initItem()
      },
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
        newVal.status = newVal.checked
        newVal.checked = null
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
          } else if (!data.message) {
            this.$Message.success(msg + '用户失败')
          }
          this.inputForm.modalDisabled = false
        },(err) => {
          this.$Message.success(msg + '用户失败')
          this.inputForm.modalDisabled = false
        })
      },
      /**
       * 查看详情
       * @param row
       */
      itemDetails (row) {
        this.routePush('/examineDetails', row.id)
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
    mounted () {
      this.$nextTick(() => {
        this.parms.memberId = this.userData.id
        this.initItem()
        document.querySelector('.ivu-page-options-elevator').title = '输入后回车跳至指定页'
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.initItem()
        }, 60 * 1000)
      })
    }
  }
</script>

<style>
  .wrapper{margin: 10px}
  .search-wrapper{
    position: absolute;
    top: 10px;
    right: 0px;
    z-index: 901;
  }
.list-wrapper{margin: 10px 0;}
.list-item{
  position: relative;
  border: 1px solid #e3e2e5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

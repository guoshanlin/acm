<template>
  <div>
    <Affix :offset-top="10" style="padding:5px 0px;">
      <Row type="flex" :gutter=5>
        <!--<列表导栏>-->
        <i-col span="12">
          <Row type="flex" justify="start">
            <i-col>
              <Button type="primary" @click="addOrModify">新增</Button>
              <Button type="primary" @click="addOrModify">导入</Button>
<!--              <Button type="warning" " @click="deleteAll">删除</Button>-->
            </i-col>
          </Row>

        </i-col>
        <i-col span="12">
          <Row type="flex" justify="end">
            <i-col>
              <i-input class="width-letf" placeholder="关键字" v-model="keyWord"></i-input>
            </i-col>
            <i-col>
              <Button type="primary"  class="m-r15 m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </Affix>
    <!--table列表-->
    <i-table :columns="columns" :data="data" border size="small" ref="table" :height="height" @on-sort-change="sortChange" @on-selection-change="selectTable" :no-data-text="loading" @on-row-dblclick="rowDbClick"></i-table>
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
    <input-from v-if="inputForm.show" @changeOptions="getInputVal" :options="inputForm.option" :value="inputForm.value" :modalDisabled="inputForm.modalDisabled"
                :modalshow="inputForm.modalshow"/>
  </div>
</template>
<script type="es6">
 import inputFrom from 'components/modal/inputFrom.vue'
  export default {
    destroyed () {
      window.onresize = function () {
      }
      clearInterval(this.timer)
      this.destroyALLScroll()
    },
    data () {
      return {
        height: '' + (document.body.offsetHeight - 325),
        columns: [
          {title: '姓名', key: 'name', width: 120, sortable: false},
          {title: '昵称', key: 'nickName', width: 100, sortable: false},
          {title: '性别',
            key: 'sex',
            width: 80,
            sortable: false,
            render: (h, params) => {
              return h('div', {
                'class': 'td-render',
                domProps: {
                  title: params.row[params.column.key] === 1 ? '男' : '女'
                },
                style: {
                  cursor: 'pointer'
                }
              }, params.row[params.column.key] === 1 ? '男' : '女')
            }},
          {title: '手机', key: 'phone', width: 160, sortable: false},
          {title: '邮箱', key: 'email', width: 170, sortable: false},
          {title: '微信', key: 'wechat', width: 160, sortable: false},
          {title: '身份证',
            key: 'cardNumber',
            width: 160,
            sortable: false,
            render: (h, params) => {
              return this.tdRender(h, params)
            }},
          {title: '地址',
            key: 'address',
            width: 160,
            sortable: false,
            render: (h, params) => {
              return this.tdRender(h, params)
            }},
          {title: '公司', key: 'company', width: 160, sortable: false},
          {title: '职位', key: 'position', width: 120, sortable: false},
          {title: '是否会员',
            key: 'level',
            width: 100,
            sortable: false,
            render: (h, params) => {
              return this.tdRender(h, params)
            }},
          {title: '渠道',
            key: 'channel',
            width: 80,
            sortable: false,
            render: (h, params) => {
              return this.tdRender(h, params)
            }},
          {title: '操作',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  style: {marginRight: '5px'},
                  props: {type: 'primary', size: 'small'},
                  nativeOn: {
                    click: () => {
                      this.addOrModify(params.row, '修改')
                    }
                  }
                }, '修改'),
                h('Button', {
                  style: {marginRight: '5px'},
                  props: {type: 'warning', size: 'small'},
                  nativeOn: {
                    click: () => {
                      this.confirmDelete(params.row.id) // sys/deleteStudentInfo
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [],
        total: 0,
        keyWord: '',
        parms: {
          keyWord: '',
          limit: 20,
          offset: 1
        },
        selectRows: '',
        loading: '',
        clickType: '',
        inputForm: {
          show: false,
          modalDisabled: false,
          modalshow: false,
          option: {},
          value: {}
        }, // 表单参数
        tableDetails: {
          show: false,
          modalshow: false,
          option: {}
        }, // 详情参数
        timer: {}
      }
    },
    computed: {},
    components: {
       inputFrom
    },
    methods: {
      /**
       *双击表格列时触发
      */
      rowDbClick (row) {
        this.rowDetails(row)
      },
      /**
       *加载table数据
       */
      loadTable () {
        this.loading = '数据加载中...请稍等！'
        const _type = 'GET'
        const _params = this.parms
        const _url = 'members'
        this.requestAjax(_type, _url, _params).then((data) => {
          if (!data.message) {
            console.log(data)
            this.total = !isNaN(+data.data.total) ? +data.data.total : 0
            this.loading = '暂无数据'
            this.data = data.data.rows
          }
        })
      },
      /**
       *跳页
       * @param v
       */
      changePage (v) {
        this.parms.offset = v
        this.loadTable()
      },
      /**
       *改变页面展示用户条数
       * @param v
       */
      changeSize (v) {
        this.parms.limit = v
        this.loadTable()
      },
      /**
       *排序
       * @param obj
       */
      sortChange (obj) {
        this.parms.sort = obj.key
        this.parms.order = obj.order
        this.loadTable()
      },
      /**
       * 模糊查询
       *
       */
      searchDriver () {
        this.parms.keyWord = this.keyWord
        this.parms.limit = 20
        this.parms.offset = 1
        this.loadTable()
      },
      /**
       * 监听事件table选中事件
       */
      selectTable (val) {
        this.selectRows = val
      },

      /**
       *查看详情
       */
      rowDetails (row) {
        this.tableDetails.show = true
        this.tableDetails.modalshow = true
        this.tableDetails.option = {
          title: '用户详情',
          width: '768',
          tabPane: false,
          uEditor: false,
          rowId: '',
          opintions: [
            [
              {title: '账号', value: row.userName, show: true, type: ''},
              {title: '名称', value: row.name, show: true, type: ''}
            ],
            [
              {title: '固定电话', value: row.tel, show: true, type: ''},
              {title: '状态', value: this.getUserStatus(row.status), show: true, type: ''}
            ],
            [
              {title: '类型', value: this.getUserType(row.type), show: true, type: ''},
              {title: '微信', value: row.wechat, show: true, type: ''}
            ],
            [
              {title: '职责', value: this.getUserRole(row.role), show: true, type: ''},
              {title: '部门', value: row.depart, show: true, type: ''}
            ],
            [
              {title: '手机', value: row.mobilePhone, show: true, type: ''},
               {title: '', value: '', show: true, type: ''}
            ],
            [
              {title: '邮箱', value: row.email, show: true, type: '', colspan: 3}
            ],
            [
              {title: '备注', value: row.memo, show: true, type: '', colspan: 3}
            ]
          ],
          button: [
//                        {type: 'primary', title: '提交', click: 'handle'}
          ]
        }
      },
      /**
       *隐藏详情
       */
      tableDetailsMethods (val) {
        this.tableDetails.modalshow = false
      },
      /**
       *新增或修改用户
       */
      addOrModify (row, type) {
        let _b = false
        if (type === '修改') {
          this.clickType = '修改'
          _b = true
        } else {
          this.clickType = '新增'
        }
        this.inputForm.modalshow = true
        this.inputForm.show = true
        this.inputForm.modalDisabled=false
        this.inputForm.option = {
          title: _b ? '修改用户' : '新增用户',
          width: '768',
          opintions: [
            [
              {
                title: '账号',
                id: 'userName',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: true
              },
              {
                title: '姓名',
                id: 'name',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: true
              }
            ],
            [
              {
                title: '邮箱',
                id: 'email',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: false,
                valueType: 'email'
              },
              {
                title: '手机',
                id: 'mobilePhone',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: false,
                valueType: 'mobilePhone'
              }
            ],
            [
              {
                title: '微信',
                id: 'wechat',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: false
              },
              {
                title: '状态',
                id: 'status',
                type: 'select',
                titlespan: 3,
                colspan: 9,
                required: false,
                relation: ''
              }
            ],
            [
              {
                title: '类型',
                id: 'type',
                type: 'select',
                titlespan: 3,
                colspan: 9,
                relation: '',
                required: false
              },
              {
                title: '固定电话',
                id: 'tel',
                type: 'input',
                titlespan: 3,
                colspan: 9,
                required: false,
                valueType: 'telephone'
              }
            ],
            [
              {
                title: '备注',
                id: 'memo',
                type: 'textarea',
                titlespan: 3,
                colspan: 21,
                rowsNub: 3,
                required: false
              }
            ]
          ],
          button: [{
            type: 'primary',
            title: _b ? '修改' : '提交',
            click: 'handle'
          }]

        }
        this.inputForm.value = {
          userName: _b ? row.userName : '',
          name: _b ? row.name : '',
          email: _b ? row.email : '',
          mobilePhone: _b ? row.mobilePhone : '',
          wechat: _b ? row.wechat : '',
          status: _b ? '' + row.status : '0',
          type: _b ? '' + row.type : '1',
          tel: _b ? '' + row.tel : '',
          memo: _b ? row.memo : ''
        }
        if (_b) {
          this.inputForm.value.id = row.id
        }
      },
      /**
       *提交返回处理方法
       * @param val
       * @param type
       */
      getInputVal (val, type) {
        this.inputForm.value = val // 表单填写的内容;
        if (type === 'cancel') { // 按钮操作
          this.inputForm.modalshow = false // 隐藏modal
          return
        }
        let newVal = {}
        Object.assign(newVal, val)
        this.inputForm.modalDisabled = true
        switch (this.clickType) {
          case '新增':
          case '修改':
            this.submitAjax('members', newVal)
            break
          default:
        }
      },
      /**
       * 提交表单
       * @param url
       * @param obj
       */
      submitAjax (url, obj) {
        const _type = 'POST'
        this.requestAjax(_type, url, obj, (res) => {
          this.submitAjaxThen(res)
        })
      },
      /**
       * 提交完成后处理方法
       * @param res
       */
      submitAjaxThen (res) {
        if (res.data.success) {
          this.$Message.success(this.clickType + '用户成功')
          this.inputForm.modalshow = false
          this.loadTable()
        } else if (!res.data.message) {
          this.$Message.success(this.clickType + '用户失败')
        }
        this.inputForm.modalDisabled = false
      },
      /**
       * 批量删除
       */
      deleteAll () {
        if (this.selectRows === '' || this.selectRows.length === 0) {
          this.$Message.error('请选择要删除的用户')
          return
        }
        let id = []
        this.selectRows.forEach((item) => {
          id.push(item.id)
        })
        id = id.join(',')
        this.confirmDelete(id)
      },
      /**
       * 删除前提示
       * @param row
       */
      confirmDelete (id) {
        this.$Modal.confirm({
          title: '提示信息',
          content: '是否确认删除操作？',
          onOk: () => {
            this.deleteUserInfo(id)
          },
          onCancel: () => {

          }
        })
      },
      /**
       * 删除功能
       * @param row
       */
      deleteUserInfo (id) {
        const _type = 'DELETE'
        const _url = 'deleteUsers'
        const _params = {}
        this.requestAjax(_type, _url, _params, (res) => {
          if (res.data.success) {
            this.$Message.success('删除成功')
            this.loadTable()
          } else {
            this.$Message.error('删除失败')
          }
        }, id)
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.onresize = () => {
          this.height = '' + (document.body.offsetHeight - 325)
        //  this.initAllTableScroll()
        }
        this.loadTable()
      //  this.initAllTableScroll()
        document.querySelector('.ivu-page-options-elevator').title = '输入后回车跳至指定页'
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.loadTable()
        }, 60 * 1000)
      })
    }
  }
</script>

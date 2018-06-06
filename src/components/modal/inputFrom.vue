<!--
表单组件
-->
<style>
  .inputForm .ivu-col{margin-top:5px;margin-bottom: 5px;}
  .inputForm .ivu-col p{line-height: 30px}
  .talbeDetails .td{padding-left: 6px;  border: 1px solid #cccccc;}
  .talbeDetails .td-c{background-color: #F0F0EE;}
</style>
<template>
  <Modal
    :title="options.title"
    v-model="isShowModal"
    :mask-closable="false"
    @on-cancel="cancel"
    class-name="vertical-center-modal inputForm bottom" :width="options.width">
    <div>
      <div v-for="(row ,index) in options.opintions" :key="index">
        <Row :gutter=5>
           <div  v-for="rows in row" :key="rows.title">
              <i-col :span="rows.titlespan">
                <p class="width-right m-l10">{{rows.title}}:</p>
              </i-col>
              <i-col :span="rows.colspan">

                <InputNumber style="width: 100%" v-if="rows.type=='InputNumber'" :max="rows.max" :min="rows.min"
                             :placeholder="rows.required ? '请输入...(必填）':'请输入...'"
                             v-model="fromVal[rows.id]"></InputNumber>

                <InputNumber style="width: 100%" v-if="rows.type=='InputNumberPercent'" :max="maxIpnut[rows.id]"
                             :min="rows.min" :placeholder="rows.required ? '请输入...(必填）':'请输入...'"
                             v-model="fromVal[rows.id]"></InputNumber>

                <i-input type="text" v-if="rows.type=='input'"
                       :placeholder="rows.required ? '请输入...(必填）':'请输入...'"
                       v-model="fromVal[rows.id]"
                       :disabled="rows.disabled"
                       :maxlength="rows.maxLength!=undefined ? rows.maxLength: 50"></i-input>

                <i-input v-if="rows.type=='textarea'"
                       v-model="fromVal[rows.id]"
                       type="textarea"
                       :rows="rows.rowsNub"
                       :placeholder="rows.required ? '请输入...(必填）':'请输入...'"></i-input>

                <Dropdown v-if="rows.type=='dropDown'" trigger="click" style="width: 100%"
                          @on-click="clickDropDown(arguments[0], rows.id)">
                  <i-input type="text" placeholder="请输入或选择类型..." v-model="fromVal[rows.id]" :maxlength="10"></i-input>
                  <DropdownMenu slot="list">
                    <DropdownItem v-for="item in select[rows.id]" :name="item.value" :key="item.value">{{item.label }}&nbsp;({{item.value
                      }})
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Select v-if="rows.type=='select'&& rows.relation!=''"
                        v-model="fromVal[rows.id]"
                        :placeholder="rows.required ? '请选择(必选）':'请选择'"
                        :disabled="rows.disabled"
                        @on-change="selectChange(arguments[0], rows.relation)"
                        :filterable="rows.filterable"
                        :placement="placement">
                  <Option v-for="item in select[rows.id]" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>

                <Select v-if="rows.type=='select'&& rows.relation==''"
                        v-model="fromVal[rows.id]"
                        :placeholder="rows.required ? '请选择(必选）':'请选择'"
                        :disabled="rows.disabled"
                        :id="rows.id"
                        :filterable="rows.filterable"
                        :placement="placement">
                  <Option v-for="item in select[rows.id]" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>

                <div v-if="rows.type=='radio'" style="height: 32px;padding: 5px">
                  <RadioGroup v-model="fromVal[rows.id]" size="large">
                    <Radio v-for="item in radios[rows.id]" :label="item.value" :key="item.value">{{item.name}}</Radio>
                  </RadioGroup>
                </div>
                <div v-if="rows.type=='checkbox'" style="height: 32px;padding: 5px">
                  <CheckboxGroup v-model="fromVal[rows.id]">
                    <Checkbox v-for="item in checkboxes[rows.id]" :label="item.value" :key="item.value"></Checkbox>
                  </CheckboxGroup>
                </div>
                <Select v-if="rows.type=='selectMultiple'"
                        multiple
                        v-model="fromVal[rows.id]"
                        :placeholder="rows.required ? '请选择(可多选,必选)':'请选择(可多选)'"
                        :filterable="rows.filterable"
                        @on-change="selectChange(arguments[0], rows.relation)"
                        :placement="placement">
                  <Option v-for="item in select[rows.id]" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>

                <Date-picker v-if="rows.type=='time'"
                             :value="fromVal[rows.id]"
                             type="datetime"
                             format="yyyy-MM-dd HH:mm:ss"
                             :placeholder="rows.required ? '请选择日期和时间(必选）':'请选择日期和时间'"
                             style="width:100%"
                             @on-change="handleChange(arguments[0], rows.id)"
                             :editable="editable"
                             @on-clear="handleChange('clear', rows.id)">

                </Date-picker>
              </i-col>
            </div>
        </Row>
      </div>
    </div>
    <div slot="footer">
      <Button type="ghost" @click="cancel">取消</Button>
      <Button v-for="item in options.button" :type="item.type" @click="handle(item.click)" :disabled="disabledButton" :key="item.title">{{item.title}}</Button>
    </div>
  </Modal>
</template>
<script type="es6">
  export default {
    data () {
      return {
        clear: false,
        editable: false,
        labelInValue: true,
        disabledButton: this.modalDisabled,
        isShowModal: this.modalshow,
        opinions: '',
        messages: '',
        placement: 'bottom',
        select: {
          sex: [
            {
              value: '1',
              label: '男'
            },
            {
              value: '2',
              label: '女'
            }
          ],
          type: [
            {
              value: '0',
              label: '个人'
            },
            {
              value: '1',
              label: '企业'
            }
          ],
          channel: [
            {
              value: '0',
              label: '人工创建'
            },
            {
              value: '1',
              label: 'EXCEL导入'
            },
            {
              value: '2',
              label: '微信生成'
            },
            {
              value: '3',
              label: '邀请生成'
            }
          ],
          level: [
            {
              value: '0',
              label: '非会员'
            },
            {
              value: '1',
              label: '会员'
            }
          ]
        },
        radios: {
          check: [
            {value: 'true', name: '是'},
            {value: 'false', name: '否'}
          ]
        },
        checkboxes: {
          check: [
            {value: 'true', name: '是'},
            {value: 'false', name: '否'}
          ]
        },
        timer: '',
        fromVal: this.value,
        parentIdRow: ''
      }
    }, // 参数
    mounted () {
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.initSelect()
      })
    }, // 数据加载前触发
    props: {
      modalshow: '',
      options: '',
      value: '',
      modalDisabled: ''
    },
    watch: {
      /**
       *实时监控modals显示影藏传值是否变动
       * @param val
       */
      modalshow (val) {
        this.isShowModal = val // 新增modalshow的watch，监听变更并同步到isShowModal上
        if (val) {
          this.disabledButton = false
        }
      },

      /**
       *绑定modal显示参数，与父组件同步
       * @param val
       */
      value (val) {
        this.fromVal = val // 新增modalshow的watch，监听变更并同步到isShowModal上
        this.initSelect()
      },

      modalDisabled (val) {
        this.disabledButton = val
      }
    },
    computed: {},
    methods: {
      initSelect () {
        for (let test in this.options.selectAjax) {
          let newRow = this.options.selectAjax[test]
          switch (newRow) {
            case 'parentId': // 父对象
              break
            default:
          }
        }
        this.initModalSelectScroll()
        this.initModalScroll()
      },

      /**
       *点击下拉菜单触发事件
       */
      clickDropDown (name, id) {
        this.fromVal[id] = name
      },

      /**
       *点击自定义按钮时触发
       * @param event
       */
      handle (event) {
        let nonEmpty = true
        for (let item of this.options.opintions) {
          let itemFor = true
          for (let v of item) {
            if (v.required && this.fromVal[v.id] === '') {
              this.$Message.error(v.title + '不能为空')
              nonEmpty = false
              itemFor = false
              break
            }
            if (v.valueType !== undefined && this.fromVal[v.id] !== '') {
              let testValue = false
              // 验证ip格式
              if (v.valueType === 'ip') { // 验证ip格式
                let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
                if (!reg.test(this.fromVal[v.id])) {
                  testValue = true
                }
              }
              // 验证固定电话格式
              if (v.valueType === 'telephone') {
                let regPhone = /^(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{7}$)|(^0\d2-?\d{8}$)|(^0\d3-?\d{7}$)$/
                if (!regPhone.test(this.fromVal[v.id])) {
                  testValue = true
                }
              }
              // 验证手机号格式
              if (v.valueType === 'mobilePhone') {
                let regMobile = /^1[3,5,8]\d{9}$/
                if (!regMobile.test(this.fromVal[v.id])) {
                  testValue = true
                }
              }
              // 验证手机号格式
              if (v.valueType === 'idCard' && !this.testId(this.fromVal[v.id])) {
                  testValue = true
              }
              // 验证邮箱格式
              if (v.valueType === 'email') {
                let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (!regEmail.test(this.fromVal[v.id])) {
                  testValue = true
                }
              }
              if (testValue) {
                this.$Message.error(v.title + '输入格式不合理')
                this.fromVal[v.id] = ''
                nonEmpty = false
                itemFor = false
                break
              }
            }
          }
          if (!itemFor) {
            break
          }
        }
        if (nonEmpty) {
          this.disabledButton = true
          this.$emit('changeOptions', this.fromVal) // 双向绑定传值
        }
      },

      /**
       *点击取消时触发
       */
      cancel () {
        this.$emit('changeOptions', this.fromVal, 'cancel')
      },

      /**
       *时间处理
       * @param date
       * @param id
       * @param children
       */
      handleChange (date, id, children) {
        if (date !== 'clear') {
          if (children) {
            this.fromVal[id][children] = date
          } else {
            this.fromVal[id] = date + ' 00:00:00'
          }
        } else {
          this.fromVal[id] = ''
        }
      },

      /**
       *下拉改变是触发中转站
       * @param val
       * @param relation
       */
      selectChange (val, relation) {
        this.loadSelect(val, relation)
      },

      /**
       * 下拉数据关联变动处理并调用对应的请求
       * @param name
       * @param relation
       * @param change
       */
      loadSelect (name, relation) {
        switch ('' + relation) {
          case 'typeObj': // 新增对象类型
            break
          default:
        }
      },
      /**
       * 百分比填写时限制
       * @param value
       * @param id
       * @param percentId
       */
      percentCheckboxChange (value, id, percentId) {
        if (value) {
          this.maxIpnut[id] = 100
          if (this.fromVal[id] > 100) {
            this.fromVal[id] = 100
          }
          this.fromVal[percentId] = 1
        } else {
          this.maxIpnut[id] = Infinity
          this.fromVal[percentId] = 0
        }
      },
      /**
       * 验证身份证
       * @param idCard
       * @returns {*}
       */
      testId (idCard) {
        // 15位和18位身份证号码的正则表达式
        let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

        // 如果通过该验证，说明身份证格式正确，但准确性还需计算
        if (regIdCard.test(idCard)) {
          if (idCard.length === 18) {
            let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2) // 将前17位加权因子保存在数组里
            let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2) // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
            let idCardWiSum=0 // 用来保存前17位各自乖以加权因子后的总和
            for (let i = 0; i < 17; i++) {
              idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i]
            }

            let idCardMod = idCardWiSum % 11 // 计算出校验码所在数组的位置
            let idCardLast = idCard.substring(17) // 得到最后一位身份证号码

            // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod === 2) {
              if (idCardLast === 'X' || idCardLast === 'x') {
                return true
              } else {
                return false
              }
            } else {
              // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
              if (idCardLast === idCardY[idCardMod]) {
                return true
              } else {
                return false
              }
            }
          }
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

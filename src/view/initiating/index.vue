<template>
  <div class="initiating wrapper-box b">
     <div class="initiating-form-item">
        <h3 class="t-left">基本信息</h3>
         <div>
         <!--  <div class="form-group">
             <div class="float-l form-title">
               <div>活动类型:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <RadioGroup v-model="fromVal.type">
                   <Radio label="exhibition">展会</Radio>
                   <Radio label="activity">活动</Radio>
                 </RadioGroup>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>-->
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>活动标题:</div>
             </div>
             <div class="float-r form-fill">
               <div>
                 <i-input type="text" placeholder="活动标题(不少于5个字)" v-model="fromVal.title"></i-input>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>活动地点:</div>
             </div>
             <div class="float-r form-fill">
               <div>
                 <Row>
                   <i-col span="5">
                     <Select v-model="fromVal.address.province"   @on-change="cityChange" placeholder="请选择省" filterable>
                        <Option v-for="item in select.province" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </i-col>
                   <i-col span="5">
                     <Select v-model="fromVal.address.city" placeholder="请选择市区" filterable>
                       <Option v-for="item in select.city" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </i-col>
                   <i-col span="14">
                     <i-input type="text" placeholder="请输入详细地址" v-model="fromVal.address.area"></i-input>
                   </i-col>
                 </Row>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>活动时间:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <!--     applyBeginTime: '',
              applyEndTime: '',
              beginTime: '',
              endTime: '',-->
                 <Row>
                   <i-col span="12">
                     <DatePicker v-model="fromVal.beginTime" class="full-width" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="活动开始时间 "></DatePicker>
                   </i-col>
                   <i-col span="12">
                     <DatePicker v-model="fromVal.endTime" class="full-width" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="活动结束时间"></DatePicker>
                   </i-col>
                 </Row>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>报名截止时间:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <Row>
                   <i-col span="12">
                 <DatePicker v-model="fromVal.applyBeginTime" class="full-width" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="报名开始时间"></DatePicker>
                   </i-col>
                   <i-col span="12">
                 <DatePicker v-model="fromVal.applyEndTime" class="full-width" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="报名结束时间"></DatePicker>
                   </i-col>
                 </Row>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>活动人数:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left" title="最多允许的人数,0不限制参与人数">
                 <InputNumber class="full-width" v-model="fromVal.number" placeholder="最多允许的人数,0不限制参与人数" :min="0"></InputNumber>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div>活动海报:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-center">
                   <Row type="flex" class="code-row-bg">
                     <i-col :span="16">
                        <div class="container-img" v-html="imgHtml"></div>
                     </i-col>
                     <i-col :span="8">
                        <div class="upload">
                          <div class="p-t100">
                            <Upload :action="getWbkUrl('upload')" :before-upload="handleUpload">
                              <Button type="primary" icon="ios-cloud-upload-outline">上传</Button>
                            </Upload>
                          </div>
                          <div class="m-t30">
                            <p class="fz12 l-h20 t-left t-indent">
                              一张漂亮的海报，能让你的活动锦上添花，带来更多用户报名 及增加传播效果，也将影响其在其他渠道被推荐的几率！
                            </p>
                          </div>
                        </div>
                     </i-col>
                   </Row>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
<!--           <div class="form-group">
             <div class="float-l form-title">
               <div>所属行业:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <RadioGroup v-model="fromVal.industry" type="button" size="small">
                   <Radio v-for="item in radio.industry" :label="item" :key="item" :value="item"></Radio>
                 </RadioGroup>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>-->
           <div class="form-group">
             <div class="float-l form-title">
               <div>活动分类:</div>
             </div>
             <div class="float-r form-fill">
                <div class="t-left" v-for="item in radio.classify" :key="item.title">
                  <Row type="flex" justify="center" align="top" class="code-row-bg">
                   <i-col span="2">
                       <div>{{item.title}}:</div>
                   </i-col>
                   <i-col span="22">
                     <RadioGroup v-model="fromVal.classify" type="button" size="small">
                       <Radio v-for="value in item.radio" :label="value" :key="value" :value="value"></Radio>
                     </RadioGroup>
                   </i-col>
                 </Row>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div>活动标签:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <Select v-model="fromVal.tag" multiple class="full-width" @on-change="tagChange"  placeholder="请选择标签(最多可选择5个)">
                   <Option v-for="item in select.tag" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>活动摘要:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                 <i-input v-model="fromVal.abstract" type="textarea" :rows="4" placeholder="请填写活动摘要"></i-input>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
           <div class="form-group">
             <div class="float-l form-title">
               <div><span class="red">*</span>详细内容:</div>
             </div>
             <div class="float-r form-fill">
               <div class="t-left">
                    <i-ueditor :value=uEditorOptions.defaultMsg :config=uEditorOptions.config @getValue="getVal"></i-ueditor>
               </div>
             </div>
             <div class="clearFix"></div>
           </div>
  <!--         <div class="form-group t-center save-button">
             <Button type="success">保存信息</Button>
           </div>-->
         </div>
     </div>
<!--     <div class="initiating-form-item registration-tip" v-if="!registrationForm" @click="registrationForm = true">
        <h3 class="t-left">设置报名表单</h3>
       <div>
          如果您需要收集报名者的必要信息，可添加此项设置<Icon type="plus-circled"></Icon>
       </div>
     </div>-->
    <div class="initiating-form-item" v-if="registrationForm">
      <h3 class="t-left">设置报名表单</h3>
      <div>
        <i-form @on-hide="registrationForm = false" @save-from="saveFrom"></i-form>
      </div>
    </div>
     <div class="initiating-form-item">
        <h3 class="t-left">设置活动票种</h3>
       <div>
          <i-species ref="species" @save-ticket="saveTicket"></i-species>
       </div>
     </div>
     <div class="form-sub">
         <Row type="flex" justify="center" class="code-row-bg">
           <i-col><i-button type="primary" @click="release" :disabled="disabled">发布</i-button></i-col>
        <!--   <i-col><i-button>存草稿</i-button></i-col>-->
        <!--   <i-col><i-button>预览</i-button></i-col>-->
         </Row>
     </div>
  </div>
</template>

<script>
  import iUeditor from 'components/modal/ueditor.vue'
  import iForm from 'components/registration-form/index.vue'
  import iSpecies from 'components/ticket-species/index.vue'
  import {mapGetters} from 'vuex'

  import locationData from 'js/address/location'
  export default {
    name: 'index',
    data () {
      const province = []
      let cityObj = {}
      for (let code in locationData) {
        let item = locationData[code]
        province.push(Object.assign({}, {label: item.name, value: item.name}))
        let cityList = item.cities
         cityObj[item.name] = []
          if (Object.keys(cityList).length === 1) {
              for (let key in cityList) {
                for (let _key in cityList[key].districts) {
                  cityObj[item.name].push(Object.assign({}, {label: cityList[key].districts[_key], value: cityList[key].districts[_key]}))
                }
              }
          } else {
            for (let key in cityList) {
              cityObj[item.name].push(Object.assign({}, {label: cityList[key].name, value: cityList[key].name}))
            }
          }
      }
      return {
    //    imgHtml: '<div style="height:300px; line-height: 300px" class="c3">图片格式为1080 * 640px，大小不超过2M</div>',
        imgHtml: '<div style="height:300px; line-height: 300px" class="c3">大小不超过2M</div>',
        fromVal: {
          type: 'exhibition',
          title: '',
          address: {
            province: '广东省',
            city: '深圳市',
            area: ''
          },
          posterUrl: '',
          number: 0,
          applyBeginTime: '',
          applyEndTime: '',
          beginTime: '',
          endTime: '',
          applyTime: [],
          time: [],
          industry: '不限',
          classify: '',
          tag: [],
          abstract: '',
          detailedContent: ''
        },
        select: {
          province: province,
          city: cityObj['广东省'],
          tag: [
            {value: '移动互联网', label: '移动互联网'},
            {value: '创新', label: '创新'},
            {value: '慈善', label: '慈善'},
            {value: '环保', label: '环保'},
            {value: '分享会', label: '分享会'},
            {value: '志愿者', label: '志愿者'},
            {value: '分享', label: '分享'},
            {value: '讲座', label: '讲座'},
            {value: '公开课', label: '公开课'},
            {value: '课程', label: '课程'},
            {value: '培训', label: '培训'},
            {value: '英语', label: '英语'},
            {value: '口才', label: '口才'},
            {value: '沙龙', label: '沙龙'},
            {value: '聚会', label: '聚会'},
            {value: '论坛', label: '论坛'},
            {value: '会议', label: '会议'},
            {value: '交流', label: '交流'},
            {value: '展览', label: '展览'},
            {value: '摄影', label: '摄影'},
            {value: '展会', label: '展会'},
            {value: '创意', label: '创意'},
            {value: '艺术', label: '艺术'},
            {value: '文学', label: '文学'},
            {value: '文化', label: '文化'},
            {value: '活动', label: '活动'},
            {value: '儿童', label: '儿童'},
            {value: '演讲', label: '演讲'},
            {value: '融资', label: '融资'},
            {value: '理财', label: '理财'},
            {value: '媒体', label: '媒体'},
            {value: '免费', label: '免费'},
            {value: '休闲', label: '休闲'},
            {value: '音乐会', label: '音乐会'},
            {value: '演唱会', label: '演唱会'},
            {value: '舞台剧', label: '舞台剧'},
            {value: '首映', label: '首映'},
            {value: '开幕式', label: '开幕式'},
            {value: '发布会', label: '发布会'},
            {value: '女性', label: '女性'},
            {value: '演出', label: '演出'},
            {value: '广告', label: '广告'},
            {value: '母婴', label: '母婴'},
            {value: '商务', label: '商务'},
            {value: '社交', label: '社交'},
            {value: '生活', label: '生活'},
            {value: '娱乐', label: '娱乐'},
            {value: 'TEDx', label: 'TEDx'},
            {value: '博物馆', label: '博物馆'},
            {value: '沟通', label: '沟通'},
            {value: '一起吃饭', label: '一起吃饭'},
            {value: '运动游玩', label: '运动游玩'},
            {value: '单身', label: '单身'},
            {value: '约妹子', label: '约妹子'},
            {value: '大数据', label: '大数据'},
            {value: '微营销', label: '微营销'},
            {value: '创客', label: '创客'},
            {value: '私密圈子', label: '私密圈子'},
            {value: '育儿', label: '育儿'},
            {value: '管理', label: '管理'},
            {value: '心理学', label: '心理学'},
            {value: '其他', label: '其他'}
          ]
        },
        city: cityObj,
        radio: {
          industry: ['不限', 'IT互联网', '金融', '制造业', '医疗卫生', '文娱', '服务业', '教育', '交通运输', '地产', '能源', '农林渔牧', '其他'],
           classify: [
              {title: '行业', radio: ['IT互联网', '创业', '科技', '金融','游戏','文娱','电商','教育','营销','设计','地产','医疗','服务业']},
              {title: '生活', radio: ['演出', '文艺', '手工', '公益','户外出游','运动健康','聚会交友','休闲娱乐','投资理财','时尚','心理','体育赛事']},
              {title: '亲子', radio: ['儿童才艺', '益智潮玩', '儿童剧/展览','亲子旅游','早教/升学']},
              {title: '学习', radio: ['课程', '读书', '职场','社团','讲座']}
            ]
        },
        uEditorOptions: {
          defaultMsg: '',
          config: {
            initialFrameWidth: null,
            initialFrameHeight: 300
          }
        },
        registrationForm: false,
        dataFile: '',
        msgTip: {
          name: {msg: '活动名称不能为空', required: true},
          content: {msg: '详细内容不能为空', required: true},
          count: {msg: '参与人数不能为空', required: true},
          isNeedPay: {msg: '是否付费', required: true},
          address: {msg: '请设置活动地址', required: true},
          applyBeginTime: {msg: '请选择报名开始时间', required: true},
          applyEndTime: {msg: '请选择报名结束时间', required: true},
          beginTime: {msg: '请选择活动开始时间', required: true},
          endTime: {msg: '请选择活动结束时间', required: true},
          remark: {msg: '活动摘要不能为空', required: true}
       },
        disabled: false
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    components: {
      iUeditor,
      iForm,
      iSpecies
    },
    methods: {
      getVal (val) {
        this.fromVal.detailedContent = val
      },
      saveFrom (val) {
        console.log('保存设置表单内容')
        this.registrationForm = false
      },
      cityChange (val) {
        this.fromVal.address.city = ''
        this.select.city = this.city[val]
      },
      tagChange (val) {
        if (val.length >= 5) {
          this.fromVal.tag = val.slice(0, 5)
        }
      },
      saveTicket (val) {

      },
      release () {
        const ticket = this.$refs.species.getTicketData()
        const _params = {
          type: '活动',
          name: this.fromVal.title, // 活动名称
          demand: '', // 活动要求
          content: this.fromVal.detailedContent, // 活动内容
          count: this.fromVal.number, // 人数
          isNeedPay: ticket[0].type === ' free' ? 0 : 1, // 是否付费【1付费，0免费】
          mbPrice: ticket[0].type === ' free' ? '' : ticket[0].vPrice, // 会员价格
          nonMBPrice: ticket[0].type === ' free' ? '' : ticket[0].price, // 非会员价格
          address: this.fromVal.address.province + this.fromVal.address.city + this.fromVal.address.area, // 地址
          posterUrl: this.fromVal.posterUrl, // 海报url
          applyBeginTime: this.fromVal.applyBeginTime, // 活动开始时间
          applyEndTime: this.fromVal.applyEndTime, // 活动开始时间
          beginTime: this.fromVal.beginTime, // 活动开始时间
          endTime: this.fromVal.endTime, // 活动结束时间
          checked: 0, // 审核状态
          style: this.fromVal.classify,
          label: this.fromVal.tag.length > 0 ? this.fromVal.tag.join(',') : '',
          principal: '',
          remark: this.fromVal.abstract
          //memberId: this.userData.id,
       /*   dataFile: this.dataFile*/
        }
        let fileData = new FormData()
          fileData.append('file', this.dataFile)

          fileData.append('type', 'account')
         for (let key in _params) {
           fileData.append('' + key, _params[key])
         }
          _params.file = fileData
        this.disabled = true
        if (this.verification(_params, this.msgTip)) {
            this.requestFile('post', 'activitys', fileData).then((data) => {
              if (data.success) {
                this.$Message.success('发布成功')
                this.disabled = false
                this.routePush('/meeting')
              } else {
                this.disabled = false
                this.$Message.success('发布失败')
              }
            },(err) => {
              this.disabled = false
              this.$Message.success('发布失败')
            })
        }
      },
      /**
       * 上传文件
       * @param file
       * @returns {boolean}
       */
      handleUpload: function (file) {
        let path = this.testImg(file)
        if (!path) return false

        this.imgHtml = '<img class="img" src=" ' + path + '">'
        this.dataFile = file
        return false
        this.requestFile('POST', 'upload', formData).then((data) => {
         // this.fromVal.posterUrl = process.env.API + data.msg
        })
        return false
      }
    }
  }

</script>

<style>
  .initiating .initiating-form-item{line-height: 30px; margin-bottom: 20px}
  .initiating .initiating-form-item>div{ border: 1px solid #e3e2e5; padding: 10px; border-radius: 5px}
  .initiating div{line-height: 30px}
  .form-title{ width:100px !important; }
  .form-fill{ width: calc(100% - 100px) !important;}
  .form-sub{margin: 10px;}
  .form-sub button{ margin: 0 10px;}
  .form-group{margin: 5px 0px;}
  .upload{ height: 300px;padding: 0 10px}
  .ivu-radio-wrapper{margin: 5px!important;}
  .ivu-radio-group-button .ivu-radio-wrapper:last-child,.ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper:first-child{border-radius:0;}
  .registration-tip{cursor: pointer;}
  .registration-tip:hover{background-color: #f5f6f7;}
  .save-button{padding: 5px 0;}
  .initiating .ivu-select-dropdown{ z-index: 10000}
  .initiating .ivu-select-multiple .ivu-select-item{display: inline-block; margin: 2px}
  .initiating .ivu-select-multiple .ivu-select-item-selected{background-color: rgba(153, 199, 238, 0.36)}
  .initiating .ivu-select-multiple .ivu-select-item-selected:after{display: none;}
  .red{color: #FF0000}
  .container-img { border: 1px solid #e3e2e5; background-color: #eeeeee; width: 100%;padding: 10px;}
  .initiating img{width:100% !important;}
</style>

<template>
  <div class="b wrapper-box">
    <h3 class="fz14">人员管理</h3>
    <div class="content-wrapper m-t10 wrapper-border m-t20">
      <Form :model="formData">
        <Row type="flex" :gutter=5>
          <i-col span="16">
            <Row type="flex" justify="start">
              <i-col>
                <Select v-model="formData.userStatus" style="width:auto">
                  <Option value="参会状态">参会状态</Option>
                  <Option value="待审核">待审核</Option>
                  <Option value="审核未通过">审核未通过</Option>
                  <Option value="待参会">待参会</Option>
                  <Option value="已签到">已签到</Option>
                </Select>
                <Select v-model="formData.userStemFrom" style="width:auto">
                  <Option value="来源">来源</Option>
                  <Option value="邀请函">邀请函</Option>
                  <Option value="嘉宾海报">嘉宾海报</Option>
                  <Option value="炫耀海报">炫耀海报</Option>
                  <Option value="报名二维码">报名二维码</Option>
                  <Option value="签到二维码">签到二维码</Option>
                  <Option value="后台添加">后台添加</Option>
                </Select>
                <Select v-model="formData.ticketId" style="width:auto">
                  <Option value="选择票型">选择票型</Option>
                  <Option value="免费报名">免费报名</Option>
                </Select>
                <Select v-model="formData.checkinType" style="width:auto">
                  <Option value="签到方式">签到方式</Option>
                  <Option value="微信扫码签到">微信扫码签到</Option>
                  <Option value="位置签到">位置签到</Option>
                  <Option value="小程序签到">小程序签到</Option>
                  <Option value="后台标记签到">后台标记签到</Option>
                  <Option value="人脸识别签到">人脸识别签到</Option>
                </Select>
                <Select v-model="formData.sendMsgFlag" style="width:auto">
                  <Option value="是否发送电子票">是否发送电子票</Option>
                  <Option value="已发送">已发送</Option>
                  <Option value="未发送">未发送</Option>
                </Select>
              </i-col>
            </Row>
          </i-col>
          <i-col span="8">
            <Row type="flex" justify="end">
              <i-col>
                <i-input class="width-letf" placeholder="请输入关键字" v-model="formData.keyWord"></i-input>
              </i-col>
              <i-col>
                <Button type="primary"  class="m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
              </i-col>
            </Row>
          </i-col>
        </Row>
        <div class="m-t10">
          <Row type="flex" justify="start">
            <i-col span="16" style="line-height: 24px">
              已选择 <span class="c1">{{selectList.length}}</span> 人
              <Button type="primary" :disabled="selectList.length > 0 ? false : true">批量审核</Button>
              <Button type="primary" :disabled="selectList.length > 0 ? false : true">标记已签到</Button>
              <Button type="primary" :disabled="selectList.length > 0 ? false : true">标记未签到</Button>
              <Button type="primary" :disabled="selectList.length > 0 ? false : true">发送电子票</Button>
            </i-col>
            <i-col span="8">
              <Row type="flex" justify="end">
                <i-col>
                  <Button type="primary">单个添加</Button>
                  <Button type="primary">批量导入</Button>
                  <Button type="primary">导出</Button>
                </i-col>
              </Row>
            </i-col>
          </Row>
        </div>
      </Form>
    </div>
    <div class="content-wrapper m-t10 wrapper-border">
      <Table border ref="selection" @on-selection-change="onTableSelect" :columns="columns4" :data="data1" ></Table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        formData: {
          keyWord: '',
          trading: "不限",
          userStatus: '参会状态',
          userStemFrom: "来源",
          ticketId: "选择票型",
          checkinType: "签到方式",
          sendMsgFlag: "是否发送电子票",
        },
        selectList: [],
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: '操作',
            width: 170,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {type: 'primary',size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.$Message.warning('详情')
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {type: 'primary',size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.$Message.warning('编辑')
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {type: 'error',size: 'small'},
                  on: {
                    click: () => {
                      this.$Message.warning('删除')
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      onTableSelect (rows) {
        console.log("===========" + rows)
        this.selectList = rows
      },
      searchDriver(){
        this.$Message.warning('搜索')
      },
    }
  }
</script>

<style scoped>

</style>

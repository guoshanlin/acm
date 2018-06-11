<template>
  <div class="b wrapper-box">
    <h3 class="fz14">订单管理</h3>
    <div class="content-wrapper m-t10 wrapper-border m-t20">
      <Form :model="formData">
        <Row type="flex" :gutter=5>
          <i-col span="12">
            <Row type="flex" justify="start">
              <i-col>
                <Select v-model="formData.ticket" style="width:100px">
                  <Option value="报名名称">报名名称</Option>
                  <Option value="免费报名">免费报名</Option>
                </Select>
                <Select v-model="formData.searchType" style="width:120px">
                  <Option value="订单号">订单号</Option>
                  <Option value="联系人姓名">联系人姓名</Option>
                  <Option value="联系人手机号">联系人手机号</Option>
                </Select>
              </i-col>
            </Row>
          </i-col>
          <i-col span="12">
            <Row type="flex" justify="end">
              <i-col>
                <i-input class="width-letf" placeholder="请输入关键字" v-model="formData.keyWord"></i-input>
              </i-col>
              <i-col>
                <Button type="primary" class="m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
                <Button type="primary" @click="exportTable">导出</Button>
              </i-col>
            </Row>
          </i-col>
        </Row>
        <div class="m-t10">
          <Row type="flex" justify="start">
            <i-col style="line-height: 24px">
             订单状态
              <RadioGroup @on-change="orderStatusChange" v-model="formData.orderStatus" type="button">
                <Radio label="全部"></Radio>
                <Radio label="待支付"></Radio>
                <Radio label="待领取"></Radio>
                <Radio label="待审核"></Radio>
                <Radio label="已完成"></Radio>
                <Radio label="已取消"></Radio>
              </RadioGroup>
            </i-col>
          </Row>
        </div>
      </Form>
    </div>
    <div class="content-wrapper m-t10 wrapper-border">
      <Table id="usetlistTable" :width="tableWidth" border ref="$table" @on-selection-change="onTableSelect"
             :columns="col" :data="tableData"></Table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tableWidth: document.documentElement.clientWidth - 379,
        formData: {
          keyWord: '',
          orderStatus: "全部",
          ticket: "报名名称",
          searchType: "订单号",
        },
        selectList: [],
        col: [
          {
            title: '头像昵称',
            width: 220,
            render: (h, params) => {
              return h('div', [
                h('Avatar', {
                  style: {marginRight: '5px'},
                  props: {
                    src: 'http://localhost:8080/api//files/xheditor/20180611/jpg/%E5%A4%A7%E5%8A%9E%E5%85%AC%E5%8C%BA2.jpg'
                  }
                }),
                h('span', params.row.name)
              ])
            }
          },
          {
            title: '参会人信息',
            width: 220,
            render: (h, params) => {
              return h('div', [
                h('Avatar', {
                  style: {marginRight: '5px'},
                  props: {
                    src: 'http://localhost:8080/api//files/xheditor/20180611/jpg/%E5%A4%A7%E5%8A%9E%E5%85%AC%E5%8C%BA2.jpg'
                  }
                }),
                h('span', params.row.name)
              ])
            }
          },
          {
            title: "来源",
            align: 'center',
            width: 100,
            key: "origin"
          },
          {
            title: "座位",
            align: 'center',
            width: 100,
            key: "age"
          },
          {
            title: "是否发送电子票",
            align: 'center',
            width: 130,
            key: "origin"
          },
          {
            title: "参会状态",
            align: 'center',
            width: 100,
            key: "origin"
          },
          {
            title: "签到状态",
            align: 'center',
            width: 100,
            key: "origin"
          },
          {
            title: "签到方式",
            align: 'center',
            width: 100,
            key: "origin"
          },
          {
            title: '操作',
            width: 170,
            fixed: 'right',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.$Message.warning('详情')
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.$Message.warning('编辑')
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {type: 'error', size: 'small'},
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
        tableData: [
          {
            name: 'John Brown',
            age: 18,
            origin: "后台添加",
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            origin: "后台添加",
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            origin: "后台添加",
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            origin: "后台添加",
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
      onTableSelect(rows) {
        console.log("===========" + rows)
        this.selectList = rows
      },
      searchDriver() {
        this.$Message.warning('搜索')
      },
      orderStatusChange(v){
        this.$Message.warning(v)
      },
      exportTable: function () {
        this.$refs.$table.exportCsv({filename: "order.csv"})
      }
    }
  }
</script>

<style scoped>

</style>

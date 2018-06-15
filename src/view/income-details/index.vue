<template>
  <div class="b wrapper-box ">
    <h3 class="fz14 flex">收入明细</h3>
    <div class="content-wrapper m-t20">
      <Form :model="formData">
        <Row type="flex" :gutter=5>
          <i-col span="16">
            <Row type="flex" justify="start">
              <i-col>
                <Select v-model="formData.select" style="width:120px">
                  <Option value="0">交易时间</Option>
                  <Option value="1">入账时间</Option>
                </Select>
              </i-col>
              <i-col>
                <DatePicker v-model="formData.time" class="m-l10" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
              </i-col>
            </Row>
          </i-col>
          <i-col span="8">
            <Row type="flex" justify="end">
              <i-col>
                <i-input class="width-letf" placeholder="请输入支付账号" v-model="formData.keyWord"></i-input>
              </i-col>
              <i-col>
                <Button type="primary"  class="m-r15 m-l5" icon="ios-search" @click="searchDriver">搜索</Button>
              </i-col>
            </Row>
          </i-col>
        </Row>
        <div class="m-t10">
          <Row type="flex" justify="start">
            <i-col class="m-r10" style="line-height: 24px">
               交易状态
            </i-col>
            <i-col>
              <RadioGroup v-model="formData.trading">
                <Radio label="">不限</Radio>
                <Radio label="未入账">未入账</Radio>
                <Radio label="已入账">已入账</Radio>
              </RadioGroup>
            </i-col>
          </Row>
        </div>
      </Form>
    </div>
    <div class="content-wrapper m-t10" style="min-height: 240px">
       <i-table :columns="columns" :data="data" border size="small" ref="table"></i-table>
    </div>
    <div class="content-wrapper m-t10">
      <div style="text-align: right; padding-top: 5px;">
        <Page show-total show-sizer show-elevator style="display: inline-block;" placement="top"
              :total="total"
              :page-size="formData.limit"
              :current="formData.offset"
              @on-change="changePage"
              @on-page-size-change="changeSize"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
      /*  tableWidth: document.documentElement.clientWidth - 390,*/
        formData: {
          keyWord: '',
          trading: '',
          select: '0',
          time: '',
          limit: 20,
          offset: 1
        },
        columns: [
          {title: '活动名称', key: 'name', width: 180, sortable: false},
          {title: '订单编号', key: 'sex', sortable: false},
          {title: '交易人', key: 'phone', width: 140, sortable: false},
          {title: '交易金额', key: 'email', width: 140, sortable: false},
          {title: '交易时间', key: 'company', width: 180, sortable: false},
          {title: '交易状态', key: 'position', width: 140, sortable: false},
          {title: '入账时间', key: 'position', width: 180, sortable: false}
        ],
        data: [],
        total: 0
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      searchDriver(){
        this.$Message.warning('搜索')
      },
      /**
       *跳页
       * @param v
       */
      changePage (v) {
        this.formData.offset = v
      },
      /**
       *改变页面展示用户条数
       * @param v
       */
      changeSize (v) {
        this.formData.limit = v
      }
    }
  }
</script>

<style scoped>

  .content-wrapper {
    border: 1px solid #e3e2e5;
    border-radius: 5px;
    padding: 10px;
  }
  .select-wrapper{
    padding: 6px 12px;
    border: 1px solid #e3e2e5;
  }

</style>

<template>
  <div class="b wrapper-box ">
    <h3 class="fz14 flex">提现明细</h3>
    <div class="content-wrapper m-t20">
      <Form :model="formData">
        <Row type="flex" :gutter=5>
          <i-col span="16">
            <Row type="flex" justify="start">
              <i-col class="m-r10" style="line-height: 32px">
                申请时间
              </i-col>
              <i-col>
                <DatePicker class="m-l10" type="datetimerange" format="yyyy-MM-dd" placeholder="请选择时间段" style="width: 240px"></DatePicker>
              </i-col>
            </Row>
          </i-col>
          <i-col span="8">
            <Row type="flex" justify="end">
              <i-col>
                <i-input class="width-letf" placeholder="请输入业务流水号" v-model="formData.keyWord"></i-input>
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
                <Radio label="不限"></Radio>
                <Radio label="处理中"></Radio>
                <Radio label="提现成功"></Radio>
                <Radio label="提现失败"></Radio>
                <Radio label="打款失败"></Radio>
              </RadioGroup>
            </i-col>
          </Row>
        </div>
      </Form>
    </div>
    <div class="content-wrapper m-t10 posct" style="min-height: 240px">
      暂无数据
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
          select: '交易时间'
        }
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

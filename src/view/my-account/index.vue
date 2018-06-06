<template>
  <div class="b wrapper-box ">
    <div class=" fbox">
      <h3 class="fz14 flex">我的账户</h3>
      <Tooltip
        content="可提现余额：账户中可申请提现的金额，在订单支付完成且微盟财务审核通过时入账，不包含提现中、已提现、未入账的金额。未入账：账户中等待入账的金额，在订单支付成功时计入，在订单支付完成且通过微盟财务审核时扣除并计入可提现金额提现中：已从可提现余额中申请提现，等待打款至提现收款账号中的总金额已提现：已从可提现余额中申请提现，且已打款至提现收款账号中的总金额"
        placement="bottom-end">
        <div>数据说明
          <Icon type="help"></Icon>
        </div>
      </Tooltip>
    </div>
    <div class="content-wrapper m-t20">
      <div class="clear m-t10 m-b10 ">
        <div class="fl">可提现余额&nbsp;&nbsp;&nbsp;&nbsp;<span class="fz24 c1">0.00元</span></div>
        <Button class="fr" type="primary" @click="applyWithdrawal">申请提现</Button>
      </div>
      <Row class="withdrawal">
        <i-col span="6">
          <div>未入账：0.00元</div>
          <div>提现中：0.00元</div>
          <div>已提现：0.00元</div>
        </i-col>
        <i-col span="6">
          <div><a class="c1" @click="routePush('/finance/incomeDetails')">收入明细</a></div>
          <div><a class="c1" @click="routePush('/finance/withdrawalDetails')">提现明细</a></div>
        </i-col>
        <i-col span="12">
          <div>
            提现方式：银行卡&nbsp;&nbsp;&nbsp;&nbsp;<a class="c1" @click="editAccount">设置提现账户</a>
          </div>
          <div>
            银行卡号：暂无
          </div>
          <div>
            开户名：暂无
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      applyWithdrawal() {
        this.$Message.warning('申请提现')
      },
      editAccount(){
        this.$Message.warning('设置提现账户')
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

  .withdrawal{
    padding: 10px 0;
    line-height: 36px;
    border-top: 1px solid #e3e2e5;
  }


</style>

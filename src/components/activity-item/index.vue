<template>
  <div>
    <Button class="manage-btn" type="primary" @click="exmine">{{buttonName}}</Button>
    <div class="pic-wrapper">
      <img width="100%" height="100%" v-lazy="loadImg">
      <span class="tips b1 c">进行中</span>
    </div>
    <div class="info-wrapper flex c2">
      <div>状态<span class="b2 c3 meeting-version">未审核</span></div>
      <h3 class="fz13">北京奥运会开幕(复制) <a @click="clickItem"> 查看详情</a></h3>
      <div class="fbox">
        <div class="flex">
          <div>报名截止时间：2018-06-05 17:37 ~ 2018-07-05 17:00</div>
        </div>
        <div class="flex">
          <Icon type="person"></Icon>
          发布者：林先生
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>活动截止时间：2018-06-05 17:37 ~ 2018-07-05 17:00</div>
        </div>
        <div class="flex">
          <Icon type="ios-location"></Icon>
          北京市北京市东城区
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        loadImg: 'https://static.veer.com/veer/static/resources/FourPack/2018-06-04/9dc68eb66cfc44ceb921a8c8c2cc8c0a.jpg'
      }
    },
    props: {
      row: '',
      buttonName: '审核'
    },
    methods: {
      clickItem () {
        this.$emit('click', this.row)
      },
      exmine () {
        this.$emit('exmine', this.row)
      }
    }
  }
</script>

<style>
  .manage-btn {
    position: absolute;
    top: 23px;
    right: 30px;
  }

  .pic-wrapper {
    width: 130px;
    height: 130px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .pic-wrapper .tips {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 10px;
    border-radius: 0 4px 0 4px;
  }

  .info-wrapper {
    padding: 10px;
    line-height: 20px;
  }

  .meeting-version {
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 8px
  }
</style>

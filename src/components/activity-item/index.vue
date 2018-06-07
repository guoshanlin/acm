<template>
  <div class="fbox">
    <div class="pic-wrapper">
      <img width="100%" height="100%" v-lazy="loadImg">
      <span class="tips b1 c">进行中</span>
    </div>
    <div class="info-wrapper flex c2">
      <h3 class="fz13">{{row.name}}&nbsp;&nbsp;<a class="fz14" @click="clickItem"> 查看详情</a></h3>
      <div class="fbox">
        <div class="flex">
          <div class="">状态：<span class="b2 c3 meeting-version">{{getChecked(row.checked)}}</span> <Button v-if="row.checked == 0" type="primary" @click="exmine">{{button}}</Button></div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>报名截止时间：{{new Date(row.applyBeginTime.time).format("yyyy-MM-dd hh:mm:ss")}} ~ {{new Date(row.applyEndTime.time).format("yyyy-MM-dd hh:mm:ss")}}</div>
        </div>
        <div class="flex">
          <Icon type="person"></Icon>
          发布者：{{row.name}}
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>活动截止时间：{{new Date(row.beginTime.time).format("yyyy-MM-dd hh:mm:ss")}} ~ {{new Date(row.endTime.time).format("yyyy-MM-dd hh:mm:ss")}}</div>
        </div>
        <div class="flex">
          <Icon type="ios-location"></Icon>
          {{row.address}}
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
      button: ''
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

<style scoped>
/*  .manage-btn {
    position: absolute;
    top: 23px;
    right: 30px;
  }*/

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
    padding: 10px 20px;
    line-height: 28px;
  }

  .meeting-version {
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 8px
  }
</style>

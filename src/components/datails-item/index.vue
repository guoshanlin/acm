<template>
  <div class="fbox">
    <div class="pic-datails">
      <img width="100%" height="100%" v-lazy="loadImg">
      <span class="tips b1 c">进行中</span>
    </div>
    <div class="info-datails flex c2">
      <h3 class="fz24">{{row.name}}</h3>
      <div class="fbox fz14">
        <div class="flex">
          <Icon type="person"></Icon>
          发布者：{{row.name}}
        </div>
      </div>
      <div class="fz14">状态：<span class="b2 c3 meeting-version">{{getChecked(row.checked)}}</span></div>
      <div class="fbox">
        <div class="flex">
          <div>报名截止时间：{{new Date(row.applyBeginTime.time).format("yyyy-MM-dd hh:mm:ss")}} ~ {{new Date(row.applyEndTime.time).format("yyyy-MM-dd hh:mm:ss")}}</div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>活动截止时间：{{new Date(row.beginTime.time).format("yyyy-MM-dd hh:mm:ss")}} ~ {{new Date(row.endTime.time).format("yyyy-MM-dd hh:mm:ss")}}</div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <Icon type="ios-location"></Icon> {{row.address}}
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <Button v-if="row.checked == 0" type="primary" @click="exmine">{{button}}</Button>
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

<style>
  .manage-btn {
    position: absolute;
    top: 23px;
    right: 30px;
  }

  .pic-datails {
    width: 500px;
    height: 300px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .pic-datails .tips {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 10px;
    border-radius: 0 4px 0 4px;
  }

  .info-datails {
    padding: 10px 30px;
    line-height: 40px;
  }

  .meeting-version {
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 8px
  }
</style>

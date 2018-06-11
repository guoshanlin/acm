<template>
  <div class="fbox">
    <div class="pic-datails">
      <img v-if="row && row.posterUrl && row.posterUrl.indexOf('xheditor') != -1" width="100%" height="100%" :src="loadImg">
      <img v-else width="100%" height="100%" v-lazy="loadUrl">
      <span class="tips b1 c">{{getActiveStatus(row.status)}}</span>
    </div>
    <div class="info-datails flex c2">
      <h3 class="fz24">{{row.name}}</h3>
      <div class="fbox fz14">
        <div class="flex">
          <Icon type="person"></Icon>
          发布者：{{row.memberNickName}}
        </div>
      </div>
     <!-- <div class="fz14">状态：<span class="b2 c3 meeting-version">{{getActiveStatus(row.status)}}</span></div>-->
      <div class="fbox">
        <div class="flex">
          <div>发布时间：{{formatterObjTime(row.createTime)}}</div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>报名时间：{{formatterObjTime(row.applyBeginTime)}} ~ {{formatterObjTime(row.applyEndTime)}}</div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <div>活动时间：{{formatterObjTime(row.beginTime)}} ~ {{formatterObjTime(row.endTime)}}</div>
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <Icon type="ios-location"></Icon> {{row.address}}
        </div>
      </div>
      <div class="fbox">
        <div class="flex">
          <Button v-if="row.status == 0 &&  button" type="primary" @click="exmine">{{button}}</Button>
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
        loadImg: '',
        loadUrl: ''
      }
    },
    props: {
      row: '',
      button: ''
    },
    watch: {
      row (val) {
        this.loadImg = process.env.NODE_ENV === 'production' ? val.posterUrl : process.env.API + val.posterUrl
      }
    },
    methods: {
      clickItem () {
        this.$emit('click', this.row)
      },
      exmine () {
        this.$emit('exmine', this.row)
      }
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.loadImg = process.env.NODE_ENV === 'production' ? this.row.posterUrl : process.env.API + this.row.posterUrl
      })
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
    line-height: 34px;
    height: 280px;
  }

  .meeting-version {
    padding: 2px 8px;
    border-radius: 3px;
    margin-left: 8px
  }
</style>

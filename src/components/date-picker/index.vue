<template>
  <div>
    <div v-if="ids.length == 2">
      <Row>
        <i-col :span="span[0]">
          <div class="ivu-input-wrapper ivu-input-type">
            <i class="ivu-icon ivu-icon-ios-calendar-outline ivu-input-icon ivu-input-icon-normal"></i>
            <input :id="ids[0]" v-model="value[ids[0]]" autocomplete="off" spellcheck="false" type="text" :placeholder="placeholder[0]" class="ivu-input" @click='initBTime(ids[0],ids[1])'>
          </div>
        </i-col>
        <i-col :span="span[1]">
          <div class="ivu-input-wrapper ivu-input-type">
            <i class="ivu-icon ivu-icon-ios-calendar-outline ivu-input-icon ivu-input-icon-normal"></i>
            <input :id="ids[1]" v-model="value[ids[1]]" autocomplete="off" spellcheck="false" type="text" :placeholder="placeholder[1]" class="ivu-input" @click='initETime(ids[0],ids[1])'>
          </div>
        </i-col>
      </Row>
    </div>
    <div v-if="ids.length == 1">
      <div class="ivu-input-wrapper ivu-input-type">
        <i class="ivu-icon ivu-icon-ios-calendar-outline ivu-input-icon ivu-input-icon-normal"></i>
        <input :id="ids[0]" v-model="value[ids[0]]" autocomplete="off" spellcheck="false" type="text" :placeholder="placeholder[0]" class="ivu-input" @click='initTime(ids[0])'>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        value: {}
      }
    },
    props: {
      ids: '',
      placeholder: '',
      span: ''
    },
    watch: {
      ids (val) {
        this.ids = val
        this.initValue()
      }
    },
    methods: {
      initValue () {
        this.value = {}
        for (let i = 0; i < this.ids.length; i++) {
          this.value[this.ids[i]] = ''
        }
      },
      initTime (bId) {
        let _this = this
        WdatePicker({
          el: '' + bId,
          dateFmt: 'yyyy-MM-dd HH:mm:ss',
          autoPickDate: false,
          onpicking: function (dp) {
            console.log('initTime', dp.cal.getNewDateStr())
            _this.value[bId] = dp.cal.getNewDateStr()
          }
        })
      },
      initBTime (bId, endID) {
        let _this = this
        WdatePicker({
          el: '' + bId,
          dateFmt: 'yyyy-MM-dd HH:mm:ss',
          autoPickDate: false,
          maxDate: '#F{$dp.$D(' + endID + ')}',
          onpicking: function (dp) {
            console.log('initBTime', dp.cal.getNewDateStr())
            _this.value[bId] = dp.cal.getNewDateStr()
          }
        })
      },
      initETime (bId, endID) {
        let _this = this
        WdatePicker({
          el: '' + endID,
          dateFmt: 'yyyy-MM-dd HH:mm:ss',
          autoPickDate: false,
          minDate: '#F{$dp.$D(\'' + bId + '\')||\'1990-01-01 00:00\'}',
          onpicking: function (dp) {
            console.log('initETime', dp.cal.getNewDateStr())
            _this.value[endID] = dp.cal.getNewDateStr()
          }
        })
      },
      getValue () {
        return this.value
      }
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.initValue()
      })
    }
  }
</script>

<style scoped>

</style>

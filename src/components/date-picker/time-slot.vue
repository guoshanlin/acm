<template>
  <div>
      <Row>
        <i-col :span="span[0]">
          <div class="ivu-input-wrapper ivu-input-type">
            <i class="ivu-icon ivu-icon-ios-calendar-outline ivu-input-icon ivu-input-icon-normal" @click='initTime(ids[0])'></i>
            <input :id="ids[0]" :value="value[ids[0]]" type="text" :placeholder="placeholder[0]" class="ivu-input" @click='initBTime(ids[0],ids[1])'>
          </div>
        </i-col>
        <i-col :span="span[1]">
          <div class="ivu-input-wrapper ivu-input-type m-l5">
            <i class="ivu-icon ivu-icon-ios-calendar-outline ivu-input-icon ivu-input-icon-normal" @click='initTime(ids[1])'></i>
            <input :id="ids[1]" :value="value[ids[1]]" type="text" :placeholder="placeholder[1]" class="ivu-input" @click='initETime(ids[0],ids[1])'>
          </div>
        </i-col>
      </Row>
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
      span: '',
      day: ''
    },
    watch: {
      ids (val) {
        this.ids = val
        this.initValue()
      },
      day (val) {
        this.setValue()
      }
    },
    methods: {
      initValue () {
        this.value = {}
        for (let i = 0; i < this.ids.length; i++) {
          this.value[this.ids[i]] = ''
        }
      },
      initBTime (bId, endID) {
        let _this = this
        WdatePicker({
          el: '' + bId,
          dateFmt: 'yyyy-MM-dd HH:mm:ss',
          autoPickDate: false,
          maxDate: '#F{$dp.$D(' + endID + ")||'%y-%M-%d %H:%m:%s'}",
          onpicking: function (dp) {
            _this.value[bId] = dp.cal.getNewDateStr()
          },
          onpicked: function () {
            _this.$emit('on-change', bId, _this.value[bId])
          }
        })
      },
      initETime (bId, endID) {
        let _this = this
        WdatePicker({
          el: '' + endID,
          dateFmt: 'yyyy-MM-dd HH:mm:ss',
          autoPickDate: false,
          minDate: '#F{$dp.$D(\'' + bId + '\')}',
          maxDate: '%y-%M-%d %H:%m:%s',
          onpicking: function (dp) {
            _this.value[endID] = dp.cal.getNewDateStr()
          },
          onpicked: function () {
            _this.$emit('on-change', endID, _this.value[endID])
          }
        })
      },
      getValue () {
        for (let i = 0; i < this.ids.length; i++) {
          this.value[this.ids[i]] = document.getElementById('' + this.ids[i]).value
        }
        return this.value
      },
      setEmptyBTime () {
        this.value[this.ids[1]] = ''
        this.setValueEmpty(this.ids[0])
      },
      setEmptyETime () {
        this.value[this.ids[1]] = ''
        this.setValueEmpty(this.ids[1])
      },
      setValueEmpty (id) {
         document.getElementById('' + id).value = ''
      },
      setValue () {
        this.value[this.ids[1]] = new Date().format('yyyy-MM-dd hh:mm:ss')
        this.value[this.ids[0]] = new Date().addTimes(this.day + 'd').format('yyyy-MM-dd hh:mm:ss')
        document.getElementById('' + this.ids[0]).value = this.value[this.ids[0]]
        document.getElementById('' + this.ids[1]).value = this.value[this.ids[1]]
        this.$emit('on-change')
      }
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.initValue()
        this.setValue()
      })
    }
  }
</script>

<style scoped>

</style>

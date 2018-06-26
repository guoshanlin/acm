<template>
  <div class="meeting-deltail">
    <div class="copy">
      <i-button @click="copy" type="primary">生成活动图片</i-button>
    </div>
    <div id="deltail">
      <div class="wrapper b wrapper-box">
        <div class="datails-item">
          <datails-item :row='data' :button="buttonName"></datails-item>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>活动分类:</h3></div>
            <div class="flex t-left">
              <div>{{data.style}}</div>
            </div>
          </div>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>票种:</h3></div>
            <div class="flex t-left">
              <div v-if="data.isNeedPay == 0">免费</div>
              <div v-if="data.isNeedPay == 1">&nbsp;<span class="span-title">非会员价:</span>&nbsp;{{data.nonMBPrice}}元&nbsp;&nbsp;&nbsp;<span class="span-title">会员价:</span>&nbsp;{{data.mbPrice}}元</div>
            </div>
          </div>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>活动标签:</h3></div>
            <div class="flex t-left">
              <Tag v-if="data.label != ''" color="blue" v-for="item in label" :key="item">{{item}}</Tag>
            </div>
          </div>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>活动摘要:</h3></div>
            <div class="flex t-left">
              <div>
                <pre v-html = 'data.remark'></pre>
              </div>
            </div>
          </div>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>活动议程:</h3></div>
            <div class="flex t-left">
              <div>
                <pre v-html = 'data.agenda'></pre>
              </div>
            </div>
          </div>
        </div>
        <div class="datails-item m-t10">
          <div class="fbox">
            <div class="datails-flex-item t-right"><h3>详细内容:</h3></div>
            <div class="flex t-left">
              <div id="content">
                <pre v-html = 'data.content'></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import datailsItem from 'components/datails-item/index'
  import html2canvas from 'html2canvas'

  export default {
    name: 'index',
    data () {
      return {
        data: {},
        label: [],
        buttonName: '',
        buttonType: ''
      }
    },
    components: {
      datailsItem
    },
    props: {
      id: '',
      type: ''
    },
    methods: {
      /**
       * 提交表单
       * @param url
       * @param obj
       */
      initItem () {
        const _type = 'GET'
        const _params = {id: this.id}
        const _url = 'activitys'
        this.requestAjax(_type, _url, _params).then((data) => {
          if (data.success) {
            this.data = data.data.rows[0]
            this.label = this.data.label.split(',')
            this.$nextTick(() => {
              this.bindAClick(document.querySelectorAll('#content img'))
            })
          }
        })
      },
      copy () {
        html2canvas(document.getElementById('deltail'),{useCORS: true}).then((canvas) => {
          // document.getElementById('img').appendChild(canvas)
          let imgUri = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
          let _save = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
          _save.href = imgUri
          _save.download = this.id + '.png'
          let event = document.createEvent('MouseEvents')
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
          _save.dispatchEvent(event)
        })
      },
      bindAClick (damo) {
        if (damo != null && damo.length !== 0) {
          for (let i = 0; i < damo.length; i++) {
            let item = damo[i]
            // item.crossOrigin = 'Anonymous'
            if (item.src.indexOf('files/xheditor') != -1) {
              item.src = process.env.NODE_ENV === 'production' ? process.env.API + 'files' + item.src.split('files')[1] : 'https://pmp.coreware.cn/gather/' + 'files' + item.src.split('files')[1]
            }
          }
        }
      }
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.initItem()
      })
    }
  }
</script>

<style>
  .wrapper{margin: 10px}
  .datails-flex-item { display: inline-block; width: 100px; margin-right: 10px}
  .span-title{ font-weight: bold}
  .meeting-deltail{position: relative}
  .meeting-deltail .copy{position: absolute;top: 20px; right: 30px; z-index: 999}
  .datails-item{position: relative; border: 1px solid #e3e2e5; padding: 10px; border-radius: 5px; line-height: 26px;}
   pre {
    white-space: pre-wrap; /*css-3*/
    white-space: -moz-pre-wrap; /*Mozilla,since1999*/
    white-space: -pre-wrap; /*Opera4-6*/
    white-space: -o-pre-wrap; /*Opera7*/
    word-wrap: break-word; /*InternetExplorer5.5+*/
  }
  pre img{max-width: 80%;}
</style>

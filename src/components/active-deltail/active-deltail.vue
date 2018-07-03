<template>
  <div>
      <article class="box triangle b m-b10">
        <article class="post_main">
          <div class="fbox">
            <div style="padding-right:10px;">
              <a href="javascript:void(0)"><img class="thumb" :src="url + row.posterUrl"> </a>
              <!--<a href="javascript:void(0)"><img class="thumb" :src="'https://pmp.coreware.cn/gather/files' + row.posterUrl.split('files')[1]"> </a>-->
            </div>
            <div class="flex">
              <h2 class="m-t20 m-b10"><a href="javascript:void(0)" :title="row.name">{{row.name}}</a></h2>
              <div class="postinfo clear">
                <div class="fl">
                  <span class="author">
                    <a href="javascript:void(0)" class="c3">
                      <Icon type="person"></Icon>&nbsp;{{row.memberNickName}}
                    </a>
                  </span>
                  <span class="category">{{row.label ? row.label.replace(/,/g, ' ') : ''}}</span>
                  <span class="date">{{formatterObjTime(row.createTime,'yyyy-MM-dd hh:mm')}}</span>
                </div>
                <div class="fr">
                  <span class="view"><Icon class="fz20" style="vertical-align: sub;" type="ios-eye"></Icon> 6.71K</span>
                </div>
              </div>
              <div>报名时间：{{formatterObjTime(row.applyBeginTime)}} ~ {{formatterObjTime(row.applyEndTime)}}</div>
              <div>活动时间：{{formatterObjTime(row.beginTime)}} ~ {{formatterObjTime(row.endTime)}}</div>
              <div class="clear">
                <div class="fl">
                  <div>成团人数：{{row.number == 0 ? '不限': row.number + '人'}}</div>
                </div>
                <div class="fr">
                  <div>报名人数：{{row.numberActual + '人'}}</div>
                </div>
              </div>
              <div class="clear">
                <div class="fl">
                  <Icon type="ios-location"></Icon> {{row.city1 + row.city2 + row.city3 +row.address}}
                </div>
                <div class="fr">
                  <span v-if="row.isNeedPay == 0">&nbsp;免费票</span>
                  <span v-if="row.isNeedPay == 1">&nbsp;<span class="span-title">非会员价:</span>&nbsp;{{row.nonMBPrice}}元&nbsp;&nbsp;&nbsp;<span class="span-title">会员价:</span>&nbsp;{{row.mbPrice}}元</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
      <!--<article class="box triangle b m-b10">-->
      <!--<article class="post_main">-->
      <!--<figure>-->
      <!--<a href="javascript:void(0)"><img class="thumb" :src="url + row.posterUrl"> </a>-->
      <!--</figure>-->
      <!--</article>-->
      <!--</article>-->
      <article class="box triangle b m-b10">
        <article class="post_main">
          <div class="m-t10 excerpt">
            <h4>活动摘要:</h4>
            <pre v-html = 'row.remark'></pre>
          </div>
        </article>
      </article>
      <article class="box triangle b m-b10">
        <article class="post_main">
          <div class="m-t10 excerpt">
            <h4>活动议程:</h4>
            <pre v-html = 'row.agenda'></pre>
          </div>
        </article>
      </article>
      <article class="box triangle b m-b10">
        <article class="post_main">
          <div class="m-t10 excerpt content-deltail" id="content-deltail">
            <h4>详细内容:</h4>
            <pre v-html = 'row.content'></pre>
          </div>
        </article>
      </article>
  </div>
</template>

<script>
  export default {
    name: 'active-deltail',
    data () {
      return {
        url: process.env.NODE_ENV === 'production' ? '' : process.env.API
      }
    },
    props: {
      row: ''
    },
    watch: {
      row () {
        this.$nextTick(() => {
          this.bindAClick(document.querySelectorAll('#content-deltail img'))
        })
      }
    },
    methods: {
      bindAClick (damo) {
        if (damo != null && damo.length !== 0) {
          for (let i = 0; i < damo.length; i++) {
            let item = damo[i]
            if (item.src.indexOf('files/xheditor') != -1) {
              item.src = process.env.NODE_ENV === 'production' ? process.env.API + 'files' + item.src.split('files')[1] : 'https://pmp.coreware.cn/gather/files' + item.src.split('files')[1]
              // item.style = 'width: 100%;'
             // item.width = '300'
            }
          }
        }
      }
    },
    beforeCreate () {
      this.$nextTick(() => {
        this.bindAClick(document.querySelectorAll('#content-deltail img'))
      })
    }
  }
</script>

<style scoped>
  .post_main {
    overflow: hidden;
    line-height: 24px;
  }
  figure a{
    display: block;
    overflow: hidden;
    position: relative;
  }
  /*figure a img.thumb:hover {*/
    /*-webkit-transform: scale(1.3);*/
    /*transform: scale(1.3);*/
  /*}*/
  .post_main img.thumb {
    height: 180px;
    width: 240px;
    overflow: hidden;
  }
  .post_main h2 {
    font-size: 24px;
    margin: 2px 0 4px;
  }
  .post_main h2 a {
    color: #333;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }
  .postinfo {
    color: #999;
    margin: 2px 0 8px;
    overflow: hidden;
  }
  .postinfo>span, .postinfo>div>span {
    padding: 0 6px;
    position: relative;
    display: inline-block;
  }
  .postinfo .author {
    padding-left: 0;
  }
  .postinfo>div>span:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #ddd;
    right: -1px;
    top: 7px;
  }
  .postinfo>div>span:nth-last-child(1):before{
    background-color: transparent;
  }
  .postinfo .author img {
    width: 18px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
    margin-right: 6px;
  }
  .excerpt{
    text-align: justify;
  }
</style>

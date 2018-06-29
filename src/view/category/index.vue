<template>

  <div class="cBg">
    <top-header></top-header>

    <div class="w1200">
      <section class="box triangle crumbs_wrap b m-t10 m-b10 ct c2">
        <h3>绘画</h3>
        <p class="c3">绘画，最享受的一件事情，那种忘我的境地是其他任何事都无法比拟！</p>
      </section>

      <div class="content clear">
        <div class="content-wrap fl">
          <article class="box triangle b m-b10">
            <a title="LensNews" href="javascript:void(0)"><img src="https://yfdxs.com/wp-content/themes/lensnews/images/ad.jpg" alt="LensNews"></a>
          </article>

          <article class="box triangle b m-b10" v-for="item in [1,2,3,4]">
            <article class="post_main">
              <figure>
                <a href="https://yfdxs.com/country-painting-art.html" title="乡间绘画艺术" target="_blank">
                  <img class="thumb" src="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/gallery/yuanshengtai/yuanshengtai_001.JPG&amp;h=338&amp;w=600" alt="乡间绘画艺术"> </a>
              </figure>
              <h2><a href="javascript:void(0)" title="乡间绘画艺术">[￥998]WordPress 简约新闻自媒体主题  MNews(用户中心、用户关注、商城、付费阅读、点赞收藏、评论评分、站内信、打赏、视频点播)</a></h2>
              <div class="postinfo clear">
                <div class="fl">
                  <span class="author">
                    <a href="javascript:void(0)" class="c3">
                      <img class="avatar" src="https://secure.gravatar.com/avatar/c9bd07d563393c25e5f8812b47e6e640?s=120">发布人
                    </a>
                  </span>
                  <span class="category">标签 标签</span>
                  <span class="date">2013-02-18</span>
                </div>
                <div class="fr">
                  <span class="view"><Icon class="fz20" style="vertical-align: sub;" type="ios-eye"></Icon> 6.71K</span>
                  <span class="like"><Icon type="android-favorite"></Icon> 99</span>
                </div>
              </div>
              <div class="excerpt hzline3 c2">
                艺术缘于生活，却高于生活。对于刘乐平老师的绘画作品，充分体现了这句话的含义。认识刘老师是在高三时，经他侄子的介绍，在他身边学习绘画，初见他的作品就被深深的吸引，都是生活中的一些</div>
            </article>
          </article>

          <div class="ias-noneleft b m-b10">已经加载到天涯海角了！</div>
          <div class="ias-noneleft b m-b10 cursor-p">点击加载更多</div>
        </div>
        <div class="sidebar fr">
          <div class="sticky box triangle b m-b10">
            <div class="sidebar_title"><h3>热门活动</h3></div>
            <ul class="hot-wrapper">
              <li v-for="item in [1,2,3,4]">
                <article class="postlist">
                  <figure>
                    <img class="thumb" src="https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg"/>
                  </figure>
                  <h3 class="c2">雪后登大理苍山十九峰之兰峰黑龙潭双龙潭黄龙潭三阳峰</h3>
                  <div class="info c3">
                    <span class="category">徒步登山</span>
                    <span class="date">2018-01-09</span>
                    <span class="like fr">21</span>
                  </div>
                </article>
              </li>
            </ul>
          </div>

          <div class="sticky box triangle b m-b10">
            <div class="sidebar_title"><h3>分类目录</h3></div>
            <ul>
              <li class="cat-item" v-for="item in [1,2,3,4,1,2,3,4,1,2,3,4]">
                <Icon type="ios-arrow-right"></Icon> <a href="javascript: void(0)">分类</a><span>(22)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div class="layout-copy">
      <i-footer :showSlogan="false"></i-footer>
    </div>

  </div>

</template>

<script>

  import topHeader from 'components/header'
  import iFooter from 'components/footer'

  export default {
    data() {
      return {}
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {

    },
    components: {
      topHeader,
      iFooter
    },
  }
</script>

<style scoped>

  .crumbs_wrap h3 {
    position: relative;
    border-bottom: 1px #eee solid;
    padding-bottom: 12px;
    margin: 0 -20px 20px;
  }
  .crumbs_wrap h3:before {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 50%;
    width: 36px;
    height: 3px;
    background-color: #e1244e;
    margin-left: -18px;
  }

  .content-wrap{
    width: 800px;
  }
  .sidebar{
    width: 390px;
  }


  .post_main {
    padding-left: 262px;
    overflow: hidden;
    line-height: 24px;
  }
  .post_main figure {
    margin-left: -262px;
    float: left;
  }
  figure a{
    display: block;
    overflow: hidden;
    position: relative;
  }
  figure a img.thumb:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  .post_main img.thumb {
    width: 250px;
    overflow: hidden;
  }
  .post_main h2 {
    font-size: 14px;
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
  .ias-noneleft {
    color: #999;
    text-align: center;
    font-size: 14px;
    padding: 7px 20px;
    border: 1px #f4f4f4 solid;
  }


  .sticky {
    float: right;
    width: 390px;
    position: relative;
  }
  .hot-wrapper li:nth-child(n+2){
    padding-top: 20px;
  }
  .postlist {
    overflow: hidden;
    padding-left: 136px;
  }
  .postlist figure {
    margin-left: -136px;
    float: left;
  }
  .postlist figure img.thumb {
    width: 128px;
  }
  .postlist h3 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
    margin-top: -2px;
  }
  .sidebar_title {
    margin: -20px -20px 20px;
    padding: 12px;
    background-color: #fdfdfd;
    border-bottom: 1px #f4f4f4 solid;
  }

  .cat-item{
    width: 50%;
    font-size: 12px;
    display: inline-block;
    vertical-align: top;
    padding: 4px 4px 4px 12px;
    line-height: 30px;
    border-bottom: 1px #f4f4f4 solid;
    color: #999;
    position: relative;
    white-space: nowrap;
  }
  .cat-item a{
    color: #333;
  }


</style>

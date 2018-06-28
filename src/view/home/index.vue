<template>

  <div>
    <div class="wrapper">
      <div class="fbox m-t10">
        <section class="bulletin_title">
          <Icon type="android-notifications" style="vertical-align: middle"></Icon>
          <span class="fz14 c">公告</span>
        </section>
        <swiper class="notice flex" :options="noticeOption">
          <swiper-slide>
            <div class="hzline1"><a class="c2" href="javascript:void(0)">MNews 主题更新至1.1： 站内信，打赏，百度推送，阿里云视频点播和优酷视频，认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加 V，前台编辑文章等自媒体实用的功能，增加了视频自</a></div></swiper-slide>
          <swiper-slide>
          <div class="hzline1"><a class="c2" href="javascript:void(0)">MNews 主题更新至1.1： 站内信，打赏，百度推送，阿里云视频点播和优酷视频，认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加 V，前台编辑文章等自媒体实用的功能，增加了视频自</a></div></swiper-slide>
          <swiper-slide>
          <div class="hzline1"><a class="c2" href="javascript:void(0)">MNews 主题更新至1.1： 站内信，打赏，百度推送，阿里云视频点播和优酷视频，认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加 V，前台编辑文章等自媒体实用的功能，增加了视频自</a></div></swiper-slide>
          <swiper-slide>
          <div class="hzline1"><a class="c2" href="javascript:void(0)">MNews 主题更新至1.1： 站内信，打赏，百度推送，阿里云视频点播和优酷视频，认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加认阿里云视频点播和优酷视频阿里云视频点播和优酷视频证作者加 V，前台编辑文章等自媒体实用的功能，增加了视频自</a></div></swiper-slide>
        </swiper>
        <div class="fz20 notice-btn-wrapper">
          <a class="notice-prev" href="javascript:void(0)"><Icon type="android-arrow-dropleft-circle"></Icon></a>
          <a class="notice-next" href="javascript:void(0)"><Icon type="android-arrow-dropright-circle"></Icon></a>
        </div>
      </div>
      <div class="slides-sticky m-t10  clear">
        <div class="slider b">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide
              style="background-image:url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg')"></swiper-slide>
            <swiper-slide
              style="background-image:url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg')"></swiper-slide>
            <swiper-slide
              style="background-image:url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-8.jpg')"></swiper-slide>
            <swiper-slide
              style="background-image:url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-9.jpg')"></swiper-slide>
            <swiper-slide
              style="background-image:url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-10.jpg')"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
        </div>

        <div class="sticky box triangle b">
          <ul>
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
          <a class="more c3" href="javascript:void(0)" title="查看更多置顶推荐的文章"><span>更多热度榜活动</span>
            <Icon class="fr" type="chevron-right"></Icon>
          </a>
        </div>
      </div>

      <div class="category-wrapper box m-t10 triangle b" v-for="i in [1,2,3,4]">
        <section class="home_title clear">
          <h3 class="fl">推荐活动</h3>
          <section class="title-tag fr">
            <ul>
              <li>
                <a href="javascript:void(0)">简约</a>
              </li>
              <li>
                <a href="javascript:void(0)">电影</a>
              </li>
              <li>
                <a href="javascript:void(0)">生活</a>
              </li>
              <li>
                <a href="javascript:void(0)">旅行摄影</a>
              </li>
              <li>
                <a  href="javascript:void(0)">原创</a>
              </li>
            </ul>
            <a href="javascript:void(0)" class="home_button c3" title="查看更多">
              <Icon class="fz20" type="android-add-circle"></Icon>
            </a>
          </section>
        </section>
        <section class="post_list post_bottom">
          <ul class="layout_ul">
            <li class="layout_li" v-for="item in [1,2,3,4,5,6,7,8]">
              <article class="postgrid">
                <figure>
                  <a href="javascript:void(0)">
                  <img class="thumb" src="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&amp;h=338&amp;w=600"></a>
                </figure>
                <h2 class="fz16 c2 hzline1">骑行去大理生活</h2>
                <div class="homeinfo c3">
                  <span class="category">珍藏记忆</span>
                  <span class="date"><Icon type="clock"></Icon> 2014-10-25</span>
                  <span class="like fr"><Icon class="fz20" style="vertical-align: sub;margin-right: 3px" type="ios-eye"></Icon>85</span>
                </div>
                <div class="excerpt hzline2 c3 m-t5">网上已经有很多介绍 WordPress 多语言的插件了，比如 Polylang 和 WPML 等强大的多语言插件等强大的多语言插件等强大的多语言插件</div>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </div>

  </div>

</template>

<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        noticeOption: {
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          height: 34,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.notice-next',
            prevEl: '.notice-prev'
          }
        },
        swiperOption: {
          slidesPerView: 1,
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {},
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>

  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }

  .slider {
    float: left;
    width: 800px;
    height: 450px;
  }

  .bulletin_title {
    width: 80px;
    height: 34px;
    background-color: #222;
    color: #f2e6d8;
    text-align: center;
    font-size: 14px;
    padding: 4.5px;
    position: relative;
    margin-right: 20px;
  }
  .bulletin_title:before {
    content: '';
    height: 0;
    width: 0;
    display: block;
    border: 12px transparent solid;
    border-right-width: 0;
    border-left-color: #222;
    position: absolute;
    top: 5px;
    right: -12px;
    -webkit-transform: scaleY(1.45);
    transform: scaleY(1.45);
  }
  .notice{
    height: 34px;
    line-height: 34px;
    overflow: hidden;
  }
  .notice-btn-wrapper{margin-left: 10px}
  .notice-btn-wrapper a{
    color: #b3b3b3;
  }
  .notice-btn-wrapper a:hover{
    color: #333;
  }
  .notice .swiper-slide{
    height: 50px;
  }

  .slides-sticky .swiper-slide {
    width: 800px;
    height: 450px;
    background-position: center;
    background-size: cover;
  }
  .swiper-button-prev, .swiper-button-next{
    height: 25px!important;
  }

  .swiper-pagination-white .swiper-pagination-bullet-active{
    background: #e1244e!important;
  }
  .swiper-pagination-bullet{
    background: #fff!important;
    opacity: 0.5!important;
  }

  .sticky {
    float: right;
    width: 390px;
    height: 450px;
    position: relative;
  }

  .postlist {
    overflow: hidden;
    padding: 0 0 20px 136px;
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

  .sticky a.more {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    background-color: #fbfbfb;
    border-top: 1px #f4f4f4 solid;
    padding: 12px 20px;
  }

  .home_title {
    background-color: #fdfdfd;
    margin: -20px -20px 20px;
    padding: 12px 12px 12px 20px;
    border-bottom: 1px #f2f2f2 solid;
    height: 48px;
  }

  .title-tag ul {
    display: inline-block;
  }

  .title-tag ul li {
    display: inline-block;
  }

  .title-tag ul li a {
    display: block;
    color: #999;
    padding: 2px 8px;
  }
  .title-tag ul li a:hover{
    color: #FF1111;
  }

  .title-tag .home_button {
    color: #ccc;
    font-size: 16px;
    margin-left: 8px;
    padding-left: 12px;
    padding-right: 2px;
    border-left: 1px #eee solid;
  }

  .post_list ul {
    margin-right: -20px;
  }
  .post_list ul li {
    width: 25%;
    font-size: 12px;
    display: inline-block;
    vertical-align: top;
  }
  .post_bottom ul li:nth-last-child(-n+4) .postgrid {
    margin-bottom: 0;
  }
  .postgrid {
    margin: 0 20px 20px 0;
    overflow: hidden;
  }
  figure a {
    display: block;
    overflow: hidden;
    position: relative;
  }

  figure a img{
    max-width: 100%;
    height: auto;
    display: block;
    opacity: 1!important;
  }
  figure a img:hover{
    transform: scale(1.3);
  }
  .postgrid h2{font-weight: 500;margin: 8px 0 4px;}
  .postgrid h2 a {
    color: #333;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }


</style>

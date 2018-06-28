<template>

  <div class="wrapper">
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
        <a class="more c1" href="javascript:void(0)" title="查看更多置顶推荐的文章"><span>更多置顶推荐的文章</span>
          <Icon class="fr" type="chevron-right"></Icon>
        </a>
      </div>
    </div>

    <div class="category-wrapper box m-t10 triangle b">
      <section class="home_title clear">
        <h3 class="fl">最喜欢的文章</h3>
        <section class="title-tag fr">
          <ul>
            <li>
              <a href="javascript:void(0)" title="查看 简约 标签下的文章">简约</a>
            </li>
            <li>
              <a href="javascript:void(0)" title="查看 电影 标签下的文章">电影</a>
            </li>
            <li>
              <a href="javascript:void(0)" title="查看 生活 标签下的文章">生活</a>
            </li>
            <li>
              <a href="javascript:void(0)" title="查看 旅行摄影 标签下的文章">旅行摄影</a>
            </li>
            <li>
              <a href="https://yfdxs.com/tag/wordpress%e5%8e%9f%e5%88%9b%e4%b8%bb%e9%a2%98"
                 title="查看 wordpress原创主题 标签下的文章">wordpress原创主题</a>
            </li>
          </ul>
          <a href="javascript:void(0)" class="home_button c3" title="查看更多">
            <Icon class="fz20" type="android-add-circle"></Icon>
          </a>
        </section>
      </section>

      <section>
        <ul class="layout_ul">
          <li class="layout_li">
            <article class="postgrid">
              <figure>
                <img class="thumb"
                     src="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&amp;h=338&amp;w=600"
                     data-original="https://yfdxs.com/wp-content/themes/lensnews/includes/timthumb.php?src=https://pic.salongweb.com/sites/2/2014/10/qixingdali_122.jpg&amp;h=338&amp;w=600"
                     alt="骑行去大理生活" style="display: block;">
              </figure>
              <h2>骑行去大理生活</h2>
              <div class="homeinfo">
                <span class="category">珍藏记忆</span>
                <span class="date">2014-10-25</span>
                <span title="请先浏览本文章，再确定是否点赞！" class="like"><i class="icon-thumbs-up"></i><span class="count">85</span></span>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>

  </div>
</template>

<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          speed: 400,
          loop: true,
          autoplay: {
            delay: 3000,
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

  .swiper-slide {
    width: 800px;
    height: 450px;
    background-position: center;
    background-size: cover;
  }

  .sticky {
    float: right;
    width: 376px;
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

  .title-tag .home_button {
    color: #ccc;
    font-size: 16px;
    margin-left: 8px;
    padding-left: 12px;
    padding-right: 2px;
    border-left: 1px #eee solid;
  }
</style>

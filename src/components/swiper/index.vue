<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'index',
    data () {
      return {
        slides: [
          'http://cdn.huodongxing.com/Content/app/appom/993069407002304.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/893071387995808.jpeg',
          'http://cdn.huodongxing.com/Content/app/appom/793072403595469.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/843071389755810.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/223070723428571.jpg'
        ],
        // 轮播config
        swiperOption: {
          watchSlidesProgress: true,
          loop: true,
          loopedSlides: 5,
          speed: 500,
          autoplay: 3000,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // autoplay: 3000,
          slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          centeredSlides: true, // <span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
          paginationClickable: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }

        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  @import 'swiper/dist/css/swiper.css';
  img {
    border: none;
  }
  a {
    text-decoration: none;
  }
  .swiper {
    position: relative;
    width: 100%;
    margin: 10px 0 auto
  }
  .swiper .swiper-slide {
    width: 1080px;
    height: 350px;
    background: #fff;
  }

</style>

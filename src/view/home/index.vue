<template>
  <div>
     <i-swiper :rows = row></i-swiper>
    <div style="padding: 10px;">
       <Row>
          <i-col :span="20">
             <div style="height:600px; width: 100%; border:1px solid #eeeeee; background-color: #00a0e9">
                推荐
             </div>
          </i-col>
          <i-col :span="4">
            <div style="height: 200px; width: 100%; border:1px solid #eeeeee;background-color: #2baee9">
              热榜1
            </div>
            <div style="height: 200px; width: 100%; border:1px solid #eeeeee;background-color: #2baee9; margin-top: 10px">
              热榜2
            </div>
          </i-col>
       </Row>
    </div>
  </div>
</template>

<script>
  import iSwiper from 'components/swiper/index.vue'
  export default {
    name: 'index',
    data () {
      return {
        row: [
          'http://cdn.huodongxing.com/Content/app/appom/993069407002304.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/893071387995808.jpeg',
          'http://cdn.huodongxing.com/Content/app/appom/793072403595469.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/843071389755810.jpg',
          'http://cdn.huodongxing.com/Content/app/appom/223070723428571.jpg'
        ]
      }
    },
    components: {
      iSwiper
    }
  }
</script>

<style>

</style>

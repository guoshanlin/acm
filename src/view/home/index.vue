<template>
  <div>
     <i-swiper :rows = row></i-swiper>
    <div style="padding: 10px;">
       <Row>
          <i-col :span="19">
             <home-item :option="option[0]"></home-item>
             <home-item :option="option[1]"></home-item>
          </i-col>
          <i-col :span="5">
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
  import homeItem from 'components/home-item/index.vue'
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
        ],
        option: [
          {
            title: '精选活动',
            rows: []
          },
          {
            title: '最新活动',
            rows: []
          }
        ]
      }
    },
    components: {
      iSwiper,
      homeItem
    },
    methods: {
      loadChoice () {
        this.requestAjax('get', 'activitys', {checked: 1}).then((data) => {
          this.option[0].rows = data.data.rows
          this.option[1].rows = data.data.rows
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.loadChoice()
      })
    }
  }
</script>

<style>

</style>

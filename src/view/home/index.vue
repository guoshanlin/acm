<template>
  <div>
     <i-swiper :rows = row></i-swiper>
    <div style="padding: 10px;">
       <Row>
          <i-col :span="19">
             <home-item :option="option[1]"></home-item>
             <home-item :option="option[2]"></home-item>
             <home-item :option="option[0]"></home-item>
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
   /*       {id: 1, url: 'http://cdn.huodongxing.com/Content/app/appom/993069407002304.jpg'},
          {id: 2, url: 'http://cdn.huodongxing.com/Content/app/appom/893071387995808.jpeg'},
          {id: 3, url: 'http://cdn.huodongxing.com/Content/app/appom/793072403595469.jpg'},
          {id: 4, url: 'http://cdn.huodongxing.com/Content/app/appom/843071389755810.jpg'},
          {id: 5, url: 'http://cdn.huodongxing.com/Content/app/appom/223070723428571.jpg'}*/
        ],
        url: process.env.NODE_ENV === 'production' ? '' : process.env.API,
        option: [
          {
            title: '最新活动',
            rows: []
          },
          {
            title: '精选活动',
            rows: []
          },
          {
            title: '推荐活动',
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
      loadImportance () {
        this.requestAjax('get', 'activitys', {importance:1}).then((data) => {
          this.option[0].rows = data.data.rows
          this.option[1].rows = data.data.rows
        })
      },
      loadActivity () {
        for (let i = 0; i < 3; i++) {
          this.requestAjax('get', 'activitys', {importance:i}).then((data) => {
            if (i == 1) {
              this.row = []
              for (let n = 0; n < 5; n++) {
                this.row.push({id: data.data.rows[n].id, url: this.url + data.data.rows[n].posterUrl})
              }
            }
            this.option[i].rows = data.data.rows
          })
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.loadActivity()
      })
    }
  }
</script>

<style>

</style>

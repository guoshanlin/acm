<template>
  <div class="footer">
    <section class="slogan m-t20 c"
             style="background-image: url(https://yfdxs.com/wp-content/themes/lensnews/images/slogan_bg.jpg">
      <div style="position:relative; z-index: 2">
        <h3 class="fz32">聚热会</h3>
        <p class="fz15">做最有营养的活动</p>
        <a href="javascript:void(0)">联系我们</a>
      </div>
      <div class="bg"></div>
    </section>
    <div class="c3 copyright">
        @2007-2016 Coreware Software, Inc. | All Rights Reserved. 广州科微软件有限公司
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped>

  .slogan{
    height: 360px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: #eee;
    text-align: center;
    padding: 100px 20px;
    position: relative;
  }
  .slogan h3 {
    font-weight: 500;
    line-height: 36px;
  }
  .slogan p {
    font-size: 14px;
    margin: 20px 0;
  }
  .slogan a {
    background-color: rgba(255,255,255,.1);
    border: 1px rgba(255,255,255,.2) solid;
    padding: 12px 32px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    border-radius: 4px;
  }
  .slogan a:hover{
    background: rgba(255,255,255,.3);
  }
  .bg {
    background-color: rgba(0,0,0,.4);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .copyright{
    background-color: #fff;
    border-top: 1px #f2f2f2 solid;
    text-align: center;
    padding: 12px;
    line-height: 28px;
  }

</style>

<template>

  <div class="wrapper-content">
    <div class="app-header b c3">
      <Row type="flex" justify="end">
        <Col class="header-col">店铺认证</Col>
        <Col class="header-col">套餐升级</Col>
        <Col class="header-col">
        <Dropdown>
          <a href="javascript:void(0)" class="c3">
            我的展会
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>商户列表</DropdownItem>
            <DropdownItem>我的会展</DropdownItem>
            <DropdownItem divided>退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </Col>
      </Row>
    </div>
    <div class="cloud-left-menu">

      <div class="user-pic-wrapper posct">
        <img src="https://image-c.weimobwmc.com/sass-admin/ea93f479be764d85a94b74a99b92006c.png">
      </div>

      <Menu theme="dark" :active-name="activeNenu" width="160px"  class="menu-wrapper" @on-select="changeMenu">
        <template v-for="(item,i) in menuList">
          <MenuItem :name="item.path" :key="i"><Icon type="document-text"></Icon>{{item.title}}</MenuItem>
        </template>
      </Menu>

      <div class="c3 posct" style="position:absolute;width: 100%;height:40px;bottom:0;"><img width="60" src="../../assets/logo_core.png" ></div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeNenu: this.$route.path,
        menuList: [
          {path: "/meeting", title: "会务"},
          {path: "/finance/myAccount", title: "财务"},
          {path: "/marketing", title: "营销"},
          {path: "/promotion", title: "推广"}
        ]
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      changeMenu(name){
        this.$router.push(name)
      }
    }
  }
</script>

<style scoped>
  .wrapper-content{
    min-height: 100%;
    background-color: #f5f5f5;
  }
  .app-header{
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .header-col{
    margin-right: 24px;
  }
  .app-content{
    padding: 50px 0 0 160px;

  }
  .cloud-left-menu{
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    width: 160px;
    z-index: 1000;
    background: #222430;
  }
  .user-pic-wrapper{
    height: 120px;
  }
  .user-pic-wrapper img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .menu-wrapper{
    background: #222430;
  }
</style>

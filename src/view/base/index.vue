<template>
  <div class="wrapper fbox">
    <div class="wrapper-box b" style="min-width: 140px;margin-right: 10px;height: fit-content;">

      <Menu theme="light" :active-name="activeNenu" width="auto"  class="menu-wrapper" @on-select="changeMenu">
        <template  v-for="(item,i) in menuList">
        <MenuGroup :title="item.title">
          <template v-for="(childItem,c) in item.child">
            <MenuItem :name="childItem.path" :key="c"><Icon type="document-text"></Icon>{{childItem.title}}</MenuItem>
          </template>
        </MenuGroup>
        </template>
      </Menu>
    </div>
    <div class="flex">
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
          {
            title: "概况",
            child: [
              {path: "/base/overview", title: "活动概况"}
            ]
          },
          {
            title: "会前",
            child: [
              {path: "/base/info", title: "活动信息"},
              {path: "/base/entrylist", title: "门票管理"},
              {path: "/base/invitelist", title: "活动邀请"}
            ]
          },
          {
            title: "会中",
            child: [
              {path: "/base/sign", title: "签到管理"},
              {path: "/base/walllist", title: "微信墙"}
            ]
          },
          {
            title: "参会管理",
            child: [
              {path: "/base/userlist", title: "人员管理"},
              {path: "/base/orderlist", title: "订单管理"}
            ]
          },
          {
            title: "数据统计",
            child: [
              {path: "/base/joinStatistics", title: "参会统计"},
              {path: "/base/interactivityStatistics", title: "互动统计"},
              {path: "/base/flowedStatistics", title: "流量统计"}
            ]
          }
        ]
      }
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    watch: {
      '$route' (to, from) {
        this.activeNenu = to.path
      }
    },
    methods: {
      changeMenu(name){
        this.routePush(name, this.$route.query.id)
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    margin: 10px;
  }

</style>

<template>
  <div class="b wrapper-box">
    <h3 class="fz14">会议信息</h3>
    <Menu mode="horizontal" active-name="1" @on-select="menuSelect">
      <MenuItem name="1">基本信息</MenuItem>
      <MenuItem name="2">会议议程</MenuItem>
      <MenuItem name="3">周边信息</MenuItem>
    </Menu>
    <div class="content-wrapper m-t10 wrapper-border m-t20">

    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    created() {
      setTimeout(() => {

      }, 20)
    },
    methods: {
      menuSelect (name) {
        this.$Message.warning(name)
      },
    }
  }
</script>

<style scoped>

</style>

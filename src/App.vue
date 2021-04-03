<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }" id="app">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <MenuItem name="1-1">
            <Icon type="search"></Icon>
            <router-link to="/statistic"><span>查看进度</span></router-link>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="settings"></Icon>
            <router-link to="/lists"><span>当前</span></router-link>
          </MenuItem>
        </Menu>
      </Sider>
      <router-view></router-view>
    </Layout>
  </div>
</template>
<script>
//import lists from "./components/lists.vue";
export default {
  name: "App",
  components: {
    // lists,
    //  statistic,
  },
  data() {
    return {
      isCollapsed: false,
      isactive: false,
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
};
</script>
<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

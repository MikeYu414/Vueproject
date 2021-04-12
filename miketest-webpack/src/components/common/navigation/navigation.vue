<!-- navigation -->
<template>
  <div>
    <a-menu
      class="m-menu"
      v-model="current"
      mode="horizontal"
      theme="dark"
      :selectable="canSelect"
    >
      <a-menu-item key="mail">
        <router-link to="/home"
          ><a-icon type="home" />Home
        </router-link></a-menu-item
      >
      <!-- <a-menu-item key="app">
        <a-icon type="appstore" />APPS
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />Settings<a-icon type="caret-down" /></span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1"> Option 1 </a-menu-item>
          <a-menu-item key="setting:2"> Option 2 </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="contact">
        <a href="#" target="_self" rel="noopener noreferrer">
          <a-icon type="phone" />Contact Me
        </a>
      </a-menu-item> -->
      <Logininfo></Logininfo>
    </a-menu>
  </div>
</template>

<script>
import Logininfo from "@/components/common/loginuser/loginuser.vue"
export default {
  name: "Navigation",
  data() {
    return {
      current: ["-1"],
      canSelect: false,
    };
  },

  components: {
    Logininfo
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
@import "./scss/navigation.scss";
</style>
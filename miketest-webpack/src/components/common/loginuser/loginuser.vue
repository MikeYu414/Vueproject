<!-- login user info -->
<template>
  <span class="m-logininfo">
    <a-popover v-model="showUserMenu" placement="bottomRight" trigger="none">
      <a-menu slot="content" :selectable="false">
        <a-menu-item key="0">
          <a href="javascript:void(0);">Options</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="javascript:void(0);">Settings</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3"
          ><a href="javascript:void(0);">Help</a></a-menu-item
        >
        <a-menu-item key="4"
          ><a href="javascript:void(0);">About</a></a-menu-item
        >
        <a-menu-divider />
        <a-menu-item key="5"
          ><a @click="logoutClick" href="javascript:void(0);"
            >Log Out</a
          ></a-menu-item
        >
      </a-menu>
      <template slot="title">
        <div class="m-logininfo-label">Current User：</div>
        <span>{{ userInfo.userName }}</span>
      </template>

      <a-icon
        v-if="
          userInfo.userState == $root.Constant.userState.offLine
        "
        class="m-logininfo-login"
        type="user"
        @click="loginClick"
      />
      <a-avatar
        v-else
        class="m-logininfo-login"
        @click="loginClick"
        :src="userInfo.userPhoto"
      />
    </a-popover>
  </span>
</template>

<script>
export default {
  name: "Logininfo",
  props: ["componentDataProps"],
  data() {
    var defaultSetting = {
      userName: "Mike.Yu",
      userPhoto: "",
      userState: "",
    };
    $.extend(defaultSetting, this.componentDataProps, true);
    return {
      componentData: defaultSetting,
      showUserMenu: false,
    };
  },

  components: {},

  computed: {
    userInfo() {
      return this.$store.getters['userInfo/getUserInfo'];
    }
  },

  mounted() {},

  methods: {
    loginClick() {
      if (
        this.userInfo.userState !=
        this.$root.Constant.userState.offLine
      ) {
        this.showUserMenu = !this.showUserMenu;
      } else {
        this.$root.$data.commonState.ifShowLogin = !this.$root.$data.commonState
          .ifShowLogin;
      }
    },

    logoutClick() {
      var vm = this;
      vm.showUserMenu = false;
      this.$confirm({
        title: "Confirm log out?",
        onOk() {
          vm.$store.commit("userInfo/setToLogin", false);
          // logout
          vm.$axios.post("/userInfo.php", {
            type: 4,
          });
        },
      });
    },
  },
};
</script>
<style lang="scss">
@import "./scss/loginuser.scss";
</style>
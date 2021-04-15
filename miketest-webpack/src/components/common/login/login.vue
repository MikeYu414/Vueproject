<!-- login -->
<template>
  <div v-if="this.$root.$data.commonState.ifShowLogin" class="m-login">
    <div @click="switchLogin" class="m-login-mask"></div>
    <div class="m-login-panel" :style="{ height: (isLogin || showRegistSuccess) ? '330px' : '' }">
      <div class="m-login-header">
        <h3>{{ isLogin ? "登录" : "会员注册" }}</h3>
      </div>
      <template v-if="showRegistSuccess">
        <a-result
          class="m-login-showregist-sucess"
          status="success"
          title="注册成功"
        >
          <template #extra>
            <a-button key="gologin" type="primary" @click="goToLogin"> 去登录 </a-button>
          </template>
        </a-result>
      </template>
      <div class="m-login-body">
        <a-form-model
          ref="userForm"
          :model="form"
          :wrapper-col="wrapperCol"
          :rules="rules"
        >
          <a-form-model-item v-show="!isLogin" prop="username">
            <a-input v-model="form.username" placeholder="请输入昵称">
              <a-icon
                slot="prefix"
                type="robot"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item prop="account">
            <a-input v-model="form.account" placeholder="请输入账号">
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item prop="password">
            <a-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item v-show="!isLogin" prop="repassword">
            <a-input
              v-model="form.repassword"
              type="password"
              placeholder="请确认密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item v-show="!isLogin" prop="phone">
            <a-input
              v-model="form.phone"
              type="number"
              placeholder="请输入手机号"
            >
              <a-icon
                slot="prefix"
                type="phone"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <div v-show="isLogin" class="m-login-findpassword">
              <a-icon type="unlock" /><a>找回密码</a>
            </div>
            <a-button
              class="m-login-button"
              type="primary"
              html-type="submit"
              @click="loginClick"
              >{{ isLogin ? "登录" : "注册" }}</a-button
            >
          </a-form-model-item>
        </a-form-model>
      </div>
      <div v-show="showLoading">
        <a-spin class="m-login-loading" tip="登录中..." size="large" />
        <div class="m-login-loading-background"></div>
      </div>
      <div v-if="showRegistError" @click="showRegistError = !showRegistError">
        <a-alert
          class="m-login-error"
          type="error"
          message="账户或昵称已存在！"
          banner
        />
      </div>

      <div class="m-login-footer">
        <a class="m-login-swich" href="#" @click="switchLoginRegist">{{
          isLogin ? "免费注册" : "已有账号，立即登录"
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      wrapperCol: { span: 24 },
      isLogin: true,
      showLoading: false,
      showRegistError: false,
      showRegistSuccess: false,
      form: {
        account: "",
        password: "",
        phone: "",
        repassword: "",
        username: "",
      },
    };
  },

  components: {},

  computed: {
    ifShowLogin() {
      return this.$root.$data.commonState.ifShowLogin;
    },
    rules() {
      var vm = this;
      return {
        account: [
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error("请输入账号"));
              }
              var re = /^[a-zA-Z0-9_-]{4,16}$/;
              if (re.test(value)) {
                callback();
              } else {
                callback(
                  new Error("账户是由字母、数字、下划线组成，字母开头，4-16位")
                );
              }
            },
          },
        ],
        username: [
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (vm.isLogin) {
                callback();
              }
              if (!value) {
                callback(new Error("请输入昵称"));
              }
              var re = /^[\u4e00-\u9fa5a-zA-Z0-9_-]{1,12}$/;
              if (re.test(value)) {
                callback();
              } else {
                callback(
                  new Error("请输入最长12个字昵称（数字、字母、下划线、中文）")
                );
              }
            },
          },
        ],
        password: [
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error("请输入密码"));
              }
              var re = /.{6,18}/;
              if (re.test(value)) {
                callback();
              } else {
                callback(new Error("请输入6-18位密码"));
              }
            },
          },
        ],
        repassword: [
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (vm.isLogin) {
                callback();
              }
              if (!value) {
                callback(new Error("请确认密码"));
              }
              var re = /.{6,18}/;
              if (!re.test(value)) {
                callback(new Error("请输入6-18位密码"));
              }
              if (vm.form.password != vm.form.repassword) {
                callback(new Error("两次输入密码不一致"));
              }
              callback();
            },
          },
        ],
        phone: [
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (vm.isLogin) {
                callback();
              }
              if (!value) {
                callback(new Error("请输入手机号"));
              }
              var re = /^1\d{10}$/;
              if (re.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正确的手机号"));
              }
            },
          },
        ],
      };
    },
  },

  mounted() {},
  watch: {
    ifShowLogin(val, oldVal) {
      if (val) {
        this.isLogin = true;
      }
    },
  },
  methods: {
    switchLogin() {
      this.$root.$data.commonState.ifShowLogin = !this.$root.$data.commonState
        .ifShowLogin;
    },
    switchLoginRegist() {
      this.isLogin = !this.isLogin;
      this.resetForm();
    },
    resetForm() {
      this.$refs["userForm"].resetFields();
    },
    goToLogin() {
      this.showRegistSuccess = false;
    },
    loginClick() {
      var vm = this;
      vm.$refs["userForm"].validate((ifSuccess, fields) => {
        if (ifSuccess) {
          vm.showLoading = true;
          if (vm.isLogin) {
            //check login
            vm.checkLoginInfo();
          } else {
            //register
            vm.checkAccount(vm.registerAccount);
          }
        }
      });
    },
    checkLoginInfo() {
      var vm = this;
      vm.$axios
        .post("/userInfo.php", {
          account: vm.form.account,
          password: vm.form.password,
          login: true,
          type: 1,
        })
        .then(function (response) {
          vm.showLoading = false;
          if (response && response.data && response.data.status == 200) {
            var data = response.data[0];

            //success
            vm.$root.$data.commonState.ifShowLogin = false;
            var userInfo = {
              userState: vm.$root.$data.Constant.userState.onLine,
              userName: data.username,
              userAccount: data.account,
              userPhone: data.phone,
            };
            vm.$store.commit("userInfo/updateUserInfo", userInfo);
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.showLoading = false;
        });
    },

    registerAccount() {
      var vm = this;
      vm.$axios
        .post("/userInfo.php", {
          account: vm.form.account,
          password: vm.form.password,
          phone: vm.form.phone,
          username: vm.form.username,
          type: 2,
        })
        .then(function (response) {
          vm.showLoading = false;
          if (response && response.data != null) {
            if (response.data) {
              vm.showRegistSuccess = true;
              vm.isLogin = true;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.showLoading = false;
        });
    },

    checkAccount(successCallback) {
      var vm = this;
      vm.$axios
        .post("/userInfo.php", {
          account: vm.form.account,
          password: vm.form.password,
          type: 3,
        })
        .then(function (response) {
          if (response && response.data && response.data.status == 200) {
            var count = response.data.count;
            if (count == 0) {
              successCallback();
            } else {
              vm.showRegistError = true;
              setTimeout(() => {
                vm.showRegistError = false;
              }, 3000);
              vm.showLoading = false;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          vm.showLoading = false;
        });
    },
  },
};
</script>
<style lang="scss">
@import "./scss/login.scss";
</style>
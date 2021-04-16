<template>
  <div id="app" class="app">
    <a-layout>
      <a-layout-header v-if="!isWelcome" class="m-navigation">
        <Navigation :component-data-props="userInfo"></Navigation>
      </a-layout-header>

      <router-view/>
    </a-layout>

    <Login v-if="!isWelcome"></Login>
  </div>
</template>

<script>
import Navigation from "./components/common/navigation/navigation";
import Login from "@/components/common/login/login";
import { testData } from "@/data/testData";


export default {
  name: "App",
  mixins: [testData],
  data() {
    return {};
  },
  methods: {
    test(){
      debugger;
    }
  },
  components: {
    Navigation,
    Login
  },
  computed: {
    isWelcome() {
      if (this.$route.name == "Welcome") {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/_custom.scss";
</style>

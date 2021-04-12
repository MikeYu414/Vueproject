<template>
  <div id="app" class="app">
    <a-layout>
      <a-layout-header class="m-navigation">
        <Navigation :component-data-props="userInfo"></Navigation>
      </a-layout-header>

      <router-view/>
    </a-layout>

    <Login></Login>
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
  components: {
    Navigation,
    Login
  },
};
</script>

<style lang="scss">
@import "./scss/_custom.scss";
</style>

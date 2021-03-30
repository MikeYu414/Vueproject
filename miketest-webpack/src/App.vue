<template>
  <div id="app" class="app">
    <a-layout>
      <a-layout-header>
        <Navigation></Navigation>
      </a-layout-header>

      <a-layout-content>
        <Carousel class="m-carousel"></Carousel>
        <a-divider>
          <h3>Dogs</h3>
        </a-divider>
        <a-row
          type="flex"
          justify="space-around"
          class="m-cardgroup-3"
          align="middle"
        >
          <template v-for="i in 3">
            <a-col :key="i" :span="8">
              <Card class="m-card"></Card>
            </a-col>
          </template>
        </a-row>
        <h3>Dogs</h3>
        <a-row
          type="flex"
          justify="space-around"
          class="m-cardgroup-3"
          align="middle"
        >
          <template v-for="i in 3">
            <a-col :key="i" :span="8">
              <Card class="m-card"></Card>
            </a-col>
          </template>
        </a-row>
        <a-back-top />
      </a-layout-content>

      <a-layout-footer> Ant Design ©2018 Created by Mike.Yu </a-layout-footer>
    </a-layout>

    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/> -->
  </div>
</template>

<script>
import Navigation from "./components/common/navigation/navigation";
import Carousel from "./components/common/carousel/carousel";
import Card from "./components/common/card/card";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    Carousel,
    Card,
  },
};
</script>

<style lang="scss">
@import "./scss/_custom.scss";

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

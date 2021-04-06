<template>
  <div id="app" class="app">
    <a-layout>
      <a-layout-header class="m-navigation">
        <Navigation></Navigation>
      </a-layout-header>

      <a-layout-content class="m-content">
        <Carousel
          class="m-carousel"
          :component-data-props="carouselDatas"
        ></Carousel>
        <a-divider>
          <h3>Dogs</h3>
        </a-divider>
        <a-row
          type="flex"
          justify="space-around"
          class="m-cardgroup-3"
          align="middle"
        >
          <a-col v-for="(cardData, index) in cardDatas" :key="index" :span="8">
            <Card class="m-card" :component-data-props="cardData"></Card>
          </a-col>
        </a-row>

        <LinkInfor :component-data-props="linkInfors"></LinkInfor>

        <a-back-top />
      </a-layout-content>

      <Footer></Footer>
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
import LinkInfor from "./components/common/linkinfor/linkinfor";
import Footer from "./components/common/footer/footer";

import { testData } from "./data/testData";

export default {
  name: "App",
  mixins: [testData],
  data() {
    return {};
  },
  components: {
    Navigation,
    Carousel,
    Card,
    LinkInfor,
    Footer
  },
};
</script>

<style lang="scss">
@import "./scss/_custom.scss";
</style>

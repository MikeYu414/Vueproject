<!-- home page -->
<template>
  <div class="m-home">
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
        <a-col
          v-for="(cardData, index) in cardDatas"
          :key="index"
          :xs="24"
          :sm="8"
        >
          <Card class="m-card" :component-data-props="cardData"></Card>
        </a-col>
      </a-row>

      <LinkInfor :component-data-props="linkInfors"></LinkInfor>

      <a-back-top />
    </a-layout-content>

    <Footer></Footer>
  </div>
</template>

<script>
import Carousel from "@/components/common/carousel/carousel";
import Card from "@/components/common/card/card";
import LinkInfor from "@/components/common/linkinfor/linkinfor";
import Footer from "@/components/common/footer/footer";
import { testData } from "@/data/testData";

export default {
  name: "homepage",
  mixins: [testData],
  data() {
    return {};
  },

  components: {
    Carousel,
    Card,
    LinkInfor,
    Footer,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
@import "./scss/home.scss";
</style>
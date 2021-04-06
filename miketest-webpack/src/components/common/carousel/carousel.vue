<!-- carousel -->
<template>
  <a-carousel arrows :autoplay="componentData.auto">
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px; zindex: 1"
    >
      <a-icon type="left" />
    </div>
    <div
      slot="nextArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right" />
    </div>
    <img
      v-for="(item, index) in componentData.images"
      :key="index"
      class="m-carousel-img"
      :src="item.photoUrl"
      :alt="item.alt"
    />
  </a-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: ["componentDataProps"],
  data() {
    var tempSetting = {};
    $.extend(tempSetting, this.componentDataProps, true);
    return {
      componentData: tempSetting,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
@import "./scss/carousel.scss";
</style>
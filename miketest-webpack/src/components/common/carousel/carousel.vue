<!-- carousel -->
<template>
  <a-carousel arrows autoplay>
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
    <img src="../../../assets/photos/dog5.jpeg" class="m-carousel-img" alt="dog" />
    <img src="../../../assets/photos/dog2.jpeg" class="m-carousel-img" alt="dog" />
    <img src="../../../assets/photos/dog3.jpeg" class="m-carousel-img" alt="dog" />
    <img src="../../../assets/photos/dog4.jpeg" class="m-carousel-img" alt="dog" />
  </a-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: [],
  data() {
    return {
      
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
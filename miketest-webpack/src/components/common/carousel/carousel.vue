<!-- carousel -->
<template>
  <a-carousel autoplay>
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px; zindex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <img src="../../../assets/photos/dog5.jpeg" alt="dog" />
    <img src="../../../assets/photos/dog2.jpeg" alt="dog" />
    <img src="../../../assets/photos/dog3.jpeg" alt="dog" />
    <img src="../../../assets/photos/dog4.jpeg" alt="dog" />
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
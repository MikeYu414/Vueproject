<!-- welcome page -->
<template>
  <div class="m-welcome">
    <div class="m-welcome-background"></div>
    <section>
      <div class="m-welcome-first">
        <div>
          <img class="m-welcome-logo" :src="stars" alt="" />
          <h1>Welcome to Mike's home!</h1>
          <h5>
            Build with <strong>Vue</strong> and <strong>Ant-Design</strong> in
            my spare time
          </h5>
          <router-link to="/home"><a-button ghost size="large"> Go! </a-button></router-link>
          
          <a-icon style="color: #fff" type="down" />
        </div>
      </div>
    </section>
    <section>
      <div class="m-welcome-second"></div>
    </section>
    <section></section>
    <section></section>
  </div>
</template>

<script>
import stars from "@/assets/photos/stars.jpg";
export default {
  name: "welcome",
  data() {
    return {
      stars,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {

  },
};
</script>
<style lang="scss">
@import "./scss/welcome.scss";
</style>
<template>
  <div id="app" class="app">
    <Navigation></Navigation>
    <Carousel></Carousel>
    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/> -->
    
  </div>
</template>

<script>
import Navigation from "./components/common/navigation/navigation"
import Carousel from "./components/common/carousel/carousel"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Navigation,
    Carousel
  }
}
</script>

<style lang="scss">
@import "./scss/_custom.scss";

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

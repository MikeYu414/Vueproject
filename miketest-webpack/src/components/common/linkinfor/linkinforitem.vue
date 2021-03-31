<!-- link infor item -->
<template>
  <div class="m-linkinforitem-container">
    <h2>{{componentData.title}}</h2>
    <div class="m-linkinforitem-text" v-for="(item, key) in componentData.links" :key="key">
      <a target="_blank" :href="item.url">{{item.name}}</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "linkinforitem",
  props: ["componentDataProps"],
  data() {
    var defaultSetting = {
      title: "",
      links: [],
    };
    $.extend(defaultSetting, this.componentDataProps, true);
    return {
      componentData: defaultSetting,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
@import "./scss/linkinfor.scss";
</style>
<!-- footer -->
<template>
  <a-layout-footer class="">
    {{componentData.copyrightInfo}}
  </a-layout-footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["componentDataProps"],
  data() {
    var defaultSetting = {
      copyrightInfo: 'Ant Design ©2021 Created by Mike.Yu'
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
</style>
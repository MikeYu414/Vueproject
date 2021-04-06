<!-- card -->
<template>
  <a :href="componentData.linkUrl" target="_blank" :title="componentData.cardDescription">
    <a-card hoverable>
      <img slot="cover" alt="example" :src="componentData.photoUrl" />
      <a-card-meta :title="componentData.cardTitle">
        <template slot="description">
          {{ componentData.cardDescription }}
        </template>
      </a-card-meta>
    </a-card>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: ["componentDataProps"],
  data() {
    var defaultSetting = {
      photoUrl: "../../../assets/photos/dog6.jpeg",
      cardTitle: null,
      cardDescription: null,
      linkUrl: "",
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
<!-- linkinfor -->
<template>
  <div class="m-linkinfo-container">
    <a-row
      type="flex"
      justify="space-around"
      class="m-linkinfo-row"
      align="middle"
    >
      <template v-for="(item, key) in settings">
        <a-col class="m-linkinfo-col" :key="key" :span="24 / settings.length">
          <LinkInforItem :component-data-props="item"></LinkInforItem>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script>
import LinkInforItem from "./linkinforitem.vue";

export default {
  name: "LinkInfor",
  props: ["componentDataProps"],
  components: {
    LinkInforItem,
  },
  data() {
    return {
      settings: this.componentDataProps,
    };
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
@import "./scss/linkinfor.scss";
</style>
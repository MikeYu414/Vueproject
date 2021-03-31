<!-- linkinfor -->
<template>
  <a-row
    type="flex"
    justify="space-around"
    class="m-linkinfo-row"
    align="middle"
  >
    <template v-for="(item, key) in settings.linkInfors">
      <a-col :key="key" :span="24 / settings.linkInfors.length">
        <LinkInforItem :component-data-props="item"></LinkInforItem>
      </a-col>
    </template>
  </a-row>
</template>

<script>
import LinkInforItem from "./linkinforitem.vue";

export default {
  name: "LinkInfor",
  components: {
    LinkInforItem,
  },
  data() {
    var defaultSetting = {
      linkInfors: [
        {
          title: "title1",
          links: [
            {
              name: "百度",
              url: "https://www.baidu.com",
            },
            {
              name: "搜狗",
              url: "https://www.sogou.com",
            },
            {
              name: "Ant Design",
              url: "https://www.antdv.com",
            },
          ],
        },
        {
          title: "title2",
          links: [
            {
              name: "百度",
              url: "https://www.baidu.com",
            },
            {
              name: "搜狗",
              url: "https://www.sogou.com",
            },
            {
              name: "Ant Design",
              url: "https://www.antdv.com",
            },
          ],
        },
        {
          title: "title3",
          links: [
            {
              name: "百度",
              url: "https://www.baidu.com",
            },
            {
              name: "搜狗",
              url: "https://www.sogou.com",
            },
            {
              name: "Ant Design",
              url: "https://www.antdv.com",
            },
          ],
        },
      ],
    };

    return {
      settings: defaultSetting,
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
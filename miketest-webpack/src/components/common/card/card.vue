<!-- card -->
<template>
  <a-card hoverable>
    <img
      slot="cover"
      alt="example"
      src="../../../assets/photos/dog6.jpeg"
    />
    <a-card-meta title="Test title">
      <template slot="description">
        test
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="scss">
</style>
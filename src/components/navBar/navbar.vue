<template>
  <div>
      <van-nav-bar
      v-if="navBarObj.show"
        :title="navBarObj.name"
        :left-text="navBarObj.leftText"
        :right-text="navBarObj.rightText"
        left-arrow
        @click-left="navBarObj.onClickLeft()"
        @click-right="navBarObj.onClickRight()"
    />
      <van-nav-bar
      v-else
        :title="navBarObj.name"
        :left-text="navBarObj.leftText"
        left-arrow
        @click-left="navBarObj.onClickLeft()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
  },
  props: {
      navBarObj: {
          type: Object
      }
  }
};
</script>
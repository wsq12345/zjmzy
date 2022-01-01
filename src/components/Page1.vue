<template>
  <div class="page1">
    <div>
      <div class="big" v-html="content.article1"></div>
      <div class="big" v-html="content.article2"></div>
      <div class="small margin" v-html="content.article3"></div>
      <div class="small" v-html="content.article4"></div>
      <div class="small" v-html="content.article5"></div>
      <div class="link">
        <a href="javascript:void(0)">进一步了解</a>
        <i class="iconfont icon-xiaoyuhao"></i>
        <a href="javascript:void(0)">选购</a>
        <i class="iconfont icon-xiaoyuhao"></i>
      </div>
    </div>
    <img v-lazy="content.src">
  </div>
</template>

<script>
export default {
  name: "Page1",
  props: {
    content: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page1 {
  margin-top: 100px;
  .big {
    font-size: 32px;
    &:first-child {
      font-size: 28px;
    }
  }
  .small {
    font-size: 16px;
    color: #848484;
  }
  .margin {
    margin-top: 10px;
  }
  .link {
    margin: 20px 0 50px 0;
    font-size: 20px;
    a {
      text-decoration: none;
      color: #0572ca;
      &:nth-child(3) {
        margin-left: 50px;
      }
    }
  }
  img {
    width: 1000px;
  }
}
</style>

<template>
  <div class="main">
    <div class="content">
      <div class="product">
        Product
      </div>
      <sale></sale>
    </div>
  </div>
</template>

<script>
import Sale from '@/components/Sale.vue'
export default {
  components: { Sale },
  name: 'Product',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  .content {
    min-width: 1000px;
    display: inline-block;
  }
}
</style>

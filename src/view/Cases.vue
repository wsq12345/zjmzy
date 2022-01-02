<template>
  <div class="main">
    <div class="content">
      Cases
      <page-2></page-2>
      <sale></sale>
    </div>
  </div>
</template>

<script>
import Page2 from '@/components/Page2.vue'
import Sale from '@/components/Sale.vue'
export default {
  name: 'Cases',
  components: { Page2, Sale },
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

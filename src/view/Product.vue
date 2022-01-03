<template>
  <div class="main">
    <div class="content">
      <div class="product">
        <div class="left">
          <div class="header">宝桢研磨产品类别</div>
          <ul><li v-for="item in types" :key="item.index"><a href="javascript:void(0)">{{ item.name }}</a></li></ul>
          <div class="header">联系我们</div>
        </div>
        <div class="right"></div>
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
      types: [
        { id:1, name: '全自动振动研磨生产线系列' },
        { id:2, name: '三次元振动研磨机系列' },
        { id:3, name: '高速离心式抛光机系列' },
        { id:4, name: '流动式光饰机系列' },
        { id:5, name: '磁力抛光机系列' },
        { id:6, name: '高效卧式振动研磨机系列' },
        { id:7, name: '滚筒研磨机系列' },
        { id:8, name: '振动筛选机系列' },
        { id:9, name: '工业用烘乾机系列' },
        { id:10, name: '工业用脱水机系列' },
        { id:11, name: '小型振动机系列' },
        { id:12, name: '研磨石抛光石系列' },
        { id:13, name: '研磨剂抛光剂系列' },
        { id:14, name: '多功能拖拽研磨抛光机' }
      ]
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
    .product {
      overflow: hidden;
      .left {
        text-align: left;
        float: left;
        .header {
          width: 200px;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          padding-left: 10px;
          font-weight: 600;
          background: #4e4e4e;
          color: white;
        }
        ul {
          list-style-type: none;
          margin-bottom: 10px;
          li {
            height: 30px;
            padding-left: 20px;
            line-height: 30px;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            background: #eeeeee;
            a {
              text-decoration: none;
              color: black;
              &:hover {
                color: red;
              }
            }
          }
        }
      }
      .right {
        float: left;
      }
    }
  }
}
</style>

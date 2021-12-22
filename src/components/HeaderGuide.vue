<template>
  <header>
    <div class="paten1"></div>
    <div class="paten2">
      <ul class="menu_list">
        <li>
          <a href="javascript:void(0)">
            <img src="../assets/imgae/铭logo.gif">
          </a>
        </li>
        <li v-for="menu in menus" :key="menu.index">
          <a href="javascript:void(0)">
            {{ menu.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="paten3">
      <ul class="menu_list">
        <li v-for="item in mach" :key="item.index">
          <img :src="item.src" alt="">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderGuide",
  data() {
    return {
      menus: [
        { id: 1, name: "Home 网站首页" },
        { id: 2, name: "Product 产品中心" },
        { id: 3, name: "Service 技术服务" },
        { id: 4, name: "Cases 样品展示" },
        { id: 5, name: "About us 关于我们" },
      ],
      mach: [
        { id: 1, name: "磁力研磨机", src: require("@/assets/imgae/磁力研磨机.png") },
        { id: 2, name: "流动光饰机", src: require("@/assets/imgae/流动光饰机.png") },
        { id: 1, name: "震动研磨机", src: require("@/assets/imgae/震动研磨机.png") },
        { id: 1, name: "行星滚抛机", src: require("@/assets/imgae/行星滚抛机.png") },
        { id: 1, name: "滚筒光饰机", src: require("@/assets/imgae/滚筒光饰机.png") },
        { id: 1, name: "研磨块研磨液", src: require("@/assets/imgae/研磨块研磨液.png") }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.paten1 {
  background: rgb(68,68,68);
  height: 40px;
}
.paten2 {
  background: rgb(51, 51, 51);
  height: 40px;
  text-align: center;
  .menu_list,
  .menu_list li,
  .menu_list li a {
    width: auto;
    display: block;
  }
  .menu_list {
    display: inline-block;
    li {
      float: left;
      margin: 0 40px;
      a {
        height: 40px;
        font-size: 12px;
        line-height: 40px;
        color: white;
        text-decoration: none;
        text-align: center;
        display: flex;
        align-items:center;
        justify-content:center;
        &:hover {
          color: red;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
.paten3 {
  background: rgb(246, 246, 246);
  height: 100px;
  text-align: center;
  .menu_list,
  .menu_list li,
  .menu_list li a {
    width: auto;
    display: block;
  }
  .menu_list {
    display: inline-block;
    overflow: hidden;
    li {
      float: left;
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100px;
      align-items:center;
      justify-content:center;
      margin: 0 30px;
      img {
        width: 30px;
        height: 30px;
        margin: 0 auto;
      }
      span {
        padding-top: 10px;
      }
    }
  }
}
</style>

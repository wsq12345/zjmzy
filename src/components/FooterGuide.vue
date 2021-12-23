<template>
  <footer class="footer">
    <div class="paten1">
      <div class="content">
        <div class="logo">
          <img src="../assets/imgae/铭logo.gif">
          <i class="iconfont icon-xiaoyuhao"></i>
          铭之远研磨设备有限公司
        </div>
        <div>
          <ul>
            <li v-for="menu in menus" :key="menu.index">
              <a href="javascript:void(0)">
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="paten2"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterGuide",
  data() {
    return {
      menus: []
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  .paten1 {
    background: rgb(242, 242, 242);
    height: 400px;
    text-align: center;
    .content {
      display: inline-block;
      margin-top: 50px;
      .logo {
        display: flex;
        align-content: center;
        img {
          width: 16px;
          height: 16px;
        }
        i {
          font-size: 16px;
          margin: 0 5px 0 10px;
        }
      }
    }
  }
  .paten2 {
    background: rgb(68, 68, 68);
    height: 100px;
  }
}
</style>

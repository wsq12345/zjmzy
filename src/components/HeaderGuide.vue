<template>
  <header>
    <div class="paten1"></div>
    <div class="paten2">
      <ul class="menu_list">
        <li>
          <a href="#">
            公司信息
          </a>
        </li>
        <li>
          <a href="#">
            企业文化
          </a>
        </li>
        <li>
          <a href="#">
            业务体系
          </a>
        </li>
        <li>
          <a href="#">
            联系我们
          </a>
        </li>
      </ul>
    </div>
    <div class="paten3"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderGuide",
  data() {
    return {};
  },
};
</script>

<style scoped>
.paten1 {
  background: rgba(48, 47, 47, 0.8);
  height: 2rem;
}
.paten2 {
  background: rgb(48, 47, 47);
  height: 2rem;
}
.menu_list,
.menu_list li,
.menu_list li a {
  width: auto;
  display: block;
}
.menu_list {
  margin-left: 50%;
  transform: translateX(-50%);
}
.menu_list li {
  float: left;
}
.menu_list li a {
  height: 2rem;
  padding: 0 1rem;
  font-size: 14px;
  line-height: 2rem;
  color: white;
  text-decoration: none;
  text-align: center;
}
.menu_list li a:hover {
  color: red;
}
</style>

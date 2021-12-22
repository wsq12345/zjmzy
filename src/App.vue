<template>
  <div id="app" v-cloak>
    <header-guide></header-guide>
    <router-view/>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import HeaderGuide from '@/components/HeaderGuide'
import FooterGuide from '@/components/FooterGuide'
export default {
  name: 'App',
  components: { HeaderGuide, FooterGuide }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
*{
  margin: 0;
  padding: 0;
}
[v-cloak]{
  display: none;
}
</style>

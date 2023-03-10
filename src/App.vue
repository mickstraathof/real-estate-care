<template>
  <Header />
    <router-view />
  <Footer />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Footer,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app{
  min-height: 100vh;
  margin: 0;
}

header:first-of-type{
  z-index: 1;
  position: fixed;
  top: 0;
  z-index: 3;
}

header:nth-of-type(2){
  position: fixed;
  bottom: 0;
}
</style>


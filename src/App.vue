<template>
<!--  <HelloWorld />-->
  <Header />
    <p><!-- temp filling --></p>
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
    Footer
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
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

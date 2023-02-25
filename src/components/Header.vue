<template>
  <v-toolbar>
    <div class="logo-container">
      <div class="logo">
        <div class="inner-logo">

        </div>
      </div>
      <div class="logo-text">
        <h1>Real Estate Care</h1>
        <p>Caring is in our nature</p>
      </div>
    </div>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header-component'
  }
</script>

<style>

  .logo-container{
    height: 100%;
    width: 100%;
    position: relative;
  }

  .logo{
    height: 60%;
    border: .1em solid black;
    width: 10%;
    margin: 0;
    position: absolute;
    top: 17%;
    left: 5%;
    transform: translateY(-50%);
    float: left;
    transform: rotateY(0deg) rotate(45deg);
  }

  .inner-logo{
    width: 30%;
    height: 30%;
    position: absolute;
    bottom: 15%;
    right: 15%;
    border-top: .1em solid black;
    border-left: .1em solid black;
  }

  .logo-text{
    position: absolute;
    left: 20%;
    font-size: 12px;
    font-family: monospace;
  }
</style>
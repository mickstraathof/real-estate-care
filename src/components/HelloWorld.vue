<template>
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

  <div class="left-bubble">

  </div>

  <div class="right-bubble">
    <div class="inner-bubble">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .logo-container{
    width: fit-content;
    display: flex;
    gap: 2em;
    position: absolute;
    top: 3em;
    left: 3em;
    z-index: 1;
  }

  .logo{
    width: 8dvh;
    height: 8dvh;
    border: .3em solid black;
    /*position: absolute;*/
    /*top: 2em;*/
    /*left: 2em;*/
    transform: rotateY(0deg) rotate(45deg);
    position: relative;
  }

  .inner-logo{
    float: left;
    width: 30%;
    height: 30%;
    position: absolute;
    bottom: 15%;
    right: 15%;
    border-top: .3em solid black;
    border-left: .3em solid black;
  }

  .logo-text{
    float: right;
    font-family: monospace;
    font-size: 1.8em;
  }

  .left-bubble{
    position: absolute;
    bottom: -10%;
    left: 0;
    height: 20dvh;
    width: 50dvh;
    background-color: rgb(0, 180, 162);
    border-top-right-radius: 100% 100%;
  }

  .right-bubble{
    position: absolute;
    top: -10%;
    right: 0;
    height: 30dvh;
    width: 80dvh;
    border-bottom-left-radius: 100% 100%;
    background-color: rgb(0, 180, 162);
  }

  .inner-bubble{
    position: absolute;
    top: 0;
    right: 0;
    height: 27dvh;
    width: 65dvh;
    border-bottom-left-radius: 100% 100%;
    background-color: rgb(20, 27, 31);
  }
</style>

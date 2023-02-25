<template>
  <div class="content">
    <div class="left-bubble">

    </div>

    <div class="right-bubble">
      <div class="inner-bubble">

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Dashboard-component'
  }
</script>


<style>
  .content{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .left-bubble{
    position: absolute;
    bottom: -5%;
    left: 0;
    height: 10%;
    width: 50%;
    background-color: rgb(0, 180, 162);
    border-top-right-radius: 100% 100%;
  }

  .right-bubble{
    position: absolute;
    top: -5%;
    right: 0;
    height: 12%;
    width: 60%;
    border-bottom-left-radius: 100% 100%;
    background-color: rgb(0, 180, 162);
  }

  .inner-bubble{
    position: absolute;
    top: 0;
    right: 0;
    height: 80%;
    width: 80%;
    border-bottom-left-radius: 100% 100%;
    background-color: rgb(20, 27, 31);
  }
</style>
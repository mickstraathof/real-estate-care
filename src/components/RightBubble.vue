<template>
    <div class="right-bubble">
      <div class="inner-bubble">

      </div>
    </div>
</template>


<script>
    export default{
        name: 'bubbles-styling',
    }
</script>


<style scoped>
  .right-bubble{
    position: fixed;
    top: 2%;
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
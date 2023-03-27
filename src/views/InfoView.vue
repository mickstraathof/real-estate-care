<template>
    <RightBubble />
    <div class="content">
        <h2>Kennisbank</h2>
    </div>
    <LeftBubble />
</template>



<script>
import RightBubble from '@/components/RightBubble.vue';
import LeftBubble from '@/components/LeftBubble.vue';
export default{

    components: {
        RightBubble,
        LeftBubble,
    }

}
</script>


<style scoped>
    .content{
    width: 100%;
    height: 100%;
    padding-top: 4em;
    padding-bottom: 4em;
    z-index: 1;
  }
</style>
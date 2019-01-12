<template>
  <div>
    <p>{{greeting}} World!</p>
    <other-h2></other-h2>
  </div>
</template>

<script>
  import app2 from "./app2.vue"
  export default{
    data: function(){
      return {greeting: "Hello"}
    },
    components:{'other-h2':app2}
  }
</script>

<style scoped>
  p{
    font-size: 2em;
    text-align: center;
  }
</style>
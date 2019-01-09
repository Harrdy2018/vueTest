<template>
    <p>{{message}} world!</p>
</template>
<script>
    module.exports={
        data: function () {
            return {message: "hello"} 
        }
    }
</script>
<style scoped>
    p{
        font-size: 2em;
        text-align: center;
    }
</style>
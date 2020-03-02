<template>
    <div class="Header">
        <router-link to="/" :style="{color:this.$route.path==('/content'||'/')?'red':'darkcyan'}">商品页</router-link>
        <!-- <router-link to='/shopdetail' :style="{color:this.$route.path=='/shopdetail'?'red':'darkcyan'}">详情页</router-link> -->
        <router-link to="/car" :style="{color:this.$route.path=='/car'?'red':'darkcyan'}">购物车页</router-link>
    </div>
</template>
<script>
export default {
    name:'Header',
    data() {
        return {
            is:true,
            redcolor:'red',
        }
    },
    mounted() {
        console.log(this.$route);
        
        
    },
}
</script>
<style lang="scss" scoped>
    .Header{
        margin-bottom: 30px;
        font-size: 16px;
        a{
            color:$fontColor;
            padding:0 20px;
            text-decoration: none;
        }
        a:hover{
            color: rgb(146, 2, 2) !important
        }
    }

</style>
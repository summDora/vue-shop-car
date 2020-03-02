<template>
    <div class="ShopDetail">
        <div class="shop">
            <p class="name">{{shopdetail.name}}</p>
            <p class="title">{{shopdetail.title}}</p>
            <p class="price">{{shopdetail.price}}</p>
           <!--  <button class="buy">点击购买</button> -->
            <Button type="primary">点击购买</Button>
            <AddCar :shopinfo=shopdetail />
        </div>
    </div>
</template>
<script>
import AddCar from'./../components/AddCar'
export default {
    components:{
        AddCar,
    },
    data() {
        return {
            is:true,
            shopdetail:{},
        }
    },
    mounted() {
        console.log(this.$route);
        this.shopdetail=this.$route.query
        console.log(this.shopdetail==null);
    },
}
</script>
<style lang="scss" scoped>
.shop{
    .AddCar{
        display: inline-block
    }
}    
</style>
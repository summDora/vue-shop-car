<template>
    <div class="Content">
        <div class="product" v-for="(item,index) in contentlist" :key="index">
            <p class="name">{{item.name}}</p>
            <p class="title">{{item.title}}</p>
            <span class="price">{{item.price}}</span>
            <Button type="primary" @click="$router.push({path:'/shopdetail', query:item})">查看详情</Button>
            <AddCar :shopinfo=item />
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
            contentlist:[],
        }
    },
    mounted() {
        //获取本地数据
        this.$ajax.get('http://192.168.199.111:8080/shop.json').then((res) => {
            this.contentlist=res.data
        })
         
    },
    methods: {
       
    },
}
</script>
<style lang="scss" scoped>
.Content{
    display: flex;
    width: 800px;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    .product{
        width: 30%;
        min-width: 100px;
        margin-bottom: 30px;
        font-size: 16px;
        .price{
            display: block;
            margin-bottom: 10px;
        }
        p{
            line-height: 24px;
        }
        .AddCar{
            display: inline-block;
        }
       
    }
}    
</style>
<template>
    <div class="AddCar">
        <Button type="error" style="padding:0 8px;" @click="addcar()">添加购物车</Button>
    </div>
</template>
<script>
export default {
    name:'AddCar',
    props:{
        shopinfo:{}
    },
    methods: {
        addcar(){
            let item=this.shopinfo
            item.amount=1;

            let shoplist = JSON.parse(localStorage.getItem("shoplist"));
            if(shoplist== null){
                shoplist = [];
                shoplist.push(item)
                localStorage.setItem('shoplist',JSON.stringify(shoplist))
            }else{
                shoplist =JSON.parse(localStorage.getItem("shoplist"))
                let same=false;// 不相同 == 无重复
                if(shoplist.length!=0){
                    shoplist.every(function(index){
                        if(index.id===item.id){
                            index.amount++;
                            same=true; // 相同==重复 
                            return false;
                            
                        }else{
                            same=false;  // 不相同 == 无重复 
                            return true;
                        }
                    })
                    //不重复时添加新商品
                    if(!same){
                        shoplist.push(item)
                        this.$Message.success('添加到购物车成功');
                    }
                    localStorage.setItem('shoplist',JSON.stringify(shoplist))
                }
            }
        }
    },
}
</script>

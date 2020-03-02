<template>
    <div class="ShopAmount">
        <span @click="subAmount()">-</span>
        <div class="number" >{{row.amount}}</div>
        <span @click="addAmount()">+</span>
    </div>
</template>
<script>
export default {
    name:'ShopAmount',
    props:{
        row:{},
    },
    data() {
        return {

        }
    },
    methods: {
        addAmount(){
            let row=this.row;
            row.amount++;
            row.total=row.price*row.amount;
            this.setitem(row)
        },
        subAmount(){
            let row=this.row;
            if(row.amount<=1){
                this.$Message.error({
                    content: '商品数量不可少于1',
                    duration: 1.5,
                    closable: true
                });
            }else {
                row.amount--;
                row.total=row.price*row.amount
            }
            this.setitem(row)
        },
        setitem(row){
            let shoplist=JSON.parse(localStorage.getItem("shoplist"))
            shoplist.every(function(item){
                if(item.id == row.id){
                    item.amount = row.amount
                    item.total = row.total
                    return false
                }else{
                    item.total=item.price*item.amount
                    return true
                }
            })
            localStorage.setItem('shoplist',JSON.stringify(shoplist))
        }
    },
}
</script>
<style lang="scss" scoped>
     .ShopAmount{
        span,div{
            display: inline-block;
            height: 30px;
            min-width: 30px;
            line-height: 30px;
        }
        div{
            border: 1px solid $graybgcolor;
            min-width: 60px;
        }
    }
</style>

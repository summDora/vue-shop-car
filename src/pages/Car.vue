<template>
    <div class="Car">
        <Table border ref="selection"  :columns="columns" :data="shoplist"
        @on-select-all="selectall"
        @on-selection-change="selectchange"
        @on-select="selectone"
        >
            <template slot-scope="{ row, index }" slot="action">
                <span @click="show(index)">移入收藏夹</span>
                <span @click="remove(index)">删除</span>
            </template>
            <template slot-scope="{row}" slot="inputnumber"> 
                <ShopAmount :row=row />
            </template>
        </Table>
        <div class="totalinfo">
            <div class="option">
                <span class="delselect" @click="del">删除</span>
                <span class="deluseless">清除失效宝贝</span>
                <span class="love">移入收藏夹</span>
                <span class="share">分享</span>
            </div>
           <div class="right">
                <span class="amount">已选商品<span style="color:red">{{amount}}</span>件</span>
                <span class="total">合计（不含运费）:<span style="color:red;font-size:22px;">{{total}}</span>元</span>
           </div>
        </div>
    </div>
</template>

<script>
import ShopAmount from './../components/ShopAmount'
export default {
    components:{
        ShopAmount
    },
    data() {
        return {
            amount:0,
            total:0,
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center',
                },
                {
                    title: '商品信息',
                    key: 'name'
                },
                {
                    title: '单价',
                    key: 'price'
                },
                {
                    title: '数量',
                    slot: 'inputnumber',
                    align:'center',
                    key: 'amount'
                },
                {
                    title: '金额',
                    key: 'total',
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 140,
                    align: 'left'
                },
                
            ],
            shoplist: []
        }
    },
    created(){
        this.shoplist=JSON.parse(localStorage.getItem("shoplist"));
        this.shoplist.map(function(item){
            item.total=item.price*item.amount
        })
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
            
        },
        selectall(){
            /* console.log('allallallallallall');  */  
        },
        selectchange(selection){
            this.amount=selection.length;
            let tol=0;
            selection.map((item)=>{
                tol+=item.total
                
            })
            this.total=tol
        },
        selectone(row){
            console.log(row);
            
        },
        del(){
            if(this.amount>0){
                alert('准备删除这两件商品')
            }else{
                this.$Message.error({
                    content: '请先选择要删除的商品',
                    duration: 1.5,
                    closable: true
                });
            }
        },
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.shoplist.splice(index, 1);
        },
    }
}
</script>
<style lang="scss" scoped>
.Car{
    margin: 0 auto;
    min-height: calc(100vh - 84px);
    span{
        color: #515a6e;
        display: block;
        cursor: pointer;
    }
    span:hover{
        color: $primary
    }
    .totalinfo{
        position: fixed;
        height: 60px;
        background:$graybgcolor;
        bottom: 0px;
        text-align: left;
        line-height: 70px;
        span{
            display: inline-block;
            padding:0px 10px;
        }
        span:hover{
            color:$errorcolor
        }
        .left,.option{
            float: left;
        }
        .right{
            float: right;
        }
    }
}
.Car,.totalinfo
{
    width: 900px;
    min-width: 900px;
}    
</style>
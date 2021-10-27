<template>
    <div class="products">
        <button v-on:click="consolelog">Console log local cart</button>
        <table cellspacing="100px">
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Amount</th>
            </tr>
            <tr v-for="item in items" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.item}}</td>
                <td class="product-image"><img v-bind:src="item.src" width="200px"></td>
                <td>{{item.price}}</td>
                <td>{{item.count}}</td>
                <td><button class="btn" v-on:click="deleteFromCart(item.id)">Delete from cart</button>
                    <br><button class="btn" v-on:click="AddToCart(item.id)">Add to cart</button>  </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import products from '../data/products.js'

    export default {
        data: function () {
            return {
                items: [],
                search: '',
                searchResult: [],
                cartElements:[],
            };
        },
        mounted: function(){
            this.items = products;
            this.cartElements = this.$store.getters.getCart;
            for(let i=0;i<this.items.length;i++)
                for(let j=0;j<this.cartElements.length;j++){
                    if(this.cartElements[j].id == this.items[i].id)
                        if(this.items[i].hasOwnProperty('count') == true) {    //
                            this.items[i].count++;
                        }
                        else {this.items[i].count = 1}
            }
            for(let i=0;i<this.items.length;i++){
                if(this.items[i].hasOwnProperty('count') == false) {
                            this.items.splice(i,1);
                        }
            }
            
        },
        methods:{
            consolelog: function () {
                 console.log(this.cartElements);
            },
            deleteFromCart: function (id) {
                this.$store.commit('deleteCart',id);
            },
            AddToCart: function(id) {
                this.$store.commit('addCart',id);
            },
        },
        computed: {
            CartItems () {
                return this.$store.getters.getCart
            },
        }
    }
</script>

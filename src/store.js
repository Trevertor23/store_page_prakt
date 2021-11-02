import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    
   plugins: [createPersistedState()], 
   state: {
     cart: [],
   },
   mutations: {
       addCart: (state, el) => state.cart.push({"id":el}),
       deleteCart: (state, el) => {
           for(let i = 0; i < state.cart.length; i++) 
            if(state.cart[i].id==el) 
              {state.cart.splice(i,1);return 1;} 
       }
     },
   getters: {
       getCart: (state) =>
       {
           return state.cart;
       }
   }
 })
 export default store;
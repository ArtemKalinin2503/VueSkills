//Описание store
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //Здесь создаем глобальные state
    state: {
        productsState: [
            {
                id: 211,
                title: 'Product state #1',
                price: 50,
                qt: 10
            },
                {
                id: 112,
                title: 'Product state #2',
                price: 520,
                qt: 110
            },
        ]
    },
    //Геттеры получают (берут) state
    getters: {
        getProducts: state => state.productsState
    },
    //Actions - описывают как будет изменяться state путем вызова mutations (action не может сам менять state только через mutation)
    actions: {
        actionLoadProducts(context, productsState) {
            context.commit('loadProducts', productsState)
        }
    },
    //Мутация получает state и изменяет его (но вызвать мутацию необходимо из action)
    mutations: {
        loadProducts(state, payload) {
            state.productsState = payload;
        }
    }
})
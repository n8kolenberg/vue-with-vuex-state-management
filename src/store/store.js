import Vue from 'vue'
import Vuex from 'vuex'

//This is vuex - it allows you to control state among all the children and parent components
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return state.counter + " Clicks";
        }
    }
})
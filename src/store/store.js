import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions'
import * as getters from './getters'

//This is vuex - it allows you to control state among all the children and parent components
Vue.use(Vuex);

//Store contains the data that can be shared among components whether they are children or parent
//Store can be adjusted by Mutations - have to be synchronous
export const store = new Vuex.Store({
    //Initial state 
    state: {
        value: 0
    },

    /**Getters allow you to access your state from within different components
     * The components automatically get updated whenever your state changes
     * This is reusable code to access our state
     * They are used in the Result and AnotherResult Components
     */
    getters,
    //Mutations are like 'setters' - they allow us to adjust or mutate the state
    //They take the state as an argument and an optional payload - passed through to mutate the state
    //These mutations are 'committed' - they are updated (committed) (e.g. this.$store.commit('increment')from one part of the application and shared among all other components
    //Unless you want to use mapMutations
    //MUTATIONS ALWAYS NEED TO BE SYNCHRONOUS OTHERWISE YOU LOSE TRACK OF CHANGES IN STATE
    mutations: {
        
        updateValue(state, payload) {
            state.value = payload;
        }
    },
    /**Actions will allow you to run asynchronous code and allow you to commit those to the mutations so that state can be changed after this
     * async action
     * We can commit our mutations directly from our components, but oftentimes it's better practice to do that through actions
     * Especially if you want to do something asynchronously before committing your mutations
     */
    actions,

    modules: {
        counter
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

//This is vuex - it allows you to control state among all the children and parent components
Vue.use(Vuex);

//Store contains the data that can be shared among components whether they are children or parent
//Store can be adjusted by Mutations - have to be synchronous
export const store = new Vuex.Store({
    //Initial state 
    state: {
        counter: 0,
        value: 0
    },

    /**Getters allow you to access your state from within different components
     * The components automatically get updated whenever your state changes
     * This is reusable code to access our state
     * They are used in the Result and AnotherResult Components
     */
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return state.counter + " Clicks";
        },
        getValue(state) {
            return state.value;
        }
    },
    //Mutations are like 'setters' - they allow us to adjust or mutate the state
    //They take the state as an argument and an optional payload - passed through to mutate the state
    //These mutations are 'committed' - they are updated (committed) (e.g. this.$store.commit('increment')from one part of the application and shared among all other components
    //Unless you want to use mapMutations
    //MUTATIONS ALWAYS NEED TO BE SYNCHRONOUS OTHERWISE YOU LOSE TRACK OF CHANGES IN STATE
    mutations: {
        //increment takes the state as an input
        increment(state, payload) {
            console.log('Incrementing through Mutations in vuex');
            state.counter += payload;
        },
        decrement(state, payload) {
            console.log('Decrementing through Mutations in vuex');
            state.counter -= payload;
        },
        updateValue(state, payload) {
            state.value = payload;
        }
    },
    /**Actions will allow you to run asynchronous code and allow you to commit those to the mutations so that state can be changed after this
     * async action
     * We can commit our mutations directly from our components, but oftentimes it's better practice to do that through actions
     * Especially if you want to do something asynchronously before committing your mutations
     */
    actions: {
        increment(context, payload) {
            //context has the commit method on it to commit to our mutations
            //context is almost the same as the store, but has some minor differences that are not mentioned in the course 
            context.commit('increment', payload);
        },
        decrement(context, payload) {
            context.commit('decrement', payload);
        },
        asyncIncrement(context, payload) {
            setTimeout(() => {
                context.commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecrement(context, payload) {
            setTimeout(() => {
                context.commit('decrement', payload.by);
            }, payload.duration);
        },
        /*Instead of passing the context object, you can just pass 'commit' as a destructured object - it will only pass commit then, which you can use in the function  */
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        }
    }
})
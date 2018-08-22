<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <br>
                <h5>Result through getting the state in Vuex</h5>
                <app-result></app-result>
                <hr>
                <h5>Getting the Result through mapped Getters</h5>
                <app-another-result></app-another-result>
                <hr>
                <h5>Vuex asyncActions Counter</h5>
                <app-counter></app-counter>
                <hr>
                <h5>Vuex Mutation Counter</h5>
                <app-another-counter></app-another-counter>
                <br>
                <hr>
                <h5>Value update through computed property setter and getting the value from $store</h5>
                <input type="text" v-model="value">
                <p>Value: {{value}}</p>

            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            value: {
                /**Adding get and set so we can still use v-model on the input and bind to 'value'. 
                 * If we didn't do that, we would have to use v-bind to value and use a method to update the value in the store
                 * based on what the user typed in
                 */
                get() {
                   return this.$store.getters.getValue;
                },
                set(value) {
                    //Dispatch will mutate the value in the store
                    return this.$store.dispatch('updateValue', value);
                }
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter
        }
    }
</script>


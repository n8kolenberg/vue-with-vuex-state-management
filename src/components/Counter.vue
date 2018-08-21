<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 10, duration: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 5, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]) 

            // increment() {
            //     console.log('Incrementing through normal methods and getters in vuex');
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     console.log('Decrementing through normal methods and getters in vuex');
            //     this.$store.state.counter--;
            // }
        }
    }
</script>
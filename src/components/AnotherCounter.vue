<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex'

    export default {
        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ]),
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>
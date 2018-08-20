<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p> <!--Used to be {{counter}}-->
        <p>Number of clicks: {{ stringCounter }}</p> <!--Used to be {{clicks}}-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {

        computed: {
            /**The following way is quite verbose as you'd have to do it for all getters... */
            // counter() {
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // }

            /**Instead, you could use mapGetters (with spread operator) to map what you want to use out of the $store 
             * In order to have this work, you need to use npm package: babel-preset-stage-2 and you need to add ["stage-2"] in the .babelrc file
            */
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),

            ourOwn() {

            }
        }
    }
</script>
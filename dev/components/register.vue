<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Join DeaLibre’

        div(class="page-description")
            div(class="page-inner page-inner--w1") Free deal exchange for business brokers, prospectors, rasearchers, and investors.

        div(class="page-inner page-inner--w3")
            registerform()
</template>

<script>
    // connect components in hone page
    import registerform from './main-components/component.register.registerform.vue';

    export default {
        components: {
            "registerform": registerform
        },
    }
</script>

<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Change your password

        div(class="page-description")
            div(class="page-inner page-inner--w1") Change your password


        div(class="page-inner page-inner--w3")
            resetform()
</template>

<script>
    // connect components in restore page
    import resetform from './main-components/component.restore.restoreform.vue';

    export default {
        components: {
            "resetform": resetform
        },
    }
</script>

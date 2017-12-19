<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Recover your password

        div(class="page-description")
            div(class="page-inner page-inner--w1") Enter your email and we’ll send you a password reset link.

        div(class="page-inner page-inner--w3")
            recoverform()
</template>

<script>
    // connect components in home page
    import recoverform from './main-components/component.recover.recoverform.vue';
    export default {
        components: {
            "recoverform": recoverform,
        }
    }
</script>

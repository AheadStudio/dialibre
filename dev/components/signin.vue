<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Log in

        div(class="page-inner page-inner--w3")
            loginform()
</template>

<script>
    // connect components in home page
    import loginform from './main-components/component.signin.loginform.vue';
    
    export default {
        components: {
            "loginform": loginform,
        }
    }
</script>

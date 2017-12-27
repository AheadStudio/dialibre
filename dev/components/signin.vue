<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") Log in

            div(class="page-inner page-inner--w3")
                loginform()
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import loginform from './main-components/component.signin.loginform.vue';

    export default {
        components: {
            "newheader": newheader,
            "loginform": loginform,
        }
    }
</script>

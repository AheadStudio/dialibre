<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") Join DeaLibre’

            div(class="page-description")
                div(class="page-inner page-inner--w1") Free deal exchange for business brokers, prospectors, rasearchers, and investors.

            div(class="page-inner page-inner--w3")
                registerform()
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import registerform from './main-components/component.register.registerform.vue';

    export default {
        components: {
            "registerform": registerform,
            "newheader": newheader,
        },
    }
</script>

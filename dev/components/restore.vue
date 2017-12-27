<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
        main(class="page-content")
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
    import newheader from './header.vue';
    import resetform from './main-components/component.restore.restoreform.vue';

    export default {
        components: {
            "newheader": newheader,
            "resetform": resetform,
        },
    }
</script>

<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") Faq

            div(id="faq", class="faq")
                div(class="page-inner page-inner--w2")
                    div(class="faq-items")
                        faqitem()
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import faqitem from './main-components/component.faq.faqitem.vue';

    export default {
        components: {
            "faqitem"    : faqitem,
            "newheader"  : newheader,
        }
    }
</script>

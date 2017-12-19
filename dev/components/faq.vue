<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Faq

        div(id="faq", class="faq")
            div(class="page-inner page-inner--w2")
                div(class="faq-items")
                    faqitem()
</template>

<script>
    // connect components in faq page
    import faqitem from './main-components/component.faq.faqitem.vue';

    export default {
        components: {
            "faqitem": faqitem,
        }
    }
</script>

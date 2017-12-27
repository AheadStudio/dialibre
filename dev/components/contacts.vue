<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
        main(class="page-content")
            div(class="contacts")
                div(class="page-inner page-inner--w2")
                    div(class="contacts-inner")
                        div(class="contacts-info")
                            b Contact
                            p North America
                            p State
                            p
                                a(href="mailto:email@mail.com", class="link link--blue") email@mail.com

                        contactsform()
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import contactsform from './main-components/component.contacts.contactsform.vue';

    export default {
        components: {
            "newheader": newheader,
        }
    }
</script>

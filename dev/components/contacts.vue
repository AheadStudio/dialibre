<template lang="jade">
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
    import contactsform from './main-components/component.contacts.contactsform.vue';

    export default {
        components: {
            "contactsform": contactsform,
        }
    }
</script>

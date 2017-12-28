<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
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
        data: function() {
            return {
                headerProps: {
                    pageTitle    :  "",
                    mobileClass  :  "",
                    headerType   :  "",
                    isUserAuth   :   false,
                },
            }
        },
        components: {
            "newheader": newheader,
            "contactsform": contactsform,
        },
        created: function() {
            var self = this,
                $body = $("body");

            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "contacts";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "contacts";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                }
            });
            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }
            DealibreApp.methods.showFooter();
        }
    }
</script>

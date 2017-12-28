<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
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
    import newheader from './header.vue';
    import recoverform from './main-components/component.recover.recoverform.vue';

    export default {
        data: function() {
            return {
                help: [],
                headerProps: {
                    pageTitle    :  "",
                    mobileClass  :  "",
                    headerType   :  "",
                    isUserAuth   :   false,
                },
            }
        },
        components: {
            "recoverform" : recoverform,
            "newheader"   : newheader,
        },
        created: function() {
            var self = this,
                $body = $("body");
            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "recover";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "recover";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                }
            });

            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }

            DealibreApp.methods.showFooter();
        },
    }
</script>

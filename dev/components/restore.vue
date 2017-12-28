<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
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
        created: function() {
            var self = this,
                $body = $("body");
            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "restore";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "restore";
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
        components: {
            "newheader": newheader,
            "resetform": resetform,
        },
    }
</script>

<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
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
            "newheader"  :  newheader,
            "loginform"  :  loginform,
        },
        created: function() {
            var self = this,
                $body = $("body");

            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "signin-user";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "signin";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                    document.location.href = "dashboard.html";
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

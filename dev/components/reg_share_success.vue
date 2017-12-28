<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") THANK YOU FOR SHARING THIS DEAL WITH THE COMMUNITY!

            div(class="page-inner page-inner--w1")
                div(class="register-share")
                    div(class="register-share-title register-share-title--success") You analyst will review the information, you will receive a notification whether the deal you shared was approved and how many points are awarded.
                    div(class="register-share-success")
                        a(href="#", class="link register-share-success-link") Another deal to share
                        br
                        a(href="#", class="link register-share-success-link") Search deal flow
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
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
                    self.headerProps.pageTitle = "register-step-3";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "register-step-3";
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
            "newheader"  : newheader,
        }
    }
</script>

<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") Profile

            div(class="page-profile")
                div(class="page-inner page-inner--w2")
                    div(class="page-profile-personal")
                        profileinformation()

                        div(class="page-profile-personal--right")
                            div(class="page-profile-personal-credits")
                                span(class="page-profile-personal-credits-quantity") 566
                                span credits
                                button(href="#get-credits", class="btn btn--green page-profile-personal-credits-btn popup") Get credits
                            getfetch()
                            a(href="#addcard", class="btn btn--blue-inverse page-profile-personal-info-btn popup") Add card

                    div(class="page-profile-history")
                        div(class="page-profile-history-header")
                            div(class="page-profile-history-header-item tabs-heading-item active-tabs", data-tabs="history-1")
                                div(class="page-profile-history-header-item-title") Billing History
                            div(class="page-profile-history-header-item tabs-heading-item", data-tabs="history-2")
                                div(class="page-profile-history-header-item-title") Credit History
                        historypayments()

                    div(class="profile-nda")
                        profilenda()

            div(id="addcard", class="popup-container popup-addcard white-popup mfp-hide")
                addcard()

            div(id="edit-profile", class="popup-container popup-addcard white-popup mfp-hide")
                profileupdate()

            div(id="change-password", class="popup-container popup-addcard white-popup mfp-hide")
                changepassword()

            div(id="get-credits", class="popup-container popup-addcard white-popup mfp-hide")
                getcredits()

</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import profileinformation from './main-components/component.profile.profileinformation.vue';
    import getfetch from './main-components/component.profile.getfetch.vue';
    import addcard from './main-components/component.profile.addcard.vue';
    import profileupdate from './main-components/component.profile.profileupdate.vue';
    import changepassword from './main-components/component.profile.changepassword.vue';
    import historypayments from './main-components/component.profile.historypayments.vue';
    import getcredits from './main-components/component.profile.getcredits.vue';
    import profilenda from './main-components/component.profile.profilenda.vue';

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
            "profileinformation": profileinformation,
            "getfetch": getfetch,
            "addcard": addcard,
            "profileupdate": profileupdate,
            "changepassword": changepassword,
            "historypayments": historypayments,
            "getcredits": getcredits,
            "profilenda": profilenda,
        },
        created: function() {
            var self = this,
                $body = $("body");
            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "profile";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                    document.location.href = "signin.html";
                } else {
                    self.headerProps.pageTitle = "profile";
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
        mounted: function() {
            DEALIBRE.forms.init();
            DEALIBRE.modalWindow.init();
            DEALIBRE.scrollBar.init();
        }
    }
</script>

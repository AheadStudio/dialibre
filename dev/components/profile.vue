<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Profile

        div(class="page-profile")
            div(class="page-inner page-inner--w2")
                div(class="page-profile-personal")
                    div(class="page-profile-personal--left")
                        div(class="page-profile-personal-holder")
                            img(src="../dummy/Jon_Smit_1.jpg", class="page-profile-personal-holder-img")
                        div(class="page-profile-personal-info")
                            profileinformation()
                            a(href="#edit-profile", class="btn btn--blue page-profile-personal-info-btn popup") Edit profile
                            a(href="#change-password", class="btn btn--blue-inverse page-profile-personal-info-btn popup") Change password

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
    import profileinformation from './main-components/component.profile.profileinformation.vue';
    import getfetch from './main-components/component.profile.getfetch.vue';
    import addcard from './main-components/component.profile.addcard.vue';
    import profileupdate from './main-components/component.profile.profileupdate.vue';
    import changepassword from './main-components/component.profile.changepassword.vue';
    import historypayments from './main-components/component.profile.historypayments.vue';
    import getcredits from './main-components/component.profile.getcredits.vue';


    export default {
        components: {
            "profileinformation": profileinformation,
            "getfetch": getfetch,
            "addcard": addcard,
            "profileupdate": profileupdate,
            "changepassword": changepassword,
            "historypayments": historypayments,
            "getcredits": getcredits,
        },
        mounted: function() {
            DEALIBRE.forms.init();
            DEALIBRE.toggleContent.init();
            DEALIBRE.modalWindow.init();
        }
    }
</script>

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
                            a(href="#", class="btn btn--blue-inverse page-profile-personal-info-btn") Change password

                    div(class="page-profile-personal--right")
                        div(class="page-profile-personal-credits")
                            span(class="page-profile-personal-credits-quantity") 566
                            span credits
                            button(class="btn btn--green page-profile-personal-credits-btn") Get credits
                        getfetch()
                        a(href="#addcard", class="btn btn--blue-inverse page-profile-personal-info-btn popup") Add card

                div(class="page-profile-history")
                    div(class="page-profile-history-header")
                        div(class="page-profile-history-header-item tabs-heading-item active-tabs", data-tabs="history-1")
                            div(class="page-profile-history-header-item-title") Billing History
                        div(class="page-profile-history-header-item tabs-heading-item", data-tabs="history-2")
                            div(class="page-profile-history-header-item-title") Credit History

                    div(class="page-profile-history-container")
                        div(class="page-profile-history-container-item tabs-content-item active-tabs", id="history-1")
                            div(class="page-profile-history-container-radio")
                                label(class="page-profile-history-radio")
                                    input(type="radio", name="credits", class="page-profile-history-container-radio-item")
                                    span(class="page-profile-history-container-radio-title") MasterCard
                                label(class="page-profile-history-radio")
                                    input(type="radio", name="credits", class="page-profile-history-container-radio-item")
                                    span(class="page-profile-history-container-radio-title") Visa

                            input(type="text", class="page-profile-history-container-text", placeholder="MM/DD/YY")

                            input(type="text", class="page-profile-history-container-text", placeholder="MM/DD/YY")

                            a(href="#", class="btn btn--blue page-profile-history-container-btn") View

                            table(class="page-profile-history-container-table")
                                thead
                                    tr
                                        th Date
                                        th Time
                                        th Card
                                        th Amount
                                        th Deal #
                                tbody
                                    tr
                                        td 06/21/2017
                                        td 07:13PM
                                        td XXXX
                                        td $10.60
                                        td # 15
                                    tr
                                        td 06/21/2017
                                        td 07:13PM
                                        td XXXX
                                        td $10.60
                                        td # 15
                                    tr
                                        td 06/21/2017
                                        td 07:13PM
                                        td XXXX
                                        td $10.60
                                        td # 15


                        div(class="page-profile-history-container-item tabs-content-item", id="history-2")
        div(id="addcard", class="popup-container popup-addcard white-popup mfp-hide")
            addcard()
        div(id="edit-profile", class="popup-container popup-addcard white-popup mfp-hide")
            profileupdate()

</template>

<script>
    // connect components in home page
    import profileinformation from './main-components/component.profile.profileinformation.vue';
    import getfetch from './main-components/component.profile.getfetch.vue';
    import addcard from './main-components/component.profile.addcard.vue';
    import profileupdate from './main-components/component.profile.profileupdate.vue';


    export default {
        components: {
            "profileinformation": profileinformation,
            "getfetch": getfetch,
            "addcard": addcard,
            "profileupdate": profileupdate,
        },
        mounted: function() {
            DEALIBRE.forms.init();
            DEALIBRE.toggleContent.init();
            DEALIBRE.modalWindow.init();
        }
    }
</script>

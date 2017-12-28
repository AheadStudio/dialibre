<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="intro polygon-animate")
                div(style="position: relative; left: 0; right: 0; top: 0; bottom: 0;")
                div(class="intro-inner ")
                    div(class="page-inner page-inner--w2")
                        h1(class="intro-title") Vestibulum cursus nunc purus
                        div(class="intro-description") Nullam nibh ex, posuere sit amet volutpat consequat, faucibus ut orci.
                        div(class="intro-features")
                            div(class="intro-feature-item")
                                div(class="intro-feature-item-title") 100% free
                                div(class="intro-feature-item-description") No subscription fee with ulimitedaccess to deal flow.
                            div(class="intro-feature-item")
                                div(class="intro-feature-item-title") Efficient
                                div(class="intro-feature-item-description") Electronic NDA and CIM with online submission.
                            div(class="intro-feature-item")
                                div(class="intro-feature-item-title") Accurate
                                div(class="intro-feature-item-description") Our expert analysts review and cross-check every deal.
                    div(class="intro-footer")
                        a(href="#video", class="intro-arrow")
                a(href="#", class="intro-icon")
                    img(src="../svg/arrow_bottom.svg")
            div(class="video")
                div(class="page-inner page-inner--w2")
                    div(class="video-view")
                        div(class="video-play")
                        video(muted="muted", loop="loop", playsinline, class="video-source")
                            source(src="../dummy/exafs_spectroscopy.mp4", type="video/mp4")
            div(class="subscribe")
                div(class="page-inner page-inner--w2")
                    div(class="subscribe-title") Join private community of M&amp;A professional and start trading deals today
                    div(class="subscribe-form-holder")
                        linkregister(ref="foo")
            div(class="features")
                div(class="page-inner page-inner--w2")
                    div(class="features-title") Curabitur in vestibulum neque, nec tempus nulla.
                    div(class="features-items")
                        div(class="feature-item animation-block", data-animation="true")
                            div(class="feature-item-icon")
                                img(src="../svg/f1.svg")
                            div(class="feature-item-content")
                                div(class="feature-item-title") Reputable
                                div(class="feature-item-description") Dealibre’ creates reputation for members through rating system to foster a collaborative environment.
                        div(class="feature-item animation-block", data-animation="true")
                            div(class="feature-item-icon")
                                img(src="../svg/f2.svg")
                            div(class="feature-item-content")
                                div(class="feature-item-title") Verified
                                div(class="feature-item-description") Only verified brokers, prospectors, researchers, and investors have access to the platform.
                        div(class="feature-item animation-block", data-animation="true")
                            div(class="feature-item-icon")
                                img(src="../svg/f3.svg")
                            div(class="feature-item-content")
                                div(class="feature-item-title") Share any deal
                                div(class="feature-item-description") Share information about your own deals or deals others have shared with you.
                        div(class="feature-item animation-block", data-animation="true")
                            div(class="feature-item-icon")
                                img(src="../svg/f4.svg")
                            div(class="feature-item-content")
                                div(class="feature-item-title") Global market coverage
                                div(class="feature-item-description") Dealibre’ is present in Africa, Asia, Australia/Oceania, Europe, North America, South America.
            reviewslist()
            div(class="geo")
                div(class="page-inner page-inner--w1")
                    div(class="geo-title") Global coverage to rely on
                    div(class="geo-inner")

                        maplist()

                        div(class="geo-map")
                            img(src="../svg/map_big.svg")
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import reviewslist from './main-components/component.home.reviewslist.vue';
    import maplist from './main-components/component.home.maplist.vue';
    import linkregister from './main-components/component.home.linkregister.vue';

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
            "reviewslist": reviewslist,
            "maplist": maplist,
            "linkregister": linkregister,
            "newheader": newheader,
        },
        created: function() {
            var self = this;

            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "home";
                    self.headerProps.mobileClass = "";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "home";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                }
            });
            DealibreApp.methods.showFooter();
        },
        mounted: function() {
            var $body = $("body");
            if (!$body.hasClass("page-home")) {
                $body.addClass("page-home");
                $(".page-content", $body).removeClass("page-content--auth");
            }

            DEALIBRE.page.polygonAnimate.init();
            DEALIBRE.page.scrollAnimation.init();
            DEALIBRE.page.playVideo.init();
        }
    }
</script>

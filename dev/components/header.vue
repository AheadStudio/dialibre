<template lang="jade">
    div()
        div(class="header-inner", id="page-header-link")
            div(v-bind:class="params.classMobile", class="header-mobile", v-show="!params.isUserAuth")
                div(class="header-logo-container header-logo-container--light", v-show="params.pageTitle !== 'home'")
                    router-link(to="/pages/home.html", class="header-logo-black")
                div(class="header-logo-container", v-show="params.pageTitle === 'home'")
                    router-link(to="/pages/home.html", class="header-logo-white")
                div(class="header-mobile-burger")
                    div(class="header-mobile-burger-inner")
                div(class="header-mobile-menu")
                    nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                        ul(class="header-menu-inner")
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/faq.html", title="faq", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name ") faq
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") help
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/register.html", title="register", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") join free
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/signin.html", title="login", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") log in
            div(v-bind:class="params.classMobile", class="header-mobile header-mobile--white", v-show="params.isUserAuth")
                div(class="header-mobile-open", id="open-chat", v-if="params.pageTitle === 'chat'")
                    img(src="../i/chat_group.png", class="header-mobile-open-img")
                div(class="header-mobile-open", id="open-search", v-else-if="params.pageTitle === 'search'")
                    img(src="../../svg/filter_white.svg", class="header-mobile-open-img")
                div(class="header-logo-container header-logo-container--light", v-else)
                    router-link(to="/pages/home.html", class="header-logo-black")
                div(class="header-mobile-burger")
                    div(class="header-mobile-burger-inner")
                div(class="header-menu-register", v-show="params.pageTitle === 'chat' || params.pageTitle === 'search'")
                    nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                        ul(class="header-menu-inner")
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/search.html", title="search", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") search
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/dashboard.html", title="dashboard", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") my deals
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") help
                div(class="header-personal", v-show="params.pageTitle === 'chat' || params.pageTitle === 'search'")
                    a(href="#", class="header-personal-alerts")
                        span(class="header-personal-count") 566
                    a(href="#", class="header-personal-mail")
                        span(class="header-personal-count") 566
                    button(type="submit", class="btn btn--green header-personal-btn",v-if="params.pageTitle === 'chat'") Get Credits
                    button(type="submit", class="btn btn--green header-personal-btn",v-else-if="params.pageTitle === 'search'") Share you deal
                    a(href="#profile_popup", class="header-personal-avatar popup", v-show="!profileInfo.photoUrl")
                    a(href="#profile_popup", class="header-personal-avatar-img popup", v-show="profileInfo.photoUrl")
                        img(:src="profileInfo.photoUrl")
                div(class="header-mobile-menu", v-if="params.pageTitle === 'chat' || params.pageTitle === 'search'")
                    nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                        ul(class="header-menu-inner")
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/search.html", title="login", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") search
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/dashboard.html", title="dashboard", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") my deals
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") help
                div(class="header-mobile-menu", v-else)
                    div(class="header-mobile-container")
                        nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                            ul(class="header-menu-inner")
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/search.html", title="search", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") search
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/dashboard.html", title="dashboard", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") my deals
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") help

                        div(class="header-personal")
                            a(href="#", class="header-personal-alerts")
                                span(class="header-personal-count") 566
                            a(href="#", class="header-personal-mail")
                                span(class="header-personal-count") 566
                            button(type="submit", class="btn btn--green header-personal-btn") Share deal
                            a(href="#profile_popup", class="header-personal-avatar popup", v-show="!profileInfo.photoUrl")
                            a(href="#profile_popup", class="header-personal-avatar-img popup", v-show="profileInfo.photoUrl")
                                img(:src="profileInfo.photoUrl")
                            a(href="#profile_popup", class="header-personal-initials popup") {{ cutName }}
            div(class="header-desktop")
                div(class="page-inner page-inner--max", v-show="params.isUserAuth")
                    div(class="header-logo-container", v-if="params.headerType === 'white'")
                        router-link(to="/pages/home.html", title="help", itemprop="url", class="header-logo-white")
                    div(class="header-logo-container header-logo-container--light", v-if="params.headerType === 'black'")
                        router-link(to="/pages/home.html", title="help", itemprop="url", class="header-logo-black")
                    div(class="header-menu-register")
                        nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                            ul(class="header-menu-inner")
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/search.html", title="search", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") search
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/dashboard.html", title="dashboard", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") my deals
                                li(class="header-menu-item-holder")
                                    router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                        span(itemprop="name", class="header-menu-item-name") help

                    div(class="header-personal")
                        a(href="#", class="header-personal-alerts")
                            span(class="header-personal-count") 566
                        a(href="#", class="header-personal-mail")
                            span(class="header-personal-count") 566
                        button(type="submit", class="btn btn--green header-personal-btn") Share deal
                        a(href="#profile_popup", class="header-personal-avatar popup", v-show="!profileInfo.photoUrl")
                        a(href="#profile_popup", class="header-personal-avatar-img popup", v-show="profileInfo.photoUrl")
                            img(:src="profileInfo.photoUrl")
                        a(href="#profile_popup", class="header-personal-initials popup") {{ cutName }}
                div(class="page-inner page-inner--w1", v-show="!params.isUserAuth")
                    router-link(to="/pages/home.html", title="help", itemprop="url", class="header-logo")
                    nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-menu")
                        ul(class="header-menu-inner")
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/help.html", title="help", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") help
                            li(class="header-menu-item-holder")
                                router-link(to="/pages/faq.html", title="faq", itemprop="url", class="header-menu-item")
                                    span(itemprop="name", class="header-menu-item-name") faq
                    nav(itemscope="itemscope", itemtype="http://schema.org/SiteNavigationElement", class="header-bar")
                        ul(class="header-bar-inner")
                            li(class="header-bar-item-holder")
                                router-link(to="/pages/register.html", title="register", itemprop="url", class="header-bar-item")
                                    span(itemprop="name", class="header-bar-item-name") Join free
                            li(class="header-bar-item-holder")
                                router-link(to="/pages/signin.html", title="login", itemprop="url", class="header-bar-item")
                                    span(itemprop="name", class="header-bar-item-name") Log in

        div(id="profile_popup", class="popup-container popup-profile white-popup mfp-hide")
            logout(:info="profileInfo")
</template>
<script>
    // connect components in home page
    import logout from './main-components/component.header.logout.vue';

    export default {
        data: function() {
    		return {
                params      : {},
                profileInfo : {
                    name      : "",
                    lastName  : "",
                    photoUrl  : "",
                },
    		}
    	},
        props: ["headersetting"],
        created: function() {
            var self = this;
            self.params = this.headersetting;
            self.getInfoProfile();
        },
        components: {
            "logout" : logout,
        },
        methods: {
            getInfoProfile: function() {
                var self = this;

                axios.get("/api/user/profile").then(function(answer) {
                    self.resultHandler(answer.data.data);
                });
            },
            resultHandler: function(dataProfile) {
                var self = this;

                self.profileInfo.name     =  dataProfile.first_name;
                self.profileInfo.lastName =  dataProfile.last_name;
                self.profileInfo.photoUrl =  dataProfile.photo.url;
            },
        },
        computed: {
            fullname: function() {
                var self = this;
                return self.profileInfo.name + " " + self.profileInfo.lastName;
            },
            cutName: function() {
                var self = this;
                return self.profileInfo.name.substring(0,1) + ". " + self.profileInfo.lastName.substring(0,1) + ".";
            }
        },
        updated: function () {
            var self = this,
                $body = $("body");
            this.$nextTick(function () {
                if (this.params.pageTitle == "home" && this.params.isUserAuth === true) {
                    if ($body.hasClass("page-home")) {
                        $body.removeClass("page-home");
                        $(".page-content", $body).addClass("page-content--auth");
                    }
                }
            })
        },
        mounted: function() {
            var self = this,
                element = $(this.$el);

            element.addClass("loading-opacity");

            this.$nextTick(function () {
                setTimeout(function(){
                    element.addClass("loading-opacity--show");
                }, 200);
            });
            DEALIBRE.modalWindow.init();
        },
    }
</script>

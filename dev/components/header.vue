<template lang="jade">
    div(class="header-inner", id="page-header-link")
        div(v-bind:class="states.page.classMobile", class="header-mobile", v-show="!states.user.authorized")
            div(class="header-logo-container header-logo-container--light", v-show="states.page.pageTitle !== 'home'")
                router-link(to="/pages/home.html", class="header-logo-black")
            div(class="header-logo-container", v-show="states.page.pageTitle === 'home'")
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
        div(v-bind:class="states.page.classMobile", class="header-mobile header-mobile--white", v-show="states.user.authorized")
            div(class="header-mobile-open", id="open-chat", v-if="states.page.pageTitle === 'chat'")
                img(src="../i/chat_group.png", class="header-mobile-open-img")
            div(class="header-mobile-open", id="open-search", v-else-if="states.page.pageTitle === 'search'")
                img(src="../../svg/filter_white.svg", class="header-mobile-open-img")
            div(class="header-logo-container header-logo-container--light", v-else)
                router-link(to="/pages/home.html", class="header-logo-black")
            div(class="header-mobile-burger")
                div(class="header-mobile-burger-inner")
            div(class="header-menu-register", v-show="states.page.pageTitle === 'chat' || states.page.pageTitle === 'search'")
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
            div(class="header-personal", v-show="states.page.pageTitle === 'chat' || states.page.pageTitle === 'search'")
                a(href="#", class="header-personal-alerts")
                    span(class="header-personal-count") 566
                a(href="#", class="header-personal-mail")
                    span(class="header-personal-count") 566
                button(type="submit", class="btn btn--green header-personal-btn",v-if="states.page.pageTitle === 'chat'") Get Credits
                button(type="submit", class="btn btn--green header-personal-btn",v-else-if="states.page.pageTitle === 'search'") Share you deal
                a(href="#profile_popup", class="header-personal-avatar popup")
            div(class="header-mobile-menu", v-if="states.page.pageTitle === 'chat' || states.page.pageTitle === 'search'")
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
                        a(href="#profile_popup", class="header-personal-avatar popup")
                        a(href="#profile_popup", class="header-personal-initials popup") J. S.
        div(class="header-desktop")
            div(class="page-inner page-inner--max", v-show="states.user.authorized")
                div(class="header-logo-container", v-if="states.page.headerType === 'white'")
                    router-link(to="/pages/home.html", title="help", itemprop="url", class="header-logo-white")
                div(class="header-logo-container header-logo-container--light", v-if="states.page.headerType === 'black'")
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
                    a(href="#profile_popup", class="header-personal-avatar popup")
                    a(href="#profile_popup", class="header-personal-initials popup") J. S.
            div(class="page-inner page-inner--w1", v-show="!states.user.authorized")
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
                            router-link(to="/pages/register.html", title="register", itemprop="url", class="header-menu-item")
                                span(itemprop="name", class="header-bar-item-name") Join free
                        li(class="header-bar-item-holder")
                            router-link(to="/pages/signin.html", title="login", itemprop="url", class="header-menu-item")
                                span(itemprop="name", class="header-bar-item-name") Log in
</template>

<script>
    export default {
        data: function() {
    		return {
    			states: DealibreApp.data,
    		}
    	},
        mounted: function() {
            var element = $(this.$el);

            this.$nextTick(function () {
                element.addClass("loading-opacity");

                setTimeout(function(){
                    element.addClass("loading-opacity--show");
                }, 300);
            })
        },
    }
</script>

<style lang="stylus">
</style>

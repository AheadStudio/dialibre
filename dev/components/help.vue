<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") Help

            div(class="help", v-bind:class="{loading:!help.length}")
                div(class="page-inner page-inner--w2")
                    div(class="help-sections")
                        div(class="help-section-item", v-for="section in help")
                            h2(class="h2 help-section-item-name") {{ section.name }}
                            div(class="help-section-item-blocks")
                                div(class="help-section-item-block-item", v-for="item in section.items")
                                    div(class="help-section-item-block-item-name-holder")
                                        a(href="#", class="help-section-item-block-item-name link link--blue") {{ item.question }}
                                    div(class="help-section-item-block-item-text") {{ item.answer }}

            div(class="page-inner page-inner--w2")
                helpform()
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import helpform from './main-components/component.help.helpform.vue';

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
                }
            });

            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }

            DealibreApp.methods.showFooter();
            self.getInfo();
        },
        components: {
            "helpform" : helpform,
            "newheader" : newheader,
        },
        methods: {
            getInfo: function() {
                var self = this;
                axios.get("/api/help").then(function(r) {
                    for(var key in r.data.data) {
                        var section = r.data.data[key];
                        section = {
                            id: section.id,
                            name: section.name,
                            items: section.help_questions
                        };
                        self.help.push(section);
                    }
                });
            }
        },
        mounted: function() {
            DEALIBRE.forms.init(this.$el);
        },
    }
</script>

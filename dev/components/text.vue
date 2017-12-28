<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-inner page-inner--w2")
                div(class="page-text")
                    h1 Heading
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet aliquet dui, ut ultricies lorem mollis vitae. Ut in rhoncus neque, ac euismod metus. Pellentesque luctus lectus euismod blandit fringilla. Duis sollicitudin tincidunt eleifend. Pellentesque aliquam felis eget tellus imperdiet dapibus. Vestibulum ultrices, urna in pretium sagittis, velit dui volutpat quam, quis tincidunt libero mi at odio. Mauris neque mi, facilisis in sapien vel, interdum tempor turpis. Vivamus ultrices ornare consequat.
                    p
                        | Nam finibus venenatis tortor, quis tincidunt sapien pulvinar vitae. Etiam finibus ut risus sed tempus. Suspendisse vitae leo quam.
                        a(href="#") Aliquam maximus
                        |  felis eget lorem rutrum, accumsan vulputate arcu tempor. Nullam in ligula dolor. Nulla vehicula convallis mauris, at fermentum eros tempor vitae. Nunc cursus mattis eros. Donec a ex id ante posuere gravida. Curabitur sollicitudin eu augue ut bibendum. Nulla facilisi. Aliquam non blandit nisl, ut malesuada nisl. Vestibulum sed convallis leo. Proin maximus nibh turpis, vitae aliquam justo malesuada vulputate.
                    ol
                        li Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        li Nam finibus venenatis tortor, quis tincidunt sapien pulvinar vitae. Nulla non fringilla turpis. Vivamus nec urna nec ante congue tempor. Cras blandit nulla a arcu tincidunt tempor. Pellentesque ligula sapien, vestibulum ut nisl porta, dictum porttitor nisi.
                        li Donec odio risus, accumsan ac luctus quis, gravida non nisl.
                        li Fusce ac ultricies sapien. Donec nec vestibulum magna.
                    p
                        img(src="../dummy/text.jpg", align="left")
                        | Fusce ac ultricies sapien. Donec nec vestibulum magna. Quisque dictum ornare metus sit amet fermentum. Donec vel nulla tortor. Nunc ac nunc lectus. Sed nisi risus, viverra id eros at, dignissim dictum magna. Donec a porta nisi, et feugiat nibh. Cras vitae pretium erat. Nulla non fringilla turpis. Vivamus nec urna nec ante congue tempor. Cras blandit nulla a arcu tincidunt tempor. Pellentesque ligula sapien, vestibulum ut nisl porta, dictum porttitor nisi.
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
                    self.headerProps.pageTitle = "text";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "text";
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
        },
        components: {
            "newheader" : newheader,
        }
    }
</script>

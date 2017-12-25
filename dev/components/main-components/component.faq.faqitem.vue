<template lang="jade">
    div()
        div(v-bind:class="{ loading:!requestResult.length }")
            div(class="faq-item", v-for="faq in requestResult")
                div(class="faq-item-title") {{ faq.id }}. {{ faq.question }}
                div(class="faq-item-text") {{ faq.answer }}
</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js"

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/faq",
                    res: [],
                }
            }
        },
        mixins: [getMixin],
        methods: {
            resultHandler: function() {
                var self = this;

                for(var key in self.requestParams.res) {
                    self.requestResult.push(self.requestParams.res[key]);
                }
            }
        },
        created: function() {
            this.sendRequest();
        },
        mounted: function() {
            var element = $(this.$el);

            this.$nextTick(function () {
                element.addClass("loading-opacity");

                setTimeout(function(){
                    element.addClass("loading-opacity--show");
                }, 600);
            })
        }
    }
</script>

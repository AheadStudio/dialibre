<template lang="jade">
    div(class="reviews")
        div(class="page-inner page-inner--w2")
            div(class="reviews-items")
                div(class="review-item", v-for="item in requestResult")
                    div(class="review-item-text") {{ item.text }}
                    div(class="review-item-author") {{ item.name }}
</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js"

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/reviews",
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
        updated: function() {
            DEALIBRE.content.sliders.reviews();
        },
    }
</script>

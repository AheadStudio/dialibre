<template lang="jade">
    div(class="reviews")
        div(class="page-inner page-inner--w2")
            div(class="reviews-items")
                div(class="review-item", v-for="item in list")
                    div(class="review-item-text") {{ item.text }}
                    div(class="review-item-author") {{ item.name }}
</template>

<script>
    export default {
        data: function() {
            return {
                list: [],
                url: "/api/reviews",
            }
        },
        created: function() {
            this.getInfo();
        },
        updated: function() {
            DEALIBRE.content.sliders.reviews();
        },
        methods: {
            getInfo: function() {
                var self = this;

                axios.get(self.url).then(function(answer) {
                    for(var key in answer.data.data) {
                        self.list.push(answer.data.data[key]);
                    }
                });
            }
        }
    }
</script>

<template lang="jade">
    div()
        div(v-bind:class="{ loading:!faqList.length }")
            div(class="faq-item", v-for="faq in faqList")
                div(class="faq-item-title") {{ faq.id }}. {{ faq.question }}
                div(class="faq-item-text") {{ faq.answer }}
</template>

<script>
    export default {
        data: function() {
            return {
                faqList: [],
            }
        },
        created: function() {
            this.getInfo();
        },
        methods: {
            getInfo: function() {
                var self = this;
                axios.get("/api/faq").then(function(answer) {
                    for(var key in answer.data.data) {
                        self.faqList.push(answer.data.data[key]);
                    }
                });
            }
        },
    }
</script>

<template lang="jade">
    div(class="page-profile-personal-credits-items")
        div(class="page-profile-personal-credits-item", v-for="item in cards")
            label(class="page-profile-personal-credits-radio")
                input(type="radio", name="credits", class="page-profile-personal-credits-radio-item")
                span(class="page-profile-personal-credits-radio-title", v-cloak) {{ item.name }}
            div(class="page-profile-personal-credits-item-number", v-cloak) {{ item.count }}
            a(href="#",class="page-profile-personal-credits-item-close")
</template>

<script>
export default {
    data: function() {
        return {
            cards: {
                name    :  "",
                count   :  "",
            }
        }
    },
    created: function() {
        var self = this;
        self.sendRequest();
    },
    methods: {
        sendRequest: function(){
            var self = this;

            axios.get("/api/user/sources/fetch").then(function(answer) {
                var infoCard = answer.data;
                console.log(infoCard);
            });
        }
    },
    mounted: function() {
        DEALIBRE.reload();
    }

}
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
</style>

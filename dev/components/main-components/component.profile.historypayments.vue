<template lang="jade">
    div(class="page-profile-history-container")
        div(class="page-profile-history-container-item tabs-content-item active-tabs", id="history-1")
            div(class="page-profile-history-container-radio")
                label(class="page-profile-history-radio")
                    input(type="radio", name="credits", class="page-profile-history-container-radio-item")
                    span(class="page-profile-history-container-radio-title") MasterCard
                label(class="page-profile-history-radio")
                    input(type="radio", name="credits", class="page-profile-history-container-radio-item")
                    span(class="page-profile-history-container-radio-title") Visa

            input(type="text", class="page-profile-history-container-text", placeholder="MM/DD/YY")

            input(type="text", class="page-profile-history-container-text", placeholder="MM/DD/YY")

            a(href="#", class="btn btn--blue page-profile-history-container-btn") View
            historypayments()
            table(class="page-profile-history-container-table")
                thead
                    tr
                        th Date
                        th Time
                        th Card
                        th Amount
                        th Deal #
                tbody
                    tr
                        td 06/21/2017
                        td 07:13PM
                        td XXXX
                        td $10.60
                        td # 15
                    tr
                        td 06/21/2017
                        td 07:13PM
                        td XXXX
                        td $10.60
                        td # 15
                    tr
                        td 06/21/2017
                        td 07:13PM
                        td XXXX
                        td $10.60
                        td # 15


        div(class="page-profile-history-container-item tabs-content-item", id="history-2")
</template>

<script>
export default {
    data: function() {
        return {
            user: {
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

            axios.get("/api/user/billing/history", {
                "from": "",
                "to"  : "",
            }).then(function(answer) {
                var dataPayments = answer.data.data;
                console.log("12312",dataPayments);
            });
        }
    },
}
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
</style>

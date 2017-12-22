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
            div(class="history-block replace-scrollbar-table")
                table(class="page-profile-history-container-table sort-table")
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
                            td 07:18PM
                            td asdas
                            td $30.60
                            td 1
                        tr
                            td 06/21/2016
                            td 07:20PM
                            td qwezqwe
                            td $10.60
                            td 2
                        tr
                            td 06/21/2016
                            td 07:13PM
                            td XXXX
                            td $20.60
                            td 3

        div(class="page-profile-history-container-item tabs-content-item", id="history-2")
            div(class="history-block replace-scrollbar-table")
                table(class="page-profile-history-container-table sort-table")
                    thead
                        tr
                            th id
                            th Deal id
                            th User id
                            th Amount
                            th Type
                            th Created
                            th Updated
                    tbody
                        tr(v-for="valueCredits in creditHistory")
                            td(v-for="value in valueCredits") {{ value }}

</template>

<script>
export default {
    data: function() {
        return {
            billingHistory: [],
            creditHistory: []
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
                var data = answer.data.data;
                for(var key in data) {
                    self.billingHistory.push(data[key]);
                }
            });

            axios.get("/api/user/credit/history", {
                "from": "",
                "to"  : "",
            }).then(function(answer) {
                var data = answer.data.data;
                for(var key in data) {
                    self.creditHistory.push(data[key]);
                }
            });
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            DEALIBRE.tableSort();
        })
    },
    updated: function() {
        DEALIBRE.tabs.init();
    }
}
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
    .history-block {
        overflow: scroll;
        max-height: 560px;
    }
</style>

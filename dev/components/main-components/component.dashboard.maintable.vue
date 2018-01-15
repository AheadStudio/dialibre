<template lang="jade">
    div(class="main-table")
        form(action="#", class="main-table-search")
            div(class="main-table-search-container")
                div(class="main-table-search-container-holder")
                    input(type="text", class="search-input main-table-search-input")
                    button(type="submit", class="main-table-search-submit")
            div(class="main-table-search-container-btn")
                a(href="#unlock", class="btn btn--blue-inverse main-table-search-unlock popup") Unlock | 2
                a(href="#export", class="btn btn--blue-inverse main-table-search-export popup") Export
                a(href="#savesearch", class="btn btn--blue main-table-search-save popup") Save search

        div(class="main-table-result")
            table(class="sort-table")
                thead
                    tr
                        th
                            label(class="table-checkbox")
                                input(type="checkbox", class="table-checkbox-item")
                        th Industry
                        th Location
                        th Company name
                        th Revenue
                        th ebitda
                        th cash Flow
                        th deal type
                        th sponsor
                        th user rating
                        th created
                        th unlocked
                        th sources
                tbody
                    tr(:data-dealid="item.id", v-for="item in deals.get.data")
                        td
                            label(class="table-checkbox")
                                input(type="checkbox", class="table-checkbox-item")
                                span(class="table-checkbox-title", v-show="item.unlocked") Export
                            a(href="#unlock2", class="btn btn--green table-btn-unlock popup", v-show="!item.unlocked") 20 | Unlock
                        td(href="#infodeals", class="popup-inline", :data-industry="item.industry.id", @click="getInfoDeals($event)") {{ item.industry.name }}
                        td(href="#infodeals", class="popup-inline", :data-industryarea="item.locale.area.id", :data-industrycountry="item.locale.country.id", @click="getInfoDeals($event)") {{ item.locale.area.name }}/{{ item.locale.country.name }}
                        td(href="#infodeals", class="popup-inline", :data-companyname="item.company_name", v-if="!item.unlocked", @click="getInfoDeals($event)")
                            img(src="../svg/zamok.svg")
                        td(href="#infodeals", class="popup-inline", :data-companyname="item.company_name", v-else, @click="getInfoDeals($event)") {{ item.company_name }}
                        td(href="#infodeals", class="popup-inline", :data-financialrecordsid="item.financial_records[0].id", :data-financialrecordsrevenue="item.financial_records[0].revenue", @click="getInfoDeals($event)") ${{ item.financial_records[0].revenue }} mm
                        td(href="#infodeals", class="popup-inline", :data-financialrecordsid="item.financial_records[0].id", :data-financialrecordsebitda="item.financial_records[0].ebitda", @click="getInfoDeals($event)") ${{ item.financial_records[0].ebitda }} mm
                        td(href="#infodeals", class="popup-inline", :data-financialrecordsid="item.financial_records[0].id", :data-financialrecordscash="item.financial_records[0].cash_flow", @click="getInfoDeals($event)") ${{ item.financial_records[0].cash_flow }} mm
                        td(href="#infodeals", class="popup-inline", :data-dealtypeid="item.deal_type.id", @click="getInfoDeals($event)") {{ item.deal_type.name }}
                        td(href="#infodeals", class="popup-inline", :data-sponsor="item.sponsor.id", @click="getInfoDeals($event)") {{ item.sponsor.name }}
                        td(href="#infodeals", class="popup-inline", :data-userrating="item.user_rating", @click="getInfoDeals($event)") {{ item.user_rating }}
                        td(href="#infodeals", class="popup-inline", :data-createdat="item.created_at", @click="getInfoDeals($event)") {{ item.created_at }}
                        td(href="#infodeals", class="popup-inline", :data-unlocked="item.unlocked", @click="getInfoDeals($event)") {{ item.unlocked }}
                        td(href="#infodeals", class="popup-inline", :data-sourcesnumber="item.sources_number", @click="getInfoDeals($event)") {{ item.sources_number }}

        infodeals(:info="popup.data")
</template>

<script>
    // connect components
    import infodeals from './component.dashboard.infodeals.vue';

    export default {
        data: function() {
            return {
                deals: {
                    get: {
                        url: "/api/deals",
                        params: {},
                        resultRequest: {},
                        data: [],
                    },
                    post: {
                        url: "api/deal/{deal}/update",
                        params: {},
                        resultRequest: {},
                        data: [],
                    },
                },
                popup: {
                    data: [],
                    magnificPopupInstance: "",
                },
                table: "",
            }
        },
        components: {
            "infodeals" : infodeals,
        },
        created: function() {
            var self = this;

            // connect magnific popup
            self.popup.magnificPopupInstance = $.magnificPopup.instance;

            self.getDeals({per_page: 50});
        },
        methods: {

            // === Get deal === //
            getDeals: function(changeParams, idParams) {
                var self = this;

                // reload object
                self.deals.get.params = {};

                // setting params
                for (var key in changeParams) {
                    self.deals.get.params[key] = changeParams[key];
                }

                axios.get(self.deals.get.url, {
                    params: self.deals.get.params,
                    responseType: 'json'
                })
                .then(function(answer) {
                    var data = answer.data.data;
                    self.deals.get.resultRequest = data;
                    self.resultHandler("get", idParams);
                }).catch(function(info) {
                    var dataError = info.response.data;
                    console.log(dataError.message);
                });

            },

            // === Handler result request === //
            resultHandler: function(method, idParams) {
                var self = this;
                self.deals.get.data = [];

                for(var key in self.deals[method].resultRequest.data) {
                    self.deals.get.data.push(self.deals[method].resultRequest.data[key]);
                }
                if (idParams) {
                    self.inPopup(self.deals.get.data[idParams-1]);
                }
            },

            // === Show popup === //
            getInfoDeals: function(event) {
                var self = this,
                    el = $(event.target),
                    popupBlock = el.attr("href"),
                    idDeals = Number(el.closest("tr").data("dealid"));

                self.popup.magnificPopupInstance.open({
                    type: "inline",
                    items: {
                        src: popupBlock
                    },
                });

                self.popup.data = self.deals.get.data[idDeals-1];
                upload.$emit("send-data", self.popup.data);

            },

            // === Update deal === //
            updateDealInfo: function() {
                var self = this;

                axios.post(self.deals.post.url, self.deals.post.params)
                .then(function(answer) {
                    var data = answer.data.data;
                    self.deals.post.resultRequest = data;
                    self.resultHandler("post");
                }).catch(function(info) {
                    var dataError = info.response.data;
                    console.log(dataError);
                });

            },

            // === Reload info of deal === //
            refreshInfoDeal: function(id) {
                var self = this;
                self.getDeals({per_page: 50}, id);
            },

            // === Implant information in popup  === //
            inPopup: function(dealId) {
                upload.$emit("send-data", dealId);
            },

        },
        beforeMount: function() {
            var self = this;
        },
        mounted: function() {
            var self = this;

            self.table = $(".main-table-result");

            self.$nextTick(function () {
                self.table.addClass("loading");
                DEALIBRE.page.summCr.init();
            });

            // === Different listeners === //
            self.$root.$on("update-information", function(params) {
                self.deals.post.params = params.params;
                self.deals.post.url = self.deals.post.url.replace("{deal}", params.idDeal);
                self.updateDealInfo();
            });

            self.$root.$on("refresh-information", function(idDeal) {
                self.refreshInfoDeal(idDeal);
            });
            // === || === //

        },
        updated: function () {
            var self = this;

            self.$nextTick(function () {
                self.table.removeClass("loading");
                DEALIBRE.tableSort();
                DEALIBRE.page.summCr.init();
                DEALIBRE.forms.init(this.$el);
                DEALIBRE.tableSearch.init();
                //DEALIBRE.modalWindow.init();
            })
        }
    }
</script>

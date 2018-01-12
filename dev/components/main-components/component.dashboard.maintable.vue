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
                                span(class="table-checkbox-title", v-show="item.company_name !== 'locked'") Export
                            a(href="#unlock2", class="btn btn--green table-btn-unlock popup", v-show="item.company_name === 'locked'") 20 | Unlock
                        td(href="#infodeals", class="popup-inline", :data-industry="item.industry.id", @click="getInfoDeals($event)") {{ item.industry.name }}
                        td(:data-industryarea="item.locale.area.id", :data-industrycountry="item.locale.country.id") {{ item.locale.area.name }}/{{ item.locale.country.name }}
                        td(:data-companyname="item.company_name", v-if="item.company_name === 'locked'")
                            img(src="../svg/zamok.svg")
                        td(:data-companyname="item.company_name", v-else) {{ item.company_name }}
                        td(:data-financialrecordsid="item.financial_records[0].id", :data-financialrecordsrevenue="item.financial_records[0].revenue") ${{ item.financial_records[0].revenue }} mm
                        td(:data-financialrecordsid="item.financial_records[0].id", :data-financialrecordsebitda="item.financial_records[0].ebitda") ${{ item.financial_records[0].ebitda }} mm
                        td(:data-financialrecordsid="item.financial_records[0].id", :data-financialrecordscash="item.financial_records[0].cash_flow") ${{ item.financial_records[0].cash_flow }} mm
                        td(:data-dealtypeid="item.deal_type.id") {{ item.deal_type.name }}
                        td(:data-sponsor="item.sponsor.id") {{ item.sponsor.name }}
                        td(:data-userrating="item.user_rating") {{ item.user_rating }}
                        td(:data-createdat="item.created_at") {{ item.created_at }}
                        td(:data-unlocked="item.unlocked") {{ item.unlocked }}
                        td(:data-sourcesnumber="item.sources_number") {{ item.sources_number }}

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
                    }
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
            // === get deal === //
            getDeals: function(changeParams) {
                var self = this,
                    formData = new FormData();

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
                    self.resultHandler("get");

                }).catch(function(info) {
                    var dataError = info.response.data;
                    console.log(dataError.message);
                });
            },
            // === handler result request === //
            resultHandler: function(method) {
                var self = this;

                for(var key in self.deals[method].resultRequest.data) {
                    self.deals.get.data.push(self.deals[method].resultRequest.data[key]);
                }

            },
            // === show popup === //
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
            // === update deal === //
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
            refreshInfoDeal: function(id) {
                var self = this,
                    dealInfo = self.deals.get.data[id-1];

                upload.$emit("send-data", dealInfo);
            },
        },
        mounted: function() {
            var self = this;

            self.table = $(".main-table-result");


            self.$nextTick(function () {
                self.table.addClass("loading");
                DEALIBRE.page.summCr.init();
            });

            // --- different listeners --- //
            self.$on("update-information", function(params) {
                self.deals.post.params = params.params;
                self.deals.post.url = self.deals.post.url.replace("{deal}", params.idDeal);
                self.updateDealInfo();
            });

            self.$on("refresh-information", function(idDeal) {
                self.refreshInfoDeal(idDeal);
            });
            // --- || --- //

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

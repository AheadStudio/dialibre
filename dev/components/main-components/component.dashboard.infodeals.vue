<template lang="jade">
    div(id="infodeals", class="popup-container popup-infodeals white-popup mfp-hide")
        div(class="popup-infodeals-head")
            div(class="popup-infodeals-head-map")
                div(class="popup-infodeals-head-map-holder")
                    mapsvg()
            div(class="popup-infodeals-head-name")
                div(class="popup-infodeals-head-name-title", v-if="fields.industry") {{ fields.industry.name }}
                div(class="popup-infodeals-head-name-count") Private Label to 5000 SuperMarkets
                div(class="popup-infodeals-head-name-location", v-if="fields.locale") {{ fields.locale.area.name }} - {{ fields.locale.country.name }}
                div(class="popup-infodeals-head-name-users") 5 Dealibre' users have confirmed this deal
            div(class="popup-infodeals-head-price-items")
                div(class="popup-infodeals-head-price-item")
                    span(class="popup-infodeals-head-price-item-text") Revenue
                    span(class="popup-infodeals-head-price-item-quantity", v-if="fields.financial_records") ${{ fields.financial_records[0].revenue }} m
                div(class="popup-infodeals-head-price-item")
                    span(class="popup-infodeals-head-price-item-text") Ebitda
                    span(class="popup-infodeals-head-price-item-quantity", v-if="fields.financial_records") ${{ fields.financial_records[0].ebitda }} m
                div(class="popup-infodeals-head-price-item")
                    span(class="popup-infodeals-head-price-item-text") Cash flow
                    span(class="popup-infodeals-head-price-item-quantity", v-if="fields.financial_records") ${{ fields.financial_records[0].cash_flow }} m

                button(type="button", class="btn btn--green popup-infodeals-head-price-items-btn", @click="unlockDeal($event)", v-if="!fields.has_user") unlock 25

        div(class="popup-infodeals-content")
            div(class="popup-infodeals-content-item")
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Company info
                    tbody
                        tr
                            td Company name
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(:class="{ changedeal: fields.has_user }", v-else)
                                input(type="text", :value="fields.company_name", class="deal-input", @change="changeDeal($event)", name="company_name")
                                span {{ fields.company_name }}

                        tr
                            td Industry
                            td(v-if="!fields.has_user && fields.industry") {{ fields.industry.name }}
                            td(:class="{ changedeal: fields.has_user }", v-else-if="fields.industry")
                                input(type="text", :value="fields.industry.name", class="deal-input", @change="changeDeal($event)", name="industry.id")
                                span {{ fields.industry.name }}
                        tr
                            td Location
                            td(:class="{ changedeal: fields.has_user }", v-if="!fields.has_user && fields.locale") {{ fields.locale.area.name }} - {{ fields.locale.country.name }}
                            td(:class="{ changedeal: fields.has_user }", v-else-if="fields.locale")
                                input(type="text", :value="fields.locale.area.name + ' - ' + fields.locale.country.name", class="deal-input", @change="changeDeal($event)", name="location{area,country,region,state}")
                                span {{ fields.locale.area.name }} - {{ fields.locale.country.name }}
                        tr
                            td Year Founded
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(:class="{ changedeal: fields.has_user }", v-else)
                                input(type="text", :value="fields.foundation_year", class="deal-input", @change="changeDeal($event)", name="foundation_year")
                                span {{ fields.foundation_year }}
                        tr
                            td Headcount
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(:class="{ changedeal: fields.has_user }", v-else)
                                input(type="text", :value="fields.headcount", class="deal-input", @change="changeDeal($event)", name="headcount")
                                span {{ fields.headcount }}
                        tr
                            td CEO Name
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(:class="{ changedeal: fields.has_user }", v-else)
                                input(type="text", :value="fields.ceo_name", class="deal-input", @change="changeDeal($event)", name="ceo_name")
                                span {{ fields.ceo_name }}
                        tr
                            td(class="last-cell", colspan="2") Company Description
                                span(class="full-text", v-if="fields.preview") {{ fields.preview }}

            div(class="popup-infodeals-content-item")
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Dates
                    tbody
                        tr
                            td Posted Date
                            td(v-if="fields.approved_at") {{ fields.approved_at }}
                        tr
                            td Updated Date
                            td(v-if="fields.updated_at") {{ fields.updated_at }}
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Transaction Info
                    tbody
                        tr
                            td Transaction Type
                            td(v-if="fields.transaction_type") {{ fields.transaction_type.name }}
                        tr
                            td Desired Sponsor
                            td(v-if="fields.sponsor") {{ fields.sponsor.name }}
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Represented by
                    tbody
                        tr
                            td Name
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(v-else-if="fields.user")
                                span {{ fields.user.first_name }}
                        tr
                            td Company
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(v-else-if="fields.user")
                                span {{ fields.user.company_name }}
                        tr
                            td Position
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(v-else-if="fields.user")
                                span {{ fields.user.position }}
                        tr
                            td Phone
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(v-else-if="fields.user")
                                span {{ fields.user.phone }}
                        tr
                            td Email
                            td(v-if="!fields.has_user")
                                img(src="../svg/zamok.svg")
                            td(v-else-if="fields.user")
                                span {{ fields.user.email }}
            div(class="popup-infodeals-content-item")
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Deal info
                    tbody
                        tr
                            td Deal Type
                            td(v-if="fields.deal_type") {{ fields.deal_type.name }}
                        tr
                            td Posting User Rating
                            td(v-if="fields.user_rating || fields.user_rating === 0 ") {{ fields.user_rating }}
                        tr
                            td Sources
                            td(v-if="fields.source_type") {{ fields.source_type.name }}
                        tr
                            td Times Unloked
                            td(v-if="fields.times_unlocked") {{ fields.times_unlocked }}
                table(class="popup-infodeals-content-item-table")
                    thead
                        tr
                            th(colspan="2") Fees
                    tbody
                        tr
                            td(class="last-cell", colspan="2", v-if="fields.fees") {{ fields.fees }}
                table(class="popup-infodeals-content-item-table popup-infodeals-content-item-table--background")
                    thead
                        tr
                            th(colspan="8") Financials
                    tbody
                        tr
                            td
                            td(v-if="fields.financial_records", v-for="item in reverseArray", :key="item.id")
                                {{ item.year }}
                                span(v-if="item.estimate") E
                        tr
                            td Revenue
                            td(v-if="fields.financial_records", v-for="item in reverseArray") ${{ item.revenue }} m
                        tr
                            td Cash
                            td(v-if="fields.financial_records", v-for="item in reverseArray") ${{ item.cash_flow }} m
                        tr
                            td EBITDA
                            td(v-if="fields.financial_records", v-for="item in reverseArray") ${{ item.ebitda }} m
                        tr
                            td EBITDA Margin
                            td(v-if="fields.financial_records", v-for="item in reverseArray") ${{ item.ebitda }} m

        div(class="popup-infodeals-navigation")
            a(href="#", class="link popup-infodeals-navigation-prev popup-infodeals-navigation-prev--w60")
                span(class="popup-infodeals-navigation-icon") <
                span(class="popup-infodeals-navigation-item") Previous deal

            a(href="#nda", class="btn btn--blue popup-infodeals-navigation-btn popup", v-if="fields.has_user") Sigh nda
            a(href="#rating", class="btn btn--blue popup-infodeals-navigation-btn popup", v-if="fields.has_user && fields.source_type.authorized") Rate this deal
            a(href="#nda", class="btn btn--green popup-infodeals-navigation-btn popup", v-if="fields.has_user && fields.source_type.authorized") Chat with rep
            a(href="#reportdeal", class="btn btn--blue-inverse popup-infodeals-navigation-btn popup", v-if="fields.has_user && fields.source_type.authorized") report deal
            a(href="#", class="link popup-infodeals-navigation-next popup-infodeals-navigation-next--w30")
                span(class="popup-infodeals-navigation-item") Next deal
                span(class="popup-infodeals-navigation-icon") >
</template>

<script>
    import mapsvg from '../svg-components/map.vue';

    export default {
        data: function() {
            return {
                fields: {},
            }
        },
        methods: {

            // === Set parameters for change and update deal === //
            changeDeal: function(event) {
                var self = this,
                    el = $(event.target),
                    nameEl = el.attr("name"),
                    valEl = el.val(),
                    newInfo = {},
                    newValEl;

                newInfo.params = {};
                newInfo.idDeal = self.fields.id;


                // processing array data
                if (nameEl.indexOf("[]") - 1 !== false) {
                    newValEl = [];

                    nameEl = nameEl.replace("[]", "");
                    newValEl = valEl.split("-");
                }

                if (nameEl.indexOf("{}") - 1 !== false) {
                    newValEl = {};

                    var startStr = nameEl.indexOf("{");

                    var newName = nameEl.substr(0, startStr);

                    var elementsStr = nameEl.substring(startStr);
                        elementsStr = elementsStr.replace("{", "");
                        elementsStr = elementsStr.replace("}", "");

                    var arElementStr = elementsStr.split(",");

                    var arValEl = valEl.split("-");

                    for (var i = 0; i < arValEl.length; i++) {
                        newValEl[arElementStr[i]] = arValEl[i];
                    }
                    newInfo.params[newName] = newValEl;
                }

                // call method in parent component for update information if change it
                self.$root.$emit("update-information", newInfo);

            },

            // === Unlock deal ===//
            unlockDeal: function(event) {
                var self = this,
                    el = $(event.target);

                axios.post("/api/deal/unlock", { deal_id: self.fields.id })
                .then(function(answer) {
                    var data = answer.data.data;

                    self.$root.$emit("refresh-information", data.id);

                }).catch(function(info) {
                    var dataError = info.response.data;
                });

            },

            // === Get Information about deal === //
            getInfoDeal: function(data) {
                var self = this;
                self.fields = data;

                self.fields.has_user = data.unlocked;

                for (var key in self.fields.locale) {
                    if (self.fields.locale[key] === null) {
                        self.fields.locale[key] = "";
                    }
                }
                console.log("Info deal", self.fields);
            }
        },
        computed: {
            reverseArray: function() {
                var self = this;
                if (self.fields.financial_records) {
                    return self.fields.financial_records.slice().reverse();
                }
            }
        },
        components: {
            "mapsvg" : mapsvg,
        },
        mounted: function() {
            var self = this,
                el = $(self.$el);

            // --- Lisen events --- //
            upload.$on("send-data", function (data) {
                self.getInfoDeal(data);
            });
            // --- || --- //

            DEALIBRE.forms.init(el);
        },
        updated: function () {
            var self = this,
                el = $(self.$el);
            el.addClass("loading-opacity");

            self.$nextTick(function () {
                DEALIBRE.deals.changedeal(el.find(".changedeal"));
                el.addClass("loading-opacity--show");
            });

        }
    }
</script>

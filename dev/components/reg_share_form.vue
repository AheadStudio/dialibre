<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") SHARE DEAL

            div(class="page-inner page-inner--w1")
                div(class="register-share")
                    div(class="register-share-subtitle register-share-subtitle-form")
                        | You are a company representative such as broker, owner,
                        br
                        | You will ba ableto accept NDA’s and exchange CIM’s making communication with interested parties easy.
                    div(class="register-share-form-big")
                        form(v-bind:action="form.action", class="form register-share-form-big-container", @submit.prevent="send")
                            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", name="company_name", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Company name", v-model="fields.company_name", required)
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", name="industry_id", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Industry", v-model="fields.industry_id", required)

                            div(class="register-share-form-big-row-joint")
                                div(class="register-share-form-big-row")
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                        input(type="text", name="foundation_year", class="register-share-form-big-item register-share-form-big-item--text", placeholder="You founded", v-model="fields.foundation_year", required)
                                div(class="register-share-form-big-row")
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w4")
                                        input(type="text", name="headcount", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Headcount", v-model="fields.headcount", required)
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w3")
                                        input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="CEO Name", v-model="fields.ceo_name", required)
                            location(@location="getLocation")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="3", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Shot company description (up to 100 characters)", v-model="fields.preview", required)
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="6", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Long company description (up to 1500 characters)", v-model="fields.description", required)
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") Transaction info
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Transaction type", v-model="fields.transaction_type_id", required)
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Desired sponsor", v-model="fields.sponsor_id")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") Deal info
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Deal type", v-model="fields.deal_type_id", required)
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Sources", v-model="fields.source_type_id", required)
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Fees", v-model="fields.fees", required)

                            div(class="register-share-form-big-row register-share-form-big-row--text")
                                div(class="register-share-form-big-row-title") Financials
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    div(class="register-share-form-big-row-info")
                                        | Praesent ullamcorper sapien nec dolor tincidunt molestie. Suspendisse ex tortor, porttitor nec diam non, porta laoreet tellus.
                                        br
                                        | Sed gravida ultrices lectus, et feugiat orci luctus nec. Donec luctus, nulla et euismod condimentum, magna libero aliquam metus, quis feugiat tellus nunc ut lacus.
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    table(class="register-share-form-big-item--table")
                                        thead
                                            tr
                                                th
                                                th
                                                    label(class="register-share-form-big-checkbox")
                                                        input(type="checkbox", class="register-share-form-big-item--checkbox", :value="year-4", name="year", @change="checkboxEvent")
                                                        span(class="register-share-form-big-checkbox-title") E
                                                    span(class="year") {{ year-4 }}
                                                th
                                                    label(class="register-share-form-big-checkbox")
                                                        input(type="checkbox", class="register-share-form-big-item--checkbox", :value="year-3", name="year", @change="checkboxEvent")
                                                        span(class="register-share-form-big-checkbox-title") E
                                                    span(class="year") {{ year-3 }}
                                                th
                                                    label(class="register-share-form-big-checkbox")
                                                        input(type="checkbox", class="register-share-form-big-item--checkbox", :value="year-2", name="year", @change="checkboxEvent")
                                                        span(class="register-share-form-big-checkbox-title") E
                                                    span(class="year") {{ year-2 }}
                                                th
                                                    label(class="register-share-form-big-checkbox")
                                                        input(type="checkbox", class="register-share-form-big-item--checkbox", :value="year-1", name="year", @change="checkboxEvent")
                                                        span(class="register-share-form-big-checkbox-title") E
                                                    span(class="year") {{ year-1 }}
                                                th
                                                    span(class="year") {{ year }} E
                                        tbody
                                            tr
                                                td Revenue
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="revenue", :data-year="year-4")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="revenue", :data-year="year-3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="revenue", :data-year="year-2", v-model="popup.financialsLast.revenue3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="revenue", :data-year="year-1", v-model="popup.financialsLast.revenue2")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="revenue", :data-year="year", v-model="popup.financialsLast.revenue1")
                                            tr
                                                td EBITDA
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="ebitda", :data-year="year-4")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="ebitda", :data-year="year-3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="ebitda", :data-year="year-2", v-model="popup.financialsLast.ebitda3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="ebitda", :data-year="year-1", v-model="popup.financialsLast.ebitda2")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="ebitda", :data-year="year", v-model="popup.financialsLast.ebitda1")
                                            tr
                                                td Cash Flow
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="cash", :data-year="year-4")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="cash", :data-year="year-3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="cash", :data-year="year-2", v-model="popup.financialsLast.cash3")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="cash", :data-year="year-1", v-model="popup.financialsLast.cash2")
                                                td
                                                    span(class="table-text") different text
                                                    input(type="text", class="input-table-text", placeholder="number", name="cash", :data-year="year", v-model="popup.financialsLast.cash1")
                                    span(class="register-estimate") E - Estimate
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") nda
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Type NDA", v-model="fields.select_nda", @change="showText", data-hideid="typenda")
                                        option(value="standart") Standart
                                        option(value="own") Own
                                        option(value="custom") Custom
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    div(class="register-share-form-big-row-info") Praesent ullamcorper sapien nec dolor tincidunt molestie. Suspendisse ex tortor, porttitor nec diam non, porta laoreet tellus. Sed gravida ultrices lectus, et feugiat orci luctus nec.

                            div(class="register-share-form-big-row hide-block hide", data-hideblock="typenda")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="7", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Text of specil custom NDA", v-model="fields.nda")

                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") CIM (Confidential Information Memorandum)
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    label(class="register-share-form-big-checkbox")
                                        input(type="checkbox", class="register-share-form-big-item--checkbox", v-model="fields.share_cim")
                                        span(class="register-share-form-big-checkbox-title") Text  Text explanation
                            div(class="register-share-form-big-row register-share-form-big-row--left")
                                div(class="register-share-form-big-item-holder file-upload-form")
                                    input(type="file", name="files", class="register-share-form-big--file")

                            div(class="register-share-form-big-row register-share-form-big-row--center")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    label(class="register-share-form-big-checkbox")
                                        input(type="checkbox", class="register-share-form-big-item--checkbox", v-model="check_agree")
                                        span(class="register-share-form-big-checkbox-title agree-checkbox", v-html="agreeText")


                            div(class="register-share-form-big-row register-share-form-big-row--center")
                                button(href="#infodeals", type="button", class="btn btn--green-inverse register-share-form-big-item--btn popup") Preview
                                button(type="submit", class="btn btn--green register-share-form-big-item--submit") Submit deal

            div(id="infodeals", class="popup-container popup-infodeals white-popup mfp-hide")
                div(class="popup-infodeals-head")
                    div(class="popup-infodeals-head-map")
                        div(class="popup-infodeals-head-map-holder")
                            mapsvg()
                    div(class="popup-infodeals-head-name")
                        div(class="popup-infodeals-head-name-title") {{ fields.industry_id }}
                        div(class="popup-infodeals-head-name-count") Private Label to 5000 SuperMarkets
                        div(class="popup-infodeals-head-name-location") {{ popup.locationName.area }} {{ popup.locationName.country }} {{ popup.locationName.region }} {{ popup.locationName.state }}
                        div(class="popup-infodeals-head-name-users") 5 Dealibre' users have confirmed this deal
                    div(class="popup-infodeals-head-price-items")
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Revenue
                            span(class="popup-infodeals-head-price-item-quantity") ${{ popup.financialsLast.revenue1 }} m
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Ebitda
                            span(class="popup-infodeals-head-price-item-quantity") ${{ popup.financialsLast.ebitda1 }} m
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Cash flow
                            span(class="popup-infodeals-head-price-item-quantity") ${{ popup.financialsLast.cash1 }} m

                div(class="popup-infodeals-content")
                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Company info
                            tbody
                                tr
                                    td Company name
                                    td {{ fields.company_name }}
                                tr
                                    td Industry
                                    td {{ fields.industry_id }}
                                tr
                                    td Location
                                    td {{ popup.locationName.area }} {{ popup.locationName.country }} {{ popup.locationName.region }} {{ popup.locationName.state }}
                                tr
                                    td Year Founded
                                    td {{ fields.foundation_year }}
                                tr
                                    td Headcount
                                    td {{ fields.headcount }}
                                tr
                                    td CEO Name
                                    td {{ fields.ceo_name }}
                                tr
                                    td(class="last-cell", colspan="2") Company Description
                                        span(class="full-text")  {{ fields.preview }}

                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Dates
                            tbody
                                tr
                                    td Posted Date
                                    td 15/06/2016
                                tr
                                    td Updated Date
                                    td 15/06/2016
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Transaction Info
                            tbody
                                tr
                                    td Transaction Type
                                    td {{ fields.transaction_type_id }}
                                tr
                                    td Desired Sponsor
                                    td {{ fields.sponsor_id }}
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Represented by
                            tbody
                                tr
                                    td Name
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Company
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Adress
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Phone
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Email
                                    td
                                        img(src="../svg/zamok.svg")
                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Deal info
                            tbody
                                tr
                                    td Deal Type
                                    td {{ fields.deal_type_id }}
                                tr
                                    td Posting User Rating
                                    td 4.9
                                tr
                                    td Sources
                                    td {{ fields.source_type_id }}
                                tr
                                    td Tames Unloked
                                    td 21
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Fees
                            tbody
                                tr
                                    td(class="last-cell", colspan="2") {{ fields.fees }}
                        table(class="popup-infodeals-content-item-table popup-infodeals-content-item-table--background")
                            thead
                                tr
                                    th(colspan="4") Financials
                            tbody
                                tr
                                    td
                                    td 2014
                                    td 2015
                                    td 2016E

                                tr
                                    td Revenue
                                    td ${{ popup.financialsLast.revenue3 }}M
                                    td ${{ popup.financialsLast.revenue2 }}M
                                    td ${{ popup.financialsLast.revenue1 }}M
                                tr
                                    td Y-Y Growth
                                    td -
                                    td 18.9%
                                    td 15.9%
                                tr
                                    td EBITDA
                                    td ${{ popup.financialsLast.ebitda3 }}M
                                    td ${{ popup.financialsLast.ebitda2 }}M
                                    td ${{ popup.financialsLast.ebitda1 }}M
                                tr
                                    td EBITDA Margin
                                    td 12%
                                    td 11%
                                    td 11.9%


</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import location from './main-components/component.regdealform.location.vue';
    import mapsvg from './svg-components/map.vue';

    export default {
        data: function() {
            return {
                headerProps: {
                    pageTitle    :  "",
                    mobileClass  :  "",
                    headerType   :  "",
                    isUserAuth   :   false,
                },
                year: "",
                fields: {
                    company_name: "",
                    industry_id: "",
                    foundation_year: "",
                    headcount: "",
                    ceo_name: "",
                    preview: "",
                    description: "",
                    transaction_type_id: "",
                    sponsor_id: "",
                    deal_type_id: "",
                    source_type_id: "",
                    fees: "",
                    select_nda: "",
                    nda: "",
                    cim: [],
                    financials: [],
                    location: {},
                    share_cim: false,
                },
                popup: {
                    industry_id: "",
                    financialsLast: {
                        revenue1: "",
                        revenue2: "",
                        revenue3: "",
                        ebitda1: "",
                        ebitda2: "",
                        ebitda3: "",
                        cash1: "",
                        cash2: "",
                        cash3: "",
                    },
                    locationName: {},
                },
                form: {
                    action: "/api/deal/add",
                    message: "",
                    success: false,
                    redirect: "",
                },
                check_agree: false,
                agreeText: 'By click “SUBMIT DEAL” you agree with <a href="#" class="link register-share-form-big-checkbox-title-link">Terms of Service.</a>',
                checkBoxYear: ""
            }
        },
        created: function() {
            var self = this,
                $body = $("body");

            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "register-step-2";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "register-step-2";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                }
            });

            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }

            var now = new Date();
            self.year = now.getFullYear();

            DealibreApp.methods.showFooter();
        },
        methods: {
            send: function() {
                var self = this,
                    $form = $(this.$el).find("form.register-share-form-big-container"),
                    arrayFile = fileUploadApi.getChoosedFiles(),
                    textCheckbox = $(".agree-checkbox"),
                    formData = new FormData();

                if(!$form.valid()) {
                    return false;
                }


                console.log(self.popup);
                console.log(self.fields);

                if (self.check_agree == false) {
                    textCheckbox.addClass("error");
                    self.agreeText = 'You forgot to click "SUBMIT DEAL"';

                } else if(!$form.valid()) {
                    return false;

                } else {

                    textCheckbox.removeClass("error");
                    self.agreeText = 'By click “SUBMIT DEAL” you agree with <a href="#" class="link register-share-form-big-checkbox-title-link">Terms of Service.</a>';

                    $form.find(":submit").attr("disabled", "disabled");


                    for (var i = 0; i < arrayFile.length; i++) {
                        self.fields.cim.push(arrayFile[i].file);
                    }

                    self.inputTable($form);

                    for (var key in self.fields) {
                        if (key === "location") {
                            var locationStr = JSON.stringify(self.fields[key]);
                            formData.append(key, locationStr);
                        } else if (key === "cim") {
                            formData.append("cim[]", self.fields[key]);
                        } else if (key === "financials") {
                            formData.append("financials[]", self.fields[key]);
                        } else {
                            formData.append(key, self.fields[key]);
                        }
                    }

                    console.log(self.fields);

                    const config = {
                        headers: { 'content-type': 'multipart/form-data' }
                    }
                    axios.post($form.attr("action"), formData, config)
                        .then(function(answer) {
                            var data = answer.data;

                            console.log(data);

                            self.form.message = data.message;
                            self.form.success = true;

                            if (data.redirect) {
                                self.form.redirect = data.redirect;
                            }

                            $form.find(":submit").removeAttr("disabled");

                            if(self.fields) {
                                for(var code in self.fields) {
                                    self.fields[code] = "";
                                }
                            }

                            $form.find(".valid").removeClass("valid");

                            if (self.form.redirect != null) {
                                var redirect = self.form.redirect.replace("/", "") + ".html";
                                //document.location.href = redirect;
                            }

                        }).catch(function(info) {
                            var dataError = info.response.data;
                            self.form.message = dataError.message;
                            self.form.success = false;
                            self.validateFromServer(dataError.data);
                            $form.find(":submit").removeAttr("disabled");
                        });

                }

            },
            validateFromServer: function(form) {
                var $form = $(this.$el).find("form");
                for(var code in form) {
                    var fieldError = form[code],
                        $field = $form.find("[name=" + code + "]");
                    if($field.attr("type") != "hidden") {
                        $field.addClass("form-item--error").after('<span class="form-item--error" id="' + code + '-error">' + fieldError + '</span>');
                    }
                }
            },
            checkboxEvent: function(event) {
                var self = this,
                    valCheckbox = $(event.target).val();
                self.checkBoxYear = valCheckbox;
            },
            inputTable: function(form) {
                var self = this,
                    inputRevenue = form.find("[data-year]");

                for (var i = self.year; i >= self.year - 4; i--) {
                    self.fields.financials.push([i]);
                }
                inputRevenue.each(function() {
                    var el = $(this),
                        dateInput = el.data("year"),
                        valInput = el.val(),
                        nameInput = el.attr("name");

                    for (var i = 0; i < self.fields.financials.length; i++) {
                        if (self.fields.financials[i][0] === dateInput) {
                            self.fields.financials[i].push(valInput);
                        }
                    }
                });
                for (var i = 0; i < self.fields.financials.length; i++) {
                    if (self.fields.financials[i][0] == self.checkBoxYear) {
                        self.fields.financials[i].push(true);
                    } else {
                        self.fields.financials[i].push(false);
                    }
                }
            },
            getLocation: function(event) {
                var self = this;
                self.fields.location = event;
                self.popup.locationName = event.name;
            },
            showText: function(event) {
                var self = this,
                    selectVal = event.target.value,
                    selectData = $(event.target).data("hideid"),
                    $hideBlock = $("div[data-hideblock='"+selectData+"']");

                if (selectVal == "custom") {
                    $hideBlock.removeClass("hide-block");

                    setTimeout(function(){
                        $hideBlock.removeClass("hide");
                    }, 300);
                }
                if (!$hideBlock.hasClass("hide-block") && selectVal != "custom") {
                    $hideBlock.addClass("hide");

                    setTimeout(function(){
                        $hideBlock.addClass("hide-block");
                    }, 300);
                }
            }
        },
        components: {
            "location": location,
            "newheader": newheader,
            "mapsvg": mapsvg,
        },
        mounted: function() {
            DEALIBRE.changeTableText();
            DEALIBRE.forms.init(this.$el);
            DEALIBRE.forms.fileUpload();
            DEALIBRE.modalWindow.init();
        }
    }
</script>

<style lang="css">
    .hide-block {
        display: none !important;
    }
    .hide {
        opacity: 0;
        transform: translateY(-50px);
    }
    .register-share-form-big-row {
        transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
</style>

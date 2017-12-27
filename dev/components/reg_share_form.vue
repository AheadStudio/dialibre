<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader()
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
                        form(action="#", class="register-share-form-big-container")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Company name", v-model="company_name")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Industry", v-model="industry_name")

                            div(class="register-share-form-big-row-joint")
                                div(class="register-share-form-big-row")
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                        input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="You founded", v-model="you_founded")
                                div(class="register-share-form-big-row")
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w4")
                                        input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Headcount", v-model="headcount")
                                    div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w3")
                                        input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="CEO Name", v-model="ceo_name")
                            location()
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="3", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Shot company description (up to 100 characters)", v-model="shot_comp_desc")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="6", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Long company description (up to 1500 characters)", v-model="long_comp_desc")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") Transaction info
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Transaction type", v-model="transaction_type")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Desired sponsor", v-model="desired_sponsor")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") Deal info
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Deal type", v-model="deal_type")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Sources", v-model="sources")
                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    input(type="text", class="register-share-form-big-item register-share-form-big-item--text", placeholder="Fees", v-model="fees")

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
                                                th 2013
                                                th 2014
                                                th 2015
                                                th 2016
                                                th Estimate
                                        tbody
                                            tr
                                                td Revenue
                                                td different text
                                                td different text
                                                td different text
                                                td different text
                                                td different text

                                            tr
                                                td EBITDA
                                                td different text
                                                td different text
                                                td different text
                                                td different text
                                                td different text
                                            tr
                                                td Cash Flow
                                                td different text
                                                td different text
                                                td different text
                                                td different text
                                                td different text

                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") nda
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Type NDA", v-model="type_nda")
                                        option(value="1") Standart
                                        option(value="2") Own
                                        option(value="3") Custom
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                                    div(class="register-share-form-big-row-info") Praesent ullamcorper sapien nec dolor tincidunt molestie. Suspendisse ex tortor, porttitor nec diam non, porta laoreet tellus. Sed gravida ultrices lectus, et feugiat orci luctus nec.

                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    textarea(rows="7", class="register-share-form-big-item register-share-form-big-item--textarea", placeholder="Text of specil custom NDA", v-model="text_nda")

                            div(class="register-share-form-big-row")
                                div(class="register-share-form-big-row-title") CIM (Confidential Information Memorandum)
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    label(class="register-share-form-big-checkbox")
                                        input(type="checkbox", class="register-share-form-big-item--checkbox")
                                        span(class="register-share-form-big-checkbox-title") Text  Text explanation
                            div(class="register-share-form-big-row register-share-form-big-row--left")
                                div(class="register-share-form-big-item-holder file-upload-form")
                                    input(type="file", name="files", class="register-share-form-big--file")

                            div(class="register-share-form-big-row register-share-form-big-row--center")
                                div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w1")
                                    label(class="register-share-form-big-checkbox")
                                        input(type="checkbox", class="register-share-form-big-item--checkbox", v-model="check_agree")
                                        span(class="register-share-form-big-checkbox-title") By click “SUBMIT DEAL” you agree with
                                            a(href="#", class="link register-share-form-big-checkbox-title-link") Terms of Service.

                            div(class="register-share-form-big-row register-share-form-big-row--center")
                                button(type="button", class="btn btn--green-inverse register-share-form-big-item--btn") Preview
                                button(type="submit", class="btn btn--green register-share-form-big-item--submit") Submit deal

</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import location from './main-components/component.regdealform.location.vue';

    export default {
        components: {
            "location": location,
            "newheader": newheader,
        },
        mounted: function() {
            DEALIBRE.forms.init(false);
            DEALIBRE.forms.fileUpload();
        }
    }
</script>

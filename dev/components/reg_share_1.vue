<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") Share deal

        div(class="page-inner page-inner--w1")
            div(class="register-share")
                div(class="register-share-title") Are you an authorized representative for the deal you are looking to share?
                div(class="register-share-text")
                    ul
                        li If you are an authorized rep for this deal, Dealibre’ will faclitate you NDA exchange, sharing of CIM, all in one simple interface. As you deal is approved by our analysts you will also get 50 points to be used to unlock other deals of interest.
                        li If you are sharing a deal from your deal flow, we will award you up to 30 points after you analysts reveiw.
                div(class="register-share-choose")
                    form(action="#", class="register-share-form-choose", @submit.prevent="send")
                        div(class="register-share-form-choose-row")
                            div(class="register-share-form-choose-holder")
                                select(class="register-share-form-choose-item-select", placeholder="Choose One", v-model="selectStep")
                                    option(v-for="step in steps" v-bind:value="step.link") {{ step.stepText }}
                            button(type="submit", class="btn btn--green register-share-form-choose-submit") next step

                div(class="register-share-text")
                    p At Dealibre’ we keep deal flow relevant to the M&A industry interest.
                    p Minimum EBITDA/Cash Flow requirement is $500.000.
                    p Or Revenue above $10m in case EBITDA/CF is below $500,000.
</template>

<script>
    export default {
        data: function() {
            return {
                selectStep: "",
                steps: [
                    {link:"register_share_step2_files.html", stepText:"I'm an Authorized Rep in is deal"},
                    {link:"register_share_step2_form.html", stepText:"Sharing deal from my deal flow"}
                ]
            }
        },
        methods: {
            send: function() {
                var self = this;
                document.location.href=self.selectStep;
            }
        },
        mounted: function() {
            DEALIBRE.forms.init(false);
        }
    }
</script>

<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="name", placeholder="Name as it appears on the card")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="line1", placeholder="Billing Address")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="city", placeholder="City")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    select(class="popup-addcard-form-holder-item-select", name="state", placeholder="State", )
                        option(value="state1") state1
                        option(value="state2") state2
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="zip", placeholder="ZIP / Postal Code")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w2")
                    select(class="popup-addcard-form-holder-item-select", name="country", placeholder="Country")
                        option(value="USA") USA
                        option(value="France") France
                        option(value="China") China
                        option(value="Italy") Italy
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="number", placeholder="Card Number")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="exp_month", placeholder="Expiration Month")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="exp_year", placeholder="Expiration Year")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w2")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="cvc", placeholder="Security Code")
            div(class="popup-addcard-form-row popup-addcard-form-row--left")
                button(type="submit", class="btn btn--green popup-addcard-form-holder-item--btn") Add card
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                form: {
                    action: "/api/user/cards/add",
                    message: "",
                    success: false
                }
            }
        },
        mixins: [sendMixin],
    }
</script>

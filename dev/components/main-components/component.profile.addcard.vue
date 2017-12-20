<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Name as it appears on the card", v-model="fields.name")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Billing Address", v-model="fields.line1")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="City", v-model="fields.city")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    select(class="popup-addcard-form-holder-item-select", placeholder="State", v-model="fields.state")
                        option(value="1") some text
                        option(value="2") some text
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="ZIP / Postal Code", v-model="fields.zip")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w2")
                    select(class="popup-addcard-form-holder-item-select", placeholder="Country", v-model="fields.country")
                        option(value="1") USA
                        option(value="2") France
                        option(value="3") China
                        option(value="3") Italy
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Card Number", v-model="fields.number", data-mask="0000 0000 0000 0000")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Expiration", v-model="fields.exp_year")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w3")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Security Code", v-model="fields.cvc")
            div(class="popup-addcard-form-row popup-addcard-form-row--left")
                button(type="submit", class="btn btn--green popup-addcard-form-holder-item--btn") Add card
</template>

<script>
export default {
    data: function() {
        return {
            fields: {
                name       :  "",
                line1      :  "",
                city       :  "",
                state      :  "",
                zip        :  "",
                country    :  "",
                number     :  "",
                cvc        :  "",
                exp_month  :  "",
                exp_year   :  "",
            },
            form: {
                action: "/api/user/cards/add",
                message: "",
                success: false
            }
        }
    }
}
</script>

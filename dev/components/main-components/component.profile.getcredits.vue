<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="password", placeholder="Credit amount", v-model="fields.credits")
            div(class="popup-title") It will cost $100
            div(class="popup-addcard-form-row popup-addcard-form-row--center")
                button(type="submit",class="btn btn--green popup-addcard-form-holder-item--btn") buy
</template>
<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    credits: "",
                },
                form: {
                    action: "/api/user/change/password",
                    message: "",
                    success: false
                }
            }
        },
        mixins: [sendMixin],
    }
</script>

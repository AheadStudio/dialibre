<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="password", placeholder="Old password", v-model="fields.password")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="new_password", placeholder="New password", v-model="fields.new_password")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="new_password_confirmation",  placeholder="Repeat new password", v-model="fields.new_password_confirmation")
            div(class="popup-addcard-form-row popup-addcard-form-row--left")
                button(type="submit",class="btn btn--green popup-addcard-form-holder-item--btn") save
</template>
<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    password: "",
                    new_password: "",
                    new_password_confirmation: "",
                },
                form: {
                    action: "/api/user/change/password",
                    message: "",
                    success: false
                }
            }
        },
        mixins: [sendMixin]
    }
</script>

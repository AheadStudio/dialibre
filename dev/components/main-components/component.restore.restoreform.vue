<template lang="jade">
    div(class="form-holder")
        form(class="form", @submit.prevent="send", v-bind:action="form.action")
            input(type="hidden", name="token", v-model="token")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="email", class="form-item--text", placeholder="E-mail", name="email", v-model="fields.email", required)
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="password", class="form-item--text", placeholder="Password", name="password", v-model="fields.password", required)
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="password", class="form-item--text", placeholder="Password confirmation", name="password_confirmation", v-model="fields.password_confirmation", required)
            div(class="form-row form-row--centered")
                div(class="form-btn-holder")
                    button(type="submit", class="btn btn--green form-btn") Change
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    email: "",
                    password: "",
                    password_confirmation: "",
                    token: DealibreApp.utils.getUrlParameter("token")
                },
                form: {
                    action: "api/password/reset",
                    message: "",
                    success: false
                }
            }
        },
        mixins: [sendMixin],
        mounted: function() {
            var element = $(this.$el);

            this.$nextTick(function () {
                element.addClass("loading-opacity");

                setTimeout(function(){
                    element.addClass("loading-opacity--show");
                }, 600);
            })

            DEALIBRE.forms.init(this.$el);
            DEALIBRE.forms.fileUpload();
        },
    }
</script>

<template lang="jade">
    div(class="form-holder")
        form(class="form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="email", class="form-item--text", placeholder="E-mail", name="email", v-model="fields.email", required)
            div(class="form-row form-row--centered")
                div(class="form-btn-holder")
                    button(type="submit", class="btn btn--green form-btn") Send
                    div(class="form-back-holder")
                        a(href="signin.html", class="form-link") Back to log in
                    div(class="form-btn-controls")
                        div(class="form-btn-control-item form-btn-control-item--left")
                            a(href="register.html", class="form-link") Dont have an account?
                        div(class="form-btn-control-item form-btn-control-item--right")
                            a(href="register.html", class="btn btn--blue") Sign up
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    email: ""
                },
                form: {
                    action: "/api/password/email",
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
        },
    }
</script>

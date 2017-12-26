<template lang="jade">
    div(class="form-holder")
        form(class="form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="User name", required, name="login", v-model="fields.login")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="password", class="form-item form-item--text", placeholder="Password", required, name="password", v-model="fields.password")
            div(class="form-row form-row--clearfix")
                label(class="form-savesession form-checkbox")
                    input(type="checkbox", name="remember", class="form-item form-checkbox-item form-item--checkbox", v-model="fields.remember")
                    span(class="form-checkbox-title") Keep me logged in
                a(href="recover.html", class="form-forgot form-link") Forgot password?
            div(class="form-row form-row--centered")
                div(class="form-btn-holder")
                    button(type="submit", class="btn btn--green form-btn") Log in
                    div(class="form-btn-controls")
                        div(class="form-btn-control-item form-btn-control-item--left")
                            span Dont have an account?
                        div(class="form-btn-control-item form-btn-control-item--right")
                            a(href="register.html", class="btn btn--blue") Registration
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    login: "",
                    password: "",
                    remember: "",
                },
                form: {
                    action: "/api/login",
                    message: "",
                    success: false,
                    redirect: "",
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

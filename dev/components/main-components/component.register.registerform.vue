<template lang="jade">
    div(class="form-holder")
        form(class="form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="email", class="form-item form-item--text", name="email", v-model="fields.email" placeholder="Work Email", required, data-error="Enter your email")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="First Name", name="first_name", v-model="fields.first_name")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="Last Name", name="last_name", v-model="fields.last_name")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="Company Name", name="company_name", v-model="fields.company_name")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="Position", name="position", v-model="fields.position")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    input(type="text", class="form-item form-item--text", placeholder="Phone" name="phone", v-model="fields.phone", required, data-error="Enter your phone")
            div(class="form-row form-row--centered")
                button(type="submit", class="btn btn--green") Join dealibre
            div(class="form-row form-row--centered")
                a(href="signin.html", class="form-link") Already have an account?
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    first_name: "",
                    last_name: "",
                    company_name: "",
                    email: "",
                    phone: "",
                    position: ""
                },
                form: {
                    action: "/api/register",
                    message: "",
                    success: false
                }
            }
        },
        mixins: [sendMixin],
        created: function() {
            var self = this,
                pageURL = decodeURIComponent(window.location.search.substring(1)),
                pageUrlParams = pageURL.split('&'),
                paramsName = [];

            for (var i = 0; i < pageUrlParams.length; i++) {
                paramsName.push(pageUrlParams[i].split('='));
                if (paramsName[i][0] === "emailUser") {
                    self.fields.email = paramsName[i][1]
                }
            }
        },
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

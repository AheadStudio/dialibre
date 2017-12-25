<template lang="jade">
    div(class="contacts-form")
        form(class="form", v-bind:action="form.action", @submit.prevent="send")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--half")
                    input(type="text", class="form-item form-item--text", placeholder="User name", name="name", v-model="fields.name")
                div(class="form-item-holder form-item-holder--half")
                    input(type="email", class="form-item form-item--text", placeholder="E-mail", name="email", required, v-model="fields.email")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    textarea(class="form-item form-item--textarea", placeholder="Question", name="text", v-model="fields.text")
            div(class="form-row")
                button(type="submit", class="btn btn--green") Send
</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                fields: {
                    name: "",
                    email: "",
                    text: ""
                },
                form: {
                    action: "/api/contacts/message",
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

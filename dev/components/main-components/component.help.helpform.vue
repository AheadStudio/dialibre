<template lang="jade">
    div(class="form-holder")
        form(class="form", v-bind:action="form.action", @submit.prevent="send")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="form-row")
                div(class="form-item-holder form-item-holder--third")
                    input(type="text", class="form-item form-item--text", placeholder="Name", name="name", v-model="fields.name", required)
                div(class="form-item-holder form-item-holder--third")
                    input(type="email", class="form-item form-item--text", placeholder="E-mail", name="email", required, v-model="fields.email")
                div(class="form-item-holder form-item-holder--third")
                    input(type="text", class="form-item form-item--text", placeholder="Phone", name="phone", data-mask="+1 (999) 999-99-99")
            div(class="form-row")
                div(class="form-item-holder form-item-holder--full")
                    textarea(class="form-item form-item--textarea", placeholder="Question", name="text", v-model="fields.text", required)
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
                    text: "",
                },
                form: {
                    action: "/api/support/ask",
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
        }
    }
</script>
<style lang="css" scoped>
    input[name="phone"] {
        border-color: #abb1b9;
    }
    input[name="phone"]:hover {
        border-color: #30b0ef;
    }
</style>

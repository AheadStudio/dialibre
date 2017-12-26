<template lang="jade">
    div()
        div(class="nda-title") Custom NDA
        div(class="nda-form")
            form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action", enctype="multipart/form-data")
                div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
                div(class="popup-addcard-form-row")
                    textarea(rows="5", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="nda", placeholder="NDA") {{ user.nda }}
                div(class="popup-addcard-form-row popup-addcard-form-row--left")
                    button(type="submit",class="btn btn--green popup-addcard-form-holder-item--btn") save

</template>

<script>
    // connect mixins
    import { sendMixin } from "../mixins/send_request.js"

    export default {
        data: function() {
            return {
                user: {
                    nda : "",
                },
                form: {
                    action: "/api/user/profile",
                    message: "",
                    success: false
                }
            }
        },
        created: function() {
            var self = this;
            self.sendRequest();
        },
        mixins: [sendMixin],
        methods: {
            sendRequest: function(){
                var self = this;

                axios.get("/api/user/profile").then(function(answer) {
                    var userInfo = answer.data.data;
                    self.user.nda = userInfo.nda;
                });
            },
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

<style lang="css" scoped>
    .nda-title {
        font-size: 20px;
        font-family: "ProximaNovaSemiBold";
        margin: 30px 0 20px 0;
    }
    .nda-form {
        width: 100%;
        display: block;
        height: 200px;
    }
    .nda-form textarea{
        display: block;
        width: 100%;
        padding: 15px 20px;
        resize: none;
        box-sizing: border-box;

        border: 1px solid #abb1b9;

        font-size: 18px;
        font-family: "ProximaNovaRegular";

        color: #8191a2;

        transition: border-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.3s  cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .nda-form textarea:hover{
        border-color: #2fb0ee;
    }
    .nda-form textarea:focus{
        border-color: #2fb0ee;
        color: #2fb0ee;
    }
    .nda-form textarea::-webkit-input-placeholder {
            width: 100%;
            color: #8191a2;

            transition: transform .3s  cubic-bezier(0.25, 0.46, 0.45, 0.94), font-size .3s  cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .nda-form button {
        padding: 15px 40px;
        margin-top: 10px;
        font-size: 18px;
        box-sizing: border-box;
        float: right;
    }
</style>

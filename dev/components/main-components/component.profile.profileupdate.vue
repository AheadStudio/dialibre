<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action", enctype="multipart/form-data")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--foto")
                    img(:src="fields.photo")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--uploadfoto")
                    span(class="btn btn--green popup-addcard-form-holder-item--btn") Load new foto
                        input(type="file", class="hidden", @change="sendFile($event)")
                    span(class="namefile")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your first name", name="first_name", v-model="fields.first_name")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your last name", name="last_name", v-model="fields.last_name")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your company", name="company_name", v-model="fields.company_name")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your phone", name="phone", v-model="fields.phone")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your position", name="position", v-model="fields.position")
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
                    first_name: "",
                    last_name: "",
                    company_name: "",
                    phone: "",
                    position: "",
                    nda: "",
                    photo: "",
                },
                form: {
                    action: "/api/user/profile",
                    message: "",
                    success: false
                },
                callResultHandler: true,
            }
        },
        created: function() {
            var self = this;
            self.getInfo();
        },
        mixins: [sendMixin],
        methods: {
            getInfo: function() {
                var self = this;

                axios.get("/api/user/profile").then(function(answer) {
                    var userInfo = answer.data.data;
                    self.fields.first_name = userInfo.first_name;
                    self.fields.last_name = userInfo.last_name;
                    self.fields.company_name = userInfo.company_name;
                    self.fields.position = userInfo.position;
                    self.fields.email = userInfo.email;
                    self.fields.phone = userInfo.phone;
                    self.fields.photo = userInfo.photo.url;
                });

                upload.$emit("uploadInfo", 1);

            },
            sendFile: function(event) {
                var self = this,
                    namefile = $(".namefile"),
                    formData = new FormData();

                formData.append('photo', event.target.files[0]);
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                axios.post("/api/user/photo", formData, config).then(function(answer) {
                    var data = answer.data;
                    namefile.text("Update success");
                    self.getInfo();
                }).catch(function(info) {
                    var dataError = info.response.data;
                });
            },
            resultHandler: function() {
                var self = this;
                self.getInfo();
            }
        }
    }
</script>
<style lang="css">
    .namefile {
        position: absolute;
        top: 47px;
        left: 185px;
        font-size: 12px;
        color: #1dc818;
    }
</style>

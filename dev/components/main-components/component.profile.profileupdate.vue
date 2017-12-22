<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action", enctype="multipart/form-data")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--foto")
                    img(:src="fields.photo")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--uploadfoto")
                    span(class="btn btn--green popup-addcard-form-holder-item--btn") Load new foto
                        input(type="file", class="hidden", @change="showNamefile($event)")
                    span(class="namefile")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your first name", name="first_name", v-model="fields.first_name")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your  last name", name="last_name", v-model="fields.last_name")
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
            }
        }
    },
    created: function() {
        var self = this;
        self.getInfo();
    },
    methods: {
        validateFromServer: function(form) {
            var $form = $(this.$el).find("form");
            for(var code in form) {
                var fieldError = form[code],
                    $field = $form.find("[name=" + code + "]");
                if($field.attr("type") != "hidden") {
                    $field.addClass("form-item--error").after('<span class="form-item--error" id="' + code + '-error">' + fieldError + '</span>');
                }
            }
        },
        send: function() {
            var self = this,
                $form = $(this.$el).find("form");

            if(!$form.valid()) {
                return false;
            }

            $form.addClass("loading");
            $form.find(":submit").attr("disabled", "disabled");
            axios.post($form.attr("action"), $form.serialize())
                .then(function(answer) {
                    var data = answer.data;

                    self.form.message = data.message;
                    self.form.success = true;

                    $form.find(":submit").removeAttr("disabled");
                    $form.removeClass("loading");

                    if(self.successCallback) {
                        self.successCallback();
                    }

                    if(self.fields) {
                        for(var code in self.fields) {
                            self.fields[code] = "";
                        }
                    }

                    $form.find(".valid").removeClass("valid");

                    self.getInfo();

                }).catch(function(info) {
                    var dataError = info.response.data;
                    self.form.message = dataError.message;
                    self.form.success = false;
                    self.validateFromServer(dataError.data);
                    $form.find(":submit").removeAttr("disabled");
                    $form.removeClass("loading");
                });
        },
        getInfo: function() {
            var self = this;

            axios.get("/api/user/profile").then(function(answer) {
                var userInfo = answer.data.data;

                self.fields.first_name = userInfo.name;
                self.fields.last_name = userInfo.last_name;
                self.fields.company_name = userInfo.company_name;
                self.fields.position = userInfo.position;
                self.fields.email = userInfo.email;
                self.fields.phone = userInfo.phone;
                self.fields.photo = userInfo.photo.url;
            });

            upload.$emit("uploadInfo", 1);

        },
        showNamefile: function(event) {
            var self = this,
                namefile = $(".namefile"),
                formData = new FormData();

            formData.append('photo', event.target.files[0])
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            axios.post("/api/user/photo", formData, config
            ).then(function(answer) {
                var data = answer.data;
                namefile.text("Update success");
                self.getInfo();
            }).catch(function(info) {
                var dataError = info.response.data;
            });
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

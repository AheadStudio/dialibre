<template lang="jade">
    div()
        div(class="nda-title") Custom NDA
        div(class="nda-form")
            form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action", enctype="multipart/form-data")
                div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
                //input(type="hidden", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your first name", v-model="fields.first_name")
                //input(type="hidden", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your  last name", v-model="fields.last_name")
                //input(type="hidden", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your company", v-model="fields.company_name")
                //input(type="hidden", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your phone", v-model="fields.phone")
                //input(type="hidden", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", placeholder="Your position", v-model="fields.position")
                div(class="popup-addcard-form-row")
                    textarea(rows="5", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="nda", placeholder="NDA") {{ user.nda }}
                div(class="popup-addcard-form-row popup-addcard-form-row--left")
                    button(type="submit",class="btn btn--green popup-addcard-form-holder-item--btn") save

</template>

<script>
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
    methods: {
        sendRequest: function(){
            var self = this;

            axios.get("/api/user/profile").then(function(answer) {
                var userInfo = answer.data.data;
                self.user.nda = userInfo.nda;
            });
        },
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

                }).catch(function(info) {
                    var dataError = info.response.data;
                    self.form.message = dataError.message;
                    self.form.success = false;
                    self.validateFromServer(dataError.data);
                    $form.find(":submit").removeAttr("disabled");
                    $form.removeClass("loading");
                });
        },

    },
    mounted: function() {
        var element = $(this.$el);

        element.addClass("loading-opacity");

        setTimeout(function(){
            element.addClass("loading-opacity--show");
        }, 600);
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

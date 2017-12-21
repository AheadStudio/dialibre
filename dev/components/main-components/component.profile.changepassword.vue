<template lang="jade">
    div()
        form(class="form popup-addcard-form", @submit.prevent="send", v-bind:action="form.action")
            div(class="form-result" v-bind:class="{'form-result--error':!form.success, 'form-result--success': form.success}") {{ form.message }}
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="password", placeholder="Old password", v-model="fields.password")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="new_password", placeholder="New password", v-model="fields.new_password")
            div(class="popup-addcard-form-row")
                div(class="popup-addcard-form-holder popup-addcard-form-holder--w1")
                    input(type="text", class="popup-addcard-form-holder-item popup-addcard-form-holder--text", name="new_password_confirmation",  placeholder="Repeat new password", v-model="fields.new_password_confirmation")
            div(class="popup-addcard-form-row popup-addcard-form-row--left")
                button(type="submit",class="btn btn--green popup-addcard-form-holder-item--btn") save
</template>
<script>
export default {
    data: function() {
        return {
            fields: {
                password: "",
                new_password: "",
                new_password_confirmation: "",
            },
            form: {
                action: "/api/user/change/password",
                message: "",
                success: false
            }
        }
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
                    console.log(data);

                }).catch(function(info) {
                    var dataError = info.response.data;
                    self.form.message = dataError.message;
                    self.form.success = false;
                    self.validateFromServer(dataError.data);
                    $form.find(":submit").removeAttr("disabled");
                    $form.removeClass("loading");
                });
        }
    }
}
</script>

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
        mounted: function() {
            DEALIBRE.forms.init(this.$el);
            DEALIBRE.forms.fileUpload();
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

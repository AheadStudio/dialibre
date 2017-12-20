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
        mounted: function() {
            DEALIBRE.forms.init(this.$el);
            DEALIBRE.forms.fileUpload();
        },
        methods: {
            successCallback: function() {
                DealibreApp.methods.setAuthorized();
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
                        self.form.redirect = data.redirect;

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

                        if (self.form.redirect != null) {
                            var redirect = self.form.redirect.replace("/", "") + ".html";
                            document.location.href = redirect;
                        }

                    }).catch(function(info) {
                        console.log(info);
                        var dataError = info.response.data;
                        self.form.redirect = dataError.redirect;
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

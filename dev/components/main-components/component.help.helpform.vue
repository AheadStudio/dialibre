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
                        self.form.redirect = dataError.redirect;
                        self.form.message = dataError.message;
                        self.form.success = false;
                        self.validateFromServer(dataError.data);
                        $form.find(":submit").removeAttr("disabled");
                        $form.removeClass("loading");
                    });

            },
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

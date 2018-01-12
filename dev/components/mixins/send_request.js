export const sendMixin = {
    methods:{
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

                    if (data.redirect) {
                        self.form.redirect = data.redirect;
                    }
                    
                    $form.find(":submit").removeAttr("disabled");
                    $form.removeClass("loading");

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

                    if (self.callResultHandler) {
                        self.resultHandler();
                    }
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

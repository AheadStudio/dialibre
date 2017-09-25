// Configure axios
axios.defaults.baseURL = "http://67.207.95.140";
//axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");


// Form functions
var formMixin = {
	mounted: function() {
		DEALIBRE.forms.init(this.$el);
	},
	methods: {
		validateFromServer: function(form) {
			var $form = $(this.$el).find("form");
			for(var code in form) {
				var field = form[code];
				$form.find("[name=" + code + "]").addClass("form-item--error").after('<span class="form-item--error" id="' + code + '-error">' + field + '</span>');
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
			axios
				.post($form.attr("action"), $form.serialize())
				.then(function(r) {
					var r = r.data;
					self.form.message = r.message;
					self.form.success = true;
					$form.find(":submit").removeAttr("disabled");
					$form.removeClass("loading");
				}).catch(function(error) {
					var r = error.response.data;
					console.log(r);
					self.form.message = r.message;
					self.form.success = false;
					self.validateFromServer(r.data);
					$form.find(":submit").removeAttr("disabled");
					$form.removeClass("loading");
				});
		}
	}
}

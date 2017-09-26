// Configure axios
axios.defaults.baseURL = "http://67.207.95.140";
//axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");



// Global states
var DealibreApp = {
	data: {
		user: {
			authorized: false
		}
	},
	methods: {
		setAuthorized: function() {
			DealibreApp.data.user.authorized = true;
		}
	}
};



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

					if(self.successCallback) {
						self.successCallback();
					}
				}).catch(function(error) {
					var r = error.response.data;
					self.form.message = r.message;
					self.form.success = false;
					self.validateFromServer(r.data);
					$form.find(":submit").removeAttr("disabled");
					$form.removeClass("loading");
				});
		}
	}
}


// Header
Vue.component("pageheader", {
	mixins: [formMixin],
	template: "#header-tmpl",
	data: function() {
		return {
			states: DealibreApp.data
		}
	}
});
new Vue({
	el: "#page-header"
});



// Footer
Vue.component("pagefooter", {
	mixins: [formMixin],
	template: "#footer-tmpl",
	data: function() {
		return {
			states: DealibreApp.data
		}
	}
});
new Vue({
	el: "#footer-holder"
});
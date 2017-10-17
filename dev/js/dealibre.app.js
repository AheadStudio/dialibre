// Configure axios
axios.defaults.baseURL = "http://67.207.95.140";
//axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");



// Global states
var DealibreApp = {
	data: {
		user: {
			authorized: false
		},
		header: "",
		mobileMenu: "",
		page: "",
	},
	methods: {
		setAuthorized: function() {
			DEALIBRE.modalWindow.init();
			DealibreApp.data.user.authorized = true;
		},
		typeHeader: function(type) {
			DealibreApp.data.header = type;
		},
		typeMobileMenu: function(type, page = false) {
			DealibreApp.data.mobileMenu = type;
			DealibreApp.data.page = page;
		}
	},
	utils: {
		getUrlParameter: function(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;
		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
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
					if(self.fields) {
						for(var code in self.fields) {
							self.fields[code] = "";
						}
					}
					$form.find(".valid").removeClass("valid");
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

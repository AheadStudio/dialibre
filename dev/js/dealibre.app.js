$.ajaxSetup({
	headers: {
		"X-CSRF-TOKEN": Cookies.get("XSRF-TOKEN")
	}
});



Vue.component("loginform", {
	template: "#login-form",
	data: function() {
		return {
			username: "",
			password: "",
			message: "32332"
		}
	},
	methods: {

		login: function() {
			var self = this;
			$.ajax({
				url: "http://67.207.95.140/api",
				type: "get",
				data: {
					"login": "32323",
					"password": "34343"
				},
				complete: function(e, result) {
					console.log(e);
					//self.message = result.message
					//console.log(result.message);
				}
			});
		}
	}
});




Vue.component("registerform", {
	template: "#register-form",
	data: function() {
		return {
			first_name: "",
			last_name: "",
			email: "",
			company_name: "",
			position: "",
			phone: "",
			message: "",
			success: false
		}
	},
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

		register: function() {
			var self = this,
				$form = $(this.$el).find("form");

			if($form.valid()) {
				$.ajax({
					url: "http://67.207.95.140/api/register",
					type: "post",
					data: $form.serialize(),
					complete: function(e, code) {
						var result = e.responseJSON;

						if(code == "error") {
							self.message = result.message;
							self.validateFromServer(result.data);
							self.success = false;
						} else {
							self.success = true;
						}
					}
				});
			}

		}
	}
});





Vue.component("faqitem", {
	props: ["faq"],
	template: "#faq-item"
});

new Vue({
	el: "#faq",
	data: {
		list: []
	},
	created: function() {
		this.load();
	},
	methods: {
		load: function() {
			var self = this;
			axios.get("http://67.207.95.140/api/faq").then(function(r) {
				for(var key in r.data.data) {
					self.list.push(r.data.data[key]);
				}
			});
		}
	}
});




/*var DealibreApp = new Vue({
	el: "#dealibre-app",
	data: {
		message: ""
	}
});*/
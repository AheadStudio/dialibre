// Configure axios
axios.defaults.baseURL = "http://67.207.95.140";
//axios.defaults.withCredentials = true;
//axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");

// Global states
var DealibreApp = {
	data: {
		user: {
			authorized: false,
			authorizedUser: ""
		},
		page: {
			header: "",
			mobileMenu: "",
			textButton: "",
			pageTitle: "",
			classMobile: "",
			headerType: ""
		}
	},
	methods: {
		setAuthorized: function() {
			DEALIBRE.modalWindow.init();
			DealibreApp.data.user.authorized = true;
		},
		setHeader: function(pageTitle, pageClass, headerType) {
			DealibreApp.data.page.pageTitle = pageTitle;
			DealibreApp.data.page.classMobile = pageClass;
			DealibreApp.data.page.headerType = headerType;
		},
		getDealId: function(idDeal) {
			id = {
				id: idDeal
			};
			axios.get("/api/deals", id).then(function(answer) {
				console.log(answer);
			});
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
	},
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

			/*
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;
			xhr.open("POST", "http://67.207.95.140/api/login", true);
			xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://67.207.95.140/api/login');
			xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
			xhr.send($form.serialize());
			console.log( xhr.responseText );
			*/


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


// Header
Vue.component("pageheader", {
	mixins: [formMixin],
	template: "#header-tmpl",
	data: function() {
		return {
			states: DealibreApp.data,
		}
	},
	created: function() {
		var self = this;
		self.checkAuth();
	},
	methods:{
		checkAuth: function() {
			var self = this;
			axios.get("/api/auth/check").then(function(answer) {
				//if (answer.data.data.authenticated == false)
			});
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

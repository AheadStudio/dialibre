// Configure axios
axios.defaults.baseURL = "http://67.207.95.140";
axios.defaults.withCredentials = true;

// Global states
DealibreApp = {
	data: {
		user: {
			authorized: false,
			authorizedUser: "",
			checkUrl: "/api/auth/check"
		},
		page: {
			footer: false,
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
		},
		showFooter: function() {
			DealibreApp.data.page.footer = true;
		},
		checkAuthorized: function(callback) {
			var self = this,
				check = "";
			axios.get(DealibreApp.data.user.checkUrl).then(function(answer) {
				if (answer.data.data.authenticated === true) {
					self.setAuthorized();
					check = true;
					if(callback) {
						callback(check);
					}
				} else {
					check = false;
					if(callback) {
						callback(check);
					}
				}
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
/*Vue.component("pageheader", {
	template: "#header-tmpl",
	data: function() {
		return {
			states: DealibreApp.data,
		}
	}
});
header = new Vue({
	el: "#page-header"
});*/



// Footer
Vue.component("pagefooter", {
	template: "#footer-tmpl",
	data: function() {
		return {
			states: DealibreApp.data
		}
	}
});
footer = new Vue({
	el: "#footer-holder"
});


Vue.component("pagelogount", {
	template: "#logout-tmpl",
	data: function() {
		return {
			form: {
				action: "/api/logout",
				message: "",
				success: false
			}
		}
	},
	methods: {
		send: function() {
			var self = this,
				$form = $(this.$el).find("form");

				axios.get(self.form.action)
					.then(function(answer) {
						document.location.href = "home.html";
					})
					.catch(function(error) {
						console.log(error);
					});
		}
	},

});
logount = new Vue({
	el: "#logout"
})
// for upload components
var upload = new Vue();

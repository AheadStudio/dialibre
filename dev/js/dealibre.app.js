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

// bus for upload components
var upload = new Vue();


// Header
Vue.component("pageheader", {
	template: "#header-tmpl",
	data: function() {
		return {
			states: DealibreApp.data,
		}
	}
});
header = new Vue({
	el: "#page-header",
	router
});



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
	el: "#footer-holder",
    router
});

(function($) {
	var DEALIBRE = (function() {

		var $sel = {};
		$sel.window = $(window);
		$sel.html = $("html");
		$sel.body = $("body", $sel.html);

		return {
			page: {
				header: {
					$block: false,
					init: function() {
						var self = this;

						self.$block = $(".page-header", $sel.body);

						$sel.window.on("scroll", function() {
							setTimeout(function() {
								self.checkScroll();
							}, 100);
						});
					},
					checkScroll: function() {
						var self = this,
							scrollTop = $sel.window.scrollTop();
						if(scrollTop > 0) {
							$sel.body.addClass("scrolled");
						} else {
							$sel.body.removeClass("scrolled");
						}
					}
				}
			},

			help: {
				init: function() {
					$(".help-section-item-block-item-name", $sel.body).on("click", function(e) {
						var $block = $(this).closest(".help-section-item-block-item"),
							$text = $block.find(".help-section-item-block-item-text");

						$text.slideToggle(350, function() {
							$block.toggleClass("active");
						});

						e.preventDefault();
					});
				}
			},

			content: {
				sliders: {
					init: function() {
						$(".reviews-items", $sel.body).slick({
							adaptiveHeight: true,
							infinite: true,
							dots: true,
							slidesToShow: 1,
							arrows: false,
							vertical: true
						});
					}
				},
				init: function() {
					var self = this;

					self.sliders.init();
				}
			},

			forms: {
				init: function($container) {
					if(!$container) {
						var $container = $sel.body;
					}

					jcf.setOptions("Select", {
						wrapNative: false,
						wrapNativeOnMobile: false
					});
					var $selects = $(".form-item--select, .geo-item-select", $container);
					$selects.each(function(i) {
						var $select = $(this),
							selectPlaceholder = $select.attr("placeholder");

						if(selectPlaceholder) {
							$select.prepend('<option class="hideme" selected>' + selectPlaceholder + '</option>');
						}

						jcf.replace($select);
					});

					$(".form-item--checkbox", $container).each(function() {
						var $ch = $(this);

						jcf.replace($ch, "Checkbox", {
							addClass: $ch.data("htmlclass") ? $ch.data("htmlclass") : ""
						});
					});

					$(".form-item--radio", $container).each(function() {
						var $rd = $(this);

						jcf.replace($rd, "Radio", {
							addClass: $rd.data("htmlclass") ? $rd.data("htmlclass") : "",
							spanColor: $rd.data("spancolor") ? $rd.data("spancolor") : ""
						});
					});
					
					jcf.replace($(".form-item--number", $container));
					jcf.replace($(".form-item--range", $container));

					/*$("[data-pattern]").each(function() {
						var $item = $(this);
						$item.mask($item.data("pattern"));
					});*/

					$.validator.setDefaults({
						errorClass: "form-item--error",
						errorElement: "span"
					});
					$.validator.addMethod("mobileRU", function(phone_number, element) {
						phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
						return this.optional(element) || phone_number.length > 5 && phone_number.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/);
					}, "Error");
					$(".form", $container).each(function() {
						var $form = $(this),
							formParams = {
								rules: {

								},
								messages: {
								}
							},
							$formFields = $form.find("[data-error]");
						$formFields.each(function() {
							var $field = $(this),
								fieldPattern = $field.data("pattern"),
								fieldError = $field.data("error");
							if(fieldError) {
								formParams.messages[$field.attr("name")] = $field.data("error");
							} else {
								formParams.messages[$field.attr("name")] = "Ошибка заполнения";
							}
							if(fieldPattern) {
								formParams.rules[$field.attr("name")] = {};
								formParams.rules[$field.attr("name")][fieldPattern] = true;
							}
						});
						$form.validate(formParams);
					});

				}
			}
		};

	})();

	DEALIBRE.help.init();
	DEALIBRE.forms.init();

	DEALIBRE.content.init();

	DEALIBRE.page.header.init();

})(jQuery);
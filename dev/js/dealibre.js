(function($) {
	var DEALIBRE = (function() {

		var $sel = {};
		$sel.window = $(window);
		$sel.html = $("html");
		$sel.body = $("body", $sel.html);

		$sel.geo = $(".geo", $sel.body);
		$sel.bigMap = $(".geo-map", $sel.geo);

		$sel.colorFilter = $(".main-filter-items").css("background-color");

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
				},

				polygonAnimate: {

					init: function() {
						var self = this;

						$(".polygon-animate", $sel.body).Geometryangle({

							mesh: {

								width: 2,
								height: 3,

								// How far should the mesh vary into z-space.
								depth: 10,

								// Number of columns for the mesh.
								columns: 12,

								columns_auto: false,

								// Number of rows for the mesh.
								rows: 7,

								rows_auto: true,
								zoom: 1,
								xRange: 0.8,
								yRange: 0.1,
								zRange: 3.0,
								ambient: 'rgba(51, 105, 131, 1)',
								diffuse: 'rgba(38, 109, 157, 1)',
								background: 'rgba(17, 59, 88, 1)',


								speed: 0.00005,
								fluctuationSpeed: 0.08,
								fluctuationIntensity: 0,

								onRender: function () {
								},
								floorPosition: false,
								draw: true

							},


							lights: {

								// How many light sources belong to this light.
								count: 1,

								xyScalar: 50,

								// Position of light source.
								zOffset: 100,

								ambient: 'rgba(204, 255, 0, 1)',
								diffuse: 'rgba(204, 255, 0, 1)',
								speed: 0.001,
								gravity: 100,

								// Dampening of light's movements.
								dampening: 0.95,

								minLimit: 10,
								maxLimit: null,
								minDistance: 20,
								maxDistance: 400,
								autopilot: false,
								draw: true, //show circle
								bounds: FSS.Vector3.create(),
								step: FSS.Vector3.create(
									Math.randomInRange(0.2, 1.0),
									Math.randomInRange(0.2, 1.0),
									Math.randomInRange(0.2, 1.0)
								)

							},

							// specify the thickness, color, stroke, etc.
							line: {

								fill: "rgba(62, 99, 125, 1)",
								thickness: 1,
								fluctuationIntensity: 0,
								fluctuationSpeed: 0.5,
								draw: false

							},

							// Set the point attributes for the vertex.
							vertex: {

								// Radius of vertice circle.
								radius: 0,

								fill: "rgba(62, 99, 125, 1)",

								// Fluctuates opacity of vertex.
								fluctuationSpeed: 0.5,

								fluctuationIntensity: 0,
								strokeWidth: 0,
								strokeColor: "rgba(62, 99, 125, 1)",

								// Instead of setting alpha channel to zero
								// Set draw to false to avoid computing.
								draw: false

							}

						});

					}


				},
				scrollAnimation: {

					blocks: [],
					init: function() {
						var self = this;
						$("[data-animationtype]:not(.animated), [data-animation]:not(.animated)").each(function() {
							var $item = $(this);
							self.blocks.push({
								"html": $item,
								"top": $item.offset().top
							});
							$item.addClass("beforeanimate");
						});

						$sel.window.on("scroll", function() {
							self.check();
						});
						setTimeout(function() {
							self.check();
						}, 50);

					},
					check: function() {
						var self = this,
							block = false,
							blockTop = false,
							top = $sel.window.scrollTop(),
							buffer = parseInt($sel.window.height()) / 1.1;
						for(var i = 0, len = self.blocks.length; i < len; i++) {
							block = self.blocks[i],
							blockTop = parseInt(block.top, 10);
							if(block.html.hasClass("animated")) {
								continue;
							}
							if(top + buffer >= blockTop) {
								block.html.addClass("animated");
							}

						}
					}

				},

				playVideo: {

					init: function () {

						var $blockVideo = $(".video-source", $sel.body),
							$containerVideo = $blockVideo.parent(),
							$buttonPlay = $containerVideo.find(".video-play");


						$containerVideo.click(function () {

							var container = $(this),
								button = container.find(".video-play"),
								video = button.siblings(".video-source");

						    if(video.get(0).paused){

						        video.get(0).play();
						        button.fadeOut();

						    } else{
								video.get(0).pause();
								button.fadeIn();
						    }
						});

					},

				},

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

					$(".form-item--checkbox, .filter-checkbox-item", $container).each(function() {
						var $ch = $(this);

						jcf.replace($ch, "Checkbox", {
							addClass: $ch.data("htmlclass") ? $ch.data("htmlclass") : ""
						});
					});

					$(".form-item--radio, .filter-radio-item", $container).each(function() {
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
			},

			map: {

				init: function() {
					var self = this,
						$pointMap = $(".map", $sel.bigMap);

					$pointMap.each(function() {
						var $elementMap = $(this);
						self.hover($elementMap);
					});

					$pointMap.on("click", function() {
						var $elementMap = $(this),
							idElement = $elementMap.attr("id");
						self.moveSelect(idElement);
					})
				},

				hover: function(hoverElement) {

					$(hoverElement).on("mouseenter", function() {
						var $hoverItem = $(this),
							idHoverItem = $hoverItem.attr("id"),
							$selectHover = $(".geo-item", $sel.geo).find("[data-map='" + idHoverItem + "']"),
							$jcfHover = $selectHover.siblings(".jcf-select-geo-item-select");

						if (!$hoverItem.hasClass("hover-block")) {
							$hoverItem.addClass("hover-block");
							$jcfHover.addClass("jcf-select--hover");
						}

					});

					$(hoverElement).on("mouseleave", function() {
						var $hoverItem = $(this)
							idHoverItem = $hoverItem.attr("id"),
							$selectHover = $(".geo-item", $sel.geo).find("[data-map='" + idHoverItem + "']"),
							$jcfHover = $selectHover.siblings(".jcf-select-geo-item-select");


						if ($hoverItem.hasClass("hover-block")) {
							$hoverItem.removeClass("hover-block");
							$jcfHover.removeClass("jcf-select--hover");

						}
					});

				},

				moveSelect: function(idElement) {
					var self = this,
						$geoBlock = $(".geo-item", $sel.geo),
						$select = $geoBlock.find("[data-map='" + idElement + "']"),
						$parentSelect = $select.parent(),

						$jcfSelect = $select.siblings(".jcf-select-geo-item-select"),

						$allElement = $(".geo-item .geo-item-select:not([data-map='" + idElement + "'])"),
						$parentAllElement = $allElement.parent();

					$geoBlock.addClass("geo-item--hidden");

					setTimeout(function() {
						$parentAllElement.hide();

						$parentSelect.show();
						$parentSelect.removeClass("geo-item--hidden");

						self.openSelect($select, $jcfSelect);
					}, 600);

				},

				openSelect: function($select, $jcfSelect) {
					console.log(jcf.getInstance($select));
				}

			},

			accordionFilter: {
				init: function() {
					var self = this,
						checkboxFilter = $(".filter-checkbox");

					checkboxFilter.on("change", function() {
						checkboxItem = $(this);
						console.log(checkboxItem);
						self.openFilter(checkboxItem);
					});


				},

				openFilter: function(checkboxItem) {
					var self = this,
						$checkboxContainer = checkboxItem.closest(".filter-accordion"),
						checkboxContainerId = $checkboxContainer.attr("id"),
						checkboxContainerColor = $checkboxContainer.data("color"),
						$content = $(".main-filter-items").find("[data-filter='" + checkboxContainerId + "']");

					if ($checkboxContainer) {
						if (!$content.hasClass("active")) {
							$checkboxContainer.css("background-color", checkboxContainerColor);
							$content.slideDown("600", function() {
								$content.addClass("active");
							});
						} else {
							$content.slideUp("600", function() {
								$content.removeClass("active");
							});
							$checkboxContainer.css("background-color", "transparent");

						}
					}
				},

			},

		};

	})();
	DEALIBRE.accordionFilter.init();
	DEALIBRE.help.init();
	DEALIBRE.forms.init();

	DEALIBRE.content.init();

	DEALIBRE.page.header.init();
	DEALIBRE.page.polygonAnimate.init();
	DEALIBRE.page.scrollAnimation.init();
	DEALIBRE.page.playVideo.init();

	DEALIBRE.map.init();

})(jQuery);

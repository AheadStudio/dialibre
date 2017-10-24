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

				menuMobile: {
					isShow: false,
					init: function() {
						var self = this;


						$sel.body.on("click", ".header-mobile-burger", function() {
							$panel = $(".header-mobile-menu", $sel.body);
							self.isShow ? self.hide($(this), $panel, 300) : self.show($(this), $panel, 300);
						});

						$sel.body.on("click", ".header-mobile-open",  function() {
							var buttonOpen = $(this),
								buttonOpenId = buttonOpen.attr("id");

							if (!buttonOpenId) {
								return;
							}

							$panel = $(".mobile-panel[data-open=" + buttonOpenId + "]", $sel.body);

							self.isShow ? self.hide($(this), $panel, 100) : self.show($(this), $panel, 100);

							$(".menu-overlay").on("click", $sel.body, function() {
								self.hide($(this), $panel, 100)
							});

						});


					},
					show: function($menu, $panel, time) {

						this.isShow = true;
						$menu.addClass("active");

						$panel.css("display", "block");
						setTimeout(function() {
							$panel.addClass("active");
							$sel.body.addClass("show-menu");

						}, time);
					},
					hide: function($menu, $panel, time) {
						this.isShow = false;
						$menu.removeClass("active");

						$panel.removeClass("active");
						setTimeout(function() {
							$panel.css("display", "none");
							$sel.body.removeClass("show-menu");
						}, time);

					}
				},

				// Initialize scripts for each window size
				initSSM: function() {
					var self = this;

					ssm.addStates([
						{
							// Tablets in landscape orientation
							id: "tabletLandscape",
							query: "(max-width: 1000px)",
							onEnter: function() {
								self.menuMobile.init();
							},
							onLeave: function() {

							}
						}
					]);

				},

			},

			help: {
				init: function() {
					$sel.body.on("click", ".help-section-item-block-item-name", function(e) {
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
					reviews: function() {
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

					self.sliders.reviews();
				}
			},

			forms: {
				init: function($container) {
					var self = this;

					if(!$container) {
						var $container = $sel.body;
					}

					jcf.setOptions("Select", {
						wrapNative: false,
						wrapNativeOnMobile: false
					});
					var $selects = $("select", $container);
					$selects.each(function(i) {
						var $select = $(this),
							selectPlaceholder = $select.attr("placeholder");

						if(selectPlaceholder) {
							$select.prepend('<option class="hideme" selected>' + selectPlaceholder + '</option>');
						}

						jcf.replace($select);
					});

					$("input[type=checkbox]", $container).each(function() {
						var $ch = $(this);

						jcf.replace($ch, "Checkbox", {
							addClass: $ch.data("htmlclass") ? $ch.data("htmlclass") : ""
						});
					});

					$("input[type=radio]", $container).each(function() {
						var $rd = $(this);

						jcf.replace($rd, "Radio", {
							addClass: $rd.data("htmlclass") ? $rd.data("htmlclass") : "",
							spanColor: $rd.data("spancolor") ? $rd.data("spancolor") : ""
						});
					});

					jcf.replace($(".form-item--number", $container));
					jcf.replace($(".form-item--range", $container));


					$("[data-mask]").each(function() {
						var $item = $(this);
						$item.mask($item.data("mask"));
					});

					self.fileUpload();

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

				},

				fileUpload: function() {
					$('input[name="files"]').fileuploader({
						limit: 10,
						extensions: ["doc", "docx", "pdf", "xis", "xlsx", "txt"],
						theme: "One-button",
						changeInput: '<button type="button" class="btn btn--blue register-share-form-upload-button">Upload files</button>',
						addMore: true,
						captions: {
			            	button: function(options) {
				            	return 'Choose ' + (options.limit == 1 ? 'File' : 'Files');
				            },
			            	feedback: function(options) {
				            	return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload';
				            },
				            feedback2: function(options) {
					            return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen';
					       	},
						   	drop: 'Перетащите файлы для загрузки',
					       	removeConfirmation: "Are you sure you want to remove this file?",
					       	errors: {
						       	filesLimit: "Only ${limit} files are allowed to be uploaded.",
						       	filesType: "Only ${extensions} files are allowed to be uploaded."
					       	}
		            	},
					});

					$('input[name="files-chat"]').fileuploader({
						limit: 5,
						extensions: ["doc", "docx", "pdf", "xis", "xlsx", "txt"],
						theme: "One-button",
						changeInput: '<button type="button" class="btn btn--green chat-message-send-item-btn"><img src="../i/affix.png" class="chat-message-send-item-btn-img"></button>',
						addMore: true,
						captions: {
			            	button: function(options) {
				            	return 'Choose ' + (options.limit == 1 ? 'File' : 'Files');
				            },
			            	feedback: function(options) {
				            	return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload';
				            },
				            feedback2: function(options) {
					            return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen';
					       	},
						   	drop: 'Перетащите файлы для загрузки',
					       	removeConfirmation: "Are you sure you want to remove this file?",
					       	errors: {
						       	filesLimit: "Only ${limit} files are allowed to be uploaded.",
						       	filesType: "Only ${extensions} files are allowed to be uploaded."
					       	}
		            	},
					});


				},
			},

			tabs: {
				init: function() {
					var self = this;
					$(".tabs-heading-item").on("click", function(e) {
						var $item = $(this),
							$tabs = $sel.body,
							itemID = $item.data("tabs");

						if(!$tabs.hasClass("inactive")) {
							if(!$item.hasClass("active-tabs")) {
								self.hideAll($tabs);
								self.show(itemID, $tabs);

							}
							e.preventDefault();
						}
					});
				},
				show: function(tabID, $tabs) {
					$(".tabs-heading-item[data-tabs*=" + tabID + "]", $tabs).addClass("active-tabs");
					$(".tabs-content-item[id*=" + tabID + "]", $tabs).addClass("active-tabs");
					$(".slick-initialized", $(".tabs-content-item[id*=" + tabID + "]", $tabs)).slick("setPosition");
				},
				hide: function(tabID, $tabs) {
					$(".tabs-heading-item[data-tabs*=" + tabID + "]", $tabs).removeClass("active-tabs");
					$(".tabs-content-item[id*=" + tabID + "]", $tabs).removeClass("active-tabs");
				},
				hideAll: function($tabs) {
					$(".tabs-heading-item", $tabs).removeClass("active-tabs");
					$(".tabs-content-item", $tabs).removeClass("active-tabs");
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

						self.openFilter(checkboxItem);
					});


				},

				openFilter: function(checkboxItem) {
					var self = this,
						idFilter = checkboxItem.attr("id"),
						$checkboxContainer = $(".main-filter-items").find("[data-container='" + idFilter + "']"),
						checkboxContainerColor = $checkboxContainer.data("color"),
						$content = $(".main-filter-items").find("[data-filter='" + idFilter + "']");

					if ($checkboxContainer) {
						if (!$checkboxContainer.hasClass("active")) {
							$checkboxContainer.css("background-color", checkboxContainerColor);
							$content.slideDown("600", function() {
								$checkboxContainer.addClass("active");
							});
						} else {
							$content.slideUp("600", function() {
								$checkboxContainer.removeClass("active");
							});
							$checkboxContainer.css("background-color", "transparent");
						}
					}
				},

			},

			tableSearch: {

				init: function() {
					var self = this,
						checkboxTable = $(".table-checkbox");

					checkboxTable.on("change", function() {
						checkboxItem = $(this);

						self.changeColor(checkboxItem);
					});
				},

				changeColor: function(checkboxItem) {
					var self = this,
						continerRow = checkboxItem.closest("tr");

					if (!continerRow.hasClass("active")) {
						continerRow.addClass("active");
					} else {
						continerRow.removeClass("active");
					}

				},

			},

			modalWindow: {

				init: function() {

					$(".popup").magnificPopup({
						type: "inline",
						mainClass: "mfp-popup-window",
						closeMarkup: '<button title="%title%" class="mfp-close"><span width="20" height="20" class="mfp-close-icn mfp-close"/></button>',
						removalDelay: 300,
					});

				},

			},

			scrollBar: {
				init: function() {
					$(".replace-scrollbar").mCustomScrollbar({
						theme: "minimal-dark",
						scrollInertia: "450",
						documentTouchScroll: true,
					});

					$(".replace-scrollbar-table").mCustomScrollbar({
						theme: "minimal-dark",
						scrollInertia: "450",
						axis: 'x',
						documentTouchScroll: true,
						advanced: {
							autoExpandHorizontalScroll: true
						},
					});
				}
			},

			toggleContent: {
				init: function() {
					var $elementToggle = $(".toggle-content", $sel.body),
						$contentToggle = $sel.body.find(".toggle-container");


					$elementToggle.on("click", function() {
						var element = $(this),

							elementToggleId = element.attr("id"),

							contentToggleHide = $sel.body.find("[data-toggle-hide='" + elementToggleId + "']");


							if (!$contentToggle.hasClass("not-active-toggle")) {

								$contentToggle.addClass("not-active-toggle");
								contentToggleHide.removeClass("not-active-toggle");

								$.magnificPopup.close()

							} else {

								$contentToggle.removeClass("not-active-toggle");
								contentToggleHide.addClass("not-active-toggle");

								$.magnificPopup.close()

							}
					});


				}
			},

			scrollFix: {
				init: function() {
					$containerStick = $(".chat-message");
					$containerStick.stick_in_parent({
						container: $(".page-chat"),
					});

				}
			},


			rating: {
				init: function() {
					$(".popup-rating-item-count--quality").raty({
						score: 0,
						number: 5,
						scoreName: "result-quality",
						starOff: "../i/star_gray.png",
						starOn: "../i/star_green.png",
					});
					$(".popup-rating-item-count--opportunity").raty({
						score: 0,
						number: 5,
						scoreName: "result-opportunity",
						starOff: "../i/star_gray.png",
						starOn: "../i/star_green.png",
					});

				},
			},

		};

	})();
	DEALIBRE.rating.init();
	DEALIBRE.scrollFix.init();
	DEALIBRE.tabs.init();
	DEALIBRE.accordionFilter.init();
	DEALIBRE.help.init();
	DEALIBRE.forms.init();
	DEALIBRE.toggleContent.init();
	DEALIBRE.scrollBar.init();
	DEALIBRE.tableSearch.init();
	DEALIBRE.modalWindow.init();
	DEALIBRE.content.init();

	DEALIBRE.page.initSSM();
	DEALIBRE.page.header.init();
	DEALIBRE.page.polygonAnimate.init();
	DEALIBRE.page.scrollAnimation.init();
	DEALIBRE.page.playVideo.init();

	DEALIBRE.map.init();

	window.DEALIBRE = DEALIBRE;

})(jQuery);

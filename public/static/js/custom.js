/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. InitDeptSlider
5. Init Accordions


******************************/

function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};

$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');

	setHeader();

	$(window).on('resize', function () {
		setHeader();

		setTimeout(function () {
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function () {
		setHeader();
	});


	$('#contact_form, #footer_contact_form').submit(function (event) {
		event.preventDefault();
		var mail = $('#contact_email').val();
		$('#nocheck-condiciones-form').addClass('hidden');
		if (isValidEmailAddress(mail)) {
			$('#error-email-form').addClass('hidden');
			//cojo datos
			var name = $('#contact_input').val();
			//TODO check que no esté vacío

			var text = $('#contact_textarea').val(); //tambien comprobar que no esté vacío

			if (text !== "" && name !== "") {
				$.post('/nuevoMail', { mail: mail, name: name, text: text }).done(function () {
					var sentButton = $('#form_button_send');
					sentButton.text("¡Enviado!");
					sentButton.css('background-color', '#59948c');
					$("#footer_contact_form :input").prop("disabled", true);
				})
					.fail(function () {
						var sentButton = $('#form_button_send');
						sentButton.text("¡Error!");
						sentButton.css('background-color', '#FF9494');
					});
			} else {
				var sentButton = $('#form_button_send');
				sentButton.text("¡Error!");
				sentButton.css('background-color', '#FF9494');
			}


		} else {
			var sentButton = $('#form_button_send');
			sentButton.text("¡Error!");
			sentButton.css('background-color', '#FF9494');
		}
	});


	/* 

	2. Set Header

	*/

	function setHeader() {
		if ($(window).scrollTop() > 91) {
			header.addClass('scrolled');
		}
		else {
			header.removeClass('scrolled');
		}
	}
})
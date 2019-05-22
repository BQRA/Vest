$(function() {

	$('.yellow_button_flag_anime').hover(function () {
		$('.button_flag').animate({'top': 15 }, 100);
	}, function () {
		$('.button_flag').animate({'top': 0 }, 100);
	});

	$('.mini_form input[type=text]').click(function () {
		if ( $(this).attr('value') == 'Name, Surname' || $(this).attr('value') == 'E-mail Address' ) {
			$(this).attr('value', '');
		} else { return false; }
	});
	$('.mini_form input:eq(0)').focusout(function () { if ( $(this).attr('value') == '' ) { $(this).attr('value', 'Name, Surname'); } });
	$('.mini_form input:eq(1)').focusout(function () { if ( $(this).attr('value') == '' ) { $(this).attr('value', 'E-mail Address'); } });
	$('.mini_form div').click(function () { $('.mini_form textarea').focus(); })
	
	// form submit
	$('.main_form_submit').click(function () {
		if ( $('form.main_form input.gerekli_isim').attr('value') == '' || $("form.main_form input.gerekli_isim").attr('value').length <= '2' ) {
			$('form.main_form input.gerekli_isim').css({'border':'1px solid #fc8c92'}).parent().css({'border':'3px solid #feeae2'});
		} else { $('form.main_form').submit(); }
	});
	
	$('.main_form_submit').click(function () {
		if ( $('form.main_form input.gerekli_eposta').attr('value') == '' || $("form.main_form input.gerekli_eposta").attr('value').length <= '5' ) {
			$('form.main_form input.gerekli_eposta').css({'border':'1px solid #fc8c92'}).parent().css({'border':'3px solid #feeae2'});
		} else { $('form.main_form').submit(); }
	});
	
});
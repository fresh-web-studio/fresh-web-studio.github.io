$(document).ready(function(){

	//Нажали на кнопку - Вызов инженера
	$('#send').click(function(){

		name = $('#name').val();
		phone = $('#phone').val();

		//Если поля заполнены, то отправляем данные
		if( name != '' && phone != '' ){

			$.post("callback.php",{
				name: name,
				phone: phone
			}, function success(data){
				if( data != 0 ) $('#callback_form').html('<div class="center">Отправлено!<?');
			});

		} else $('.anim').children().animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);

	});

	//Нажали на кнопку - Оптимизация рабочего процесса
	$('#send_1').click(function(){

		name_1 = $('#name_1').val();
		phone_1 = $('#phone_1').val();

		//Если поля заполнены, то отправляем данные
		if( name_1 != '' && phone_1 != '' ){

			$.post("callback.php",{
				name_1: name_1,
				phone_1: phone_1
			}, function success(data){
				if( data != 0 ) $('#send_1').html('<div id="send_1" class="btn">Cообщение отправлено!</div>').animate({opacity: 0.25}, 500).animate({opacity: 1}, 500).animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);
			});

		} else $('.anim').children().animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);

	});
	//Нажали на кнопку - в блоке Узнайте
	$('#send_2').click(function(){

		name_2 = $('#name_2').val();
		phone_2 = $('#phone_2').val();

		//Если поля заполнены, то отправляем данные
		if( name_2 != '' && phone_2 != '' ){

			$.post("callback.php",{
				name_2: name_2,
				phone_2: phone_2
			}, function success(data){
				if( data != 0 ) $('#send_2').html('<div id="send_2" class="btn">Cообщение отправлено!</div>').animate({opacity: 0.25}, 500).animate({opacity: 1}, 500).animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);
			});

		} else $('.anim').children().animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);

	});
	//Нажали на кнопку - в блоке Этапы автоматизации бизнеса
	$('#send_3').click(function(){

		name_3 = $('#name_3').val();
		phone_3 = $('#phone_3').val();

		//Если поля заполнены, то отправляем данные
		if( name_3 != '' && phone_3 != '' ){

			$.post("callback.php",{
				name_3: name_3,
				phone_3: phone_3
			}, function success(data){
				if( data != 0 ) $('#send_3').html('<div id="send_3" class="btn">Cообщение отправлено!</div>').animate({opacity: 0.25}, 500).animate({opacity: 1}, 500).animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);
			});

		} else $('.anim').children().animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);

	});
	//Нажали на кнопку - в блоке Этапы автоматизации бизнеса
	$('#send_4').click(function(){

		name_4 = $('#name_4').val();
		phone_4 = $('#phone_4').val();

		//Если поля заполнены, то отправляем данные
		if( name_4 != '' && phone_4 != '' ){

			$.post("callback.php",{
				name_4: name_4,
				phone_4: phone_4
			}, function success(data){
				if( data != 0 ) $('#send_4').html('<div id="send_4" class="btn">Cообщение отправлено!</div>').animate({opacity: 0.25}, 500).animate({opacity: 1}, 500).animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);
			});

		} else $('.anim').children().animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);

	});

});
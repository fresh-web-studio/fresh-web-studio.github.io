<!DOCTYPE html>
<html lang="Ru-ru">
<head>
	<meta charset="utf-8">
	<title>Личный сайт студента GeekBrains</title>
	<link rel="stylesheet" href="style.css"> 
	<script type="text/javascript">

		var answer = parseInt(Math.random() * 100);
		var tryCount = 0;
		var maxTryCount = 5;

        var playerNumber = 2;

		function readInt () {
            return +document.getElementById("userAnswer").value;
			// var number = document.getElementById("userAnswer").value;
            //			return parseInt(number);
		}
		function write (text) {
			document.getElementById("info").innerHTML = text;
		}
		function writePlayer (text) {
			document.getElementById("player").innerHTML = text;
		}
		function hide (id) {
			document.getElementById(id).style.display = "none";
		}
		function player () {
            if (playerNumber == 1) {
                playerNumber = 2;
            } else {
                playerNumber = 1;
            }
        }
		function guess (){
			tryCount++;

			var userAnswer = readInt ();
			if (userAnswer == answer){
				write ("<b>Поздравляю! Победил игрок " + playerNumber + "</b>");
				hide ("button");
				hide ("userAnswer");
				hide ("player");
			} else if(tryCount >= maxTryCount){
				write ("Вы проиграли<br>Правильный ответ: " + answer + "</b>");
				hide ("button");
				hide ("userAnswer");
                hide ("player");
			} else if(userAnswer > answer){
				write ("Вы ввели слишком большое число<br>Попробуйте еще раз. Введите число от 1 до 100");
                writePlayer ("<b>Теперь ходит Игрок " + playerNumber + "</b>");
                player ();
            } else if(userAnswer < answer){
				write ("Вы ввели слишком маленькое число<br>Попробуйте еще раз. Введите число от 1 до 100");
                writePlayer ("<b>Теперь ходит Игрок " + playerNumber + "</b>");
                player ();
            }

		}


	</script>
</head>
<body>

<div class="content">
	<?php
    	include "menu.php";
  	?>

<div class="contentWrap">
    <div class="content">
        <div class="center">

			<h1>Игра угадайка</h1>

			<div class="box">
                <form method="GET">
                    <p id="info">Угадайте число от 0 до 100, в игре участвуют 2 игрока по очередно.</p>
                    <p id="player"><b>Игрок 1, введите ваш вариант ответа:</b></p>
                    <input type="text" id="userAnswer" />
                    <br>
                    <a href="#" onClick="guess();" id="button">Начать</a>
                </form>
			</div>

        </div>
    </div>
</div>

	

</div>
<div class="footer">
	<?php
    	include "copyright.php";
  	?>
<div>


</body>
</html>
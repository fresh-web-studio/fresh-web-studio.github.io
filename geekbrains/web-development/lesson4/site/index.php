<!DOCTYPE html>
<html lang="Ru-ru">
<head>
	<meta charset="utf-8">
	<title>Личный сайт студента GeekBrains</title>
	<link rel="stylesheet" href="style.css"> 
</head>
<body>
<div class="content">
  <?php
    include "menu.php";
  ?>

	<h1>Личный сайт студента GeekBrains</h1>

	<div class="center">
	<img src="img/photo.png" alt="Андрей Колчанов">
		<div class="box_text">
			<p><b>Добрый день</b>. Меня зовут <i>Андрей Колчанов</i>. У меня уже есть опыт в верстке, сейчас я решил углубитсья в программирование. Я совсем недавно начал программировать, однако уже написал свой первый сайт.</p>

			<p>В этом мне помог IT-портал <a href="https://geekbrains.ru">GeekBrains</a></p>

			<p>На этом сайте вы сможете сыграть в несколько игр, которые я написал: </p>
			<div class="box_text__row">
                <a href="puzzle.php"><img src="img/enigma.jpg" alt="Загадки"><br>Загадки</a>
                <a href="guess.php"><img src="img/guess.jpg" alt="Угадайка"><br>Угадайка</a>
                <a href="guess-2.php"><img src="img/guess2.jpg" alt="Угадайка мултиплеер"><br>Угадайка мултиплеер</a>
                <a href="pass-generator.php"><img src="img/pass.jpg" alt="Генератор паролей"><br>Генератор паролей</a>
            </div>
		</div>
	</div>
</div>
<div class="footer">
  <?php
    include "copyright.php";
  ?>
</div>

</body>
</html>
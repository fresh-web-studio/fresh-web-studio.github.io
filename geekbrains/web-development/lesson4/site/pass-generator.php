<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Личный сайт студента GeekBrains</title>
	<link rel="stylesheet" href="style.css"> 
	<script type="text/javascript">

		function readInt(){
            var number = document.getElementById("userAnswer").value;
            return parseInt(number);
        }

		function write(text){
			document.getElementById("pass").innerHTML = text;
		}

		function generate(){
            var userAnswer = readInt();
            var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
            var password = "";
            for (var i = 0; i < userAnswer; i++){
                password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }
            write("Ваш пароль: " + password);
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

			<h1>Генератор паролей</h1>

			<div class="box">
				<p id="info">Введите колличество знаков для вашего пароля:</p>
				<p id="pass"></p>
				<input type="text" id="userAnswer">
				<br>
				<a href="#" onClick="generate();" id="button">Начать</a>
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
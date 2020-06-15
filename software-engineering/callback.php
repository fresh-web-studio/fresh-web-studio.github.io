<?

//Если поступили данные..
if( isset($_POST['name'],$_POST['phone'])){

    $name = trim( htmlspecialchars( substr($_POST['name'], 0, 40) ) );
    $phone = trim( htmlspecialchars( substr($_POST['phone'], 0, 40) ) );

    if( $name != '' AND $phone != '' ){

        $email = "eandy@inbox.ru";
        $domen = "freshw.ru";

        $message = 'Имя: '.$name.'<br>Телефон: '.$phone;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
        $subject = "Обратный звонок";
        mail($email, $subject, $message, $headers);
        echo 1;

    }else echo 0;
}

?>

<?

//Если поступили данные..
if( isset($_POST['name_1'],$_POST['phone_1'])){

    $name_1 = trim( htmlspecialchars( substr($_POST['name_1'], 0, 40) ) );
    $phone_1 = trim( htmlspecialchars( substr($_POST['phone_1'], 0, 40) ) );

    if( $name_1 != '' AND $phone_1 != '' ){

        $email = "eandy@inbox.ru";
        $domen = "freshw.ru";

        $message = 'Имя: '.$name_1.'<br>Телефон: '.$phone_1;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
        $subject = "Обратный звонок с блока Оптимизиция рабочего процесса";
        mail($email, $subject, $message, $headers);
        echo 1;

    }else echo 0;
}

?>
<?

//Если поступили данные..
if( isset($_POST['name_2'],$_POST['phone_2'])){

    $name_2 = trim( htmlspecialchars( substr($_POST['name_2'], 0, 40) ) );
    $phone_2 = trim( htmlspecialchars( substr($_POST['phone_2'], 0, 40) ) );

    if( $name_2 != '' AND $phone_2 != '' ){

        $email = "eandy@inbox.ru";
        $domen = "freshw.ru";

        $message = 'Имя: '.$name_2.'<br>Телефон: '.$phone_2;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
        $subject = "Обратный звонок с блока Узнайте";
        mail($email, $subject, $message, $headers);
        echo 1;

    }else echo 0;
}

?>
<?

//Если поступили данные..
if( isset($_POST['name_3'],$_POST['phone_3'])){

    $name_3 = trim( htmlspecialchars( substr($_POST['name_3'], 0, 40) ) );
    $phone_3 = trim( htmlspecialchars( substr($_POST['phone_3'], 0, 40) ) );

    if( $name_3 != '' AND $phone_3 != '' ){

        $email = "eandy@inbox.ru";
        $domen = "freshw.ru";

        $message = 'Имя: '.$name_3.'<br>Телефон: '.$phone_3;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
        $subject = "Обратный звонок с блока Этапы автоматизации бизнеса";
        mail($email, $subject, $message, $headers);
        echo 1;

    }else echo 0;
}

?>
<?

//Если поступили данные..
if( isset($_POST['name_4'],$_POST['phone_4'])){

    $name_4 = trim( htmlspecialchars( substr($_POST['name_4'], 0, 40) ) );
    $phone_4 = trim( htmlspecialchars( substr($_POST['phone_4'], 0, 40) ) );

    if( $name_4 != '' AND $phone_4 != '' ){

        $email = "eandy@inbox.ru";
        $domen = "freshw.ru";

        $message = 'Имя: '.$name_4.'<br>Телефон: '.$phone_4;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$domen." <robot@".$domen.">\r\n";
        $subject = "Обратный звонок с блока Контакты";
        mail($email, $subject, $message, $headers);
        echo 1;

    }else echo 0;
}

?>
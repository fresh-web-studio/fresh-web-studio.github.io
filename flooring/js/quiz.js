let message = {   };
      
        $(window).click(function(event){
            let target = event.target;

            if (target.classList.contains('typeButton')) {
                
                if( $('#type').val() != 'Выберите из списка') {
                    $('#getType').addClass('hide'); 
                    $('#getSize').removeClass('hide');
                    $('#getSize').addClass('show-flex');
                    message.type = $('#type').val();  
                }
                else alert('Пожалуйста, выберите вариант из списка');  
            }

            else if (target.classList.contains('sizeButton')) {

                if( $('#width').val() != '' && $('#length').val() != '' && $('#height').val() != '') {
                    $('#getSize').addClass('hide');
                    $('#getWeight').removeClass('hide');
                    $('#getWeight').addClass('show-flex');
                    message.width = $('#width').val();
                    message.length = $('#length').val();
                    message.height = $('#height').val();
                }
                else alert('Пожалуйста, введите данные');
            }

            else if (target.classList.contains('weightButton')) {

                if( $('#weight').val() != 'Выберите из списка') {
                    $('#getWeight').addClass('hide');
                    $('#getMail').removeClass('hide');
                    $('#getMail').addClass('show-flex');
                    message.weight = $('#weight').val();
                }
                else alert('Пожалуйста, выберите вариант из списка');
            }

            else if (target.classList.contains('mailButton')) {

                $('.main-form').addClass('hide');
                $('.success').removeClass('hide');
                $('.success').addClass('show-flex');
                message.mail = $('#mail').val();
                console.log(message);
            }
        })
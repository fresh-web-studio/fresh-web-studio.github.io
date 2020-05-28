let overlay = $('.overlay'),
        modal = $('.pop-up-form');

        modalthanks = $('.pop-up-thanks');

    $('.support').on('click', function(){
        overlay.toggleClass('hide');
        modal.toggleClass('hide');
    });

    $('.close').on('click', function(){
        overlay.toggleClass('hide');
        modal.toggleClass('hide');    
    });

    $("form.mail_ajax").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function() {
    if(overlay.hasClass('hide')){
    	overlay.toggleClass('hide');
     	modalthanks.toggleClass('hide');
    }
    else {
    	modal.toggleClass('hide');
     	modalthanks.toggleClass('hide');
    }
     
     console.log('send');
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
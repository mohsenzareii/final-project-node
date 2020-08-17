$(document).ready(function(){
    $('input').focusout(function(){
        let value = $(this).val();
        let id = $(this).attr('id');
        switch(id){
            case 'userName' :
                if(value.length < 8 || value.length > 30){
                    $('#userNameHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#userNameHelp').html('');
                }
                break;
            case 'password' :
                if(value.length <8 || value.length > 30){
                    $('#passwordHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#passwordHelp').html('');
                }
        }
    });
});
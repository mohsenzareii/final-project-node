$(document).ready(function(){
    $('input').focusout(function(){
        let value = $(this).val();
        let id = $(this).attr('id');
        switch(id){
            case 'userName' :
                if(value.length < 3 || value.length > 30){
                    $('#userNameHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#userNameHelp').html('*الزامی');
                }
                break;
            case 'password' :
                if(value.length <8 || value.length > 30){
                    $('#passwordHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#passwordHelp').html('*الزامی');
                }
                break;
            case 'firstName' :
                if(value.length <3 || value.length > 30){
                    $('#firstNameHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#firstNameHelp').html('*الزامی');
                }  
                break;
            case 'lastName' :
                if(value.length <3 || value.length > 30){
                    $('#lastNameHelp').html('تعداد کاراکتر ها حداقل 8 و حداکثر 30 باشد!');
                } else {
                    $('#lastNameHelp').html('*الزامی');
                }  
                break;
            case 'mobile' : 
                if(value.length != 11 || value.length !=10){
                    $('#mobileHelp').html('شماره نامعتبر است!');
                } else {
                    $('#mobileHelp').html('*الزامی');
                }       
        }
    });
});
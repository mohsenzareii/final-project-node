const edit = function(e){
    e.preventDefault();
    let userData={
        firstName : document.getElementById('firstName').value,
        lastName : document.getElementById('lastName').value,
        mobile : document.getElementById('mobile').value,
    }
    
    console.log(userData);
    $.ajax({
        url : '/api/users/editProfile',
        type : "PUT",
        data : userData,
        success : function (res){
            if(res.redirect){
                window.location = res.redirect;
            }
        }
    })
}
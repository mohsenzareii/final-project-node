const Delete = function (element) {
    let articleId = element.id;
    console.log(articleId);
    $.ajax({
        url : `/api/articles/delete/${articleId}`,
        type : "DELETE",
        success : function(res){
            if(res.redirect){
                window.location = res.redirect;
            }
        }
    });
}
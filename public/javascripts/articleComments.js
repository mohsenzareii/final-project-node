const goToComments = function (element){
    let articleId = element.id;
    $.ajax({
        url : `/api/comments/${articleId}`,
        type : 'GET',
        success : function(res){
            
        }
    });
}
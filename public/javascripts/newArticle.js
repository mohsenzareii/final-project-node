$(document).ready(function () {
    
    $('#article').change(function() {
        let filename = $('#article').val();
        validateFileType(filename);
    });
});

function validateFileType(fileName){

    let idxDot = fileName.lastIndexOf(".") + 1;
    let extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="pdf"){
        $('.custom-file-label').html(fileName);
    }else{
        alert("فابل با پسوند pdf پذیرفته می شود!");
    }   
}
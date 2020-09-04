$(document).ready(function() {
    $('.water_img img').on('click', function () {
        let attr = $(this).attr('data-path');
        console.log(attr);
        $('#waterman').attr('src', attr);
    })  
})
$(document).ready(function() {
    $('.box_items').on('mouseover', function () {
        let attr = $(this).attr('data-path');
        // console.log(attr);
        $('#waterman').attr('src', attr);
    })  
})
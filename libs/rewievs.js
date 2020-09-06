$(document).ready(function() {
    $('#sendComment').on('click', function() {
        var usernameComment = $('#userName').val();
        var textComment = $('#commentText').val();
        // console.log(usernameComment);
        // console.log(textComment);
        $('<p id="commentName">' + usernameComment + '</p>').appendTo('.comments_name');
        $('<p id="commentNewText">' + textComment + '</p>').appendTo('.comments_name');
    })
});
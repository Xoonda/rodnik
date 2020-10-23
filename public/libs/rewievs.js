$(document).ready(function() {
    $('#sendComment').on('click', function() {
        var usernameComment = $('#userName').val();
        var textComment = $('#commentText').val();
        // console.log(usernameComment);
        // console.log(textComment);
        $('<div class="comments_item"><p id="commentName">' + usernameComment + '</p>' + '<p id="commentNewText">' + textComment + '</p></div>').appendTo('.comments');
        // $('<p id="commentNewText">' + textComment + '</p>').appendTo('.comments_name');
    })
});
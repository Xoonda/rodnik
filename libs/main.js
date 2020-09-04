
document.getElementById('slideLeft').onclick = gotoleft;
document.getElementById('slideRight').onclick = gotoright;
let pos = 0;
// $('#slideRight').on('mouseover', function () {
//     if (pos == 0) {
//         console.log(pos);
//         $(this).attr('disabled', '');
//     } else if (pos != 0) {
//         $(this).attr('disabled', 'false');
//     }
// })

// $('#slideRight[type="button"]').on('mouseover', function () {
        
            
//             $('#slideRight[type="button"]').prop('disabled', false);
        
//     })
function gotoright () {
    pos = pos + 635;
    if ( pos == 1905 ) {
        pos = 0;
    }
    if ( pos == 635 ) {
        pos = -1270;
    }
    if ( pos == 1270 ) {
        pos = -635;
    }
    let polosa = document.getElementById('polosa');
    polosa.style.left = pos + 'px';
    console.log(pos);
}
function gotoleft () {
    pos = pos - 635;
    if ( pos == -1905 ) {
        pos = 0;
    }
    let polosa = document.getElementById('polosa');
    polosa.style.left = pos + 'px';
    console.log(pos);
}

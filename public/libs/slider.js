
let pos = 0;
document.getElementById('slideLeft').onclick = gotoleft;
document.getElementById('slideRight').onclick = gotoright;
// document.getElementById('advantage_box').addEventListener('mouseover', () => {
//     console.log('1')
//             if (pos != 0) {
//                 document.getElementById('advantage_box').setAttribute('disabled', false);
//             }
//         })

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
// checkPos = () => {
//     if (pos == 0) {
//         $('#slideRight').attr('disabled', 'disabled');
//     } else {
//         $('#slideright').attr('disabled', 'false');
//     }
// }
// function disabled () {
//     document.getElementById('advantage_box').addEventListener('mouseover', () => {
//         console.log('hello');
//     })
// }
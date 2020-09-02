
document.getElementById('slideLeft').onclick = gotoleft;
document.getElementById('slideRight').onclick = gotoright;
let pos = 0;
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
}
function gotoleft () {
    pos = pos - 635;
    if ( pos == -1905 ) {
        pos = 0;
    }
    let polosa = document.getElementById('polosa');
    polosa.style.left = pos + 'px';
}
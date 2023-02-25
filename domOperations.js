function showResultInDomKvadrat() {
    const sideLength = document.querySelector('#dlinaStoroniKvadrata').value;
    const resultField = document.querySelector('#ploschadKvadrata');

    resultField.innerHTML = calculateArea(sideLength, sideLength);
}

function showResultInDomPriamougolnika() {
    const sideALength = document.querySelector(
        '#pervayaStoronaPriamougolnika'
    ).value;
    const sideBLength = document.querySelector(
        '#drugayaStoronaPriamougolnika'
    ).value;
    const resultField = document.querySelector('#ploschadPriamougolnika');

    resultField.innerHTML = calculateArea(sideALength, sideBLength);
}

function showResultInDomParalelograma() {
    const sideLength = document.querySelector(
        '#dlinaStoronyParalelograma'
    ).value;
    const hLength = document.querySelector('#dlinaVisotyParalelograma').value;
    const resultField = document.querySelector('#ploschadParalelograma');

    resultField.innerHTML = calculateArea(sideLength, hLength);
}

function showResultInDomRomba() {
    const sideLength = document.querySelector('#dlinaStoronyRomba').value;
    const hLength = document.querySelector('#dlinaVisotyRomba').value;
    const resultField = document.querySelector('#ploschadRomba');

    resultField.innerHTML = calculateArea(sideLength, hLength);
}

function showResultInDomKvadrat() {
    const squareSide = document.querySelector('#dlinaStoroniKvadrata').value;
    const resultField = document.querySelector('#ploschadKvadrata');

    resultField.innerHTML = calculateSquareArea(squareSide);
}

function showResultInDomPriamougolnika() {
    const rectSideA = document.querySelector(
        '#pervayaStoronaPriamougolnika'
    ).value;
    const rectSideB = document.querySelector(
        '#drugayaStoronaPriamougolnika'
    ).value;
    const resultField = document.querySelector('#ploschadPriamougolnika');

    resultField.innerHTML = calculateRectangleArea(rectSideA, rectSideB);
}

function showResultInDomParalelograma() {
    const parallelogramSide = document.querySelector(
        '#dlinaStoronyParalelograma'
    ).value;
    const parallelogramHeight = document.querySelector(
        '#dlinaVisotyParalelograma'
    ).value;
    const resultField = document.querySelector('#ploschadParalelograma');

    resultField.innerHTML = calculateParallelogramArea(
        parallelogramSide,
        parallelogramHeight
    );
}

function showResultInDomRomba() {
    const rhombusSide = document.querySelector('#dlinaStoronyRomba').value;
    const rhombusHeight = document.querySelector('#dlinaVisotyRomba').value;
    const resultField = document.querySelector('#ploschadRomba');

    resultField.innerHTML = calculateRhombusArea(rhombusSide, rhombusHeight);
}

function multiplyPositiveTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > 0 && secondNumber > 0) {
        return firstNumber * secondNumber;
    } else {
        alert('Значения параметров должны быть больше 0.');
        return '';
    }
}

function calculateSquareArea(squareSide) {
    return multiplyPositiveTwoNumbers(squareSide, squareSide);
}

function calculateRectangleArea(rectSideA, rectSideB) {
    return multiplyPositiveTwoNumbers(rectSideA, rectSideB);
}

function calculateParallelogramArea(parallelogramSide, parallelogramHeight) {
    return multiplyPositiveTwoNumbers(parallelogramSide, parallelogramHeight);
}

function calculateRhombusArea(rhombusSide, rhombusHeight) {
    return multiplyPositiveTwoNumbers(rhombusSide, rhombusHeight);
}

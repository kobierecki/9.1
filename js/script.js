
var a = prompt('Enter first number');
var h  = prompt('Enter second number');

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } 
    return "Nieprawidłowe dane.";
}

console.log(getTriangleArea(a, h));




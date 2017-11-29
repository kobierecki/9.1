
var a = prompt('Enter first number');
var h  = prompt('Enter second number');

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else {
        console.log("Nieprawidłowe dane.")
    }  
}

var triangle1Area = console.log(getTriangleArea(10,6));
var triangle2Area = console.log(getTriangleArea(12,3));
var triangle3Area = console.log(getTriangleArea(40,15));




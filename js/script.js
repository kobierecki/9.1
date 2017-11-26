
var name = prompt('Enter your name');
//alert('Hello, ' + name);
console.log('Hello, ' + name);
/* Komentarz 1
Komentarz 2 */
// Komentarz 3

var dimensions = [];
dimensions[0] = prompt('Enter first number');
dimensions[1] = prompt('Enter second number');

var a = dimensions[0];
var b = dimensions[1];

var triangleArea = a*b/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + b + ' is equal to: ' + triangleArea);

multiplicationResult = (a ** 2) - (2*a*b) + (b ** 2);

if (multiplicationResult > 0) {
    console.log("Multiplication result is a plus it's "+ multiplicationResult);
} 
else if (multiplicationResult < 0) {
    console.log("Multiplication result is a minus it's "+ multiplicationResult);
}
else {
    console.log('Two same numbers were defined. Result equals zero.');
}



const PI = 3.14159;
//const = é util para quando for declarar uma variavel que não irá ser alterada
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);
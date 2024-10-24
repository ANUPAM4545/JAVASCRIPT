// Problem 1: Function Expression
// Write a function expression called calculateArea that takes two parameters: length and width.
//  It should return the area of a rectangle. Test the function with different values.
// const calculateArea = function(length, width) {
//     return length * width;
// };
// console.log(calculateArea(5, 10)); 
// console.log(calculateArea(7, 3,));

// Problem 2: Arrow Function 
// Write an arrow function called calculatePerimeter that takes two parameters, 
// length and width, and returns the perimeter of a rectangle.
// const calculatePerimeter = (length, width) => 2 * (length + width);
//  const perimeter = calculatePerimeter(7, 8);
//  console.log(perimeter);

//  Problem 3: Arrow Function and this Context
// Create an object person with a property name and a method greet that uses an arrow function.
//  The arrow function should return a greeting using the name property of the object.
// const person = {
//     name: "TANISHQ",
//     greet: () =>
//          {
//         return `Hello, my name is ${person.name}`;
//     }
// };
// console.log(person.greet());

// Problem 4: Arrow Function for Array Manipulation
// Write an arrow function filterEvenNumbers that takes an array of numbers and returns a new array
//  containingonly the even numbers.
// const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);

// Problem 5: Default Parameters in Functions
// Write a function greet that accepts two parameters: name and greeting. The greeting parameter should have a 
// default value of "Hello". If no greeting is provided, the function should return "Hello, [name]".
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}
console.log(greet("AYUSH")); 
console.log(greet("SHIVAM", "HELLO"));









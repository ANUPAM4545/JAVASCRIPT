
  /*Question 1: Object Manipulation
  You are given an object representing a student's information. 
  Your task is to write a JavaScript function that t
  akes this object as input and performs the following 
  tasks:
  
  Add a new property called "averageGrade" to the object. 
  Calculate the average grade by summing all the grades 
  (located in the "grades" array) and dividing by the number of grades.
  
  Create a copy of the student object without modifying the original object. 
  The copy should include all properties except the "grades" property.
  
  Finally, return the modified original object and the copy as a pair of objects in an array.
  
  
  */


function manipulateStudentInfo(student) {
    const grades = student.grades;
    const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
    const averageGrade = totalGrades / grades.length;
    student.averageGrade = averageGrade;
    const { grades: studentCopy } = student;
    return [student, studentCopy];
}
const studentInfo = {
    name: "John Doe",
    age: 20,
    grades: [55, 90, 78, 92],
    city: "new york"
};
const [modifiedStudent, studentCopy] = manipulateStudentInfo(studentInfo);
console.log(modifiedStudent); 
console.log(studentCopy); 

//Question 2: Pizza Order

/*You are planning to throw a party and want to order Pizzas for the guests. 
Assuming each person gets 3 slices of Pizza and that each Pizza has 8 slices, you want to 
find out how many Pizzas should be ordered for this party. Write a JavaScript function that takes t
he number of people invited to the party as an input and returns the total number of Pizzas required.
Your function should:
Take the number of guests as input.
Use the assumption that each Pizza has 8 slices and each person gets 3 slices.
Round the result to the nearest whole number using `Math.ceil()`.
Return the count of Pizzas you should order as an integer.*/

function getpizzacount(numGuests) {
    const slicesPerPerson = 3;
    const slicesPerPizza = 8;
    const totalSlicesNeeded = numGuests * slicesPerPerson;
    const totalPizzas = Math.ceil(totalSlicesNeeded / slicesPerPizza);
    return totalPizzas;
}
const numberOfGuests = 8; 
const pizzastobeodered = getpizzacount(numberOfGuests);
console.log(pizzastobeodered);


//Problem 1: Function Expression
//Write a function expression called calculateArea that takes two parameters: 
//length and width. It should return the area of a rectangle. 
//Test the function with different values.

const calculateArea = function(length, width) {
    return length * width;
};
console.log(calculateArea(5, 10)); 
console.log(calculateArea(7, 3,4));  

//Problem 2: Arrow Function
//Write an arrow function called calculatePerimeter that takes two parameters,
 //length and width, and returns the perimeter of a rectangle.

 const calculatePerimeter = (length, width) => 2 * (length + width);
 const perimeter = calculatePerimeter(7, 4);
 console.log(perimeter); 

 //Problem 3: Arrow Function and this Context
//Create an object person with a property name and a method greet that uses an arrow function. 
//The arrow function should return a greeting using the name property of the object.

 const person = {
    name: "ANUPAM",
    greet: () =>
         {
        return `Hello, my name is ${person.name}`;
    }
};
console.log(person.greet());

//Problem 4: Arrow Function for Array Manipulation
//Write an arrow function filterEvenNumbers that 
//takes an array of numbers and returns a 
//new array containing only the even numbers.

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);


//Problem 5: Default Parameters in Functions
//Write a function greet that accepts two parameters: 
//name and greeting.
 //The greeting parameter should have a default value of "Hello".
 // If no greeting is provided, the function should return "Hello, [name]".


function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}
console.log(greet("ANUPAM")); 
console.log(greet("SHIV", "HELLO"));

//Problem 6: Function vs Arrow Function with this
//Write two methods inside an object car. One method should be a regular function, and the other should
// be an arrow function. The regular function should correctly access the object?s 
// model property using this, while the arrow function should demonstrate the inability to use this.

const car = {
    model: 'Suzuki ',
    getModelRegular: function() {
        return `Car model: ${this.model}`;
    },
    getModelArrow: () => {
        model:"suzuki"
        return `Car model: ${this.model}`; ject
    }
};
console.log(car.getModelRegular());  
console.log(car.getModelArrow());


//Question 1: Text Parser

//You are building a simple text processing application in JavaScript. 
//Implement a function that takes a string as 
//input and performs the following tasks using various string methods:

//1.Convert the string to lowercase.

//2.Remove all spaces from the string.

//3.Check if the resulting string contains the word "javascript" (case insensitive)

//4.Count the number of occurrences of the letter 'a' in the string.

//5.Replace all occurrences of the letter 'e' with 'X' in the string.

//Hint:
//Use string methods such as `toLowerCase()`, `replace()`, `indexOf()`.

function textParser(input) {
    
    const lowerCaseString = input.toLowerCase();

    const noSpacesString = lowerCaseString.replace(/\s+/g, '');

    const containsJavaScript = noSpacesString.indexOf('javascript') 

    const countA = lowerCaseString.split('a').length - 1;

    const replacedEString = lowerCaseString.replace(/e/g, 'X');

    return {
        lowerCaseString,
        noSpacesString,
        containsJavaScript,
        countA,
        replacedEString
    };
}
const inputString = "Javascript is an excellent programming language.";
const result = textParser(inputString);
console.log(result);






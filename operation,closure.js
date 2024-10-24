//   // Question 1:Takes object and return Array of keys
// // Write a function that takes an object as input and returns an array of all the 
// // keys where the value is a string.

function getStringKeys(obj) {
    const keys = Object.keys(obj); 
    const stringKeys = []; 

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]; 
        if (typeof obj[key] === 'string') { 
            stringKeys.push(key); 
        }
    }
    return stringKeys; 
}
const exampleObj = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland',
    isActive: true,
   
};

const stringKeys = getStringKeys(exampleObj);
console.log(stringKeys); 

//   // Question 2: Takes object and return a object where key and value swapped
//   // Implement a function that takes an object and returns a new object with the
//   // keys and values swapped.

function swapKeysAndValues(obj1){
    let swapped=Object.entries(obj1); 
    for(let value of swapped){
        let temp=value[0];
        value[0]=value[1];
        value[1]=temp;
    }
    return swapped;
}
const input1={
    a:1,
    b:2,
    c:3
};
console.log(swapKeysAndValues(input1));


//   // Question 3: Bank account using closure
//   // Implement a closure function to create a bank account that allows deposits, 
//   // withdrawals, and checking balance 
function createBankAccount(initialBalance){
    let balance=initialBalance;
    return {
        deposit: function(amount){
            balance+=amount;
            return `Deposit amount: ${amount}, New Balance: ${balance}`;
        },
        withdraw: function(amount){
            if(amount>balance){
                return ("Insufficient balance");
            }
            else  {
                balance-=amount;
                return `Withdraw amount: ${amount}, New Balance: ${balance}`;
            }
        },
        checkBalance: function(){
            return `Current Balance: ${balance}`;
        }
    };
}
const myAcount = createBankAccount(1000)
console.log(myAcount.deposit(100))
console.log(myAcount.withdraw(10000))
console.log(myAcount.checkBalance())


// Question 4: Sum of single Digit
// Write a function that takes a positive integer as input, and repeatedly sums 
// its digits until the sum is a single digit. Use type casting where necessary.

function sumToSingleDigit(num){
    let sum=0;
    let str=String(num);
    let arr=str.split('');
    for (let i=0;i<arr.length;i++){
        sum+=Number(arr[i]);
    }
    if (sum>9){
        return sumToSingleDigit(sum);
    }
    else{
        return sum;
    }
}
let final = sumToSingleDigit(678584)
console.log(final)




//Question 1: Filter even numbers
//Given an array of numbers: [2, 4, 6, 8, 10], use the ?filter? 
//function to create a new array called ?evenNumbers? 
//that contains only even numbers from the original array.
// Given array of numbers
/*const numbers = [2, 4, 6, 8, 10,3,5,7,8,9,0];

// Use the filter function to create a new array with only even numbers
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // Check if the number is even
});

// Log the new array of even numbers
console.log(evenNumbers);



/*Question 2: Mapping Grades
You are given an array of student objects with the following structure:
[
{ name: "Alice", score: 88 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 75 },
{ name: "David", score: 64 }
]
Create a JavaScript function that uses the ?map? 
function to transform this array into an array of objects with a "grade" property.
 The "grade" should be a string based on the following criteria:
A score of 90 or above is an "A".
A score between 80 and 89 (inclusive) is a "B".
A score between 70 and 79 (inclusive) is a "C".
A score below 70 is a "D".
Return the array of objects with grades.*/
// Given array of student objects
/*onst students = [
    { name: "Alice", score: 88 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 75 },
    { name: "David", score: 64 }
];

// Function to map scores to grades
function assignGrades(students) {
    return students.map(function(student) {
        let grade;
        
        // Determine the grade based on the score
        if (student.score >= 90) {
            grade = 'A';
        } else if (student.score >= 80) {
            grade = 'B';
        } else if (student.score >= 70) {
            grade = 'C';
        } else {
            grade = 'D';
        }

        // Return a new object with name, score, and grade
        return {
            name: student.name,
            score: student.score,
            grade: grade
        };
    });
}

// Get the array of students with grades
const studentsWithGrades = assignGrades(students);

// Log the result
console.log(studentsWithGrades);*/

//Question 3: Reducing Inventory Value
//You have an array of product objects, where each object has properties ?name? (string) and ?price? (number).
 //Design a JavaScript function that uses the ?reduce? 
// function to calculate and return the total value of the entire inventory 
 //(the sum of the prices of all products).
//[
//{ name: "Laptop", price: 800 },
//{ name: "Phone", price: 600 },
//{ name: "Tablet", price: 300 }
//]
// Given array of product objects
/*const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 }
];

// Function to calculate the total value of the inventory
function calculateTotalValue(products) {
    return products.reduce(function(total, product) {
        return total + product.price; // Sum up the prices
    }, 0); // Start the total at 0
}

// Get the total inventory value
const totalValue = calculateTotalValue(products);

// Log the result
console.log('Total Inventory Value:', totalValue);
*/
//4.Testing Array Elements with every and some Functions:
//Given an array of ages, write two separate functions using the `every` and `some` array methods. 
//One function should check if all ages in the array are above 18, and the other should check 
//if at least one age in the array is above 18. Provide examples and explanations for each function.
// Given array of ages
/*const ages = [20, 22, 17, 19, 25];

// Function to check if all ages are above 18
function allAgesAbove18(arr) {
    return arr.every(function(age) {
        return age > 18; // Check if each age is greater than 18
    });
}

// Function to check if at least one age is above 18
function someAgesAbove18(arr) {
    return arr.some(function(age) {
        return age > 18; // Check if any age is greater than 18
    });
}

// Testing the functions
const allAbove18 = allAgesAbove18(ages);
const someAbove18 = someAgesAbove18(ages);

// Log the results
console.log('Are all ages above 18?', allAbove18); 
console.log('Is at least one age above 18?', someAbove18); */

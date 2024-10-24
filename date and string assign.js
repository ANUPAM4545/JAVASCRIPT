
// Question 1: Text Parser

// You are building a simple text processing application in JavaScript. Implement a function that takes a 
// string as input 
// and performs the following tasks using various string methods:
// Convert the string to lowercase.

// Remove all spaces from the string.

// Check if the resulting string contains the word "javascript" (case insensitive).

// Count the number of occurrences of the letter 'a' in the string.

// Replace all occurrences of the letter 'e' with 'X' in the string.

// Hint:
// Use string methods such as `toLowerCase()`, `replace()`, `indexOf()`.

// Example: For an input string ?Javascript is an excellent programming language. ? following are
//  the different results after each parsing operation
/*function textParser(input) {
    
    const lowerCaseString = input.toLowerCase();

    const noSpacesString = lowerCaseString.split(' ').join('');

    const containsJavaScript = noSpacesString.indexOf('javascript') 

    const countA = lowerCaseString.split('a').length - 1;

    const replacedString = lowerCaseString.replace(/e/g, 'X');

    return {
        lowerCaseString,
        noSpacesString,
        containsJavaScript,
        countA,
        replacedString
    };
}
const inputString = "Javascript is an excellent programming language.";
const result = textParser(inputString);
console.log(result);*/

// Question 1: Takes object and return Array of keys
//Write a function that takes an object as input and returns an array of all the keys
 //where the value is a string.
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
    country: 'Imaginary'
 };
 
 const stringKeys = getStringKeys(exampleObj);
 console.log(stringKeys); 
 

//Question 2: Takes object and return a object where key and value swapped
//Implement a function that takes an object and returns a 
//new object with the keys and values swapped.
/*function swapKeysAndValues(obj1){
    let swapped=Object.entries(obj1); //nested arrays
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
console.log(swapKeysAndValues(input1));*/



  
//   // Question 3: Bank account using closure
//   // Implement a closure function to create a bank account that allows deposits, 
//   // withdrawals, and checking balance 
  /*function createBankAccount(initialBalance){
      let balance=initialBalance;
      return {
          deposit: function(amount){
              balance+=amount;
              return Deposit amount: ${amount}, New Balance:${balance} ⁠;

              
          },
          withdraw: function(amount){
              if(amount>balance){
                  return ("Insufficient balance");
              }
              else  {
                  balance-=amount;
                  return withdraw
              }
          },
          checkBalance: function(){
              return ⁠ Current Balance: ${balance} ⁠;
          }
      };
  }
  const myAcount = createBankAccount(1000)
  console.log(myAcount.deposit(100))
  console.log(myAcount.withdraw(10000))
  console.log(myAcount.checkBalance())*/
  
   // Question 4: Sum of single Digit
  // Write a function that takes a positive integer as input, and repeatedly sums 
  // its digits until the sum is a single digit. Use type casting where necessary.
  
  /*function sumToSingleDigit(num){
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
}*/


//Question 1: Check and Add Element in an Array
//Write a JavaScript function that takes an array and an element as 
//parameters and adds the element to the beginning of the array if element was 
//not already available in the array. If the element was already present in the array, 
//then don?t add it and instead return this message - ?element is already available in the given array?.
function checkAddElement(arr, element) {
    if (arr.includes(element)) {
        return `${element} is already available in the given array`;
    } else {
        arr.unshift(element);
        return arr; 
    }
}

console.log(checkAddElement( [1,2,3,4,5],6)); 
console.log(checkAddElement([1,2,3,4,5],1))

//Question 2: Combining Arrays
//Create a function that combines two arrays of strings into a single array using 
//the `concat` method. The function should return the merged array. 
//Then print all the elements which have length 5.

 function canArr(arr1,arr2){
    const combinedarray=arr1.concat(arr2)
 }


 //Question 3: Slicing and Splicing
//Create a function that takes an array and performs the following actions:
//Use the `slice` method to extract a portion of the array.
//Use the `splice` method to insert elements into the array.
//Return the modified array.


//Question 4: Spread Operator:
//Create an array of names, and then using the spread operator, 
//create a new array that includes the original names along with
 //three additional names of your choice.
 //Then write a JavaScript function that uses a loop to iterate through the 
 
 const originalNames = ['Alice', 'Bob', 'Charlie'];

// Using the spread operator to create a new array with additional names
const additionalNames = ['David', 'Eve', 'Frank'];
const combinedNames = [...originalNames, ...additionalNames];

console.log(combinedNames); 

function printnamewithGreetings(names) {
    for (const name of names) {
        console.log(`Hello, ${name}`);
    }
}


printnamewithGreetings(combinedNames);


//Question 5:Joining Arrays:
//You have two arrays: one containing first names and the other containing last names. 
//Write a function that combines these two arrays into a new array 
//of full names and separates them with a space.
const firstNames = ['Alice', 'Bob', 'Charlie'];
const lastNames = ['Smith', 'Johnson', 'Williams'];

function combineNames(firstNames, lastNames) {
    const fullNames = [];

    // Ensure both arrays have the same length to avoid index errors
    const length = Math.min(firstNames.length, lastNames.length);

    for (let i = 0; i < length; i++) {
        // Combine first and last names with a space in between
        fullNames.push(`${firstNames[i]} ${lastNames[i]}`);
    }

    return fullNames;
}




const fullNamesArray = combineNames(firstNames, lastNames);
console.log(fullNamesArray);

//QUESTION;6
//Create an array of random numbers. 
//Write a function that sorts this array in ascending order.
// Create an array of random numbers
const randomNumbers = [7,2,9,1,4,6];

// Function to sort the array in ascending order
function sortNumbersAscending(arr) {
    return arr.sort(function(a, b) {
        return a - b; // Sort numbers in ascending order
    });
}

// Sort the random numbers
const sortedNumbers = sortNumbersAscending(randomNumbers);

// Log the original and sorted arrays
console.log('Random Numbers:', randomNumbers);
console.log('Sorted Numbers:', sortedNumbers)
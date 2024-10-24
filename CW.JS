
//Q. CONVERT STRING TO NUMBERS

const stringToNumber = function(str){
    return Number(str)
   }
console.log(stringToNumber("12345"))
console.log(stringToNumber("605"))
console.log(stringToNumber("74647"))


//Q. CALCULATE THE SUM OF POSITIVE INTEGERS.
function sumOfPositives(arr) {
    return arr.reduce((sum, num) => {
        return num > 0 ? sum + num : sum;
    }, 0);
}
const results = sumOfPositives([1, 7, 7, 12]);
console.log(results);  


//Q. TEST THE FUNCTION IS EVEN OR NOT.
function isEven(n) {
    return Number.isInteger(n) && n % 2 === 0;
}
console.log(isEven(4));   
console.log(isEven(-2));   
console.log(isEven(3));    
console.log(isEven(-3));   
console.log(isEven(3.5));  
console.log(isEven(2.0));  

//Q. CREATE A FUNCTION  AND TAKE INPUT AS CURRENT AND USE SWITCH CASE IN TRAFFIC LIGHTS AND OUTPUT SHOULD BE LIKE ; IF WE CONSOLE ;
// GREEN=YELLOW, YELLOW=RED, RED=GREEN

// 1ST WAY;
function updateLight(current) {
  
    switch (current) {
          case 'green':
              return ('yellow');
          case 'yellow':
              return ('red')
          case 'red':
              return ('green');
          default:
              return 'Invalid state'
  }
}
    console.log(updateLight('green'));  
  console.log(updateLight('yellow')); 
  console.log(updateLight('red')); 

  //2ND WAY;
  function updateTrafficLight(current) {
    const trafficLights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green'
    };

return trafficLights[current]
}
console.log(updateTrafficLight('green'));  
console.log(updateTrafficLight('yellow')); 
console.log(updateTrafficLight('red'));    
console.log(updateTrafficLight('blue'));   

//Q. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 

function removeFirstAndLastChar(str) {
    return str.slice(1, -1);
}


console.log(removeFirstAndLastChar("hello")); 
console.log(removeFirstAndLastChar("world")); 
console.log(removeFirstAndLastChar("abc"));   

//Q. CREATE AN  ARRAY AND FIND THE SMALLEST INTEGER IN THE GIVEN ARRAYS.

function findSmallestInt(arr) {
    return Math.min(...arr);
}
console.log(findSmallestInt([34, 15, 88, 2]));      
console.log(findSmallestInt([34, -345, -1, 100]));  
console.log(findSmallestInt([5, 3, 9, 1, 7]));    

//Q. CHECK THE NUMBER IS EVEN OR NOT . THEN MULTIPLY IT BY 8 OR 9
function multiplyNumber(n) {
    return n % 2 === 0 ? n * 8 : n * 9;
}


console.log(multiplyNumber(2))
console.log(multiplyNumber(3))
console.log(multiplyNumber(0))
console.log(multiplyNumber(5))
//2ND WAY
function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}
console.log(simpleMultiplication(5))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(9))
console.log(simpleMultiplication(12))
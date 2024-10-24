/*QUESTION 1


You have been given the task of building a function that converts a temperature value from Fahrenheit to Celsius.

Fahrenheit and Celsius are units of Temperature. The formula to convert Fahrenheit to Celsius is as follows:

Celsius value = (Fahrenheit value - 32) * 5/9


Your task is to implement the `convertToCelsius` function that accepts a temperature in Fahrenheit and returns the equivalent temperature in Celsius.


Points to remember:

Implement a function named `convertToCelsius` that takes a single parameter - A number that is the temperature in Fahrenheit that needs to be converted.

Inside the function, apply the conversion formula to calculate the equivalent temperature in Celsius.*/

/*function convertToCelcius(Fahrenheit){
let Celsius=(Fahrenheit-32)*5/9
return Celsius
}

 let temperature= convertToCelcius(56)
 console.log(temperature)


   /* You have been given the task of building a function that calculates the area of a circle based on its radius.
    
    The formula to calculate the area of a circle is as follows:
    
    Area = 3.14 * radius * radius
    
    Your task is to implement the `calculateCircleArea` function that accepts the radius of a
    
    circle and returns its area.
    
    Points to remember:
    
    Implement a function named `calculateCircleArea` that takes a single parameter - A number that is the radius of the circle for which you need to calculate the area.
    
    Inside the function, apply the area calculation formula to calculate the area of the circle.
    
    Return the calculated area.*/
    
   // function areaofcircle(radius){
      //  let area=3.14 * radius * radius 
     //   return area
    
   // }
    //let arrea = areaofcircle(25)
    //console.log(arrea)
    
   // Question 1:
//Create a function named isEligibleForDiscount that takes these two parameters:
//hasMembership (boolean) and
//totalPurchase (number)
//Implement the function to determine if a customer is eligible for a discount. The eligibility for discount depends on whether the customer has a membership as well as if their total purchase is greater than $100. Only when a customer meets both of these conditions, he/she is eligible for a discount. Return true if the given customer is eligible for discount else return false.


function isEligibleForDiscount(hasMembership,totalpurchase){
  if(hasMembership==true&totalpurchase>100){
    return "eligible for the discount"
}
else {
  return "not eligible for discount"}
}
let  x = isEligibleForDiscount(110)
console.log(x)

// Imagine you're writing code for a timer that starts from 0 and increments every second. 
//Write a function calculateTimeInSeconds that takes three parameters: hours, minutes, and seconds. Calculate and return the total time in seconds.

function calculationTimeInSeconds(hours,minutes,seconds){
  var hoursSeconds= hours*60*60
  var minutesSeconds=minutes*60
  var totalTimeinseconds=hoursSeconds+minutesSeconds+seconds
  return totalTimeinseconds
}

let time= calculationTimeInSeconds(7,50,55)

console.log(time)


//You're building a calculator app. Create a function calculateBMI that takes two parameters: weight (in kilograms) and height (in meters). 
//Calculate and return the Body Mass Index (BMI) using the formula: BMI = weight / (height * height).

function Bmi(height,weight){
  let y= weight/height**2
  return y

}
let BMI =Bmi(1.7,56)
console.log(BMI)


// You're developing a game. Implement a function calculateFinalScore that takes three parameters: kills, objectives, and time (all integers). 
//Calculate and return the final score using the formula: score = kills * 100 + objectives * 50 - time * 10.

function calculateFinalScore(kills,objectives,time){
  let score= kills*100 + objectives*50- time*10
  return score
}
let points= calculateFinalScore(56,8,56)
console.log(points)
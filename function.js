//1.
/*function sumOfTwoNumbers(a,b){
    console.log(a+b);
}

sumOfTwoNumbers(2,8);
//2.
const cart = [
 {name: "lenovo", quantity: 5, price:60000},
{name: "hp", quantity: 5, price:70000},
{name: "apple", quantity: 5, price:90000},

    
]
function calculate_total_price(cart){
    let total= cart[0].price*cart[0].quantity+ 
               cart[1].price*cart[1].quantity
               cart[2].price*cart[2].quantity
            
               console.log(total)
}

calculate_total_price(cart)



Question 1: Grade Classification
Write a program that takes a student's grade (as a percentage) and uses a 
"switch" case statement to classify it into a letter grade (A, B, C, D, E). The grading scale is:
A: 90% and above
B: 80% to 89%
C: 70% to 79%
D: 60% to 69%
E: Below 60%
Display the letter grade to the user.

function checkGrade(score){
    let grade='';
    switch(true){
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score <= 89):
            grade = "B"
            break;
        case (score >= 70 && score <= 79):
            grade = "C";
            break;
        case (score >= 60 && score <= 69):
            grade = "D";
            break;
        case (score < 60):
            grade = "E";
            break;
    }
    return grade;
}
console.log(checkGrade(55));


Question 2: Traffic Light Control
Create a program that simulates a traffic light system. The user inputs a 
color code (R for Red, Y for Yellow, G for Green), and the program uses a 
"switch" case statement to output the appropriate action:
Red: "Stop"
Yellow: "Get Ready"
Green: "Go"
For any other input, display "Invalid color code."

function Trafficlight(color){
    switch (color){
        case "R":
             console.log("stop" )
            break;
        case "Y":
           console.log( "Get ready ")
            break;
        case "G":
            console.log( "Go")
        default :console.log( "INVALID COLOUR ");

           }
}
Trafficlight("G")

Question 3: Age Group Classification
Create a program that classifies a person's age into different life stages. 
Ask the user to input their age and use if, else if, and else statements to classify and display:
"Child" for ages 0 to 12
"Teenager" for ages 13 to 19
"Adult" for ages 20 to 64
"Senior" for ages 65 and above

function prediction(age){
    if(age<0){
        console.log("AGE NOT DEFINED");
    }
    if(age<=12){
        console.log( "child")
    }
    if(age<=19){
        console.log( "Teenager")
    
    }
    else if(age<=64){
        console.log("Adult")
    }
    else{
        console.log( "Senior")
    }
}
prediction(15)


Question 4: Shipping Calculator
Create a program that calculates shipping costs based on the shipping method selected. T
he user inputs a method code (S for Standard, E for Express, O for Overnight), and 
the program uses a "switch" case statement to display the cost:
Standard: Rs.5
Express: Rs.10
Overnight: Rs.20
For any other input, display "Invalid shipping method."

function shippingcosts(output){
    switch (output){
        case "S":
            console.log(5)
            break;
        case "E":
            console.log(10)
            break;
        case "O":
            console.log(20)
            break;
        default: console.log("invalid ")      
    }
}
shippingcosts("E")


Question 5: Subscription Plans
Write a program that determines the monthly cost of a subscription plan based on the user's choice. The options are:
1. Basic Rs.9.99 per month
2. Standard Rs.14.99 per month
3. Premium Rs.19.99 per month
The user inputs a number corresponding to their choice, and the "switch" case statement displays the monthly cost. 
If the number is not between 1 and 3, display "Invalid plan."
// 1. Basic Rs.9.99 per month
// 2. Standard Rs.14.99 per month
// 3. Premium Rs.19.99 per month



function subsctiptionplans(valid){
    switch (valid){
        case 1:
            console.log("Basic Rs.9.99 per month")
            break;
        case 2:
           console.log("Standard Rs.14.99 per month")
            break;
        case 3:
            console.log("Premium Rs.19.99 per month")
            break;
        default:  console.log("NOT A DEFINED PLAN")

    
    }
}
subsctiptionplans(1)*/


//Question 1:
//Write a javascript program to print 
//prime numbers from 2 to 30.
/*function primeNumbers(even){
    for(let i=2;i<=30;i++){
        let isprime=true;
        for(let r=2;r<i;r++){
        if(i%r==0){
            isprime=false;
            break;
        }
        }
   if (isprime){
    console.log(i);
   }
    }

}
primeNumbers(30

);

//Question 2:
//Write a javascript program to check whether 
//a number is available in an array or not.

let arr=[1,2,3,5,8,0] 
function check(num){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==num){
            return true;
        }
    }
return false;
}
console.log(check(8));
console.log(check(0));
console.log(check(3));

    

//Question 3.
//Write a javascript program to 
//print the rank of students based on the percentage.

function rank(std1,std2,std3){
    let [...percentage] = [std1,std2,std3]
    for (let i of percentage){
        if(i >= 90){
            console.log("Std1 has rank 1")
        }
        if(i >= 80 && i <= 89){
            console.log("Std2 has rank 2")
        }
        if(i >= 70 && i <= 79){
            console.log("Std3 has rank 3")
        }
    }
}

let hello = rank(89,99,69)*/

//Question 1: Write a factory function in JavaScript
// that creates a person object with name and age properties. 
//And then print them on console by function calling.

function Person(name,age){
    return {
          Name: name,
          Age: age
    }
}
function printPersondetails(person){
    console.log(`Name:${person.Name}`)
    console.log(`Age:${person.Age}`)
}
const person1= Person(`ANURAG`,30)
printPersondetails(person1)

//Question 2: Create a function called printPersonInfo that takes a person object as an argument 
//and prints its details (name and age) on the console. 
//Create a person object and use the printPersonInfo function to display its information.
function printpersoninfo(name,age){
    return{
         name:name,
         age:age
    }
    
}
function printpersoninfo(personname){
    console.log(`name:${personname[name]}`)
    console.log(`age:${personname[age]}`)

}

let person3 = printpersoninfo('sarah',25)
printpersoninfo(person3)

//Question 3: Create a constructor function called Book that takes title and author 
//as parameters and assigns them as properties to the book object. 
//Then, create two book objects using the Book constructor and 
//display their details on the console.

/*function book (title,author){
    this.title=title,
    this.author= author
}

 const book1 = new book('Crime and Punishment','Karl Marx')
const  book2 = new book('Divine Comedy','Dante')
console.log('book1 :')
console.log(book1)
console.log('book2: ')
console.log(book2)*/
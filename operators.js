/*let x = (2+4)
console.log(x)

let y= ("hello" + 2)
console.log(y)

let z= ("hello" + "world") 
console.log(z)

let a= ("infinity"*"infinity")
console.log(a)

let b= ("hello"*2)
console.log(b)

let c= (7/8)
console.log(c)

let k=(3**6)
console.log(k)

let v= (7%9)
console.log(v)
// increment

let s= 9
let l= s++
console.log(s)

// ASSIGNMENT OPERATORS
 r=8
 r+=8
 console.log(r)
 r-=9
 console.log(r)
 r*=6
 console.log(r)
 r**=7
 console.log(r)

 //COMPARISON OPERATOR

 //. equal to (==)
 console.log(5==98)
 console.log(8==8)
 //.not equal to(!=)
 console.log(7!=8)
 console.log(8!=8)
 // strictly equal to(===), it checks values and datatypes
 console.log(8===9)
 console.log(8===8)
 //strictly not equal to (!==)
 console.log(8!==9)
 console.log(8!==8)
 // GREATER THAN(>)
 console.log(9>7)
 console.log(7>0)
 // lesser than(<)
 console.log(7<8)
console.log(6<0)
 // greater than or equal to (>=)
 console.log(9>=7)
 console.log(8>=8)

 //less than equal to(<=)
 console.log(4<=5)
 console.log(7<=8)

 // BITWISE (&) OPERAT0R
 let n=12
 let m= 25
 result=n&m
 console.log(result)

 // bitwise  (|) operator

 let h= 28
 let j=40
 results=h|j
 console.log(results)


 // logical operator 
 let xs= 2
//1. && operator
   // if both expression is true
   console.log((xs<4))&& ((4>=xs))
// only one expression is true
console.log((xs<=4))&& ((2==4
))


console.log(2+3*4/3)

console.log(NaN==NaN)

// if or else statements.
//1.
let age = 19
if (age=> 18) {
   console.log("you are an adult")
}
else {
   console.log("you are minor")
}

let passingmarks = 36
if (marks=>36){
   console.log(" you have failed in exams")

}
else{
   console.log(" you have passed the exam")

}

// if, else or else if statement.
//2.
let rating = 5
if(rating<=2){
console.log(" very bad rating")
}
else if(4){
console.log("very good rating!")
}
else {
   console.log("average rating!")
}

// SWITCH, DEFAULT, AND BREAK STATEMENT.
//1.
let grade= "B"
switch (grade){
   case "A":
      console.log("A- EXCELLENT, KEEP GOING")
      break

      case "B":
         console.log("B- VERY GOOD, KEEP THE LEARNING ON!")
         break

         case "C":
            console.log("C- GOOD, BUT NEED TO BE IMPROVE!")
            break

            case "D":
               console.log("D- POOR, VERY MUCH IMPROVEMENT NEEDED")
               break

               default:
                  console.log("INVALID GRADE")
}

//2.
const catchestaken= 50
switch (catchestaken){
   case  34:
      console.log(" 34- need to improve fielding")
      break

      case 50:
         console.log("50- very good, keep going!")
         break
         default:
            console.log("invalid")

}*/



// LOOPS
//1. FOR LOOP
/*for(let i=1; i <= 10; i++){
   console.log(i*20)
}

function printable(){
   for(let i=1; i <= 10; i++){
      console.log(i*25

      )
}
}
printable()

function calculatesum(){
   let sum=0
   for(let i=2; i<= 5; i++){
      sum+= i
   }
   return sum
}
console.log("sum is : ", calculatesum())

// 2. WHILE LOOPS

   function printnumbers()
{
   let i=0
   while(i < 10){
      i++
      console.log(i)
   }
   }
   printnumbers()

   function printevennumbers(){
      let num= 2
      while(num<=20){

      
         num=num+2
      console.log(num)
   }
}
printevennumbers()

//3. do while loops

function printnumbers(){
   let i=1
   do{
      console.log(i)
      i++
   
 
  }
  while(i<=10)
}
printnumbers()

// 4.INFINITE LOOPS

function infiniteloop(){
   let i=0
   while(true){
      console.log("infinite loop starts")
   i++;
   if (i==5){
      break
   }
   }
}
infiniteloop()

//5. for in loop

function print(){
   const car= {
      make :'maruti',
      mode : 'baleno',
      year : 2020
   }
   for(let key in car){
      console.log('${key}:$(car[key]}')
   }
}
print()

// 6. for of loop:

const fruits=["apple", "pineapple", "mango"]
for(let i of fruits){
   console.log(i)
  
   
}
// FACTORY FUNCTIONS

function createPerson(){
   return{
      name: "rahul",
      age: 18,
rohit:function(){
   console.log("hi")
}
   }
}
const person= createPerson()
console.log(person)
*/

/*function pststd(name,age,roll,fee){

   return{
      name:name,
      age: age,
      roll: roll,
      fees:fee,
   }
}
console.log(pststd("shiv",18,1,9797))
let std1= pststd("ram",19,45,3883)
let std2= pststd("rakesh",17,49,3893)
console.log(std1)
console.log(std2)*/

// CONSTRUCTOR FUNCTION

/*function pst(name,age,roll){
      this.name=name
      this.age=age
      this.roll=roll
}
let std3 = new pst("arjun",18,90)
let std4= new pst("aditya",19,19)
console.log(std3)*/

function pst(name,age,roll){
   this.name=name;
   this.age=age;
   this.roll=roll;
   this.intro= function(){
      console.log(`my name is ${this.name}`)
   }
}
let std5= new pst("gautam",19,56)
std5.intro()
console.log(std5.roll)
// CLONING AN OBJECT;
//1. SPREAD OPERATOR(...)
const userdetails={
  name:"john doe",
  age: 19,
  verified: false
}
let cloneuser={...userdetails}
console.log(cloneuser)
cloneuser.name ="elon musk"
console.log(cloneuser)

//2.OBJECT.ASSIGN()
const userdetail={
   name:"jo doe",
   age: 19,
   verified: false
 }
 let cloneusers= Object.assign(userdetail)
 console.log(cloneusers)
 
 //3.JSON.PARSE()
 const userdetailss={
   name:"john doe",
   age: 19,
   verified: false
 }
 let cloneuserss=JSON.parse(JSON.stringify(userdetailss))
 console.log(cloneuserss)
 
 // REST OPERATOR(...)
 function fun(...input){
let sum=0
for(let i of input){
   sum+=i
}
return sum
 }
 console.log(fun(1,2))
 console.log(fun(1,2,3,4,5))
console.log(fun(1,2,3,4,5,6))

// MATH FUNCTIONS;
// IT WILL GIVE THE ANSWER WILL BE HIGHEST VALUE
console.log(Math.max(10,20,30))
// it will give lowest value.
console.log(Math.min(10,20,30))

console.log(Math.random())
// it will power (3) on 2 which is= 8
console.log(Math.pow(2,3))
// it will give output as square root
console.log(Math.sqrt(25))


/*function area(r){
   let result=[]
   for(let i=0;i<r.length;i++)
      result.push(Math.PI*r[i]*r[i])
   return result
}
function diameter(r){
   let result=[]
   for(let i=0;i<r.length;i++)
      result.push(2*r[i])
   return result}
   function circumference(r){
      let result=[]
      for(let i=0;i<r.length;i++)
         result.push(2*Math.PI*r[i])
      return result
   }
   let radius=[2,6,4,3]
   console.log(area(radius))
   console.log(diameter(radius))
   console.log(circumference(radius))*/

// HIGHER ORDER FUNCTIONS;
/*function f1(as){
   console.log("hey i am function 1")
 as(f3)
}
function f2(jp){
console.log(" hey i am function 2")
jp()
}
 
function f3(){
console.log(" hey i am function 3")
}
f1(f2,f3)*/

function f4(){
   return f5()
}
function f5(){
   console.log("hey i am function 5")
}
f4()

function area(r){
   return (Math.PI*r*r);
}
function diameter(r){
   return (2 * r)
}
function circumference(r){
   return (2 * Math.PI * r)
}

function cal(radius,logic){
   let res = [];
   for(let i = 0; i < radius.length; i++){
       res.push(logic(radius[i]))
   }
   return res;
}

let radius = [2,6,4,3]

console.log(cal(radius,area))
console.log(cal(radius,diameter))
console.log(cal(radius,circumference))

// 1. FILTER();
let arr=[1,2,3,4,5]
let new_results=arr.filter(f1)
function f1(ele,index, arr){
   console.log(ele, index, arr)
 }
// even numbers;  
let newArray=[1,2,3,4,5]
let new_result= arr.filter(f2)
function f2(ele){
   if(ele%2==0){
      return(ele)
   }
}
console.log(new_result)

//2.map();
let people = [
   {name:"Alice",age:30},
   {name:"Bob",age:20},
   {name:"Charlie",age:25},
   {name:"David",age:40}
]

let newPeople = people.map((ele) => {
   if(ele.age <= 25){
       return ele.name
   }
})
console.log(newPeople);
//3.some and every;
let rr =[1,2,3,4,8,12]
console.log(rr.some(e=>e>5))
console.log(rr.every(e=>e>5))

function creatediscountcalculator(discountrate){
   return function(price){
      return price-(price*discountrate)
   }
}
const electronicdiscount=creatediscountcalculator(0.10)
const fashiondiscount=creatediscountcalculator(0.20)
const dailyusediscount=creatediscountcalculator(0.05)

console.log(electronicdiscount(1000))
console.log(fashiondiscount(1500))
console.log(dailyusediscount(2000))

//Q.FIND THE LARGEST NUMBER IN THE ARRAY USING REDUCE(); ARRAY;[10,35,18,23]

const arrr=[10,35,18,23]
const result=arrr.reduce((acc,ele)=>Math.max(acc,ele))
console.log(result)


//Q. REMOVE THE DUPLICARES;
const number = [1,2,2,3,3,4,5,5,1,6,6,7,7,5,4,8,8,9,0,9,0];
let results = number.reduce((acc,value)=>{
   if(!acc.includes(value)){
      acc.push(value)
   }
   return acc
   },[])
   console.log(results)

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

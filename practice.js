// 1.Question 1: : Library Book Organizer

/*const { round } = require("lodash")
*/

//You are managing a library system that keeps track of books. Each book has the following properties:
//title (string)
//author (string)
//categories (array of strings representing different genres)
//isAvailable (boolean)
//Create an object called Book and print the output in the Vs code terminal.hjhgfd



/*const library={
  book1:{
    name:"harry potter",
    categories:["story","fiction"],
    author_name:"j.k. rolling",
    isavailable:false
  },
  book2:{
    name:"MAHABHARAT",
    categories:["religious", "historical"],
    author_name:"ved vyas",
    isavailable:true

  

  }
}
console.log(library)

//Question 2 :

//Refer question number 1 for the object and console the Second item in categories (1st index value of categories).
console.log("the first index of the category and the second item of the library="+library.book2.categories[1])


//QUESTION 3 : 
//Explain the Difference between push and unshift in an Array and show it practically how it works.


let arry = [1,2,3];
arry.push(6);
console.log(arry);
arry.unshift(9);
console.log(arry);*/

/*let  obj={
  firstname:"gukok",
  secondname:"igfgy",
  fullname:function(){
    console.log(this.firstname+this.secondname)
  }
}
obj.fullname()*/
//QUESTION 1 (example of shallow copy);
/*let std={
  name:"aanurag",
  age:19,
  address:{
    state:"up",
    city: "varanasi",
  },
  Intro:function(){
    console.log("my name is "+ this.name)
  }
}
let copystd=std
copystd.name="anupam"
console.log(std)
console.log(copystd)*/

//QUESTION2(example of deep copy);

/*
let copystds=Object.assign({},stds)
copystds.name="anupam"
console.log(stds)
console.log(copystds)
copystds.address.city="mumbai"
console.log(stds)
console.log(copystds)*/


// QUESTION 5
/*let stdr={
  name:"aanurag",
  age:19,
  address:{
    state:"up",
    city: "varanasi",
  },
  Intro:function(){
    console.log("my name is "+ this.name)
  }
}
let copystdr=JSON.parse(JSON.stringify(stdr))
copystdr.name="anupam"
console.log(stdr)
console.log(copystdr)*/

//QUESTION 4
/*let stdrr={
  name:"aanurag",
  age:19,
  address:{
    state:"up",
    city: "varanasi",
  },
  
  }

let copystdrr=JSON.parse(JSON.stringify(stdrr))
copystdrr.name="anupam"
console.log(stdrr)
console.log(copystdrr)*/

/*let a=[1,2,3]
let b=a
b=10
console.log(a)*/

//OBJECT.KEYS

/*let std={
  name:"gaurav",
  age: 18,
  rollno:6
}
console.log(Object.keys(std))*/

/*let std={
  name:"gaurav",
  age: 18,
  rollno:6
}
let arr= Object.keys(std)
for(let i of arr){
  console.log(std[i])
}

//OBJECT.VALUES
let obj={
  name:"harshit",
  age:18,
  rollno:10
}
console.log(Object.values(obj))
//OBJECT.ENTRIES
let srr={
name:"shiv",
age:20,
rollno:5
}
console.log(Object.entries(srr))
 
let wrr=Object.entries(srr)
for(let prop of wrr)
console.log(prop[1])

// CONCEPT OF CLOSURE;

function test2(){
  let a=5
  function right(){
    return a
  
  }
return right
}
let check=test2()
console.log(check)



function parent(a){
let b=5
function child(){
return a+b
}
return child
}
let childfunc=parent(4)
console.log(childfunc())

// TYPE CASTING; 
//parseint
let a='123'
let b= parseInt(a)
console.log(typeof(b))
//tostring
let c= 123
let d= c.toString()
console.log(typeof c)*/

/*let n=5
for(let i=1; i<=n; i++){
  let star=''
  for(let i=1;i<=i;i++){
    star=star+'*'
  }

}
console.log(star)*/

function squareDigits(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Create an array to store the squared digits
  const squaredDigits = [];

  // Iterate over each digit in the string
  for (let i = 0; i < numStr.length; i++) {
    // Square the digit and add it to the array
    squaredDigits.push(Math.pow(parseInt(numStr[i]), 2));
  }

  // Join the squared digits into a string and convert it back to a number
  return parseInt(squaredDigits.join(''));
}

// Example usage
console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(765));  // Output: 493625

//Question 1: Write a factory function in JavaScript
// that creates a person object with name and age properties. 
//And then print them on console by function calling.

/*function Person(name,age){
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
printPersondetails(person1)*/

//Question 2: Create a function called printPersonInfo that takes a person object as an argument 
//and prints its details (name and age) on the console. 
//Create a person object and use the printPersonInfo function to display its information.
/*function printpersoninfo(name,age){
    return{
         name:name,
         age:age
    }
    
}
function printpersoninfo(personname){
    console.log(`name:${personname.name}`)
    console.log(`age:${personname.age}`)

}

let person3 = printpersoninfo('sarah',25)
printpersoninfo(person3)*/

//Question 3: Create a constructor function called Book that takes title and author 
//as parameters and assigns them as properties to the book object. 
//Then, create two book objects using the Book constructor and 
//display their details on the console.

function book (title,author){
    this.title=title,
    this.author= author
}

 const book1 = new book('Crime and Punishment','Karl Marx')
const  book2 = new book('Divine Comedy','Dante')
console.log('book1 :')
console.log(book1)
console.log('book2: ')
console.log(book2)

function countvowels(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]=='a|e|i|o|u'){
            count++
        }
            else if(str[i]=='A|E|I|O|U'){
                count++
            }
            else{
                count++
            }
        }
        
return count
    }
    

let result=countvowels('hello')
console.log(result)
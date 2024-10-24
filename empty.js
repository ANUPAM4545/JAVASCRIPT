
/*Question 1: Book Library
You are developing a digital library system to manage books. Each book has a title, author, and year of publication. 
You want to create a library that can add books, list them, and clone books for editing without altering the original copy.

Create a constructor function to create 'Book' objects with properties: 'title', 'author', and 'year'.

Implement a function 'addBook'to add a book to the library (an array of books).

Implement a function 'listBooks' that lists all books in the library, using a 'for...of' loop.

Use the 'Object.assign()' method to create a clone of a book object, allowing changes to be made without affecting the original.

Test the functions by adding at least 3 books, cloning one, and listing all books.

Sample template:
// Constructor function to create 'Book' objects
function Book(title, author, year) {
// your code
}
// Library array to store books
const library = [];
// Function to add a book to the library
function addBook(book) {
// code here
}
// Function to list all books in the library using a 'for...of' loop
function listBooks() {
// code here
}
// Test case: Add books to the library
addBook(new Book("1984", "George Orwell", 1949));
addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
// Clone a book using Object.assign() and modify the clone
Output:
Listing original books:
book 1: 1984, by George Orwell, published in 1949
book 2: The Hobbit, by J.R.R. Tolkien, published in 1937
book 3: To Kill a Mockingbird, by Harper Lee, published in 1960
Cloned and modified book:
The Lord of the Rings, by J.R.R. Tolkien, published in 1937*/


/*function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const library = [];

function addBook(book) {
    library.push(book);
}
function listBooks() {
    for (const [index, book] of library.entries()) {
        console.log(`Book ${index + 1}: ${book.title}, by ${book.author}, published in ${book.year}`);
    }
}
function cloneBook(originalBook) {
    return Object.assign({}, originalBook);
}
addBook(new Book("1984", "George Orwell", 1949));
addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));

const clonedBook = cloneBook(library[1]); 
clonedBook.title = "The Lords of Rings" 

console.log("Listing original books:");
listBooks();

console.log("Cloned and Modified Books:");
console.log(`${clonedBook.title}, by ${clonedBook.author}, published in ${clonedBook.year}`);*/


/*
Question 2: Shopping Cart
You are building an online shopping cart where users can add, and view items. Each item has a name, price, and quantity.
1. Create a factory function 'createItem' to generate an item with properties 'name', 'price', and 'quantity'.

2. Implement a 'cart' array to store items.

3. Implement 'addItem' to add items from the cart
.
4. Use a 'for...in' loop to iterate over the properties of an item object and display them.

5. Implement a 'calculateTotal' function that uses a 'for...of' loop to calculate the total cost of items in the cart.
Sample template:
// Factory function to create an item
function createItem(name, price, quantity) {
// code here
}
// Array to store items in the cart
const cart = [];
// Function to add an item to the cart
function addItem(item) {
// code here
}
// Function to list all items using 'for...in' loop
function listItems() {
// code here
}
// Function to calculate total cost using 'for...of' loop
function calculateTotal() {
// code here
}
// Test case: Add items to the cart and display them
addItem(createItem("Laptop", 1200, 1));
addItem(createItem("Phone", 800, 2));

Output:
Item details:
name: Laptop
price: 1200
quantity: 1
Item details:
name: Phone
price: 800
quantity: 2
Total cost of items in the cart: 2800*/


/*function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity
    };
}

const cart = [];

function addItem(item) {
    cart.push(item);
}

function listItems() {
    for (const item of cart) {
        console.log("Item details:");
        for (const key in item) {
            console.log(`${key}: ${item[key]}`);
        }
        console.log(); 
    }
}
function calculateTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}
addItem(createItem("Laptop", 1200, 1));
addItem(createItem("Phone", 800, 2));

listItems();

const totalCost = calculateTotal();
console.log(`Total cost of items in the cart: ${totalCost}`);*/

// let str=   "I'm a polaris student p m"
// console.log(str.length)
// console.log(str.charAt(0))
// console.log(str.at(-2))
// console.log(str.charCodeAt(0))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.indexOf('p'))
// console.log(str.indexOf('p',7))
// console.log(str.indexOf('p',-10))
// console.log(str.lastIndexOf('a'))
// let str2=  "polaris"
// console.log(str.includes(str2))
// console.log(str2.trimStart())
// console.log(str2.trimEnd())
// console.log(str2.substr(6))
// console.log(str.slice(4,-2))
// console.log(str.split(' '))
// console.log(str.split('a'))
// console.log(str.concat('p'))
// console.log(str.concat('anupam'))
// console.log(str.repeat('4'))
// console.log(str.replaceAll('student','polaris'))
// console.log(str.replace('p','student'))

let a ="ANUPAM SINGH"
let v="aeiouAEIOU"
function countvowels(a,v){
    count=0
    for(let i=0;i<a.length;i++){
        if(v.includes(a.charAt(i))){
            count++
        }   
    }
    return count
}
let res = countvowels(a,v);
console.log(res);


// Question 1:
// Create a program that prints numbers from 1 to 10 synchronously, and then prints 
// numbers from 11 to 20 asynchronously using setTimeout.
for (let i=1;i<=10;i++){
    console.log(i);
}
setTimeout(()=>{
    for (let i=11;i<=20;i++){
    console.log(i);
    }
},2000);

// Question 2:
// Write a function checkWeather() that resolves with "Sunny" or rejects with "Rainy" 
// randomly. Use .then() to print "Weather is great for a picnic!" if resolved and .
// catch() to print "It might rain today!" if rejected

function checkWeather(){
    return new Promise((resolve,reject)=>{
        let weather =Math.random()>0.5? 'Sunny' : 'Rainy';
        if (weather=='Sunny'){
            resolve();
        }
        else if (weather=='Rainy'){
            reject();
        }
    });
}
checkWeather()
.then(()=>{console.log('Weather is great for a picnic!')})
.catch(()=>{console.log('It might rain today!')});

// Question 3:
// Create a function makeDinner() that executes four steps (Boil water, Add pasta, 
// Stir sauce, Serve meal) sequentially, each step taking 1 second, using nested 
// callbacks.
let makeDinner=(()=>{
    console.log("Cooking Started....")
    setTimeout(function(){
        console.log('Boil water')
        setTimeout(function(){
            console.log('Add pasta')
            setTimeout(function(){
                console.log('Stir sauce')
                setTimeout(function(){
                    console.log('Serve meal')
                    setTimeout(function(){
                        console.log('Dinner is ready!')
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})

makeDinner();

// Question 4: Basic Stock Price Checker
// You need to simulate a basic system that checks the stock price every 2 seconds. 
// If the stock price goes above 400, the system will alert you and stop.
// Requirements:
// Stock Price Simulation (setInterval):
// Write a function that generates a random stock price between 100 and 500 every 2 
// seconds.
// Promise to Alert High Price:
// If the stock price goes above 400, the Promise resolves and shows an alert. If 
// not, it keeps checking.
// Stop Checking When Price is Too High:
// Once an alert is triggered, stop the stock price simulation.

/*function fetchStockPrice(){
    return (Math.random()*(500-100+1))+100;
}
function checkPrice(price){
    return new Promise((resolve, reject) =>{
        if (price>400){
            resolve()
        } else {
            reject()
        }
    })
}
function startMonitoring(){
    let interValId= setInterval(()=>{
        let price=fetchStockPrice();
        console.log(⁠ Price: ${price} ⁠);

        checkPrice(price)
        .then(()=>{
            console.log(⁠ Alert: Higher Price detected ⁠)
            clearInterval(interValId);
        })
        .catch(()=>{
            console.log('Checking Price Again')
        });
    },2000);
}
startMonitoring();*/

// Question 5:
// Write a code using the concept of promise, fetch the json data from 
// https://dummyjson.com/posts and console the data in the terminal.

let data=fetch("https://dummyjson.com/posts");
let response=data.then(data=>data.json())

response.then((data)=>{
    console.log(data);
}).catch(data=>{
    console.log("error fetching data",error);
})
console.log(response)
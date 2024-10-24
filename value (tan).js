// You are given an object representing a student's information. Your task is to write a JavaScript function that 
// takes this object as input and performs the following tasks:

// Add a new property called "averageGrade" to the object. Calculate the average grade by summing all 
// the grades (located in the "grades" array) and dividing by the number of grades.

// Create a copy of the student object without modifying the original object.
//  The copy should include all properties except the "grades" property.

// Finally, return the modified original object and the copy as a pair of objects in an array.

// function manipulateStudentInfo(student) {
//     const grades = student.grades;
//     const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
//     const averageGrade = totalGrades / grades.length;
//     student.averageGrade = averageGrade;
//     const { grades: studentCopy } = student;
//     return [student, studentCopy];
// }
// const studentInfo = {
//     name: "John Doe",
//     age: 20,
//     grades: [55, 90, 78, 92],
//     city: "new york"
// };
// const [modifiedStudent, studentCopy] = manipulateStudentInfo(studentInfo);
// console.log(modifiedStudent); 
// console.log(studentCopy);

//  Q2 You are planning to throw a party and want to order Pizzas for the guests. Assuming each person gets 3 slices 
// of Pizza and that each Pizza has 8 slices, you want to find out how many Pizzas should be ordered for
//  this party. Write a JavaScript function that takes the number of people invited to the party as an
//   input and returns the total number of Pizzas required.

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
// Part 1: Creating an object to represent a student.
const student = {
    name: 'Annie Smith',
    age: 21,
    enrolled: true,
    courses: ['Fundamentals of JavaScript', 'Database Concepts', 'Web Programming'],
    // A method to display student information
    displayInfo: function() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student Age: ${this.age}`);
        console.log(`Enrolled: ${this.enrolled}`);
        console.log(`Courses: ${this.courses.join(', ')}`);
    }
};

// Outputting the student's details and call the method.
console.log('--- Initial Student Object Details ---');
console.log(`Student's name is: ${student.name}`);
console.log(`Student's age is: ${student.age}`);
console.log('\nCalling the displayInfo method:');
student.displayInfo();

// Part 2: Working with JSON
// Converting the student object into a JSON string.
const jsonStudent = JSON.stringify(student);
console.log('\n--- JSON String Representation ---');
console.log(jsonStudent);
// Convert the JSON string back into a JavaScript object, and log it.
const parsedStudent = JSON.parse(jsonStudent);
console.log('\n--- Parsed JavaScript Object ---');
console.log(parsedStudent);
console.log('\n--- Comparing Objects ---');
// Compare the original object and the parsed object.
/// Note: The parsed object will not have methods, so they will not be strictly equal.
console.log('Are the original and parsed objects identical?');
console.log(student === parsedStudent); // This will be false.

// Part 3: Using Destructuring Assignment
const {name:studentName, courses} = student;
console.log('\n--- Destructuring Assignment ---');
console.log('Student Name (from destructuring):', studentName);
console.log('Student Courses (from destructuring):', courses);

// Destructuring an array of scores
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log('\n--- Destructuring an Array ---');
console.log('First Score:', firstScore);
console.log('Second Score:', secondScore);

// Part 4: The Spread Operator
console.log('\n--- Part 4: The Spread Operator ---');
const clonedStudent = {
    ...student,
    courses: [...student.courses]
};
console.log('Cloned Student Object:', clonedStudent);

// Add a new property to the cloned object, and log it.
// This will not affect the original student object.
clonedStudent.graduationYear = 2024;
console.log('Cloned student after adding graduationYear:', clonedStudent);

// Now, let's modify the courses array on the cloned student.
// This will NOT affect the original student object.
clonedStudent.courses.push('Advanced Frontend Development');
console.log('Cloned student after modifying courses array:', clonedStudent);

// The original student object remains unchanged.
console.log('Original student object courses:', student.courses);
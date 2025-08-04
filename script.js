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
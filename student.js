const Student = require('./demo.js');

const newStudent = new Student({firstName: 'Peter', lastName: 'Petrov', facultyNumber: '445454', age: 25});

console.log('The student is ' + newStudent);
let students = [];

function createStudent(name, age, mark) {
    return { name, age, mark };
}

students.push(createStudent("Nova", 22, 88));
students.push(createStudent("Xavier", 18, 89));
students.push(createStudent("Mist" , 19, 99));
students.push(createStudent("Vivian" , 19, 98));
students.push(createStudent("Nora", 22, 49));

let successStudents = [];
let failedStudents = [];

for (let student of students) {
    if (student.mark >= 50) {
        successStudents.push(student);
    } else {
        failedStudents.push(student);
    }
}
console.log("Success Students:");
console.log(successStudents);

console.log("Failed Students:");
console.log(failedStudents);

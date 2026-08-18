//students
let student1 = {
    name: 'yassin',
    age: 22,
    note: 15,
    speciality: { specialityName: 'developer' }
};
let student2 = {
    name: 'omaima',
    age: 21,
    note: 19,
    speciality: { specialityName: 'cyber Security' }
};
let students = [student1, student2];
let passstudents = [];
let faildstudent = [];
//functions
function addStudent(student) {
    students.push(student);
}
function studentthatpass() {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (!student) {
            continue;
        }
        if (student.note >= 12) {
            passstudents.push(student);
        }
        else {
            faildstudent.push(student);
        }
    }
}
//call back functions
addStudent({ name: 'ussama', age: 19, note: 10 });
studentthatpass();
console.log(students);
console.log('pass students : ', passstudents);
console.log('faild students : ', faildstudent);
export {};
//# sourceMappingURL=index.js.map
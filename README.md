# TypeScript Student Management


A small TypeScript project I built to practice TypeScript fundamentals by creating a simple student management system.


## 📚 What I Learned


- Created custom types using `type`
- Used `string` and `number` types
- Created nested objects with custom types
- Used optional properties with `?`
- Created typed arrays using `Student[]` and `Array<Student>`
- Used typed function parameters
- Added objects to arrays using `.push()`
- Worked with `.length` and array indexes
- Used `for` loops and `if / else`
- Checked for possible `undefined` values
- Separated students into passing and failed students
- Compiled TypeScript into JavaScript
- Ran JavaScript with Node.js


## 👨‍🎓 Student Management


I created a `Student` type with an optional `Speciality` object:


```ts
type Speciality = {
    specialityName: string
}


type Student = {
    name: string
    age: number
    note: number
    speciality?: Speciality
}

The project contains three students:

Yassin — 22 years old — Note: 15 — Developer
Omaima — 21 years old — Note: 19 — Cyber Security
Ussama — 19 years old — Note: 10 — No speciality

I created an addStudent() function to add new students to the students array:

function addStudent(student: Student) {
    students.push(student)
}

I also created a function to separate students based on their notes. Students with a note of 12 or higher are added to the passing students array, while students with a note below 12 are added to the failed students array.

Results

Passing students:

Yassin — 15
Omaima — 19

Failed students:

Ussama — 10


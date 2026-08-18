//data type
type Speciality = {
    specialityName: string
}
type Student = {
    name: string
    age:number
    note:number
    speciality?:Speciality
}
//students
let student1:Student = {
    name:'yassin', 
    age:22,
    note:15, 
    speciality:{specialityName:'developer'}
}
let student2:Student = {
     name:'omaima', 
     age:21,
     note:19, 
     speciality:{specialityName:'cyber Security'}
}

let students:Array<Student> = [student1, student2]
let passstudents:Student[] = []
let faildstudent:Student[] = []


//functions
function addStudent(student:Student){
   students.push(student)
}

function studentthatpass(){
    for(let i = 0 ; i< students.length ; i++){
        const student = students[i]
        if(!student){
            continue
        }
       
        if(student.note >= 12){
           passstudents.push(student)
        } else{
            faildstudent.push(student)
        }
    }
}

//call back functions
addStudent({name:'ussama', age:19, note:10})
studentthatpass()
console.log(students)
console.log('pass students : ',passstudents)
console.log('faild students : ',faildstudent)



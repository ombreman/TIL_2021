let studentID: number = 12345
let studentName: string = 'Changgil Jeong'
let age: number = 31
let gender: string = 'male'
let subject: string = 'Javascript'
let courseCompleted: boolean = false

interface Student {
  studentID: number
  studentName: string
  age?: number
  gender: string
  subject: string
  courseCompleted: boolean
  addComment?: (comment: string) => string 
}

function getStudentDetails(studentID: number): Student
{
  return {
    studentID: 123456,
    studentName: 'Jack',
    gender: 'male',
    subject: 'Node Js',
    courseCompleted: true 
  }
}

function saveStudentDetails (student: Student): void {

}

saveStudentDetails ({
  
})
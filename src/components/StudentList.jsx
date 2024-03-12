
import React from 'react'
import Student from './Student'

function StudentList({students}){
   const studentsList = students.map((student, index)=>(
    <Student key={index} student={student}/>
    
   ))
     
    return(
        <>
           {studentsList}
           
        </>
    )
}


export default StudentList
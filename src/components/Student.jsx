import React from 'react'

function Student({index, student}){

    return(
    <>
     <div key={index} className='container d-flex flex-column studentCard'>
     <h2 className='fs-4'>Name: {student.name}</h2>
     <p>Bio: {student.bio}</p>
     <div className='row justify-content-center'>
     <div className='col-lg-3'>
     <table className=' table table-striped '>
         <thead>
             <tr >
                 <th>Date</th>
                 <th>Score</th>
             </tr>
         </thead>
         <tbody>
             {student.scores.map((score, scoreIndex)=>(
                <tr key={scoreIndex}>
                 <td>{score.date}</td>
                 <td>{score.score}</td>
                </tr>
             ))}
         </tbody>
     </table>
     </div>
     </div>
     </div>
     <hr></hr>
     </>   
    )
}


export default Student
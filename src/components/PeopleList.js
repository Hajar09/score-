import React from 'react'
import People from './People.js'

const PeopleList = (props)=>{
return(
 <div>
     <div className = 'bloc'>
        <div>Name</div>
        <div>Score</div>
    </div>
     {props.people.map((man,i) =>{
       return <People  key={i} name={man.name} score={man.score} incrementeScore ={()=>props.changeScore('incrementer',i)}
       decrementeScore ={()=>props.changeScore('decrementer',i)}
       rmvPeople ={()=>props.removePeople(i)}/>
     }
   )}
 </div>
 )
}

export default PeopleList

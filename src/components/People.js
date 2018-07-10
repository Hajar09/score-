import React from 'react'
import '../People.css';

const People = (props)=>{
    return(

    <div className = 'bloc'>
        <div>{props.name}</div>
        <div>{props.score}</div>
        <div>
            <button onClick={props.incrementeScore}>+</button>
            <button className={props.score === 0 ? 'rv-disabled' : 'rv'} disabled={props.score === 0 ? true : false} onClick={props.decrementeScore}>-</button>
            <button onClick={props.rmvPeople}>Supp</button>
        </div>
    </div>
)}




export default People

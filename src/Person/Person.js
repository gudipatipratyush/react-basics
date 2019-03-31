import React from 'react'
 import "./Person.css"
const person = (props) =>{
   
    return (
    <div className="person">
    <p onClick={props.click}>Hi i am {props.name}, my age is {props.age}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;
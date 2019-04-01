import React from 'react'
import classes from "./CockPit.css"

const cockpit = (props) => {
    const assignedClasses=[];
    let btnClass='';
    if(props.persons.length<=2){ 
        assignedClasses.push(classes.red)    
      }
      if(props.persons.length<=1){
        assignedClasses.push(classes.bold)
      }
    if(props.allow){
       btnClass=classes.red
    }
    return (
        <div className={classes.CockPit}>
            <h1>Hi pratyush?</h1>
            <p className={assignedClasses.join(' ')}>This is wokring</p>
            <button
                className={btnClass}
                onClick={props.click}>Switch Name</button>
        </div>
    )
}

export default cockpit;
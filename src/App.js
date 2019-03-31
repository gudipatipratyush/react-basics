import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";

class App extends Component {
  state={
    persons:[
      {name:"pratyush",age:25},
      {name:"menu",age:29},
      {name:"max",age:26}
    ],
    allow:false
  };
  nameChangehnadler=(event,id)=>{
  const person={
    ...this.state.persons[id]
  }        
  person.name=event.target.value
  const persons=[...this.state.persons]
  persons[id]=person
  this.setState({persons:persons})
  }
  renderPerson= () =>{
    this.setState({allow:!this.state.allow})
  }
  deletePrsonHanadler = (name) =>{
    const persons = [...this.state.persons]
     persons.splice(name,1);
    this.setState({persons:persons})
  }
  render() {
    const style= {
      backgroundColor:"green",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer",
      color:"white"
    }
    const assignedClasses=[];
    if(this.state.allow){
      style.backgroundColor="red"
      
    }
    if(this.state.persons.length<=2){ 
      assignedClasses.push(classes.red)    
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold)
    }

    return (
      <div className="classes.App">
        <h1>Hi pratyush?</h1>
        <p className={assignedClasses.join(' ')}>This is wokring</p>
        <button style={style} 
        onClick={this.renderPerson}>Switch Name</button>
        {
          this.state.allow && 
          <div>
          {this.state.persons.map((person,index)=>{
         return  <Person
                 name={person.name}
                 age={person.age}
                 key={index}
                 click={()=>this.deletePrsonHanadler(index)}
                 changed={(event)=>this.nameChangehnadler(event,index)}
                 /> 
          })}
         </div>
        }
      </div>
    );
  //  return React.createElement('div',{className:"App"},React.createElement('h1',null,'HI PRATYUSH'))
  }
}

export default App;

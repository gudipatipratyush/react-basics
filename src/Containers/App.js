import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import CockPit from '../Components/CockPit/CockPit'
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
    
   

    return (
      <div className={classes.App}>
        <CockPit
         persons={this.state.persons} 
        allow={this.state.allow}
        click={this.renderPerson}/>
        {
          this.state.allow && 
          <Persons persons={this.state.persons}
                   clicked={this.deletePrsonHanadler}
                   changed={this.nameChangehnadler} />
        }
      </div>
    );
  //  return React.createElement('div',{className:"App"},React.createElement('h1',null,'HI PRATYUSH'))
  }
}

export default App;

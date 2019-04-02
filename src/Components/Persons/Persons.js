import React,{Component} from 'react'
import Person from './Person/Person'
class Persons extends Component{
    constructor(props){
        super(props)
        console.log('constructor is executed')
    }
    
    componentWillMount(){
      console.log('compoenent willMount executed');
    }
    componentDidMount(){
      console.log('compoenent DidMount executed');
    }
    render(){
        console.log('render executed')
        return(
            this.props.persons.map((person,index)=>{
                return <Person
                         click={()=>this.props.clicked(index)}
                         name={person.name}
                         age={person.age}
                         key={index}
                         changed={(event)=>this.props.changed(event,index)} />
            })
        )
    }
}  

export default Persons;
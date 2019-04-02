import React,{Component} from 'react'
import classes from "./Person.css"
class Person extends Component{
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
        console.log('render is executed')
        return (
            <div className={classes.person}>
            <p onClick={this.props.click}>Hi i am {this.props.name}, my age is {this.props.age}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
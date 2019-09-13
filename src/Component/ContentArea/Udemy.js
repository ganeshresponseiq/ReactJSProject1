import React, { Component } from 'react';
import Person from '../Person/Person'

class Udemy extends Component {
    state ={
      persons : [
        {name: 'Ganesh', age: 32},
        {name: 'Kumar', age:31 },
        {name: 'Gupta', age:30}
      ],
      ohterState: 'Some other value'
    }
    switchNameHandler = () => {
      this.setState({
        persons : [
          {name: 'GoodJob', age: 22},
          {name: 'GreatJob', age:21},
          {name:'BetterJob', age: 20}
        ]
      })
    }

    nameChangeHandler = (event) =>{
        this.setState({
            persons : [
                {name: 'GoodJob', age: 22},
                {name: event.target.value, age:21},
                {name:'BetterJob', age: 20}
            ]
        })
    }
   render () {
    return (
      <div className="App">
        <h1>Hi, This is a Class best component!!</h1>
        <p>This is really Working!</p>
        <button onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}></Person>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'ResponseIQ')}
        changed={this.nameChangeHandler}></Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}></Person>
     
      </div>
    );
  }
  }
  
  export default Udemy;
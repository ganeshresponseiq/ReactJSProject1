import React, { Component } from 'react';
import Personsthree from '../Person/Personsthree';

class UdemyThree extends Component {
    state ={
        persons: [
            {name: 'Ganesh', age: 32},
            {name: 'Kumar', age:31 },
            {name: 'Gupta', age:30}
        ],
        ohterState: 'Some other value',
        showPersons: false
    }
    switchNameHandler = (newName) => {
        this.setState({
          persons : [
            {name: newName, age: 22},
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render () {
       
       return (
           <div className="udemythree">
                <h1>Section 4: Working with Lists and Conditionals</h1>
                <button className="switchbtn" onClick={this.togglePersonsHandler}>Switch Name</button>
                {
                    this.state.showPersons === true ?
                <div className="showdiv">
                <Personsthree 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}></Personsthree>

                <Personsthree 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'ResponseIQ')}
                changed={this.nameChangeHandler}></Personsthree>

                <Personsthree 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}></Personsthree>

                </div>: null
                }
                
           </div>
       ) 
    }
}

export class UdemyFour extends Component {
    state ={
        persons: [
            {name: 'Ganesh', age: 32},
            {name: 'Kumar', age:31 },
            {name: 'Gupta', age:30}
        ],
        ohterState: 'Some other value',
        showPersons: false
    }
    switchNameHandler = (newName) => {
        this.setState({
          persons : [
            {name: newName, age: 22},
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render () {
       let persons  = null;
       if (this.state.showPersons){
           persons = (
            <div className="showdiv">
            <Personsthree 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}></Personsthree>

            <Personsthree 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'ResponseIQ')}
            changed={this.nameChangeHandler}></Personsthree>

            <Personsthree 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}></Personsthree>

            </div>
           );
       }
       return (
           <div className="udemyfour">
                <h1>Section 4: 53. Handling Dynamic Content "The JavaScript Way"</h1>
                <button className="switchbtn" onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
                
           </div>
       ) 
    }
}



export default UdemyThree;


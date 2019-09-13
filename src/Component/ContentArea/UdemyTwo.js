import React, { useState } from "react";
//import '../../App.css';
import Person from '../Person/Person';

const UdemyTwo = props => {
   const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Ganesh2', age: 32},
            {name: 'Kumar2', age:31 },
            {name: 'Gupta2', age:30}
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    //console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons:[
                {name: 'GoodJob2', age: 22},
                {name: 'GreatJob2', age:21},
                {name:'BetterJob2', age: 20}
            ]
        });
    }

   
        return (
          <div className="App">
            <h1>Hi, This is a Statefull component!!</h1>
            <p>This is really Working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age}></Person>
            <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}></Person>
            <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}></Person>
         
          </div>
        );
      }


export default UdemyTwo;
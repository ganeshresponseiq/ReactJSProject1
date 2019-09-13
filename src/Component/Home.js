import React from 'react';
import { connect } from 'react-redux';
//import Dapp from './Container';
//import RoutLinks from '../RouterLinks';
import {anotherName, addWish} from './Redux/reduxTwo';

const Home = (props) => {

    const mywish = props.mywish.map(item=>{
        return <h2 key={Math.random()}>{item}</h2>
    })

return ( <div  className="homepage">
    
    <h1><center>Welcome To ReactJS.</center></h1>

    <div className="redux">
        <h1>Redux Practice 1</h1>
        <hr/>
        <br />
        <h3>My name is {props.myname}</h3>
        {mywish}
        <button onClick={() => {props.changeName("Suresh")}}>Change it.</button>
        <button onClick={() => {props.addWish("Ramesh")}}>add wish</button>
    </div>
</div>
);

}

const mapStateToProps = (state)=>{
    return {
      myname: state.name,
      mywish: state.wish
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return {
      changeName:(name)=>{ dispatch(anotherName(name)) },
      addWish:()=>{ dispatch(addWish()) }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Home);
import React  from 'react';
import Udemy from './ContentArea/Udemy';
import UdemyTwo from './ContentArea/UdemyTwo';
import UdemyThree, { UdemyFour } from './ContentArea/UdemyThree';


function Practice(props) {
    return (
      <div className="pagecontentarea">
        
          <div className="udemythree"> </div>
          <div className="left">
          <UdemyTwo />
          <UdemyThree />
        </div>
        <div className="left">
          <Udemy /> 
          <UdemyFour />
          
          </div> 
          
      </div>
    );
  }

  

export default Practice;
import React, { Component } from 'react';
import './css/right.css';

class Right extends Component {

  constructor(props) {
        super(props)
        this.state = {
    
        }
    }
  
  render() {
      //一等奖剩余数量
      let one = localStorage.getItem('一等奖');
      let restOne = 2 - parseInt(one);
      if(isNaN(restOne)){restOne=2}
      
      

      //二等奖剩余数量
      let two = localStorage.getItem('二等奖');
      let restTwo = 5 - parseInt(two);
      if(isNaN(restTwo)){restTwo=5}
      

      //三等奖剩余数量
      let three = localStorage.getItem('三等奖');
      let restThree = 10 - parseInt(three);
      if(isNaN(restThree)){restThree=10}


        return (
           <div className="rContent">
               <ul>
                   <p>1.iPhone8<span>{restOne}</span>台</p>
                   <p>2.咪咕Kindle<span>{restTwo}</span>台</p>
                   <p>3.咪咕一百元书券<span>{restThree}</span>份</p>
               </ul>
             </div>
            )
    }
}
export default Right;
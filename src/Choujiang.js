import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/chou.css';
import ChouMiddle from './ChouMiddle'

class Choujiang extends Component {

  constructor(props) {
        super(props)
        this.state = {
          flag:"middle1",//middle1和middle0分别代表有中奖用户和无中奖用户的背景
        }
    }

    hanldleChange(comment){
       this.setState({
         flag:comment
       })
        console.log(comment)
    }
    
  
  render() {  
    
        return (
           <div>
           <div className="contentTop0">
               
           </div>
           <div className="contentBottom0">
                
                <div className="left0">
                    <ul>
                      <p>1.本次活动设置一等奖2名、二等奖5名、三等奖10名，共17个奖项所有奖品由咪咕数媒提供;</p>
                      <p>2.一等奖iPhone8一台;</p>
                      <p>3.二等奖咪咕Kindle一台;</p>
                      <p>4.三等奖咪咕一百元书券一份;</p>
                    </ul>
                </div>

                <div className={this.state.flag}>

                  <ChouMiddle onchange={this.hanldleChange.bind(this)}/>

                </div>
                 {/* 开始结束按钮背景 */}
                <div className="right0">
                    
                </div>
                
                <div className="bottom0"> 
                  <Link className="bottomLink" to="/">返回</Link>
                </div>
           </div>
           </div>
            )
    }
}
export default Choujiang;
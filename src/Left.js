import React, {Component} from 'react';
import './css/left.css';
class Left extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

   

    render() {
        return (
          <div className="leftContent">
             <ul>
                 <p>1.所有参会人员提前报名，录入个人花名，录入时请输入正确的花名。</p>
                 <p>2.本次活动设置奖品为一等奖2名、二等奖5名、三等奖10名，共17个奖项，所有奖品由咪咕数媒提供。</p>
                 <p>3.一等奖iPhone8一台。</p>
                 <p>4.二等奖咪咕Kindle一台。</p>
                 <p>5.三等奖咪咕一百元书券一份。</p>
             </ul>
           </div>
            )
    }
}

export default Left;
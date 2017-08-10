import React, {Component} from 'react';
import './css/middle.css';
import {Link} from 'react-router-dom';

class Middle extends Component {

    constructor(props) {
        super(props)
        this.state = {
           disabled:'disabled',
           submit:'submit',
           namePropt:'namePropt'
        }
    }
   //提交事件
   handleSubmit(){
        let name0 = this.refs.inputName.value;
        let name1=name0+"重复";
        if(localStorage.getItem(name0)||localStorage.getItem(name1)){
            alert('不能重复提交');
            this.refs.inputName.value="";
            this.setState({
               submit:'submit',
               disabled:'disabled',
               namePropt:'namePropt',
           })
        }else{
            //将输入的名字存入localstorage
        localStorage.setItem(name0,name0);
        let name4=name0+"重复";
        localStorage.setItem(name4,name4);
        this.refs.inputName.value="";
           alert("提交成功:"+localStorage.getItem(name0))
           console.log("提交");
           this.setState({
               submit:'submit',
               disabled:'disabled',
               namePropt:'namePropt',
           })
        }
        
   }
   //是否清空数据
   clearData(){
       let clearDatas=window.confirm('是否清空数据？');
       if(clearDatas===true){
           localStorage.clear();
           window.location.reload();
       }else{
           console.log("取消清除");
       }
   }
   
   handleChange(){
       const users = ["海子","北岛","舒婷","顾城","食指","多多","欧阳江河","杨炼",
                      "梁小斌","王小妮","严力","芒克","戈麦","骆一禾","汪国真","冰心",
                      "徐志摩","戴望舒","卞之琳","冯志","何其芳","朱湘","刘半农","汪静之",
                      "林徽因","闻一多","穆旦","郑愁予","纪弦","雷平阳","应修人"];
       var usersBool = false;
       
       let name = this.refs.inputName.value;
       
       for(let i=0; i<users.length; i++){
           if(users[i]===name){
               usersBool=true;
           }
       }
       if(usersBool){
           console.log('条件成立');
           this.setState({
               submit:'submit1',
               disabled:'',
               namePropt:'namePropt',
           })
       }else{
           this.setState({
               submit:'submit',
               disabled:'disabled',
               namePropt:'namePropt1',
           })
       }
   }

    render() {
        return (
          <div className="middleContent">

              <div className="middleContentTop">
                  <input ref="inputName"
                         placeholder="请阁下输入花名"
                         onChange={this.handleChange.bind(this)}/>
                  <div className={this.state.namePropt}>*只能输入合法花名</div>
              </div>

              <div className="middleContentMiddle">
                  <input className={this.state.submit} 
                         onClick={this.handleSubmit.bind(this)}
                         disabled={this.state.disabled}
                         type="button" 
                         value="提交" />
              </div>

              <div className="middleContentBottom">
                  <div className="goLuck">
                      <Link className="link" to="/choujiang">去抽奖>>></Link>
                  </div>
              </div>
              <div className="clearData"><input type="button" value="清除数据" onClick={this.clearData.bind(this)}/></div>
           </div>
            )
    }
}

export default Middle;
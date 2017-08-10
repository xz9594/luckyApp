import React, { Component } from 'react';
import './css/chouMiddle.css';

class ChouMiddle extends Component {

  constructor(props) {
        super(props)
        this.state = {
         userList:[],//输入的用户列表
         box:'box',//用户名滚动
         startAndEnd:"开始",//按钮文字
         disabled1:"",//如果没有用户，则按钮为disabled
         user:'show',//用户列表切换show显示，hide隐藏
         lucyUser:"hide",//中奖用户列表切换show显示，hide隐藏
         lucyuserName:"",//中奖用户的名字
         lucyuserList:[],//左侧中奖用户显示列表
         background:"middle1",//获奖名单的背景图片
         
        }
    }
    
    componentDidMount(){
      //所有用户名字，只能输入该数组中的名字  在Luru的middle页面也用到该数组
      const users0 = ["海子","北岛","舒婷","顾城","食指","多多","欧阳江河","杨炼",
                      "梁小斌","王小妮","严力","芒克","戈麦","骆一禾","汪国真","冰心",
                      "徐志摩","戴望舒","卞之琳","冯志","何其芳","朱湘","刘半农","汪静之",
                      "林徽因","闻一多","穆旦","郑愁予","纪弦","雷平阳","应修人"];  
      let userLists = [];
      //获取待抽奖用户的名单
        for(let i=0; i<localStorage.length; i++){
          let num = localStorage.key(i);
          var name = localStorage.getItem(num);
          for(let j=0; j<users0.length; j++){
           if(users0[j]===name){
               userLists.push(name);
           }
        }  
       } 
      //判断使用有用户输入，没有输入用户或者没有奖品是不能抽奖
      let num = parseInt(localStorage.getItem('一等奖'))+parseInt(localStorage.getItem('二等奖'))+parseInt(localStorage.getItem('三等奖'));
      if(userLists.length===0){
        userLists=['没有用户'];
        this.setState({
          disabled1:'disabled'
        })
      }else if(num === 17){//如果没有奖品了，不能点击抽奖按钮
        console.log('没有奖品了');
        this.setState({
          disabled1:'disabled'
        })
      }else{
        this.setState({
          disabled1:""
        })
      }
      
      //将所有可能中奖的名字和等级放入数组
      const userNameRank = [];
      const rankList=['一等奖','二等奖','三等奖'];
      for(let x=0; x<users0.length; x++){
        for(let y=0; y<rankList.length; y++){
            let temp = users0[x]+rankList[y];
            userNameRank.push(temp);
        }
      }
      
      let luckUsersList = [];//左侧中奖用户列表数组
      for(let z=0; z<localStorage.length; z++){
          let num0 = localStorage.key(z);
          //var name = localStorage.getItem(num);
          for(let h=0; h<userNameRank.length; h++){
            if(userNameRank[h]===num0){
              luckUsersList.push(localStorage.getItem(num0))
            }
          }  
       }
       
         //将localStorage获取的用户名放入state以及左侧滚动的中奖用户
         this.setState({
          userList:userLists,
          lucyuserList:luckUsersList,
        })

      //改变是否有用户中奖的背景图片
      let backgroundFlag0="";
      if(this.props.onchange){
        if(luckUsersList.length===0){
          backgroundFlag0='middle0'
        }else{
          backgroundFlag0='middle1'
        }
        this.props.onchange(backgroundFlag0);
      }

    }

    //处理开始结束按钮
    handleChangeClick(){
    //随机获取中奖用户名
    let lucknames = this.state.userList;
    let n = Math.floor(Math.random()*lucknames.length);
    //随机中奖用户
    let luckname = lucknames[n];

    //获取中奖等级
    let rank = this.refs.select.value;

    let startEndValue = this.refs.startEnd.innerHTML;
    
    if(startEndValue==="开始"){
      this.setState({
        startAndEnd:'结束',
        box:'box1',
        user:"show",
        lucyUser:"hide",
        
      })
    }else if(startEndValue==="结束"){
      //处理剩余奖项
      // localStorage.setItem('一等奖','0');
      // localStorage.setItem('二等奖','0');
      // localStorage.setItem('三等奖','0');
      if(rank==="一等奖"){
        let tempOne = localStorage.getItem('一等奖');
        if(!localStorage.getItem('一等奖')){
          localStorage.setItem('一等奖','1');
        }else{
          let tempOneNum = parseInt(tempOne);
          let newTempOneNum = tempOneNum+1;
          let newTempOneStr = newTempOneNum.toString();
          localStorage.setItem("一等奖",newTempOneStr);
          if(newTempOneNum>=2){
            localStorage.setItem('haveOne','disabled');
          }else{
            localStorage.setItem('haveOne','');
          }
        } 
      }
      if(rank==="二等奖"){
        let tempTwo = localStorage.getItem('二等奖');
        if(!localStorage.getItem('二等奖')){
          localStorage.setItem('二等奖','1');
        }else{
          let tempTwoNum = parseInt(tempTwo);
          let newTempTwoNum = tempTwoNum+1;
          let newTempTwoStr = newTempTwoNum.toString();
          localStorage.setItem("二等奖",newTempTwoStr);
          if(newTempTwoNum>=5){
            localStorage.setItem('haveTwo','disabled');
          }else{
            localStorage.setItem('haveTwo','');
          }
        } 
      }
      if(rank==="三等奖"){
        let tempThree = localStorage.getItem('三等奖');
        if(!localStorage.getItem('三等奖')){
          localStorage.setItem('三等奖','1');
        }else{
          let tempThreeNum = parseInt(tempThree);
          let newTempThreeNum = tempThreeNum+1;
          let newTempThreeStr = newTempThreeNum.toString();
          localStorage.setItem("三等奖",newTempThreeStr);
          if(newTempThreeNum>=10){
            localStorage.setItem('haveThree','disabled');
          }else{
            localStorage.setItem('haveThree','');
          }
          //alert('三等奖数量：'+newTempThreeStr);
        } 
      }

       //左侧中奖列表
       let tempUser=luckname+rank;
       let tempUser0=luckname+"--------"+rank;
       localStorage.setItem(tempUser,tempUser0);
       //alert(localStorage.getItem("海子一等奖")+localStorage.length)

      //刷新页面不显示已经中奖的人名
      localStorage.removeItem(luckname);
      setTimeout(()=>{
        window.location.reload();
      },2000)

      this.setState({
        startAndEnd:'开始',
        box:'box2',
        user:"hide",
        lucyUser:"show",
        lucyuserName:luckname,
        disabled1:'disabled',//点击结束的时候不能立刻抽奖
        
      })
    }
    
  }
  
  render() {
        let userArr=this.state.userList;
        let lucyUserArr=this.state.lucyuserList;
        let listArr = (arr)=>{
          let Arr = [];
          for(let j=0; j<arr.length; j++){
            Arr.push(<li key={j}>{arr[j]}</li>)
          }
          return Arr
        }
        return (
           <div>
             {/* 中奖用户列表 */}
             <div className="cmLeft">
               <marquee className="marquee" direction="up">
                 {listArr(lucyUserArr)}
               </marquee>
             </div> 

             <div className="cmRight">
                 {/* 中奖等级 */}
                 <div className="sel">
                   <select ref="select">
                     <option  disabled={localStorage.getItem('haveOne')} value="一等奖">一等奖</option>
                     <option  disabled= {localStorage.getItem('haveTwo')} value="二等奖">二等奖</option>
                     <option  disabled={localStorage.getItem('haveThree')} value="三等奖">三等奖</option>
                   </select>
                 </div>

                  {/* 用户列表滚动区域 */}
                 <div ref="change" className={this.state.user}>
                      <ul className={this.state.box}>
                        {listArr(userArr)}
                      </ul>
                 </div>
                 {/* 单个中奖用户区域 */}
                 <div ref="change1" className={this.state.lucyUser}>
                      <span className="lucyuser">{this.state.lucyuserName}</span>
                 </div>

                    {/* 开始结束按钮 */}
                    <div className="btn">
                        <button disabled={this.state.disabled1} ref="startEnd" onClick={this.handleChangeClick.bind(this)}>{this.state.startAndEnd}</button>
                    </div>
                 </div>
           </div>
            )
    }
}
export default ChouMiddle;
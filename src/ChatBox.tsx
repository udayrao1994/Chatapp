import React,{FC,ChangeEvent ,useState}from 'react';
import './App.css';

import MessageBox from "./components/MessageBox"
import {TaskI} from "./Interface";





let Chat :FC =()=>{

  let [task,setMessage]=useState<any>("");
  let [dateTime,setdateTime]=useState<any>("");

  let [id,setId]=useState<any>("");
  let [messageList,setMessageList]=useState<TaskI[

  ]>([

  ]);

let handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
if(event.target.name==="task")
  setMessage(event.target.value)
  if(event.target.name==="id")
  setId(event.target.value)
  if(event.target.name==="id")
  setId(event.target.value)
  
  if(event.target.name==="dateTime")
  setdateTime(event.target.value)
 
}
let addTask=():void=>{
  
  let newTask={message:task,id:id,dateTime:dateTime}
  console.log(newTask)
setMessageList([...messageList,newTask])

}



  return <div className="chatBox">


<div>
 
<div id="myDIV" className="header">
  <h4>Madgical Chat Room</h4>
 
 
</div> 
    </div>


<div className="messageList">

  {messageList.map((task:TaskI)=>{
    return <MessageBox task={task} />;
  })}
      
</div>

<div className="row row-padding ">
  <div className="col-lg-4 col-lg-offset-4 inputbox2">
  <div className="input">
<input  id="myInput"  type="text" placeholder="Type Meaasage here..." name="task"
onChange={handleChange} 
          />
       

       
 <button id="sendmessageButton"className="btn btn-danger" onClick={addTask}type="submit">Sent</button>
    
    <br/>
 
</div>

</div>

</div>

  </div>
}
export default Chat;


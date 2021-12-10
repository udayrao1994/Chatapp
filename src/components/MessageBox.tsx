import React from "react";
import {TaskI} from "../Interface"
import {TaskV} from "../Interface"



interface Props{
    task:TaskI;
    dateTime:TaskI;
}
;
const MessageBox=({task,dateTime}:Props)=>{


 
let date=new Date();
let month=new Date();
let Years=new Date();

let hours=new Date();
let minute=new Date();
let secands=new Date();
    return <div className="position ">
    
    <ul id="myUL">
     

<div className="container darker">

  <span className="">{task.message}</span>
  <br/>
<span className="datetime">{date.getDate()}/{month.getMonth()}/{Years.getFullYear()}</span>

  { <span>{hours.getHours()}:{minute.getMinutes()}:{secands.getSeconds()}</span> }
</div>
       </ul>
        </div>
        
}

export default MessageBox
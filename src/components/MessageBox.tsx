import React from "react";
import {TaskI} from "../Interface"
import {TaskV} from "../Interface"



interface Props{
    task:TaskI;
}
;
const MessageBox=({task}:Props)=>{

    return <div className="position ">
    
    <ul id="myUL">
     

<div className="container darker">

  <span className="">{task.message}</span>
  <br/>
  <span className="time-left"></span>
</div>
       </ul>
        </div>
        
}

export default MessageBox
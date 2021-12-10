import React,{FC,ChangeEvent ,useState}from 'react';
import Chat from './ChatBox'
import './App.css';

import {TaskV} from "./Interface";
import {TaskP} from "./Interface";

interface Props{
  UserName:TaskV;
}



let Land :FC =()=>{

  let [userName,setUserName]=useState<any>("");
  let [messageList2,setuSERLIST]=useState<TaskV[]>([{userName:""}

  ]);

  const [value, setValue] = useState("");
let handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
  if(event.target.name==="userName"){
    setValue(event.target.value)
    console.log(value);
  }
}

let adduser=():void=>{
  
  let newTask2={userName:value}
  setUserName(value)
  console.log(newTask2,value)
  console.log(userName)
  setuSERLIST([...messageList2,newTask2])
}





return <div id="landingpage">

 
{
  userName === "" ? 
  <React.Fragment>
  <h4 id="h4">Welcome Chat App</h4>
<input  id="landingpageInput"  type="text" placeholder="Type Meaasage here..." name="userName"
    onChange={handleChange}
          />
  <button 
    className="btn btn-danger" 
    id="btn" onClick={adduser}type="submit"
  >
    Enter
  </button>
  </React.Fragment>
  :
  ""}
  {
    userName!="" ? <Chat /> : ""
  }

</div>


}



export default Land;


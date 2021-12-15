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





return <div className="">

 
{
  userName === "" ? 
  <React.Fragment>
    <div className="landingpage">
    <div className="row">
      <div className="col-12 chatheader">
  <h3>Welcome Chat Application</h3>
  </div>
  <div className="col-12">
<input  id="landingpageInputbox"  type="text" placeholder="Type Name here..." name="userName"
    onChange={handleChange}
          />
          </div>
          <div className="col-12">
  <button 
    className="btn btn-danger" 
     onClick={adduser}type="submit"
  >
    Enter
  </button>
  </div>
  </div>
  </div>
  </React.Fragment>
  :
  ""}
  {
    userName!="" ? <Chat userName={userName}/> : ""
  }

</div>


}



export default Land;


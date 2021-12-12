import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { PostI } from "./Interface";
import "./App.css";
import MessageBox from "./components/MessageBox";
import axios, { AxiosResponse } from "axios";
import { url } from "inspector";
import { TaskV } from "./Interface";

interface Props {
  userName: string;
}

let Chat: React.FC<Props> = ({ userName }) => {
  let [task, setMessage] = useState<any>("");
  let [dateTime, setdateTime] = useState<any>("");

  const [userData, setUserData] = useState<PostI[]>([]);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  let [messageList, setMessageList] = useState<PostI[]>([]);

  let handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setMessage(event.target.value);
    if (event.target.name === "date") setdateTime(event.target.value);
  };

  let creattime = (date: Date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
  };

  let creatdate = (date: Date) => {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    return day + ":" + month + ":" + year;
  };

  let addTask = (): void => {
    let time = creattime(new Date());
    let date = creatdate(new Date());
    console.log(time, date);
    console.log("h");
    let newTask = { text: task, date: date, time: time, sender: userName };
    console.log("new", newTask);
   
    axios.post("http://localhost:2410/messages", newTask).then((response) => {
      console.log("done");
    });
    
    axios.get<PostI[]>("http://localhost:2410/messages").then((response) => {
      setUserData(response.data);
      console.log(response.data);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    axios.get<PostI[]>("http://localhost:2410/messages").then((response) => {
      setUserData(response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
    <div className="chatBox">
      <div>
        <div id="myDIV" className="header">
          <h4>Madgical Chat Room</h4>
        </div>
        </div>

      <div className="messageList">
        {userData.map((ele: PostI) => {
          return <MessageBox ele={ele} dateTime={dateTime} userName={userName}/>;
        })}
      </div>
</div>
      <div id="inputboxfixed" className="row row-padding ">
        <div className="col-lg-4 col-lg-offset-4 inputbox2">
          <div className="input" id="chatsendblogstyle">
            
            <input
              id="myInput"
              type="text"
              placeholder="Type Meaasage here..."
              name="task"
              onChange={handleChange}
            />

            <button
              id="sendmessageButton"
              className="btn btn-danger"
              onClick={addTask}
              type="submit"
            >
              Sent
            </button>

        
          </div>
        </div>
    </div>
    
      </div>
  );
};
export default Chat;

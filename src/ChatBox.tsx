import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { PostI } from "./Interface";
import "./index.css";
import MessageBox from "./components/MessageBox";
import axios, { AxiosResponse } from "axios";
import { textChangeRangeIsUnchanged } from "typescript";
import { render } from "@testing-library/react";

interface Props {
  userName: string;
}

let Chat: React.FC<Props> = ({ userName }) => {
  let [task, setMessage] = useState<any>("");

  let [dateTime, setdateTime] = useState<any>("");

  let [heading, setheading] = useState<any>("All");

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

    let newTask = { text: task, sender: userName ,room:heading ,time : time,date : date};
    console.log("new", newTask);

    axios.post("http://localhost:2410/messages", newTask).then((response) => {
      console.log("done");
    });
    if(heading === "All"){
      axios.get<PostI[]>("http://localhost:2410/messages").then((response) => {
        setUserData(response.data);
        console.log(heading);
        setLoading(true);
      });
    } else if(heading === "Technical") {
      axios.get<PostI[]>(`http://localhost:2410/${heading}`).then((response) => {
        setUserData(response.data);
        console.log(heading);
        setLoading(true);
      });
    }
    else {
      axios.get<PostI[]>(`http://localhost:2410/${heading}`).then((response) => {
        setUserData(response.data);
        console.log(heading);
        setLoading(true);
      });
    }
  };


  React.useEffect(() => {
    if(heading === "All"){
    axios.get<PostI[]>("http://localhost:2410/messages").then((response) => {
      setUserData(response.data);
      console.log(heading);
      setLoading(true);
    });
  } else if(heading === "Technical") {
    axios.get<PostI[]>(`http://localhost:2410/${heading}`).then((response) => {
      setUserData(response.data);
      console.log(heading);
      setLoading(true);
    });
  }
  
  else {
    axios.get<PostI[]>(`http://localhost:2410/${heading}`).then((response) => {
      setUserData(response.data);
      console.log(heading);
      setLoading(true);
    });
  }
  }, [userData]);

  let showheading = (room: string) => {
    setheading(room);
  };

  

  return (
    <div>
      <div>
      <div className="row">
        <div className="col-4 rounded border border-dark headerleftpannel bg-dark">
          <h4 className="text-right-pannel bg-light"> Chat Room</h4>
          <div id="" className="header2 mt-5">
            <div className="search-container">
              {/* <form action="/action_page.php">
      <input id="inputboxsizeIncrease" type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form> */}
            </div>
          </div>

          <ul className="mt-5 pt-4 listSection">
            <li onClick={() => showheading("All")}>All</li>
            <li onClick={() => showheading("Technical")}>Technical</li>
            <li onClick={() => showheading("English")}>English</li>
          </ul>
        </div>
        <div className="col-8 border border-dark rounded myleftdiv ">
          <div id="myDIV" className="header">
            <h4 className="text-left-pannel">{heading}</h4>
          </div>
          <div className="messageList">
            {userData.map((ele: PostI) => {
              return (
                <MessageBox ele={ele} dateTime={dateTime} userName={userName} />
              );
            })}
 </div>
<div id="inputboxfixed" className="row row-padding ">
            <div className="col-lg-4 col-lg-offset-4 inputbox2">
              <div className="input " id="chatsendblogstyle">
                <input
                  id="myInput"
                  type="text"
                  placeholder="Type Meaasage here..."
                  name="task"
                  onChange={handleChange}
                />

                <a
                  id="sendingmessagebutton"
                  className="btn btn-info btn-sm"
                  onClick={addTask}
                  type="submit"
                >
                  <span className="glyphicon glyphicon-send"></span> Send
                </a>
              </div>
            </div>
          </div>
            
         
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;

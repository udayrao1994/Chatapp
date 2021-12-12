import React from "react";
import { PostI } from "../Interface";
import { TaskV } from "../Interface";
import axios from "axios";

interface Props {
  dateTime: PostI;
  ele: PostI;
  userName:string;
}

const MessageBox = ({ userName,ele }: Props) => {
  let date = new Date();
  let month = new Date();
  let Years = new Date();

  let hours = new Date();
  let minute = new Date();
  let secands = new Date();

  return (
    <div className="position" >
{userName === ele.sender ?
    <div className="user">
      <p>You : {date.getDate()}/{month.getMonth()}/{Years.getFullYear()}- {hours.getHours()}:{minute.getMinutes()}</p>
      <span className="userMessage bg-primary mt-3">
        {ele.text }
      </span>
    </div>
    :
    <div className="client">
      <p>{ele.sender} :{date.getDate()}/{month.getMonth()}/{Years.getFullYear()}- {hours.getHours()}:{minute.getMinutes()}</p>
      <span className="clientMessage mt-3">
        { ele.text }
      </span>
    </div>
}
</div>

  );
};

export default MessageBox;

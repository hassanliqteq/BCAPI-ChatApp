import React from "react";
import "./Main.css";
const Chats = (props) => {
  const sortedChats = props.messages.sort((a, b) => {
    return a.date - b.date;
  });

  return (
    <div className="chats">
      {props.messages.length === 0 && (
        <div className="msg-container">No Msgs currently!</div>
      )}
      {props.messages.length > 0 &&
        props.messages
          .slice(0)
          .reverse()
          .map((msg, index) => (
            <div
              key={index}
              className={`msg-container ${
                msg.type === "recieved" ? "msg-recieved" : "msg-sent"
              }`}
            >
              {msg.type === "recieved" ? <h5>Recieved:</h5> : <h5>Sent:</h5>}
              <h3>{msg.msg}</h3>
              <p>{msg.date.toUTCString()}</p>
            </div>
          ))}
    </div>
  );
};

export default Chats;

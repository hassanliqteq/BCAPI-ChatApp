import React, { useEffect, useState } from "react";
import "./Main.css";
const Main = (props) => {
  const [msg, setMsg] = useState("");
  const d = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: new Date(),
      msg: msg,
      type: "sent",
    };
    props.channel.postMessage(data);
    props.setSent((prevState) => [...prevState, { ...data }]);
    setMsg("");
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="input">
        <h1>Send a message!</h1>
        <p>(Open 2 tabs. Tab that sends the first msg becomes the sender.)</p>
        <input
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          type="text"
          placeholder="Your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Main;

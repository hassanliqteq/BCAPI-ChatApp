import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./App.css";
import Chats from "./pages/Chats";
import Main from "./pages/Main";

const channel = new BroadcastChannel("main");

function App() {
  const [sent, setSent] = useState([]);
  const [recieved, setRecieved] = useState([]);

  useEffect(() => {
    channel.onmessage = ({ data }) => {
      setRecieved((prevState) => [...prevState, { ...data, type: "recieved" }]);
    };
  }, []);

  return (
    <div className="App">
      <Main setSent={setSent} channel={channel} />
      <Chats messages={sent.concat(recieved)} sent={sent} recieved={recieved} />
    </div>
  );
}

export default App;

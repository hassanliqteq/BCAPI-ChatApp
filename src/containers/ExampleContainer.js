import React, { useEffect } from "react";
const bc = new BroadcastChannel("tester");

const ExampleContainer = () => {
  useEffect(() => {
    bc.onmessage = (e) =>
      console.log(
        "This msg can be seen by every tab except the sender tab",
        e.data
      );
  }, []);

  bc.postMessage("test msg");

  return (
    <div className="examplecontainer">
      Open 2 tabs, refresh one and check the console.
    </div>
  );
};

export default ExampleContainer;

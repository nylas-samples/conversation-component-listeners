import React from "react";
import "./styles.css";
import "@nylas/components-conversation";

export class App extends React.Component {
  componentDidMount() {
    const conversation = document.getElementsByTagName("nylas-conversation")[0];
    conversation.addEventListener("manifestLoaded", function (e) {
      console.log("manifest loaded: ", e.detail);
    });
    conversation.addEventListener("sendMessageClicked", function (e) {
      console.log("send message clicked: ", e.detail);
    });
  }
  render() {
    return (
      <div className="App">
        <nylas-conversation id="759a1f79-0467-4fd1-8f02-9384bd2ff31f" />
      </div>
    );
  }
}

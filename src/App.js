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
        <nylas-conversation id="cf7002dd-7c74-4c6e-9f73-e9753c938d62" />
      </div>
    );
  }
}

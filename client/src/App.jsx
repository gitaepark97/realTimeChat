import { Component } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/chatHistory/ChatHistory";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatInput from "./components/ChatInput/ChatInput";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };
  }

  send(msg) {
    sendMsg(msg);
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        chatHistory: [...prevState.chatHistory, msg],
      }));
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

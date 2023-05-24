import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.props.send(event.target.value);
      this.setState({ inputValue: "" });
      console.log("hi", this.state.inputValue);
    }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="chatInput">
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Type a message... Hit Enter to send"
        />
      </div>
    );
  }
}

export default ChatInput;

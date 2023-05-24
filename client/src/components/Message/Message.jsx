import { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    const tmp = JSON.parse(this.props.message);
    this.state = {
      message: tmp,
    };
  }

  render() {
    return <div className="message">{this.state.message.body}</div>;
  }
}

export default Message;

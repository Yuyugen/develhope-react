import React from "react";
import { Hello } from "./Hello";
import { Message } from "./Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
      </div>
    );
  }
}

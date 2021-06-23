import React from "react";
import Bulb from "./components/Bulb";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }

  lightOn = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };

  render() {
    const url = this.state.isLightOn
      ? "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
      : "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png";
    return (
      <div>
        <h2>Turn the light on and off</h2>
        <Bulb func={this.lightOn} url={url} />
      </div>
    );
  }
}
export default App;

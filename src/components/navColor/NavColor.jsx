import { Component } from "react/cjs/react.development";
import "./NavColor.scss";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
    };
  }
  // {check: !this.state.check}
  handlerButton() {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  }

  render() {
    return (
      <>
        <div className="list">
          <h2>Docket</h2>
          <button
            className="list__btn rotate-center"
            onClick={this.handlerButton.bind(this)}
          >
            +
          </button>
          {this.state.check && (
            <ul className="lists">
              <div className="lists__green bounce-in-top"></div>
              <div className="lists__yellow bounce-in-top"></div>
              <div className="lists__blue bounce-in-top"></div>
              <div className="lists__white bounce-in-top"></div>
            </ul>
          )}
        </div>
      </>
    );
  }
}
export default NavBar;

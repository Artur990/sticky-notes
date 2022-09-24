import { Component } from "react/cjs/react.development";
import { connect } from "react-redux";

import { addColor } from "../../store/action";

import "./NavColor.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }
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
              <div
                className="lists__green bounce-in-top"
                onClick={() => this.props.addColor({ color: "#2ECC40" })}
              />
              <div
                className="lists__purple bounce-in-top"
                onClick={() => this.props.addColor({ color: "#b10dc9" })}
              />
              <div
                className="lists__blue bounce-in-top"
                onClick={() => this.props.addColor({ color: "#0074d9" })}
              />
              <div
                className="lists__greenyellow bounce-in-top"
                onClick={() => this.props.addColor({ color: "greenyellow" })}
              />
            </ul>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ notesReducer }) => {
  return {
    notesReducer,
  };
};

const mapDispatchToProps = {
  addColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

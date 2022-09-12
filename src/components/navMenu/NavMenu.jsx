import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import NoteItem from "../noteItem/NoteItem";

import "./NavMenu.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      search: "",
      date: [],
      resolut: JSON.parse(localStorage.getItem("isFavv")) || [],
      // isFavLs: this.props.notes,
    };
    // let isFavLs = localStorage.getItem("isFavv");
    // if (isFavLs) {
    //   isFavLs = JSON.parse(isFavLs);
    //   this.setState({ isFavLs: [this.isFavLs] });
    // } else {
    // }
  }
  // localStorage.setItem("isFavv", JSON.stringify(this.props.note));
  handlerChecBox = (e) => {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  };
  handlerSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  // useEffect(() => {}, [])
  convert = () => {
    let state = this.props.notes;
    if (this.state.search) {
      state = state.filter((e) =>
        e.text.toLowerCase().includes(this.state.search)
      );
    }
    return state;
  };
  // };
  // localc() {
  //   let isFavLs = localStorage.getItem("isFavv");
  //   if (isFavLs) {
  //     isFavLs = JSON.parse(isFavLs);
  //     this.setState({ isFavLs: [this.isFavLs] });
  //   } else {
  //     localStorage.setItem("isFavv", JSON.stringify(this.props.note));
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.props.notes) {
      console.log("UpDate");
      // if (!localStorage.getItem("isFavv")) {
      // localStorage.setItem("isFavv", JSON.stringify(this.props.notes));
      // }
      this.convert();
      // this.localc();
    }
  }

  // componentDidMount() {
  //   const localData = localStorage.getItem("isFavv");
  //   const result = localData ? JSON.parse(localData) : [];
  //   // const deadlineData = localStorage.getItem("deadline");
  //   this.setState({ result: this.result });
  //   console.log(this.state);
  // }

  render() {
    console.log(this.state.result);
    return (
      <div className="all">
        <div className="nav-menu">
          <span className="nav-menu__contnet">
            <button className="nav-menu__btn">
              <AiOutlineSearch />
            </button>
            <input
              className="nav-menu__input"
              placeholder="search"
              type="text"
              onChange={this.handlerSearch.bind(this)}
              value={this.state.value}
            />
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <h1 className="title">Notes</h1>
          <input
            type="checkbox"
            // value={value}
            onChange={this.handlerChecBox.bind(this)}
          />
          <h3>Ulubione</h3>
        </div>

        <div className="main-content">
          {!this.state.check &&
            this.convert().map((note) => (
              <NoteItem note={note} key={note.id} />
            ))}
        </div>
        <div className="main-content">
          {this.state.check &&
            this.convert().map((note) => {
              if (note.isFav === true) {
                return <NoteItem note={note} key={note.id} />;
              }
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ notesReducer: { favorites, notes } }) => {
  return {
    // notesReducer,
    // count,
    // todoss,
    notes,
    favorites,
  };
};

const mapDispatchToProps = {
  // addNote,
  // addColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

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
      // date: [],
      // resolut: JSON.parse(localStorage.getItem("isFavv")) || [],
    };
    this.handlerChecBox = this.handlerChecBox.bind(this);
    this.handlerSearch = this.handlerSearch.bind(this);
  }
  handlerChecBox = (e) => {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  };
  handlerSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  convert = () => {
    let state = this.props.notes;
    if (this.state.search) {
      state = state.filter((e) =>
        e.text.toLowerCase().includes(this.state.search)
      );
    }
    console.log(state);
    return state || [];
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.props.notes) {
      this.convert();
      console.log("render");
      // this.setState({ check: false });
    }
  }

  render() {
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
              onChange={this.handlerSearch}
              value={this.state.value}
            />
          </span>
        </div>
        <div className="nav-fav">
          <h1 className="nav-fav__title">Notes</h1>
          <label className="nav-fav__switch">
            <input type="checkbox" onChange={this.handlerChecBox} />
            <span className="slider round"></span>
          </label>
          <h3 style={{ padding: "0.7rem" }}> Ulubione</h3>
        </div>

        <div className="main-content">
          {!this.state.check &&
            this.convert().map((note) => (
              <NoteItem note={note} key={note.id} />
            ))}
        </div>
        <div className="main-content">
          {this.state.check &&
            this.convert().map(
              (note) =>
                note.isFav === true && <NoteItem note={note} key={note.id} />
            )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ notesReducer: { favorites, notes } }) => {
  return {
    notes,
    favorites,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

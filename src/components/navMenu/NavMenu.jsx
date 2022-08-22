import React, { Component } from "react";

import "./NavMenu.scss";
import { AiOutlineSearch } from "react-icons/ai";
import NoteItem from "../noteItem/NoteItem";

const notes = [
  {
    id: 1,
    color: "grey",
    text: "dsdad",
    isFav: false,
    date: "22.33.33",
  },
  {
    id: 2,
    color: "darkblue",
    text: "dsdad",
    isFav: false,
    date: "22.33.33",
  },
];
export default class NavBar extends Component {
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
            />
          </span>
        </div>
        <h1 className="title">Notes</h1>
        <div className="main-content">
          {notes.map((note) => (
            <NoteItem note={note} />
          ))}
        </div>
      </div>
    );
  }
}

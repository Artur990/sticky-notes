import { Component } from "react";
import { GoPencil } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  removeNote,
  addToFav,
  upDateText,
  changeFav,
  changeToWrite,
} from "../../store/action";

import "./NoteItem.scss";

export class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toWrite: false,
      note: this.props.note,
      isFav: false,
      // toWrite: false,
    };
  }

  onHandlerText = (e) => {
    e.preventDefault();
    this.props.upDateText({
      text: e.target.value,
      id: this.props.note.id,
    });
  };

  render() {
    console.log(this.state.isFav);
    // console.log(this.state.toWrite);
    return (
      <div
        className="note-item"
        style={{ backgroundColor: this.props.note.color }}
      >
        <textarea
          className="note-item__input"
          name="w3review"
          rows="3"
          cols="40"
          onChange={this.onHandlerText.bind(this)}
          value={this.props.note.text}
          readOnly={this.state.toWrite}
        />

        <button
          onClick={() =>
            this.props.addToFav({
              text: this.props.note.text,
              obj: this.props.note,
              isFav: !this.props.note.isFav,
              id: this.props.note.id,
            })
          }
        />

        {this.props.note.isFav ? (
          <div
            className="note-item__content__star1"
            onClick={() => {
              this.props.addToFav({
                text: this.props.note.text,
                obj: this.props.note,
                isFav: !this.props.note.isFav,
                id: this.props.note.id,
              });
              this.setState({ isFav: false });
            }}
          >
            <div>
              <AiFillStar className="note-item__content___star_icon1-fav" />
            </div>
          </div>
        ) : (
          <div
            className="note-item__content__star"
            onClick={() => {
              this.props.addToFav({
                text: this.props.note.text,
                obj: this.props.note,
                isFav: !this.props.note.isFav,
                id: this.props.note.id,
              });
              this.setState({ isFav: true });
            }}
          >
            <div>
              <AiFillStar className="note-item__content___star_icon1-fav" />
            </div>
          </div>
        )}

        <div className="note-item__content">
          <h3 className="note-item__content__date">{this.props.note.date}</h3>
          {!this.state.toWrite && (
            <div>
              <div onClick={() => this.props.removeNote(this.props.note.id)}>
                <FaTrash />
              </div>
            </div>
          )}

          <div
            className="note-item__content__pen"
            onClick={() => {
              this.props.changeToWrite({
                id: this.props.note.id,
                toWrite: !this.props.note.toWrite,
              });
              this.setState({ toWrite: !this.state.toWrite });
            }}
          >
            {this.state.toWrite ? (
              <GoPencil className="note-item__content__pen__icon" />
            ) : (
              <GoPencil
                style={{ color: "white" }}
                className="note-item__content__pen__icon"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
NoteItem.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  isFav: PropTypes.bool,
  date: PropTypes.string,
  toWrite: PropTypes.bool,
};

const mapStateToProps = ({ notesReducer: { notes } }) => {
  return {
    notes,
  };
};

const mapDispatchToProps = {
  removeNote,
  addToFav,
  upDateText,
  changeToWrite,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);

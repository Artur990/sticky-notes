import { Component } from "react";
import { GoPencil } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import "./NoteItem.scss";

export class NoteItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="note-item"
        style={{ backgroundColor: this.props.note.color }}
      >
        {/* <input className="note-item__input" /> */}
        <textarea
          className="note-item__input"
          placeholder="Add a note"
          name="w3review"
          rows="3"
          cols="40"
        />
        <div className="note-item__content__star">
          <AiFillStar className="note-item__content___star_icon1" />
        </div>
        <div className="note-item__content">
          <h3 className="note-item__content__date">
            {false ? (
              this.props.note.date
            ) : (
              <input value={this.props.note.date} />
            )}
          </h3>
          <div className="note-item__content__pen">
            <GoPencil className="note-item__content__pen__icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default NoteItem;

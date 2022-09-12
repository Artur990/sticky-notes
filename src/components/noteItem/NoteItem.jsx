import { Component } from "react";
import { GoPencil } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";

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
      myState: "hej",
    };
  }

  onHandlerText = (e) => {
    e.preventDefault();
    this.props.upDateText({
      text: e.target.value,
      id: this.props.note.id,
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.note !== this.props.note) {
  //     console.log("upDatw");
  //     this.setState({ note: this.props.note });
  //   }
  // }
  // componentDidUpdate() {
  //   if (this.state.note !== this.props.note.isFav) {
  //     this.setState({ note: this.props.note.isFav });
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.note.isFav !== prevProps.note.isFav) {
  //     this.fetchDate(this.props.note.isFav);
  //   }
  // }
  // static getDerivedStateFromProps(props, state) {
  //   // Any time the current user changes,
  //   // Reset any parts of state that are tied to that user.
  //   console.warn("hook", props, state);
  //   return {
  //     note: props.note,
  //   };
  // }
  // shouldComponentUpdate(nextProps, prevState) {
  //   console.log("hej");
  //   if (nextProps.note.isFav === this.props.note.isFav) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    return (
      <div
        className="note-item"
        style={{ backgroundColor: this.props.note.color }}
      >
        {this.props.note.toWrite ? (
          <textarea
            className="note-item__input"
            name="w3review"
            rows="3"
            cols="40"
            onChange={this.onHandlerText.bind(this)}
            value={this.props.note.text}
          />
        ) : (
          <textarea
            className="note-item__input"
            name="w3review"
            rows="3"
            cols="40"
            onChange={this.onHandlerText.bind(this)}
            value={this.props.note.text}
            readOnly
          />
        )}
        {this.props.note.isFav ? (
          <div
            className="note-item__content__star1"
            onClick={() =>
              this.props.addToFav({
                text: this.props.note.text,
                obj: this.props.note,
                isFav: !this.props.note.isFav,
                id: this.props.note.id,
              })
            }
          >
            <div>
              <AiFillStar className="note-item__content___star_icon1-fav" />
            </div>
          </div>
        ) : (
          <div
            className="note-item__content__star"
            onClick={() =>
              this.props.addToFav({
                text: this.props.note.text,
                obj: this.props.note,
                isFav: !this.props.note.isFav,
                id: this.props.note.id,
              })
            }
          >
            <div>
              <AiFillStar className="note-item__content___star_icon1-fav" />
            </div>
          </div>
        )}

        <div className="note-item__content">
          <h3 className="note-item__content__date">{this.props.note.date}</h3>

          <div>
            <h3 onClick={() => this.props.removeNote(this.props.note.id)}>X</h3>
          </div>
          <div
            className="note-item__content__pen"
            onClick={() =>
              this.props.changeToWrite({
                id: this.props.note.id,
                toWrite: !this.props.note.toWrite,
              })
            }
          >
            <GoPencil className="note-item__content__pen__icon" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ notesReducer: { notes } }) => {
  return {
    notes,
  };
};

const mapDispatchToProps = {
  removeNote,
  addToFav,
  upDateText,
  // changeFav,
  changeToWrite,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);

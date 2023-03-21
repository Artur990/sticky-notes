import {
  ADD_NOTE,
  ADD_COLOR,
  REMOVE_NOTE,
  ADD_TO_FAV,
  UP_DATE_TEXT,
  CHANGE_FAV,
  CHANGE_TO_WRITE,
} from "./consts";

const addNote = (oneNote) => ({ type: ADD_NOTE, payload: oneNote });
const removeNote = (id) => ({ type: REMOVE_NOTE, payload: id });
const addColor = (color) => ({
  type: ADD_COLOR,
  payload: {
    id: Math.random(),
    color: color.color,
    text: "",
    isFav: false,
    date: new Date().toLocaleString(),
    toWrite: false,
  },
});
const addToFav = (o) => ({
  type: ADD_TO_FAV,
  payload: {
    id: o.obj.id,
    color: o.obj.color,
    text: o.text,
    isFav: o.obj.isFav,
    date: o.obj.date,
    toWrite: false,
  },
  payload1: o,
});
const upDateText = (e) => ({ type: UP_DATE_TEXT, payload: e });
const changeFav = (e) => ({ type: CHANGE_FAV, payload: e });
const changeToWrite = (e) => ({ type: CHANGE_TO_WRITE, payload: e });

export {
  removeNote,
  addNote,
  addColor,
  addToFav,
  upDateText,
  changeFav,
  changeToWrite,
};

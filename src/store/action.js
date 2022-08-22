import { ADD_NOTE } from "./consts";

const addNote = (oneNote) => ({ type: ADD_NOTE, payload: oneNote });
const removeNote = (id) => ({ type: "REMOVE_NOTE", payload: id });

export { addNote };

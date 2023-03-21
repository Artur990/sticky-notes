import {
  ADD_COLOR,
  REMOVE_NOTE,
  ADD_TO_FAV,
  UP_DATE_TEXT,
  CHANGE_TO_WRITE,
} from "./consts";

const initialState = {
  notes: [],
  favorites: [],
};
const notesReducer = (
  state = JSON.parse(localStorage.getItem("isFavv")) ?? initialState,
  action
) => {
  switch (action.type) {
    case ADD_COLOR: {
      const results = { ...state, notes: [...state.notes, action.payload] };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case REMOVE_NOTE: {
      const results = {
        ...state,
        notes: state.notes.filter((e) => e.id !== action.payload),
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case ADD_TO_FAV: {
      console.log(action.payload1.isFav);

      const changeFav = state.notes.map((e) => {
        if (e.id === action.payload1.id) {
          e.isFav = action.payload1.isFav;
        }
        return e;
      });

      const results = {
        ...state,
        notes: changeFav,
        // ...state,
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case UP_DATE_TEXT: {
      const newNotes = state.notes.map((e) => {
        if (e.id === action.payload.id) {
          e.text = action.payload.text;
        }
        return e;
      });
      const results = {
        ...state,
        notes: [...newNotes],
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case CHANGE_TO_WRITE: {
      const changeToWrite = state.notes.map((e) => {
        if (e.id === action.payload.id) {
          e.toWrite = action.payload.toWrite;
        }
        return e;
      });
      const results = {
        ...state,
        notes: changeToWrite,
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    default:
      return state;
  }
};

export default notesReducer;

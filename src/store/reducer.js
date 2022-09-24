import {
  ADD_NOTE,
  ADD_COLOR,
  REMOVE_NOTE,
  ADD_TO_FAV,
  UP_DATE_TEXT,
  CHANGE_FAV,
  CHANGE_TO_WRITE,
} from "./consts";

const initialState = {
  notes: [],
  favorites: [],
};
const counterReducer = (
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
      const results = {
        notes: [...state.notes].filter((e) =>
          e.id === action.payload1.id
            ? (e.isFav = action.payload1.isFav)
            : e.isFav
        ),
        ...state,
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case UP_DATE_TEXT: {
      const results = {
        ...state,
        notes: state.notes.filter((e) =>
          e.id === action.payload.id ? (e.text = action.payload.text) : e.text
        ),
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    case CHANGE_TO_WRITE: {
      const results = {
        ...state,
        notes: state.notes.filter((e) =>
          e.id === action.payload.id
            ? (e.toWrite = action.payload.toWrite)
            : e.toWrite
        ),
        ...state,
      };
      localStorage.setItem("isFavv", JSON.stringify(results));
      return results;
    }
    default:
      return state;
  }
};

export default counterReducer;

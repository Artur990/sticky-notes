import { ADD_NOTE } from "./consts";
const initialState = {
  count: 0,
  todoss: [
    {
      id: 1,
      name: "michal",
      date: "22.22",
      favouriteo: true,
      color: "rgb",
    },
  ],
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, todoss: [...state.todoss, action.payload] };
    default:
      return state;
  }
};

export default counterReducer;
// return { ...state, todoss: [...action, { ...action.payload }] };

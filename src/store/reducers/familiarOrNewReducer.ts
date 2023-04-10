export const TRY_SOMETHING_NEW = "TRY_SOMETHING_NEW";
export const SOMETHING_FAMILIAR = "SOMETHING_FAMILIAR";

// Define the initial state
const initialState = {
  choice: ""
};

// Create the reducer function
export default function familiarOrNewReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case TRY_SOMETHING_NEW:
      return { ...state, choice: "new" };
    case SOMETHING_FAMILIAR:
      return { ...state, choice: "familiar" };
    default:
      return state;
  }
}
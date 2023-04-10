export const CHINESE = "CHINESE";
export const JAPANESE_KOREAN = "JAPANESE_KOREAN";
export const SOUTH_EAST_ASIAN = "SOUTH_EAST_ASIAN";
export const MIDDLE_EASTERN = "MIDDLE_EASTERN";

// Define the initial state
const initialState = {
  choice: "",
  cuisine: "",
};

// Create the reducer function
export default function cuisineReducer(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
    case CHINESE:
      return { ...state, cuisine: "chinese" };
    case JAPANESE_KOREAN:
      return { ...state, cuisine: "japanese-korean" };
    case SOUTH_EAST_ASIAN:
      return { ...state, cuisine: "south-east-asian" };
    case MIDDLE_EASTERN:
      return { ...state, cuisine: "middle-eastern" };
    default:
      return state;
  }
}

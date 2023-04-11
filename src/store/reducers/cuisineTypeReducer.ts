export const CHINESE = "CHINESE";
export const JAPANESE_KOREAN = "JAPANESE_KOREAN";
export const SOUTH_EAST_ASIAN = "SOUTH_EAST_ASIAN";
export const INDIAN = "MIDDLE_EASTERN";

// Define the initial state

interface State {
  cuisine: string[];
}

const initialState: State = {
  cuisine: [],
};

// Create the reducer function
export default function cuisineReducer(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
    case CHINESE:
      return { ...state, cuisine: ["chinese"] };
    case JAPANESE_KOREAN:
      return { ...state, cuisine: ["japanese", "korean"] };
    case SOUTH_EAST_ASIAN:
      return { ...state, cuisine: ["vietnamese", "thai", "malaysian", "indonesian", "singaporean"] };
    case INDIAN:
      return { ...state, cuisine: ["indian", "pakistani"] };
    default:
      return state;
  }
}

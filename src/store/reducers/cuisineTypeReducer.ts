export const CHINESE = "CHINESE";
export const JAPANESE_KOREAN = "JAPANESE_KOREAN";
export const SOUTH_EAST_ASIAN = "SOUTH_EAST_ASIAN";
export const INDIAN = "MIDDLE_EASTERN";
export const EUROPEAN = "EUROPEAN";
export const AUSTRALIAN = "AUSTRALIAN";
export const AMERICAN = "AMERICAN";
export const LATIN_AMERICAN = "LATIN_AMERICAN";

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
      return {
        ...state,
        cuisine: [
          "vietnamese",
          "thai",
          "malaysian",
          "indonesian",
          "singaporean",
        ],
      };
    case INDIAN:
      return { ...state, cuisine: ["indian", "pakistani"] };
    case EUROPEAN:
      return { ...state, cuisine: ["european", "italian", "bistro", "french"] };
    case AUSTRALIAN:
      return { ...state, cuisine: ["australian"] };
    case AMERICAN:
      return { ...state, cuisine: ["american"] };
    case LATIN_AMERICAN:
      return { ...state, cuisine: ["mexican", "latin american"] };
    default:
      return state;
  }
}

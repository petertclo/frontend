import { CHINESE, JAPANESE_KOREAN, INDIAN, SOUTH_EAST_ASIAN } from "../reducers/cuisineTypeReducer";
import { TRY_SOMETHING_NEW, SOMETHING_FAMILIAR } from "../reducers/familiarOrNewReducer";


// Action creator for TRY_SOMETHING_NEW
export const trySomethingNew = () => {
  return {
    type: TRY_SOMETHING_NEW,
  };
};

// Action creator for SOMETHING_FAMILIAR
export const somethingFamiliar = () => {
  return {
    type: SOMETHING_FAMILIAR,
  };
};

export const chinese = () => {
  return {
    type: CHINESE,
  };
};

export const japaneseKorean = () => {
  return {
    type: JAPANESE_KOREAN,
  };
};

export const southEastAsian = () => {
  return {
    type: SOUTH_EAST_ASIAN,
  };
};

export const indian = () => {
  return {
    type: INDIAN,
  };
};

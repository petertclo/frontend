import { AMERICAN, AUSTRALIAN, CHINESE, EUROPEAN, INDIAN, JAPANESE_KOREAN, LATIN_AMERICAN, SOUTH_EAST_ASIAN } from "../reducers/cuisineTypeReducer";
import { SOMETHING_FAMILIAR, TRY_SOMETHING_NEW } from "../reducers/familiarOrNewReducer";


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

export const european = () => {
  return {
    type: EUROPEAN,
  };
};
export const australian = () => {
  return {
    type: AUSTRALIAN,
  };
};
export const american = () => {
  return {
    type: AMERICAN,
  };
};
export const latinAmerican = () => {
  return {
    type: LATIN_AMERICAN,
  };
};

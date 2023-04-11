import { CHINESE, JAPANESE_KOREAN, INDIAN, SOUTH_EAST_ASIAN, EUROPEAN, AUSTRALIAN, AMERICAN, LATIN_AMERICAN } from "../reducers/cuisineTypeReducer";
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

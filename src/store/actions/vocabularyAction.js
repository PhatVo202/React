import { ADD_VOCABULARY } from "../types/vocabularyType";
import { DELETE_VOCABULATION } from "../types/vocabularyType";

export const addVocabularyAction = (payload) => {
  return {
    type: ADD_VOCABULARY,
    payload,
  };
};

export const deleteVocabularyAction = (payload) => {
  return {
    type: DELETE_VOCABULATION,
    payload,
  };
};

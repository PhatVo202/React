import { ADD_VOCABULARY } from "../types/vocabularyType";

const DEFAULT_STATE = {
  vocabularyList: [],
  historyList: [],
  isOnlyFavourite: false,
};

export const vocabularyReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  const addHistory = (action, en, vi) => {
    const historyItem = {
      id: Date.now(),
      action,
      en,
      vi,
      createdDate: new Date().toLocaleString(),
    };

    const data = [...state.historyList];

    data.unshift(historyItem);
    state.historyList = data;
  };

  switch (type) {
    case ADD_VOCABULARY:
      {
        const data = [...state.vocabularyList];
        data.unshift({
          ...payload,
          id: Date.now(),
          isFavourited: false,
        });
        state.vocabularyList = data;

        //add history
        addHistory("ADD", payload.en, payload.vi);

        return { ...state };
      }
      break;
    case "UPDATE_FAVOURITE":
      {
        //do day bi tham chieu
        const data = JSON.parse(JSON.stringify(state.vocabularyList));
        const index = data.findIndex((item) => item.id === payload.id);
        data[index].isFavourited = !data[index].isFavourited;
        state.vocabularyList = data;

        //add History
        addHistory(
          data[index].isFavourited ? "LIKE" : "UNLIKE",
          data[index].en,
          data[index].vi
        );

        return { ...state };
      }
      break;
    case "DELETE_VOCABULATION":
      //debugger: su dung de debug loi
      {
        const data = [...state.vocabularyList];
        const index = data.findIndex((item) => item.id === payload.id);

        //add history
        addHistory("DELETE", data[index].en, data[index].vi);
        data.splice(index, 1);

        state.vocabularyList = data;

        return { ...state };
      }
      break;
    case "UPDATE_ONLY_FAVOURITE":
      {
        state.isOnlyFavourite = payload;
        if (state.isOnlyFavourite) {
        }
      }
      break;
    default:
      break;
  }
  return { ...state };
};

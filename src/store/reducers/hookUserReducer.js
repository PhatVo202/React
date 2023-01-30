const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      username: "man.nguye",
      fullname: "Man Ng",
      password: "123",
      phoneNumber: "1234567",
      email: "123@gmail.com",
      type: "Client",
    },
    {
      id: 2,
      username: "khai.nguye",
      fullname: "Khai Ng",
      password: "12345",
      phoneNumber: "1234567",
      email: "123@gmail.com",
      type: "Admin",
    },
  ],
  selectedUser: null,
};

export const hookUserReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER": {
      const data = [...state.userList];
      data.push({ ...payload, id: Date.now() });
      state.userList = data;
      break;
    }

    case "SET_SELECTED_USER": {
      state.selectedUser = payload;
      break;
    }

    case "UPDATE_USER": {
      state.userList = state.userList.map((item) =>
        item.id === payload.id ? payload : item
      );
      break;
    }

    case "REMOVE_USER": {
      state.userList = state.userList.filter((user) =>
        user.id === payload.id ? false : true
      );
      break;
    }

    default:
      break;
  }
  return { ...state };
};

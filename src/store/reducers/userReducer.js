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
      password: "123",
      phoneNumber: "1234567",
      email: "123@gmail.com",
      type: "Admin",
    },
  ],
  selectedUser: null,
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  console.log("first");
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      {
        const data = [...state.userList];
        data.push({ ...payload, id: Date.now() });
        state.userList = data;
      }
      break;
    case "SET_SELECTED_USER":
      {
        state.selectedUser = payload;
      }
      break;
    case "UPDATE_USER":
      {
        const data = [...state.userList];

        //C1:

        // const index = data.findIndex((item) => item.id === payload.id);
        // data[index] = payload;
        // state.userList = data;
        // state.selectedUser = null;

        //C2:

        state.userList = state.userList.map((item) =>
          item.id === payload.id ? payload : item
        );
      }
      break;
    case "REMOVE_USER":
      {
        //C1:
        // const data = [...state.userList];
        // const index = data.findIndex((item) => item.id === payload.id);
        // data.splice(index, 1);
        // state.userList = data;
        //C2:
        state.userList = state.userList.filter((item) =>
          item.id === payload.id ? false : true
        );
      }
      break;

    default:
      {
      }
      break;
  }
  return { ...state };
};

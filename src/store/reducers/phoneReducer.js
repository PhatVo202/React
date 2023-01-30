import data from "../../data/dataPhone.json";

const DEFAULT_STATE = {
  cart: [],
  phoneDetail: data[0],
};

export const phoneReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;
  switch (type) {
    case "DETAIL_PHONE":
      {
        state.phoneDetail = action.phoneDetail;
      }
      break;

    case "ADD_TO_CART":
      {
        let cartUpdate = [...state.cart];
        let index = cartUpdate.findIndex((sp) => sp.maSP === action.phone.maSP);
        if (index !== -1) {
          cartUpdate[index].soLuong += 1;
        } else {
          cartUpdate.push({ ...action.phone, soLuong: 1 });
        }
        state.cart = cartUpdate;
      }
      break;
    case "DELETE_CART":
      {
        let cartUpdate = [...state.cart];
        let index = cartUpdate.findIndex((sp) => sp.maSP === action.phone.maSP);
        cartUpdate.splice(index, 1);
        state.cart = cartUpdate;
      }
      break;
    case "HANDLE_QUANTITY":
      {
        const data = [...state.cart];
        let index = data.findIndex((sp) => sp.maSP === action.phone.maSP);
        if (action.isFlag) {
          data[index].soLuong += 1;
        } else if (data[index].soLuong > 1) {
          data[index].soLuong -= 1;
        } else {
          if (window.confirm("Ban co chac muon xoa sp")) {
            data.splice(index, 1);
          }
        }
        state.cart = data;
      }
      break;

    default:
      break;
  }
  return { ...state };
};

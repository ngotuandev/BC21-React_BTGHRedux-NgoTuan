import { dataProduct } from "../../BaitapGioHangRedux/dataProduct";
import {
  ADD_CART,
  DELETE_PRODUCT_MODAL,
  INCREASE_DECREASE,
  SHOW_DETAIL,
} from "../constants/typeEventCartRedux";

let initialState = {
  data: dataProduct,
  dataDetail: dataProduct[0],
  dataCart: [],
};

export const ProductReducer = (
  state = initialState,
  { type, payload, number }
) => {
  switch (type) {
    case ADD_CART: {
      let dataCartNew = [...state.dataCart];
      let index = state.dataCart.findIndex(
        (data) => data.maSP === payload.maSP
      );
      if (index !== -1) {
        dataCartNew[index].amount += 1;
      } else {
        let dataCartNewCopy = { ...payload, amount: 1 };
        dataCartNew.push(dataCartNewCopy);
      }
      state.dataCart = dataCartNew;
      return { ...state };
    }

    case SHOW_DETAIL: {
      state.dataDetail = payload;
      return { ...state };
    }

    case INCREASE_DECREASE: {
      let dataCartNew = [...state.dataCart];
      let index = state.dataCart.findIndex((data) => data.maSP === payload);
      if (index !== -1) {
        dataCartNew[index].amount = dataCartNew[index].amount + number;
        dataCartNew[index].amount === 0 && dataCartNew.splice(index, 1);
      }
      state.dataCart = dataCartNew;
      return { ...state };
    }
    case DELETE_PRODUCT_MODAL: {
      let dataCartNew = [...state.dataCart];
      let index = state.dataCart.findIndex((data) => data.maSP === payload);
      if (index !== -1) {
        dataCartNew.splice(index, 1);
      }
      state.dataCart = dataCartNew;
      return { ...state };
    }

    default:
      return state;
  }
};

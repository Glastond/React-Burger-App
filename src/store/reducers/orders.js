import * as actioTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false //Process of purchasing..
};

const reducer = (state = initialState, action) => {
  switch (actioTypes) {
    case actioTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actioTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };

      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      };
    case actioTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;

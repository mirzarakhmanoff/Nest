export const initialState = JSON.parse(localStorage.getItem("store")) || {
  son: 9,
  wishlist: [],
  cart: [],
  sorted: null,
  token: null,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + action.payload };
    case "TOGGLE_WISHLIST":
      let index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      let wishlistMemory = {};
      if (index < 0) {
        wishlistMemory = {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
        localStorage.setItem("store", JSON.stringify(wishlistMemory));
        return wishlistMemory;
      } else {
        wishlistMemory = {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
        localStorage.setItem("store", JSON.stringify(wishlistMemory));
        return wishlistMemory;
      }

    case "ADD_CART":
      let idx = state.cart.findIndex((item) => item.id === action.payload.id);
      if (idx < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "INC_CART":
      return state;
    case "DEC_CART":
      return state;
    case "REMOVE_CART":
      return state;
    case "RESET_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

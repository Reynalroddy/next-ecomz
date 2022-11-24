import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { product } from "../typings";


// const tempCart = localStorage.getItem("cartItems");

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem(key)
}


export interface cartState{
    cartItem: product[],
    cartTotalQuantity: number,
    cartTotalAmount: number,
    isLoading: boolean,
    shippingAddress: {

    },
    paymentMethod: string,
}


const initialState:cartState ={
  cartItem: getFromLocalStorage('cartItems')?JSON.parse(getFromLocalStorage("cartItems")!) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading:false,
  shippingAddress: getFromLocalStorage("shippingAddy")
  ? JSON.parse(getFromLocalStorage("shippingAddy")!)
  : {},
paymentMethod: getFromLocalStorage("payMode") || "",

}




export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // : {
  //   cartItem: localStorage.getItem("cartItems")
  //     ? JSON.parse(localStorage.getItem("cartItems")!)
  //     : [],
  //   cartTotalQuantity: 0,
  //   cartTotalAmount: 0,
  //   shippingAddress: localStorage.getItem("shippingAddy")
  //     ? JSON.parse(localStorage.getItem("shippingAddy")!)
  //     : {},
  //   paymentMethod: localStorage.getItem("payMode") || "",
  //   isLoading: false,
  // },

  reducers: {
    addToCart: (state:cartState, action:PayloadAction<product>) => {
      const it = action.payload;
      const existItem = state.cartItem.find((prod:product) => it._id === prod._id);
      if (existItem) {
        state.cartItem = state.cartItem.map((item) => {
          if (item._id === existItem._id) {
            return it;
          }
          return item;
        });
        toast.info("modified product quantity", {
          position: "top-left",
        });
      } else {
        state.cartItem = [...state.cartItem, it];
        toast.success(" product added to cart", {
          position: "top-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },

    removeFromCart: (state:cartState, action:PayloadAction<string>) => {
      const idz = action.payload;
      const newCart = state.cartItem.filter((items) => items._id !== idz);
      state.cartItem = newCart;
      toast.error(" product removed from cart", {
        position: "top-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },

    getTotals: (state:cartState) => {
      let { total, quantity } = state.cartItem.reduce(
        (acc, curr:product) => {
          let tot =  curr.qty * curr.price ;
          acc.total += tot;
          acc.quantity += curr.qty;
          return acc;
        },
        { total: 0, quantity: 0 }
      );

      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        cartTotalQuantity: quantity,
        cartTotalAmount: total,
      };
    },

    // saveShippingAddy: (state, action) => {
    //   return { ...state, shippingAddress: action.payload };
    // },
    // savePayment: (state, action) => {
    //   return { ...state, paymentMethod: action.payload };
    // },
    clearCart: (state:cartState) => {
      return {
        ...state,
        cartItem: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        shippingAddress: {},
        paymentMethod: "",
        isLoading: false,
      };
    },
  },
});

export const getCartItems = (state:cartState) => state.cartItem;
         
export const {
  addToCart,
  removeFromCart,
  getTotals,
  // saveShippingAddy,
  // savePayment,
  // saveShippingAddySuc,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

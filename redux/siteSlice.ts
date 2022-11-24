import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    breed:'all',
    subBreed:'all',
    number:1,
    images:0,
    error:false,
    isLoading:false,
  },

  reducers: {
    handleChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },

    searchStart:(state)=>{
      return {
        ...state,
        isLoading: true,
      };
    },
    searchSuccess:(state,action)=>{
      return {
        ...state,
        isLoading: false,
      };
    },
    searchFail:(state,action)=>{
      return {
        ...state,
        isLoading: false,
        error:true
      };
    },
reset:(state)=>{
  const init = {
    breed:'all',
    subBreed:'all',
    number:1,
    images:0,
  };
  return {
    ...state,
    ...init,
  };
}

   
  },
});

export const {
  handleChange,searchFail,searchStart,searchSuccess,reset
} = siteSlice.actions;

export default siteSlice.reducer;

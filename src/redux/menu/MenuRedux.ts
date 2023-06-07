import { createSlice } from "@reduxjs/toolkit";

export interface ImenuState {
  isLoading: boolean;
  error: string;
  success: string;
}

const initialState: ImenuState = {
  isLoading: false,
  error: "",
  success: "",
};

export const MenuRedux = createSlice({
  name: "menuRedux",
  initialState,
  reducers: {
    getMenuListsRequest: (state: any) => {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    },
    getMenuListsSuccess: (state: any, action: any) => {
      const response = action.payload;
      const newState = {
        ...state,
        isLoading: false,
        menuLists: response?.meals?.slice(0, 10),
      };
      return newState;
    },
    getMenuListsFailure: (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: false,
        error: action?.payload,
      };
      return newState;
    },
    setmenuState: (state: any, action: any) => {
      const newState = {
        ...state,
      };
      newState[action.payload.key] = action.payload.value;
      return newState;
    },
  },
});

export const {
  getMenuListsRequest,
  getMenuListsSuccess,
  getMenuListsFailure,
  setmenuState,
} = MenuRedux.actions;

export default MenuRedux.reducer;

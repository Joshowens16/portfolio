import { createSlice } from '@reduxjs/toolkit';

interface ViewType {
  darkMode: boolean;
}

const viewInitialState: ViewType = {
  darkMode: false,
};

export const viewSlice = createSlice({
  name: 'viewMode',
  initialState: viewInitialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = viewSlice.actions;
export default viewSlice.reducer;

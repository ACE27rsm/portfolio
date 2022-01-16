import { createSlice } from "@reduxjs/toolkit";

// Utils
import mediaQueryUtils from "../../utils/mediaQueryUtils";

// initialState
const initialState = {
  theme: {},
  mq: {},
  componentStatus: {},
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    SET_THEME: (ui, { payload }) => {
      ui.theme = payload;
      ui.mq = mediaQueryUtils.all();
      ui.componentStatus = mediaQueryUtils.componentStatusAfterResizing();
    },

    RESIZING: (ui, { payload }) => {
      ui.mq = mediaQueryUtils.all();
      ui.componentStatus = mediaQueryUtils.componentStatusAfterResizing();
    },
  },
});

export default slice.reducer;

export const { actions } = slice;

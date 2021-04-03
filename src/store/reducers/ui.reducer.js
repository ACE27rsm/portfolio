import { createSlice } from "@reduxjs/toolkit";

// Utils
import mediaQueryUtils from "../../utils/mediaQueryUtils";

// initialState
const initialState = {
  theme: {},
  mq: {},
  componentStatus: {},
  nService: {
    queueLength: 0,
  },
  starScream: {
    queueLength: 0,
  },
  pitStop: {
    queueLength: 0,
  },
  phoenix: {
    queueLength: 0,
  },
  ninja: {
    queueLength: 0,
  },
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

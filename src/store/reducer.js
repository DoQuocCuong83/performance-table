import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { socket } from "../api";

const getBTCs1Action = createAction("GET_BTCS1");
const getBTCs2Action = createAction("GET_BTCS2");
const getBTCs3Action = createAction("GET_BTCS3");
const getBTCs4Action = createAction("GET_BTCS4");

export const getBTCs = () => {
  return (dispatch) => {
    socket.onopen = () => {
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
    };

    let isChangeBTC1 = true;
    let isChangeBTC2 = true;
    let isChangeBTC3 = true;
    let isChangeBTC4 = true;
    setInterval(() => (isChangeBTC1 = true), 700);
    setInterval(() => (isChangeBTC2 = true), 4000);
    setInterval(() => (isChangeBTC3 = true), 2500);
    setInterval(() => (isChangeBTC4 = true), 5300);
    socket.onmessage = (response) => {
      if (isChangeBTC1 === true) {
        dispatch(getBTCs1Action(JSON.parse(response.data)));
        isChangeBTC1 = false;
      }

      if (isChangeBTC2 === true) {
        dispatch(getBTCs2Action(JSON.parse(response.data)));
        isChangeBTC2 = false;
      }

      if (isChangeBTC3 === true) {
        dispatch(getBTCs3Action(JSON.parse(response.data)));
        isChangeBTC3 = false;
      }

      if (isChangeBTC4 === true) {
        dispatch(getBTCs4Action(JSON.parse(response.data)));
        isChangeBTC4 = false;
      }
    };
  };
};

export const initialState = {
  currentBTCs1: [],
  previousBTCs1: [],
  currentBTCs2: [],
  previousBTCs2: [],
  currentBTCs3: [],
  previousBTCs3: [],
  currentBTCs4: [],
  previousBTCs4: [],
};

const reducer = createReducer(initialState, {
  GET_BTCS1: (state, action) => {
    if (action.payload.type === "trade") {
      state.previousBTCs1 = [...state.currentBTCs1];
      action.payload.data.forEach((value, index) => {
        state.currentBTCs1[index] = value;
      });
    }
  },
  GET_BTCS2: (state, action) => {
    if (action.payload.type === "trade") {
      state.previousBTCs2 = [...state.currentBTCs2];
      action.payload.data.forEach((value, index) => {
        state.currentBTCs2[index] = value;
      });
    }
  },
  GET_BTCS3: (state, action) => {
    if (action.payload.type === "trade") {
      state.previousBTCs3 = [...state.currentBTCs3];
      action.payload.data.forEach((value, index) => {
        state.currentBTCs3[index] = value;
      });
    }
  },
  GET_BTCS4: (state, action) => {
    if (action.payload.type === "trade") {
      state.previousBTCs4 = [...state.currentBTCs4];
      action.payload.data.forEach((value, index) => {
        state.currentBTCs4[index] = value;
      });
    }
  },
});

export default reducer;

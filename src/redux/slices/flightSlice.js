import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState = {
  isLoading: false,
  isEror: false,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlights.rejected, (state) => {
      state.isLoading = false;
      state.isEror = true;
    });

    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isEror = false;
      state.flights = action.payload;
    });
  },
});

export default flightSlice.reducer;

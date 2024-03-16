import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";

export const getFlights = createAsyncThunk("flight/getFlights", async() => {


  //1)api istegi at
  const res = axios.request(options);

  //2)gelen veri formatla

  //3)formatlanan veriyi slice aktar
});

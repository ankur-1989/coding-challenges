import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, HTTP_STATUS } from "../../app/constants";
import { Result, Hotel } from "../../models/hotels.model";

export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
  const { data } = await axios.get<Result>(`${API_URL}/api/hotels`);
  return data;
});
interface HotelsState {
  status: string;
  hotels: Hotel[];
}
const initialState: HotelsState = {
  hotels: [],
  status: "",
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.status = HTTP_STATUS.PENDING;
    });
    builder.addCase(fetchHotels.fulfilled, (state, { payload }) => {
      state.status = HTTP_STATUS.FULFILLED;
      state.hotels = payload.result;
    });
    builder.addCase(fetchHotels.rejected, (state) => {
      state.status = HTTP_STATUS.FULFILLED;
    });
  },
});

export default hotelsSlice.reducer;

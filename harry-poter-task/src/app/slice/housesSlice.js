import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";
export const fetchHouses = createAsyncThunk(
  "/houses",
  async () => {
    return await getData("houses");
  }
);

const housesSlice = createSlice({
  name: "houses",
  initialState: {
    houses: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.loading = false;
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default housesSlice.reducer;

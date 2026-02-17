import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const fetchCharacters = createAsyncThunk(
  "/characters",
  async () => {
    return await getData("characters");
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default charactersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://potterapi-fedeperin.vercel.app/en";

export const fetchSpells = createAsyncThunk(
  "/spells",
  async ({ page, limit }) => {
    const response = await fetch(
      `${BASE_URL}/spells?max=${limit}&page=${page}`
    );
    return await response.json();
  }
);

const spellsSlice = createSlice({
  name: "spells",
  initialState: {
    spells: [],
    loading: false,
    currentPage: 1,
    itemsPerPage: 10,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpells.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSpells.fulfilled, (state, action) => {
        state.loading = false;
        state.spells = action.payload;
      })
      .addCase(fetchSpells.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setPage } = spellsSlice.actions;
export default spellsSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

// simple async function to fetch books
export const fetchBooks = createAsyncThunk(
  "/books",
  async () => {
    return await getData("books");
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default booksSlice.reducer;

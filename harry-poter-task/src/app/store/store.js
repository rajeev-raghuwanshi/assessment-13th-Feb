import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "../slice/booksSlice";
import charactersReducer from "../slice/charactersSlice";
import spellsReducer from "../slice/spellsSlice";
import housesReducer from "../slice/housesSlice"; 

export const store = configureStore({
  reducer: {
    books: booksReducer,
    characters: charactersReducer,
    spells: spellsReducer,
    houses: housesReducer,
  },
});

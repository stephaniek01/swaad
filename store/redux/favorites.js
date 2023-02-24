import { createSlice } from "@reduxjs/toolkit";

const FavoritesSclice = createSlice({
  name: "favorites",
  initialState: { ids: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = FavoritesSclice.actions.addFavorite;
export const removeFavorite = FavoritesSclice.actions.removeFavorite;

export default FavoritesSclice.reducer;

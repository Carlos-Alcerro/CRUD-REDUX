import { configureStore } from "@reduxjs/toolkit";
import { productosSlice } from "./sliceProductos/sliceProductos";

export const store = configureStore({
  reducer: {
    productos: productosSlice.reducer,
  },
});

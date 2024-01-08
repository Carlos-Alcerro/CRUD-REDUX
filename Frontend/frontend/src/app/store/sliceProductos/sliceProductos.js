import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice({
  name: "productos",
  initialState: {
    productos: [],
    isLoading: true,
  },
  reducers: {
    startLoadingProductos: (state) => {
      state.isLoading = false;
    },
    agregarProducto: (state, action) => {
      const nuevoProducto = action.payload.productos;

      state.productos = [...state.productos, nuevoProducto];
      state.isLoading = false;
    },
    getProductos: (state, action) => {
      state.productos = action.payload.productos;
      state.isLoading = false;
    },
    deleteProductos: (state, action) => {
      const IdProducto = action.payload;
      state.productos = state.productos.filter(
        (prod) => prod._id !== IdProducto
      );
      state.isLoading = false;
    },
    editarProducto: (state, action) => {
      const editedProducto = action.payload.productos;

      const index = state.productos.findIndex(
        (prod) => prod._id === editedProducto._id
      );

      if (index !== -1) {
        state.productos[index] = editedProducto;
      }

      state.isLoading = false;
    },
  },
});

export const {
  agregarProducto,
  startLoadingProductos,
  getProductos,
  deleteProductos,
  editarProducto,
} = productosSlice.actions;

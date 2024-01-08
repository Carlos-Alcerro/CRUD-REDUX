// thunks.js
import axios from "axios";
import {
  startLoadingProductos,
  getProductos,
  agregarProducto,
  deleteProductos,
  editarProducto,
} from "./sliceProductos";

export const getProductosThunks = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProductos());

    const { data } = await axios.get(
      "http://localhost:3000/api/prod/Productos"
    );
    dispatch(getProductos({ productos: data.mostrarProductos }));
  };
};

export const addProductos = (productos) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProductos());
    const { data } = await axios.post(
      "http://localhost:3000/api/prod/addProducts",
      productos
    );

    dispatch(agregarProducto({ productos: data.productoGuardado }));
  };
};

export const eliminarProducto = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProductos());
    const { data } = await axios.delete(
      `http://localhost:3000/api/prod/Productos/${id}`
    );
    dispatch(deleteProductos(id));
  };
};

export const updateProducto = (id, productos) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProductos());

    const { data } = await axios.put(
      `http://localhost:3000/api/prod/Productos/${id}`,
      productos
    );
    dispatch(editarProducto({ productos: data.produtoActualizado, id: id }));
  };
};

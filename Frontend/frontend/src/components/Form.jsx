import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addProductos,
  updateProducto,
} from "../app/store/sliceProductos/thunks";

const Form = ({ id, updateState, update }) => {
  const dispatch = useDispatch();
  const [productos, setProductos] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    cantidad: "",
  });

  useEffect(() => {
    if (updateState) {
      setProductos(updateState);
    } else {
      setProductos({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        cantidad: "",
      });
    }
  }, [updateState, id]);

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        [
          productos.nombre,
          productos.descripcion,
          productos.categoria,
          productos.precio,
          productos.cantidad,
        ].includes("")
      ) {
        console.log("Todos los campos son obligatorios");
      }
      if (!update) {
        dispatch(addProductos(productos));
      } else {
        dispatch(updateProducto(id, productos));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 rounded-lg shadow bg-white w-3/6"
    >
      {!update ? (
        <p className="text-center text-3xl text-sky-600 font-semibold">
          Agregar Producto
        </p>
      ) : (
        <p className="text-center text-3xl text-sky-600 font-semibold">
          Editar Producto
        </p>
      )}
      <div className="mt-5">
        <label className="block text-base text-gray-800 font-semibo mb-2">
          Nombre Producto
        </label>
        <input
          name="nombre"
          value={productos.nombre}
          onChange={handleChange}
          className="bg-gray-100 py-2 px-3 rounded-md w-full"
          type="text"
          placeholder="Escribe el nombre del producto"
        />
      </div>
      <div className="mt-5">
        <label className="block text-base text-gray-800 font-semibo mb-2">
          Descripcion Producto
        </label>
        <input
          name="descripcion"
          value={productos.descripcion}
          onChange={handleChange}
          className="bg-gray-100 py-2 px-3 rounded-md w-full"
          type="text"
          placeholder="Escribe la descripcion del producto"
        />
      </div>
      <div className="mt-5">
        <label className="block text-base text-gray-800 font-semibo mb-2">
          Categoria Producto
        </label>
        <input
          name="categoria"
          value={productos.categoria}
          onChange={handleChange}
          className="bg-gray-100 py-2 px-3 rounded-md w-full"
          type="text"
          placeholder="Escribe la categoria del producto"
        />
      </div>
      <div className="mt-5">
        <label className="block text-base text-gray-800 font-semibo mb-2">
          Precio Producto
        </label>
        <input
          name="precio"
          value={productos.precio}
          onChange={handleChange}
          className="bg-gray-100 py-2 px-3 rounded-md w-full"
          type="text"
          placeholder="Escribe el precio del producto"
        />
      </div>
      <div className="mt-5">
        <label className="block text-base text-gray-800 font-semibo mb-2">
          Cantidad Producto
        </label>
        <input
          name="cantidad"
          value={productos.cantidad}
          onChange={handleChange}
          className="bg-gray-100 py-2 px-3 rounded-md w-full"
          type="text"
          placeholder="Escribe la cantidad del producto"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white text-base font-semibold rounded-md shadow p-3 w-full md:w-2/5"
        >
          {!update ? " Agregar Producto" : " Editar Producto"}
        </button>
      </div>
    </form>
  );
};

export default Form;
